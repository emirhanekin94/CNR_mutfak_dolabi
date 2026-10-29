const fs = require('fs');
const files = fs.readdirSync('assets/images/ress');
console.log('Total files in ress:', files.length);
files.sort().forEach((f, i) => {
  const stat = fs.statSync(`assets/images/ress/${f}`);
  console.log(`${i+1}. ${f} (${(stat.size/1024).toFixed(1)} KB)`);
});

