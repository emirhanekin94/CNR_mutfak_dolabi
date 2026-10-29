const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// Filter out blog posts, district pages (unless they are major), and special pages
const majorServicePages = [
  'mutfak-dolaplari.html',
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html',
  'giyinme-odasi.html',
  'yatak-odasi-mobilyasi.html',
  'mobilya-dekorasyon.html',
  'kapi-modelleri.html',
  'lake-mutfak-dolabi.html',
  'membran-mutfak-dolabi.html',
  'akrilik-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html',
  'matplus-mutfak-dolabi.html',
  'mutfak-dekorasyonu.html'
];

console.log('Major service pages count:', majorServicePages.length);
majorServicePages.forEach(p => {
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    const hasLiveGallery = c.includes('live-gallery') || c.includes('Atölyemizden') || c.includes('Gerçek İmalat');
    console.log(`${p}: exists, has gallery: ${hasLiveGallery}`);
  } else {
    console.log(`${p}: NOT FOUND`);
  }
});

