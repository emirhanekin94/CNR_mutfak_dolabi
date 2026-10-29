const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updatedCount = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('main.js?v=5')) {
    content = content.replace(/main\.js\?v=5/g, 'main.js?v=6');
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} files to main.js?v=6`);

