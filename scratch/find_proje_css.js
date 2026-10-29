const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('proje-gallery-grid') || l.includes('ads-conversion-banner')) {
    console.log(`${i+1}: ${l}`);
  }
});

