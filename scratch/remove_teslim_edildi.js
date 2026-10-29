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

let totalRemoved = 0;

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');
  const countBefore = (c.match(/teslim\s*edildi/gi) || []).length;

  // Remove <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
  // Also clean up any leading/trailing whitespace/newline so lines don't stay blank
  c = c.replace(/[ \t]*<span class="live-gallery-tag delivery-tag">⭐\s*Teslim Edildi<\/span>\r?\n?/g, '');

  // For the product/category pages (excluding index.html), also remove montage-tag so all cards in the grid are uniform
  if (f !== 'index.html') {
    c = c.replace(/[ \t]*<span class="live-gallery-tag montage-tag">🔨\s*Montaj Aşaması<\/span>\r?\n?/g, '');
  }

  const countAfter = (c.match(/teslim\s*edildi/gi) || []).length;
  const removed = countBefore - countAfter;
  totalRemoved += removed;

  // Validate div balance
  const o = (c.match(/<div[\s>]/g) || []).length;
  const cl = (c.match(/<\/div>/g) || []).length;
  const diff = o - cl;

  console.log(f.padEnd(28), 'Removed:', removed, 'Remaining:', countAfter, 'Div bal:', diff === 0 ? 'OK (0)' : 'ERR (' + diff + ')');

  if (diff === 0) {
    fs.writeFileSync(f, c, 'utf8');
  } else {
    console.error(`ERROR in ${f}: div balance not 0! NOT saving.`);
  }
});

console.log(`\nTotal 'Teslim Edildi' removed: ${totalRemoved}`);

