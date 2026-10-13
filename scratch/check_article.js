const fs = require('fs');

const b = fs.readFileSync('banyo-dolabi.html', 'utf8');
const lines = b.split('\n');
lines.forEach((l, i) => {
  if (/article/i.test(l)) {
    console.log(i + 1, l);
  }
});
