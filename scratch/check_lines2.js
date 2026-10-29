const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const lines = c.split('\n');
for (let i = 210; i < 260 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

