const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const openDivs = (c.match(/<div[\s>]/g) || []).length;
const closeDivs = (c.match(/<\/div>/g) || []).length;
console.log('mutfak-dolaplari.html div balance:', openDivs, 'open vs', closeDivs, 'close (diff:', openDivs - closeDivs, ')');

const sections = [...c.matchAll(/<section[^>]*id="([^"]+)"/g)].map(m => m[1]);
console.log('Section IDs in order:', sections);

const imgs = [...c.matchAll(/<img[^>]+>/g)].map(m => {
  const src = m[0].match(/src="([^"]+)"/);
  const alt = m[0].match(/alt="([^"]+)"/);
  return { src: src ? src[1] : '', alt: alt ? alt[1] : '' };
});
console.log('Total images:', imgs.length);
imgs.forEach((img, i) => console.log(i + 1, img.src, '|', img.alt));

