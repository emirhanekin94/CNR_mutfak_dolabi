const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const idx = css.indexOf('.media-frame');
console.log('--- .media-frame CSS ---');
console.log(css.substring(idx, idx + 600));

