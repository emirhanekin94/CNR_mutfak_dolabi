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
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');

  // Check initial div balance
  const oInit = (c.match(/<div[\s>]/g) || []).length;
  const clInit = (c.match(/<\/div>/g) || []).length;

  // Remove gallery-swipe-hint block
  // Pattern: <div class="gallery-swipe-hint">...</div>
  c = c.replace(/[ \t]*<div class="gallery-swipe-hint">[\s\S]*?<\/div>\r?\n?/g, '');

  // In live-gallery-media img, change height="375" to height="auto" or remove it
  // Pattern: <img src="..." alt="..." width="600" height="375" loading="lazy" decoding="async">
  c = c.replace(/(<div class="live-gallery-media">[\s\S]*?<img [^>]*?)height="375"/g, '$1height="auto"');

  // Validate div balance
  const o = (c.match(/<div[\s>]/g) || []).length;
  const cl = (c.match(/<\/div>/g) || []).length;
  const diff = o - cl;

  console.log(
    f.padEnd(28),
    'Initial diff:', oInit - clInit,
    'Final diff:', diff,
    diff === 0 ? 'OK' : 'MISMATCH!'
  );

  if (diff === 0) {
    fs.writeFileSync(f, c, 'utf8');
  } else {
    console.error(`ERROR in ${f}: div balance mismatch!`);
  }
});

// Also update scratch/apply_top_live_galleries.js
if (fs.existsSync('scratch/apply_top_live_galleries.js')) {
  let gen = fs.readFileSync('scratch/apply_top_live_galleries.js', 'utf8');
  gen = gen.replace(/height="375"/g, 'height="auto"');
  gen = gen.replace(/[ \t]*<div class="gallery-swipe-hint">[\s\S]*?<\/div>\r?\n?/g, '');
  fs.writeFileSync('scratch/apply_top_live_galleries.js', gen, 'utf8');
  console.log('Updated apply_top_live_galleries.js');
}

