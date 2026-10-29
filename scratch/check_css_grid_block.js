const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const s = css.indexOf('.live-gallery-grid {');
const e = css.indexOf('.live-gallery-category', s);
console.log(css.substring(s, e));

