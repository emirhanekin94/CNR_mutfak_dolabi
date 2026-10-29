const fs = require('fs');
const c = fs.readFileSync('giyinme-odasi.html', 'utf8');

console.log('--- Hero image in giyinme-odasi.html ---');
const heroIdx = c.indexOf('hero-section');
const heroEnd = c.indexOf('</section>', heroIdx);
console.log(c.substring(heroIdx, heroEnd));

console.log('--- Search for user mentions ---');
['Atölyemizden Gerçek Giyinme', 'Açık Raf', 'Walk-in Closet', 'Butik Konsept'].forEach(phrase => {
  let idx = 0;
  while ((idx = c.indexOf(phrase, idx)) !== -1) {
    console.log(`Found "${phrase}" at ${idx}:`);
    console.log(c.substring(Math.max(0, idx - 150), Math.min(c.length, idx + 300)));
    idx += phrase.length;
  }
});

