const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');
const lines = c.split('\n');
for (let i = 390; i < 520 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

