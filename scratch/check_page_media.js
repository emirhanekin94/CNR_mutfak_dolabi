const fs = require('fs');

const pages = [
  'index.html',
  'mutfak-dolaplari.html',
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html',
  'giyinme-odasi.html',
  'kapi-modelleri.html',
  'mobilya-dekorasyon.html',
  'mutfak-dekorasyonu.html',
  'yatak-odasi-mobilyasi.html',
  'katalog.html',
  'membran-mutfak-dolabi.html',
  'lake-mutfak-dolabi.html',
  'akrilik-mutfak-dolabi.html',
  'matplus-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html',
  'fiyat-hesapla.html',
  'hizmet-bolgeleri.html',
  'umraniye-mutfak-dolabi.html',
  'kadikoy-mutfak-dolabi.html',
  'atasehir-mutfak-dolabi.html'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const imgs = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
    const vids = [...content.matchAll(/<source[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log(p + ':');
    console.log('  Images (' + imgs.length + '):', imgs);
    console.log('  Videos (' + vids.length + '):', vids);
  }
});
