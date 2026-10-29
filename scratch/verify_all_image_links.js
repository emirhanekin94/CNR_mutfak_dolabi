const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let totalImagesChecked = 0;
let missingImages = [];
let blurryAkrilikOccurrences = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.match(/<img[^>]+>/g) || [];
  
  imgMatches.forEach(tag => {
    totalImagesChecked++;
    const srcMatch = tag.match(/src="([^"]+)"/);
    if (srcMatch) {
      const src = srcMatch[1];
      if (!src.startsWith('http') && !src.startsWith('data:')) {
        // Local path
        const localPath = src.split('?')[0]; // strip query string
        if (!fs.existsSync(localPath)) {
          missingImages.push({ file, src, tag });
        }
      }
    }
  });

  if (content.includes('assets/images/mutfak/akrilik-kapak.webp')) {
    blurryAkrilikOccurrences.push(file);
  }
});

console.log('Total HTML files checked:', files.length);
console.log('Total images checked:', totalImagesChecked);
console.log('Missing images count:', missingImages.length);
if (missingImages.length > 0) {
  console.log('MISSING IMAGES:');
  missingImages.forEach(m => console.log(`  File: ${m.file} => ${m.src}`));
} else {
  console.log('✅ ZERO BROKEN IMAGE LINKS! All image paths exist on disk.');
}

console.log('Files still referencing old akrilik-kapak.webp:', blurryAkrilikOccurrences);

