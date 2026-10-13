const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/<div class="ads-badge-live">([\s\S]*?)<\/div>/);
  if (m) {
    console.log(f.padEnd(32), m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  }
}
