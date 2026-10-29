const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const s = js.indexOf("document.addEventListener('click'");
console.log(js.substring(s, s + 3500));

