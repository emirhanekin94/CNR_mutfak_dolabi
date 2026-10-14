const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let duplicateFound = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const srcCount = {};
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.includes('logo') || src.includes('icon') || src.includes('google-reviews') || src.includes('flag')) continue;
    srcCount[src] = (srcCount[src] || 0) + 1;
  }

  const dupes = Object.entries(srcCount).filter(([s, c]) => c > 1);
  if (dupes.length > 0) {
    console.log(`${file} has duplicate images:`);
    dupes.forEach(([s, c]) => console.log(`  ${s} (${c} times)`));
    duplicateFound = true;
  }
});

if (!duplicateFound) {
  console.log('No duplicate images found in any page!');
}
