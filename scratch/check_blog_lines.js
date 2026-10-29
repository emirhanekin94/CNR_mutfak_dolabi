const fs = require('fs');
const c = fs.readFileSync('blog.html', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.includes('bottom-bar') || l.includes('Hemen Ara')) {
    console.log(`${i+1}: ${l}`);
  }
});

