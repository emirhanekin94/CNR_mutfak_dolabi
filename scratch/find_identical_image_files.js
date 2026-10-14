const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
      results.push(fullPath);
    }
  });
  return results;
}

const allImages = getFiles('assets/images');
const hashToFiles = {};

allImages.forEach(img => {
  const buf = fs.readFileSync(img);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  if (!hashToFiles[hash]) hashToFiles[hash] = [];
  hashToFiles[hash].push(img);
});

console.log('--- DUPLICATE IMAGE FILES (Identical Content) ---');
Object.entries(hashToFiles).forEach(([h, files]) => {
  if (files.length > 1) {
    console.log(`Hash ${h}:`);
    files.forEach(f => console.log(`  ${f}`));
  }
});
