const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const targetIdx = css.indexOf('.live-gallery-scroll-wrap');
if (targetIdx !== -1) {
  console.log(css.substring(targetIdx - 50, targetIdx + 1200));
} else {
  console.log('.live-gallery-scroll-wrap not found');
}

