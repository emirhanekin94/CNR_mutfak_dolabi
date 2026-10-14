const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const imageUsage = {};

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const imgMatches = content.matchAll(/<img[^>]*src="([^"]*)"/g);
  for (const m of imgMatches) {
    const src = m[1];
    if (src.startsWith('http') || src.startsWith('data:')) continue;
    if (!imageUsage[src]) imageUsage[src] = new Set();
    imageUsage[src].add(f);
  }
}

console.log('Images used in multiple files:');
for (const [src, fileSet] of Object.entries(imageUsage)) {
  if (fileSet.size > 1 && !src.includes('logo') && !src.includes('icon')) {
    console.log(src, '->', Array.from(fileSet));
  }
}
