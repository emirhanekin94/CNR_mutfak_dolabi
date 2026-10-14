const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');

const matches = [];
const articleRegex = /<article[^>]*id="([^"]*)"[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/g;
let m;
while ((m = articleRegex.exec(content)) !== null) {
  matches.push({
    id: m[1],
    title: m[2].replace(/\s+/g, ' ').trim()
  });
}

console.log('Total articles:', matches.length);
console.log(matches);
