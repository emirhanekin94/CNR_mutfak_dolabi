const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');
const indexContent = fs.readFileSync('index.html', 'utf8');
const indexNav = indexContent.match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i)[1];

// Normalize whitespace
function norm(html) {
  return html.replace(/class=["'][^"']*active[^"']*["']/g, '')
             .replace(/\s+/g, ' ')
             .trim();
}

const normIndex = norm(indexNav);
let diffCount = 0;

for (const file of files) {
  const c = fs.readFileSync(file, 'utf8');
  const m = c.match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i);
  if (!m) {
    console.log(file, 'MISSING NAV');
    continue;
  }
  if (norm(m[1]) !== normIndex) {
    console.log(file, 'DIFFERS FROM INDEX NAV');
    diffCount++;
  }
}

console.log('Total files checked:', files.length);
console.log('Files with nav differences:', diffCount);
