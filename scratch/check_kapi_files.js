const fs = require('fs');

console.log('--- kapi folder ---');
fs.readdirSync('assets/images/kapi').forEach(f => console.log('assets/images/kapi/' + f));

console.log('--- ress folder kapi ---');
fs.readdirSync('assets/images/ress').filter(f => /kapi/i.test(f)).forEach(f => console.log('assets/images/ress/' + f));

console.log('--- en-yeni folder kapi ---');
fs.readdirSync('assets/images/en-yeni-resimler').filter(f => /kapi/i.test(f)).forEach(f => console.log('assets/images/en-yeni-resimler/' + f));

