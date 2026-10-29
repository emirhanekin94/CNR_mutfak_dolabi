const fs = require('fs');
const files = [
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
  console.log('=== ' + f + ' ===');
  const heroIdx = c.indexOf('hero-section');
  const heroEnd = c.indexOf('</section>', heroIdx);
  const nextChunk = c.substring(heroEnd + 10, heroEnd + 600).trim();
  console.log(nextChunk.substring(0, 200).replace(/\r?\n/g, ' '));
});

