const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const matches = [...c.matchAll(/<section[\s\S]*?<\/section>/g)];
console.log('=== BANYO SECTION 4 ===');
console.log(matches[3][0]); // index 3 = 4th section

