const fs = require('fs');
const c = fs.readFileSync('gardirop-modelleri.html', 'utf8');

const navEnd = c.indexOf('</nav>', c.indexOf('editorial-collection-bar'));
console.log(c.substring(navEnd, navEnd + 700));

