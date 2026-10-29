const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const s = js.indexOf('detectButtonType');
console.log(js.substring(s, s + 2500));

