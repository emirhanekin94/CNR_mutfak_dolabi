const fs = require('fs');
const i = fs.readFileSync('index.html', 'utf8').match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i)[1];
const b = fs.readFileSync('banyo-dolabi.html', 'utf8').match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i)[1];
console.log('INDEX NAV:');
console.log(i);
console.log('-----------------');
console.log('BANYO NAV:');
console.log(b);
