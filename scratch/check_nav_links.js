const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const navMatch = content.match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i);
  if (!navMatch) {
    console.log(file, 'has NO main-nav');
    continue;
  }
  const links = [...navMatch[1].matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map(m => m[1]);
  // just show length and hrefs
  if (file === 'index.html' || file === 'banyo-dolabi.html' || file === 'katalog.html' || file === 'hizmet-bolgeleri.html') {
    console.log(file, links);
  }
}
