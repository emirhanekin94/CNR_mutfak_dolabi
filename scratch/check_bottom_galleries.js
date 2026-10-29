const fs = require('fs');

const pages = [
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html',
  'giyinme-odasi.html',
  'yatak-odasi-mobilyasi.html',
  'mobilya-dekorasyon.html',
  'lake-mutfak-dolabi.html',
  'membran-mutfak-dolabi.html',
  'akrilik-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html',
  'matplus-mutfak-dolabi.html',
  'mutfak-dekorasyonu.html',
  'kapi-modelleri.html'
];

pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  console.log(`\n================== ${p} ==================`);
  const userGalleryMatch = c.match(/<div class="user-gallery-grid"[\s\S]*?<\/div>\s*<\/div>/);
  const liveGalleryMatch = c.match(/<section class="live-gallery-section"[\s\S]*?<\/section>/);
  console.log('has user-gallery-grid:', !!userGalleryMatch);
  console.log('has live-gallery-section:', !!liveGalleryMatch);
});

