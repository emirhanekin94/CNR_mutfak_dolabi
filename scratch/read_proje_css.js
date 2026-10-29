const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');
const lines = css.split('\n');
for (let i = 3815; i < 3860 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

