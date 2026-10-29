const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const blurryHits = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('assets/images/mutfak/akrilik-kapak.webp')) {
    blurryHits.push(f);
  }
});

console.log('Files still referencing assets/images/mutfak/akrilik-kapak.webp:', blurryHits);

