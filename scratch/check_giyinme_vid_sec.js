const fs = require('fs');
const c = fs.readFileSync('giyinme-odasi.html', 'utf8');

const s = c.indexOf('Atölyemizden Gerçek Giyinme Odası Uygulamaları');
const secStart = c.lastIndexOf('<section', s);
const secEnd = c.indexOf('</section>', s);
console.log('--- Video section in giyinme-odasi.html ---');
console.log(c.substring(secStart, secEnd + 10));

