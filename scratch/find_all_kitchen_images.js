const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      getFiles(full, files);
    } else if (item.endsWith('.webp') || item.endsWith('.jpg') || item.endsWith('.png')) {
      files.push(full.replace(/\\/g, '/'));
    }
  }
  return files;
}

const allImages = getFiles('assets/images');
console.log('Total images in repo:', allImages.length);
allImages.filter(img => img.includes('mutfak') || img.includes('ress/')).forEach(img => {
  console.log(img);
});

