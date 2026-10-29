const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let cssCount = 0;
let jsCount = 0;

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;

  if (c.includes('main.min.css?v=10') || c.includes('main.css?v=10')) {
    c = c.replace(/main\.min\.css\?v=10/g, 'main.min.css?v=11');
    c = c.replace(/main\.css\?v=10/g, 'main.css?v=11');
    changed = true;
    cssCount++;
  }

  if (c.includes('main.js?v=4') || c.includes('main.js')) {
    c = c.replace(/main\.js\?v=4/g, 'main.js?v=5');
    changed = true;
    jsCount++;
  }

  if (changed) {
    fs.writeFileSync(f, c, 'utf8');
  }
});

console.log(`Bumped CSS to v=11 in ${cssCount} files and JS to v=5 in ${jsCount} files.`);

