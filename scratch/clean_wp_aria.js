const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('aria-label="WhatsApp Canlı Destek"')) {
    content = content.replace(/aria-label="WhatsApp Canlı Destek"/g, 'aria-label="WhatsApp"');
    fs.writeFileSync(f, content, 'utf8');
    count++;
  }
});
console.log('Updated files for aria-label:', count);
