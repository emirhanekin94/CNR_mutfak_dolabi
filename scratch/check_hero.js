const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const lines = c.split('\n');
for (let i = 0; i < 150 && i < lines.length; i++) {
  if (lines[i].includes('hero') || lines[i].includes('mutfak-dolaplari.webp') || lines[i].includes('aluminyum-cam')) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}

