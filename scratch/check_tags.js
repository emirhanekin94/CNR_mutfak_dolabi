const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const tagSet = new Set();
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const matches = c.match(/<span class="live-gallery-tag[^"]*">[^<]+<\/span>/g);
  if (matches) {
    matches.forEach(m => tagSet.add(m));
  }
});
console.log('Unique live gallery tags:', Array.from(tagSet));

