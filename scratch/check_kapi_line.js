const fs = require('fs');

const c = fs.readFileSync('kapi-modelleri.html', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.includes('lake-kapi-real.webp')) {
    console.log((i+1) + ': ' + l.trim());
  }
});

