const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');
const actionHtmls = new Set();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const m = content.match(/<div[^>]*class=["']header-actions["'][^>]*>([\s\S]*?)<\/div>/i);
  if (m) {
    actionHtmls.add(m[1].replace(/\s+/g, ' ').trim());
  } else {
    console.log(file, 'missing header-actions');
  }
}

console.log('Unique header-actions variations:', actionHtmls.size);
for (const a of actionHtmls) {
  console.log('--- VAR ---');
  console.log(a);
}
