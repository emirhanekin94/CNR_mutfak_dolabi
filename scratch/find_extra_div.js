const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const lines = c.split('\n');
let balance = 0;
lines.forEach((l, i) => {
  const o = (l.match(/<div[\s>]/g) || []).length;
  const cl = (l.match(/<\/div>/g) || []).length;
  balance += (o - cl);
  if (balance < 0) {
    console.log(`Negative balance at line ${i+1}: "${l.trim()}" (balance: ${balance})`);
  }
});
console.log('Final balance:', balance);

