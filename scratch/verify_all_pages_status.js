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
  const o = (c.match(/<div[\s>]/g) || []).length;
  const cl = (c.match(/<\/div>/g) || []).length;
  const hasLive = c.includes('live-gallery-section');
  const hasUserGrid = c.includes('user-gallery-grid');
  const liveIdx = c.indexOf('live-gallery-section');
  const posPct = liveIdx > 0 ? (liveIdx / c.length * 100).toFixed(1) + '%' : 'N/A';
  console.log(
    f.padEnd(28),
    'bal: ' + ((o - cl) === 0 ? 'OK (0)' : 'ERR (' + (o - cl) + ')').padEnd(10),
    'hasLive: ' + String(hasLive).padEnd(6),
    'pos: ' + posPct.padEnd(8),
    'hasOldGrid: ' + hasUserGrid
  );
});

