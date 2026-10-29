const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const s = c.indexOf('Card 2') !== -1 ? c.indexOf('Card 2') : c.indexOf('Kart 2');
console.log(c.substring(s, s + 400));

