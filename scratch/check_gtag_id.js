const fs = require('fs');

const c = fs.readFileSync('index.html', 'utf8');
const s = c.indexOf('gtag/js');
console.log(c.substring(s - 50, s + 400));

