const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let withGtag = 0;
let withoutGtag = 0;
const missing = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('googletagmanager.com/gtag/js') || c.includes('gtag(')) {
    withGtag++;
  } else {
    withoutGtag++;
    missing.push(f);
  }
});

console.log(`Files with Gtag: ${withGtag} / ${files.length}`);
console.log('Files missing Gtag:', missing);

