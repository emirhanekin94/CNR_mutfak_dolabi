const fs = require('fs');
const c = fs.readFileSync('blog.html', 'utf8');
const match = c.match(/<nav class="mobile-bottom-bar"[\s\S]*?<\/nav>/);
console.log(match ? match[0] : 'not found');

