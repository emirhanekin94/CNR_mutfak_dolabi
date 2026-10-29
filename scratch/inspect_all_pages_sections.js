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
  console.log(`\n=== ${p} ===`);
  const sections = [...c.matchAll(/<(section|nav)[^>]*(?:id="([^"]+)"|class="([^"]+)")?[^>]*>/g)];
  sections.forEach((s, idx) => {
    const textPreview = s[0].length > 100 ? s[0].substring(0, 100) + '...' : s[0];
    console.log(`  ${idx+1}. ${textPreview}`);
  });
});

