const fs = require('fs');
const minCss = fs.readFileSync('assets/css/main.min.css', 'utf8');
console.log('Includes btn-ig-sticky?', minCss.includes('btn-ig-sticky'));
console.log('Includes desktop-reverse?', minCss.includes('desktop-reverse'));

