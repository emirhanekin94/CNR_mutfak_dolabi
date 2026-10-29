const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const versions = new Set();
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/main\.js\?v=([0-9a-zA-Z._-]+)/);
  if (match) versions.add(match[1]);
});
console.log('Script versions found:', Array.from(versions));

