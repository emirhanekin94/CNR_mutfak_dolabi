const fs = require('fs');
const content = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const heroMatch = content.match(/<div class="hero-visual-frame">[\s\S]*?<\/div>\s*<\/div>/);
console.log('--- Hero ---');
console.log(heroMatch ? heroMatch[0] : 'No hero found');

console.log('--- Akrilik Section ---');
const akrilikIdx = content.indexOf('id="akrilik"');
console.log(content.substring(akrilikIdx, akrilikIdx + 1100));

console.log('--- Total images in mutfak-dolaplari.html ---');
const imgs = content.match(/<img[^>]+>/g) || [];
console.log('Found', imgs.length, 'images.');
imgs.forEach((img, i) => console.log(i + 1, img));

