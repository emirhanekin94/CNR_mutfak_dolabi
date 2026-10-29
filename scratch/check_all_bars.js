const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;
let missingBar = [];
let missingIg = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('mobile-bottom-bar')) {
    count++;
    if (!c.includes('btn-ig-sticky')) {
      missingIg.push(f);
    }
  } else {
    missingBar.push(f);
  }
});

console.log(`Total HTML files: ${files.length}`);
console.log(`Files with mobile-bottom-bar: ${count}`);
console.log(`Files missing btn-ig-sticky:`, missingIg);
console.log(`Files missing mobile-bottom-bar:`, missingBar);

