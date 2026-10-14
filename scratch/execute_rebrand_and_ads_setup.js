const fs = require('fs');
const path = require('path');

const NEW_DOMAIN = 'mutfakdolabiniz.com.tr';
const NEW_DOMAIN_URL = 'https://mutfakdolabiniz.com.tr';
const BRAND_UPPER = 'MUTFAK DOLABINIZ';
const BRAND_TITLE = 'Mutfak Dolabınız';

let updatedFilesCount = 0;

// 1. Process all HTML files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Domain replacements
  content = content.replace(/https:\/\/istanbulmutfakdolabi\.com\.tr/g, NEW_DOMAIN_URL);
  content = content.replace(/istanbulmutfakdolabi\.com\.tr/g, NEW_DOMAIN);
  content = content.replace(/info@istanbulmutfakdolabi\.com\.tr/g, `info@${NEW_DOMAIN}`);

  // Logo Brand Names
  content = content.replace(/<span class="brand-name">ÇNR MOBİLYA<\/span>/g, `<span class="brand-name">${BRAND_UPPER}</span>`);
  content = content.replace(/<span class="brand-name" style="color: #ffffff;">ÇNR MOBİLYA<\/span>/g, `<span class="brand-name" style="color: #ffffff;">${BRAND_UPPER}</span>`);
  content = content.replace(/<span class="brand-name" style="color: #fff;">ÇNR MOBİLYA<\/span>/g, `<span class="brand-name" style="color: #fff;">${BRAND_UPPER}</span>`);

  // Brand taglines
  content = content.replace(/<span class="brand-tagline">Mutfak & Ahşap Atölyesi • Ümraniye<\/span>/g, `<span class="brand-tagline">İstanbul Mutfak & Ahşap Atölyesi • Ümraniye</span>`);
  content = content.replace(/<span class="brand-tagline">Ümraniye İmalat Atölyesi<\/span>/g, `<span class="brand-tagline">İstanbul İmalat Atölyesi • Ümraniye</span>`);
  content = content.replace(/<span class="brand-tagline">Mutfak & Ahşap İmalat Atölyesi<\/span>/g, `<span class="brand-tagline">İstanbul Mutfak & Ahşap İmalat Atölyesi</span>`);

  // Video overlay badges
  content = content.replace(/ÇNR MOBİLYA\s*·\s*ATÖLYE İMALAT VİDEOSU/g, `${BRAND_UPPER} · ATÖLYE İMALAT VİDEOSU`);
  content = content.replace(/ÇNR MOBİLYA\s*·\s*ATÖLYE VE MONTAJ VİDEOSU/g, `${BRAND_UPPER} · ATÖLYE VE MONTAJ VİDEOSU`);
  content = content.replace(/ÇNR MOBİLYA\s*·\s*ÖZEL İMALAT VE MONTAJ VİDEOSU/g, `${BRAND_UPPER} · ÖZEL İMALAT VE MONTAJ VİDEOSU`);
  content = content.replace(/ÇNR MOBİLYA\s*·\s*ATÖLYE & MONTAJ VİDEOSU/g, `${BRAND_UPPER} · ATÖLYE & MONTAJ VİDEOSU`);

  // Video titles and aria-labels
  content = content.replace(/ÇNR Ahşap & Mobilya İmalat Atölyesi Video Gösterimi/g, `${BRAND_TITLE} İstanbul İmalat Atölyesi Video Gösterimi`);
  content = content.replace(/ÇNR Ahşap İmalat Videosu/g, `${BRAND_TITLE} İmalat Videosu`);
  content = content.replace(/ÇNR Mutfak Dolabı ve Ahşap Ürünleri/g, `${BRAND_TITLE} İstanbul İmalat Atölyesi`);

  // Schema.org Business Name
  content = content.replace(/"name":\s*"ÇNR Mutfak Dolabı & Ahşap Dekorasyon Atölyesi"/g, `"name": "${BRAND_TITLE} - İstanbul Özel Ölçü Mutfak & Mobilya İmalat Atölyesi"`);
  content = content.replace(/"name":\s*"ÇNR Mobilya"/g, `"name": "${BRAND_TITLE} İstanbul"`);
  content = content.replace(/"name":\s*"ÇNR Mutfak"/g, `"name": "${BRAND_TITLE} İstanbul"`);

  // Titles
  content = content.replace(/\|\s*ÇNR Mobilya İstanbul/g, `| ${BRAND_TITLE} İstanbul`);
  content = content.replace(/\|\s*ÇNR Mobilya Blog/g, `| ${BRAND_TITLE} Blog`);
  content = content.replace(/\|\s*ÇNR Mobilya/g, `| ${BRAND_TITLE}`);
  content = content.replace(/\|\s*ÇNR Mutfak/g, `| ${BRAND_TITLE}`);
  content = content.replace(/\|\s*ÇNR Ahşap/g, `| ${BRAND_TITLE}`);
  content = content.replace(/\|\s*ÇNR Mimarlık/g, `| ${BRAND_TITLE}`);
  content = content.replace(/-\s*ÇNR Mobilya/g, `- ${BRAND_TITLE}`);

  // Footer copyright
  content = content.replace(/&copy;\s*2026\s*ÇNR Mobilya & Ahşap Tasarım\.\s*Tüm hakları saklıdır\.\s*Ümraniye \/ İstanbul\./g, 
    `&copy; 2026 ${BRAND_TITLE} (${NEW_DOMAIN}). Tüm hakları saklıdır. Ümraniye / İstanbul.`);

  // Image alts mentioning ÇNR
  content = content.replace(/ÇNR Ahşap/g, BRAND_TITLE);
  content = content.replace(/ÇNR Mobilya/g, BRAND_TITLE);
  content = content.replace(/ÇNR Mutfak/g, BRAND_TITLE);

  // WhatsApp conversion message enhancement for Istanbul Ads
  content = content.replace(/text=Merhaba,%20%C3%9Cmraniye%20at%C3%B6lyenizden%20%C3%BCcretsiz%20ke%C5%9Fif%20ve%20fiyat%20almak%20istiyorum\./g,
    `text=Merhaba,%20Mutfak%20Dolabınız%20İstanbul%20atölyenizden%20ücretsiz%20keşif%20ve%20fiyat%20almak%20istiyorum.`);

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFilesCount++;
    console.log(`Updated HTML: ${file}`);
  }
});

// 2. Update sitemap.xml
if (fs.existsSync('sitemap.xml')) {
  let sm = fs.readFileSync('sitemap.xml', 'utf8');
  sm = sm.replace(/https:\/\/istanbulmutfakdolabi\.com\.tr/g, NEW_DOMAIN_URL);
  fs.writeFileSync('sitemap.xml', sm, 'utf8');
  console.log('Updated sitemap.xml');
}

// 3. Update robots.txt
if (fs.existsSync('robots.txt')) {
  let rb = fs.readFileSync('robots.txt', 'utf8');
  rb = rb.replace(/# robots\.txt for .*/g, `# robots.txt for ${BRAND_TITLE} (İstanbul / Ümraniye)`);
  rb = rb.replace(/https:\/\/istanbulmutfakdolabi\.com\.tr/g, NEW_DOMAIN_URL);
  fs.writeFileSync('robots.txt', rb, 'utf8');
  console.log('Updated robots.txt');
}

// 4. Update llms.txt
if (fs.existsSync('llms.txt')) {
  let llm = fs.readFileSync('llms.txt', 'utf8');
  llm = llm.replace(/# ÇNR Mutfak Dolabı & Özel Mobilya İmalat Atölyesi \(İstanbul \/ Ümraniye\)/g, `# ${BRAND_TITLE} - Özel Ölçü Mutfak & Mobilya İmalat Atölyesi (İstanbul / Ümraniye)`);
  llm = llm.replace(/https:\/\/istanbulmutfakdolabi\.com\.tr/g, NEW_DOMAIN_URL);
  llm = llm.replace(/istanbulmutfakdolabi\.com\.tr/g, NEW_DOMAIN);
  llm = llm.replace(/\+90 532 000 00 00/g, '+90 554 459 69 79');
  fs.writeFileSync('llms.txt', llm, 'utf8');
  console.log('Updated llms.txt');
}

// 5. Update assets/js/search.js
if (fs.existsSync('assets/js/search.js')) {
  let sj = fs.readFileSync('assets/js/search.js', 'utf8');
  sj = sj.replace(/ÇNR MUTFAK & MOBİLYA/g, `${BRAND_UPPER}`);
  sj = sj.replace(/ÇNR MOBİLYA/g, `${BRAND_UPPER}`);
  sj = sj.replace(/ÇNR/g, `${BRAND_TITLE}`);
  sj = sj.replace(/CNR/g, `${BRAND_TITLE}`);
  fs.writeFileSync('assets/js/search.js', sj, 'utf8');
  console.log('Updated assets/js/search.js');
}

// 6. Update assets/js/main.js
if (fs.existsSync('assets/js/main.js')) {
  let mj = fs.readFileSync('assets/js/main.js', 'utf8');
  mj = mj.replace(/ÇNR MUTFAK & MOBİLYA/g, `${BRAND_UPPER}`);
  fs.writeFileSync('assets/js/main.js', mj, 'utf8');
  console.log('Updated assets/js/main.js');
}

// 7. Update assets/js/calculator.js
if (fs.existsSync('assets/js/calculator.js')) {
  let cj = fs.readFileSync('assets/js/calculator.js', 'utf8');
  cj = cj.replace(/ÇNR MUTFAK & MOBİLYA/g, `${BRAND_UPPER}`);
  fs.writeFileSync('assets/js/calculator.js', cj, 'utf8');
  console.log('Updated assets/js/calculator.js');
}

console.log(`\nRebranding to ${BRAND_TITLE} (${NEW_DOMAIN}) complete across all files!`);
