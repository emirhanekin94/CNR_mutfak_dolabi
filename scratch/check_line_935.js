const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');
const lines = c.split('\n');
for (let i = 925; i < 945; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

