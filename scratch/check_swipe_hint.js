const fs = require('fs');

const files = [
  'index.html',
  'mutfak-dolaplari.html',
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

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log(f, 'has hint:', c.includes('gallery-swipe-hint'));
});

