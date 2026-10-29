const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const navEnd = c.indexOf('</nav>', 17508);
console.log('Nav ends at index:', navEnd);
console.log(c.substring(navEnd, navEnd + 800));

