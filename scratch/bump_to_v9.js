const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let orig = c;
  c = c.replace(/main\.min\.css\?v=[0-9]+/g, 'main.min.css?v=9');
  c = c.replace(/main\.css\?v=[0-9]+/g, 'main.css?v=9');
  if (c !== orig) {
    fs.writeFileSync(f, c, 'utf8');
    count++;
  }
});

console.log(`Bumped CSS version to v=9 in ${count} files.`);

