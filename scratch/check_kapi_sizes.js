const fs = require('fs');
const path = require('path');

fs.readdirSync('assets/images/kapi').forEach(f => {
  const p = path.join('assets/images/kapi', f);
  const stat = fs.statSync(p);
  console.log(f.padEnd(25), (stat.size / 1024).toFixed(1) + ' KB');
});

