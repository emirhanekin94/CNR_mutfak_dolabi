const fs = require('fs');
const c = fs.readFileSync('kapi-modelleri.html', 'utf8');

['İpek Mat Lake Kapı', 'Çıtalı İpek Mat Beyaz'].forEach(phrase => {
  let idx = 0;
  while ((idx = c.indexOf(phrase, idx)) !== -1) {
    console.log(`Found "${phrase}" at ${idx}:`);
    console.log(c.substring(Math.max(0, idx - 150), Math.min(c.length, idx + 300)));
    idx += phrase.length;
  }
});

