const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');
const lines = css.split('\n');
for (let i = 2315; i < 2340 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

