const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('live-gallery-grid') || l.includes('live-gallery-scroll-wrap')) {
    console.log(`${i+1}: ${l}`);
  }
});

