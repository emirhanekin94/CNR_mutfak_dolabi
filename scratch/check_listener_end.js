const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const s = js.indexOf("document.addEventListener('click'");
const e = js.indexOf('})();', s);
console.log(js.substring(s, e + 10));

