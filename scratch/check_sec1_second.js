const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const idx = c.indexOf('country-tarzi-mutfak-dolabi-3', c.indexOf('country-tarzi-mutfak-dolabi-3') + 1);
console.log('--- Second occurrence ---');
console.log(c.substring(idx - 150, idx + 200));

