const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const hits = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('assets/images/mutfak/mutfak-dolaplari.webp')) {
    hits.push(f);
  }
});

console.log('Files referencing mutfak/mutfak-dolaplari.webp:', hits);

