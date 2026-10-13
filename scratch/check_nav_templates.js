const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const navMap = {};

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<nav class="main-nav"[^>]*>([\s\S]*?)<\/nav>/);
  if (m) {
    const simplified = m[1].replace(/class="[^"]*"/g, '').replace(/\s+/g, ' ').trim();
    if (!navMap[simplified]) navMap[simplified] = [];
    navMap[simplified].push(f);
  }
}

console.log('Nav variations:', Object.keys(navMap).length);
for (const k of Object.keys(navMap)) {
  console.log('--- Sample pages (' + navMap[k].length + '):', navMap[k].slice(0, 3).join(', '));
  console.log(k);
}
