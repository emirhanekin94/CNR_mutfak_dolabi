const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const start = css.indexOf('.live-gallery-section');
console.log(css.substring(start, start + 2500));

