const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('section-text-col') || l.includes('section-media-col') || l.includes('desktop-reverse')) {
    console.log(`${i+1}: ${l}`);
  }
});

