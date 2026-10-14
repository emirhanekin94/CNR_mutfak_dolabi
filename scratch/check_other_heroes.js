const fs = require('fs');
const files = [
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html',
  'giyinme-odasi.html',
  'kapi-modelleri.html',
  'mobilya-dekorasyon.html',
  'mutfak-dekorasyonu.html',
  'yatak-odasi-mobilyasi.html',
  'mutfak-dolaplari.html',
  'hizmet-bolgeleri.html',
  'katalog.html',
  'iletisim.html',
  'blog.html'
];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const c = fs.readFileSync(f, 'utf8');
  const heroMatch = c.match(/<section[^>]*class="[^"]*hero-section[^"]*"[\s\S]*?<\/section>/);
  if (heroMatch) {
    const hasWA = heroMatch[0].includes('btn-whatsapp') || heroMatch[0].includes('btn-phone');
    console.log(f, 'hero has btn-whatsapp or btn-phone:', hasWA);
  } else {
    console.log(f, 'no hero-section found');
  }
}
