const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<link rel="stylesheet"')) {
    console.log(`${i+1}: ${l}`);
  }
});

