const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('main.min.css?v=9') || c.includes('main.css?v=9')) {
    c = c.replace(/main\.min\.css\?v=9/g, 'main.min.css?v=10');
    c = c.replace(/main\.css\?v=9/g, 'main.css?v=10');
    fs.writeFileSync(f, c, 'utf8');
    count++;
  }
});

console.log(`Bumped cache version to v=10 across ${count} HTML files.`);

