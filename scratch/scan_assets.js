const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles('.');
const imgSet = new Set();
const videoSet = new Set();
const fileImageMap = {};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
  fileImageMap[file] = [];
  for (const m of imgMatches) {
    imgSet.add(m[1]);
    fileImageMap[file].push(m[1]);
  }
  const videoMatches = content.matchAll(/<source[^>]+src=["']([^"']+)["']/gi);
  for (const m of videoMatches) {
    videoSet.add(m[1]);
  }
  const posterMatches = content.matchAll(/poster=["']([^"']+)["']/gi);
  for (const m of posterMatches) {
    imgSet.add(m[1]);
  }
});

console.log('=== ALL UNIQUE REFERENCED IMAGES ===');
console.log(Array.from(imgSet).sort());
console.log('\n=== ALL UNIQUE REFERENCED VIDEOS ===');
console.log(Array.from(videoSet).sort());

// Check which referenced images exist or don't exist
console.log('\n=== MISSING IMAGE ASSETS ===');
imgSet.forEach(img => {
  const cleanPath = img.split('?')[0].replace(/^\//, '');
  if (!fs.existsSync(cleanPath)) {
    console.log('MISSING:', img);
  }
});

console.log('\n=== MISSING VIDEO ASSETS ===');
videoSet.forEach(vid => {
  const cleanPath = vid.split('?')[0].replace(/^\//, '');
  if (!fs.existsSync(cleanPath)) {
    console.log('MISSING:', vid);
  }
});
