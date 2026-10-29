const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');
const idx = css.indexOf('.live-gallery-media');
console.log(css.substring(idx, idx + 600));

