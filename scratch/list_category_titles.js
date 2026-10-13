const fs = require('fs');

const files = ['mobilya-dekorasyon.html', 'mutfak-dekorasyonu.html', 'yatak-odasi-mobilyasi.html'];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  console.log('===', f);
  const titles = [];
  const regex = /<h3 class="category-title">([\s\S]*?)<\/h3>/g;
  let m;
  while ((m = regex.exec(c)) !== null) {
    titles.push(m[1].replace(/<[^>]+>/g, '').trim());
  }
  console.log(titles.join(' | '));
}
