const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const matches = [...css.matchAll(/\.proje-card\s*\{/g)];
console.log('Total .proje-card definitions:', matches.length);

