const fs = require('fs');

const files = [
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
  const cardRegex = /<article class="live-gallery-card">[\s\S]*?<\/article>/g;
  const cards = c.match(cardRegex) || [];
  console.log(f.padEnd(30), 'cards count:', cards.length);
});

