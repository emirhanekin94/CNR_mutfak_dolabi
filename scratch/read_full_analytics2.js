const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const s = js.indexOf('extractCleanLabel');
console.log(js.substring(s + 1000, s + 3500));

