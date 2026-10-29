const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const bar = c.match(/<div class="mobile-bottom-bar"[\s\S]*?<\/div>\s*<\/div>/);
console.log(bar ? bar[0] : 'bar not found');

