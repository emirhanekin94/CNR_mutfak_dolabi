const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'blog.html');

let fixedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (/<article\b/i.test(content)) {
    content = content.replace(/<article\b([^>]*)>/gi, '<div$1>');
    content = content.replace(/<\/article>/gi, '</div>');
    fs.writeFileSync(file, content, 'utf8');
    fixedFiles++;
    console.log('Replaced <article> tags in:', file);
  }
}

console.log(`Total files cleaned of <article> tags: ${fixedFiles}`);
