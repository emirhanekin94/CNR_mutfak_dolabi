const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');
const openDivs = (c.match(/<div[\s>]/g) || []).length;
const closeDivs = (c.match(/<\/div>/g) || []).length;
console.log('banyo-dolabi.html div balance:', openDivs, 'open vs', closeDivs, 'close (diff:', openDivs - closeDivs, ')');

