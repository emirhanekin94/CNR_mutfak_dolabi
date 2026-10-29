const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const lines = js.split('\n');
console.log(lines.slice(85, 135).map((l, i) => (i + 86) + ': ' + l).join('\n'));

