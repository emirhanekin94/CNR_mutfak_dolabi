const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const lines = c.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('mutfak-dolaplari.webp')) {
    console.log(`Line ${idx+1}: ${line.trim()}`);
  }
});

