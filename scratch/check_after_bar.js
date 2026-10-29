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
  let insertPoint = -1;
  if (c.includes('class="editorial-collection-bar"')) {
    const barIdx = c.indexOf('class="editorial-collection-bar"');
    insertPoint = c.indexOf('</nav>', barIdx) + 6;
  } else if (c.includes('class="trust-badges-bar"')) {
    const badgeIdx = c.indexOf('class="trust-badges-bar"');
    insertPoint = c.indexOf('</section>', badgeIdx) + 10;
  }
  const nextChunk = c.substring(insertPoint, insertPoint + 200).trim();
  console.log('After bar:', nextChunk.replace(/\r?\n/g, ' '));
});

