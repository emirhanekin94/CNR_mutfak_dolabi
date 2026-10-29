const fs = require('fs');
const c = fs.readFileSync('akrilik-mutfak-dolabi.html', 'utf8');

const imgs = [...c.matchAll(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"/g)];
console.log('akrilik-mutfak-dolabi.html total images:', imgs.length);
imgs.forEach((img, i) => {
  console.log(`${i+1}: ${img[1]} | ${img[2]}`);
});

