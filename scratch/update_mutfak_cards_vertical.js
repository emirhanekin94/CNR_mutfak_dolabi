const fs = require('fs');

let c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// Replace Card 4's image with vertical 3:4 photo
c = c.replace(
  'assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp',
  'assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah-768x1024.webp'
);

// Replace Card 2's image with vertical 3:4 photo
c = c.replace(
  'assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp',
  'assets/images/ress/akrilik-kapakli-kahve-kosesi-mutfak-768x1024.webp'
);

// Replace Card 9's image with vertical 3:4 photo
c = c.replace(
  'assets/images/en-yeni-resimler/high-gloss-kapak-ilk-foto-bu-olcak.webp',
  'assets/images/ress/high-gloss-kapak-mutfak-dolabi-768x1024.webp'
);

// Replace Card 11's image with vertical 3:4 photo
c = c.replace(
  'assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp',
  'assets/images/ress/high-gloss-kapakli-mutfak-dolabi-1-768x1024.webp'
);

// Replace Card 12's image with vertical 3:4 photo
c = c.replace(
  'assets/images/ress/Mekaniniza-Ozel-Mimari-Tasarim-ve-Hassas-Uretim-Mutfak.webp',
  'assets/images/ress/country-mutfak-dolabi-768x1024.webp'
);

fs.writeFileSync('mutfak-dolaplari.html', c, 'utf8');
console.log('Updated mutfak-dolaplari.html with vertical 3:4 authentic photos.');

