const fs = require('fs');

function inspectPage(file) {
  if (!fs.existsSync(file)) {
    console.log(file, 'not found');
    return;
  }
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.match(/<img[^>]+>/g) || [];
  console.log(`=== ${file} (${imgMatches.length} images) ===`);
  imgMatches.forEach((tag, idx) => {
    const srcMatch = tag.match(/src="([^"]+)"/);
    const altMatch = tag.match(/alt="([^"]+)"/);
    const wMatch = tag.match(/width="([^"]+)"/);
    const hMatch = tag.match(/height="([^"]+)"/);
    console.log(`  [${idx+1}] src: ${srcMatch ? srcMatch[1] : ''} | alt: ${altMatch ? altMatch[1] : ''} | size: ${wMatch ? wMatch[1] : ''}x${hMatch ? hMatch[1] : ''}`);
  });
}

const pages = [
  'mutfak-dolaplari.html',
  'index.html',
  'akrilik-mutfak-dolabi.html',
  'lake-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html',
  'membran-mutfak-dolabi.html',
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html',
  'giyinme-odasi.html',
  'yatak-odasi-mobilyasi.html'
];

pages.forEach(inspectPage);

