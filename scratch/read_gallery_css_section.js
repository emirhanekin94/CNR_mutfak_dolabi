const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');
const lines = css.split('\n');
console.log(lines.slice(1260, 1460).map((l, i) => (i + 1261) + ': ' + l).join('\n'));

