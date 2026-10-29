const fs = require('fs');
const c = fs.readFileSync('blog.html', 'utf8');
const lines = c.split('\n');
for (let i = 480; i < 505 && i < lines.length; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

