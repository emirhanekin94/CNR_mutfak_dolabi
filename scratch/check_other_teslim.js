const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let others = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const withoutTag = c.replace(/<span class="live-gallery-tag delivery-tag">⭐\s*Teslim Edildi<\/span>/gi, '');
  const matches = withoutTag.match(/teslim\s*edildi/gi);
  if (matches) {
    console.log(f, matches);
    others += matches.length;
  }
});
console.log('Others count:', others);

