const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('btn-ig') || l.includes('mobile-bottom-bar') || l.includes('desktop-reverse')) {
    console.log(`${i+1}: ${l}`);
  }
});

