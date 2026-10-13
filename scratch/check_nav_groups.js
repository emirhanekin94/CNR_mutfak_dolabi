const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');
const indexContent = fs.readFileSync('index.html', 'utf8');

const navList = files.map(file => {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i);
  if (!m) return { file, count: 0, text: 'NONE' };
  // extract top-level links and buttons
  const topLinks = [...m[1].matchAll(/<a[^>]*class=["']nav-link[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map(x => x[1].replace(/<span[\s\S]*?<\/span>/gi, '').trim());
  return { file, count: topLinks.length, links: topLinks.join(', ') };
});

const groups = {};
for (const n of navList) {
  groups[n.links] = (groups[n.links] || 0) + 1;
}

console.log('Nav Link Groups:');
console.log(groups);
