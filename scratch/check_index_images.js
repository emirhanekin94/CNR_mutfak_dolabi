const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');

const imgs = [...c.matchAll(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"/g)];
console.log('index.html total images:', imgs.length);
imgs.forEach((img, i) => {
  if (img[1].includes('ress/') || img[1].includes('akrilik')) {
    console.log(`${i+1}: ${img[1]} | ${img[2]}`);
  }
});

