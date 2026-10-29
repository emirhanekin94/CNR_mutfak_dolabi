const fs = require('fs');
const c = fs.readFileSync('giyinme-odasi.html', 'utf8');

const idx = c.indexOf('Butik Konsept');
const end = c.indexOf('</section>', idx);
console.log(c.substring(idx - 100, end + 10));

