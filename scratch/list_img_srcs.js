const fs = require('fs');

const files = ['giyinme-odasi.html', 'mobilya-dekorasyon.html', 'yatak-odasi-mobilyasi.html', 'gardirop-modelleri.html', 'mutfak-dolaplari.html', 'index.html'];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  console.log('===', f);
  const regex = /<img[^>]+src="([^">]+)"[^>]*>/g;
  let m;
  while ((m = regex.exec(c)) !== null) {
    console.log('  ', m[1]);
  }
}
