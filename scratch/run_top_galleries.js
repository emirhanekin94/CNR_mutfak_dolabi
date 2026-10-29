const fs = require('fs');
const path = require('path');
const { pagesData, generateSectionHtml } = require('./apply_top_live_galleries');

// 1. Verify all image paths exist
console.log('=== VERIFYING IMAGES ===');
let missingImages = 0;
for (const [file, data] of Object.entries(pagesData)) {
  for (const card of data.cards) {
    if (!fs.existsSync(card.img)) {
      console.error(`ERROR: In ${file}, missing image: ${card.img}`);
      missingImages++;
    }
  }
}

if (missingImages > 0) {
  console.error(`Total missing images: ${missingImages}. ABORTING!`);
  process.exit(1);
}
console.log('All card images exist on disk!');

// 2. Process each file
for (const [file, data] of Object.entries(pagesData)) {
  console.log(`\n--- Processing ${file} ---`);
  if (!fs.existsSync(file)) {
    console.error(`File ${file} does not exist!`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');

  // Check initial div balance
  const initialOpen = (content.match(/<div[\s>]/g) || []).length;
  const initialClose = (content.match(/<\/div>/g) || []).length;
  console.log(`Initial div balance: ${initialOpen} open vs ${initialClose} close (diff: ${initialOpen - initialClose})`);

  // Remove existing user-gallery-grid if present
  if (content.includes('user-gallery-grid')) {
    const userGridIdx = content.indexOf('user-gallery-grid');
    // Find the enclosing <div style="margin-top: 50px;"> or similar comment
    const commentIdx = content.lastIndexOf('<!-- Gerçek Kullanıcı', userGridIdx);
    const divStartIdx = content.lastIndexOf('<div', userGridIdx);
    const startRemove = (commentIdx !== -1 && commentIdx > divStartIdx - 100) ? commentIdx : divStartIdx;

    // Find the closing </div> of this user-gallery container
    // The inner user-gallery-grid has items, each has 1 item div + 1 info div (2 divs per item).
    // Let's count divs from startRemove until balanced for that sub-block!
    let subBal = 0;
    let foundFirstDiv = false;
    let endRemove = -1;

    for (let i = startRemove; i < content.length; i++) {
      if (content.substring(i, i + 4) === '<div') {
        subBal++;
        foundFirstDiv = true;
      } else if (content.substring(i, i + 6) === '</div>') {
        subBal--;
        if (foundFirstDiv && subBal === 0) {
          endRemove = i + 6;
          break;
        }
      }
    }

    if (endRemove !== -1) {
      console.log(`Removing user-gallery-grid from ${startRemove} to ${endRemove} (${endRemove - startRemove} chars)`);
      content = content.substring(0, startRemove) + content.substring(endRemove);
    } else {
      console.warn(`Could not safely locate end of user-gallery-grid in ${file}`);
    }
  }

  // Remove any pre-existing live-gallery-section if present to avoid duplication
  if (content.includes('class="live-gallery-section"')) {
    const liveStart = content.indexOf('<section class="live-gallery-section"');
    const liveEnd = content.indexOf('</section>', liveStart) + 10;
    content = content.substring(0, liveStart) + content.substring(liveEnd);
    console.log(`Removed previous live-gallery-section in ${file}`);
  }

  // Determine top insertion point
  let insertIdx = -1;
  const featuresIdx = content.indexOf('features-bar-grid');
  const trustIdx = content.indexOf('trust-badges-bar');
  const editorialIdx = content.indexOf('class="editorial-collection-bar"');
  const heroIdx = content.indexOf('hero-section');

  if (featuresIdx !== -1) {
    insertIdx = content.indexOf('</section>', featuresIdx) + 10;
    console.log(`Inserting after features-bar-grid at index ${insertIdx}`);
  } else if (trustIdx !== -1) {
    insertIdx = content.indexOf('</section>', trustIdx) + 10;
    console.log(`Inserting after trust-badges-bar at index ${insertIdx}`);
  } else if (editorialIdx !== -1) {
    insertIdx = content.indexOf('</nav>', editorialIdx) + 6;
    console.log(`Inserting after editorial-collection-bar at index ${insertIdx}`);
  } else if (heroIdx !== -1) {
    insertIdx = content.indexOf('</section>', heroIdx) + 10;
    console.log(`Inserting after hero-section at index ${insertIdx}`);
  }

  if (insertIdx === -1) {
    console.error(`Cannot find insertion point for ${file}`);
    continue;
  }

  const galleryHtml = generateSectionHtml(data);
  content = content.substring(0, insertIdx) + '\n' + galleryHtml + '\n' + content.substring(insertIdx);

  // Validate div balance after modification
  const finalOpen = (content.match(/<div[\s>]/g) || []).length;
  const finalClose = (content.match(/<\/div>/g) || []).length;
  const finalDiff = finalOpen - finalClose;
  console.log(`Final div balance: ${finalOpen} open vs ${finalClose} close (diff: ${finalDiff})`);

  if (finalDiff !== 0) {
    console.error(`ERROR: Div balance mismatch in ${file}! Expected 0, got ${finalDiff}. NOT SAVING!`);
    continue;
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`SUCCESS: ${file} updated and saved!`);
}

