const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const heroEnd = c.indexOf('</section>');
console.log('Hero ends at index:', heroEnd);
console.log(c.substring(heroEnd, heroEnd + 800));

