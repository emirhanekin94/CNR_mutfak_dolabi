const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');
const lines = c.split('\n');
for (let i = 515; i < 555 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

