const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let updatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Bump ?v=... to ?v=8
  content = content.replace(/assets\/css\/main\.min\.css\?v=[0-9]+/g, 'assets/css/main.min.css?v=8');
  content = content.replace(/assets\/css\/main\.css\?v=[0-9]+/g, 'assets/css/main.css?v=8');

  // Also if any file has href="assets/css/main.min.css" without query param
  content = content.replace(/href="assets\/css\/main\.min\.css"/g, 'href="assets/css/main.min.css?v=8"');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    updatedCount++;
  }
});

console.log(`Updated cache-buster version to v=8 in ${updatedCount} HTML files.`);

