const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const idx = css.indexOf('.live-gallery-scroll-wrap');
console.log('--- live-gallery-scroll-wrap context ---');
console.log(css.substring(idx - 100, idx + 1200));

