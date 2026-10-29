const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const checkImgs = [
  'akrilik-kapak-ilk-foto-bu-olcak.webp',
  'akrilik-mutfak-dolabi-ve-porselen-tezgah.webp',
  'aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp',
  'led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp',
  'membran_kapak-2.webp',
  'country-tarzi-mutfak-dolabi-3-768x1024.webp',
  'country-tarzi-mutfak-dolabi-768x1024.webp',
  'high-gloss-kapak-ilk-foto-bu-olcak.webp',
  'high-gloss-kapakli-mutfak-dolabi-1-768x1024.webp',
  'high-gloss-kapak-mutfak-dolabi-768x1024.webp',
  'aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp'
];

checkImgs.forEach(imgName => {
  console.log(`\n--- ${imgName} ---`);
  files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const matches = [...c.matchAll(new RegExp(`<img[^>]+src="[^"]*${imgName}"[^>]*>`, 'g'))];
    matches.forEach(m => {
      console.log(`  In ${f}: ${m[0]}`);
    });
  });
});

