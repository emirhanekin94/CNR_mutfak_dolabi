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
  const sections = [...c.matchAll(/<section[\s\S]*?<\/section>/g)];
  sections.forEach((s, idx) => {
    const h2 = s[0].match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const h3 = s[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const title = h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : (h3 ? h3[1].replace(/<[^>]+>/g, '').trim() : 'No Heading');
    const isGallery = s[0].includes('live-gallery') || s[0].includes('Gerçek İmalat') || s[0].includes('Teslimat') || s[0].includes('proje-gallery');
    console.log(`  Section ${idx+1}: [${title}] ${isGallery ? '⭐ (GALLERY / YAPILAN İŞLER)' : ''}`);
  });
});

