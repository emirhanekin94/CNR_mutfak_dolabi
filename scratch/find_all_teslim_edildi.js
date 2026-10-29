const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (/teslim\s*edildi/i.test(l)) {
      console.log(f + ':' + (i+1) + ': ' + l.trim());
    }
  });
});

