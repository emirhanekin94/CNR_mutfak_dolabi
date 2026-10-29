const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const targetIdx = css.indexOf('.live-gallery-category');
console.log(css.substring(targetIdx, targetIdx + 1500));

