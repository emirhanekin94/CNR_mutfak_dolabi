const fs = require('fs');

let c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// Replace Card 2's image (which was duplicate of Card 1) with akrilik-kapakli-kahve-kosesi-mutfak-768x1024.webp
c = c.replace(
  'assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi-768x1024.webp',
  'assets/images/ress/akrilik-kapakli-kahve-kosesi-mutfak-768x1024.webp'
);

// Update Card 2's title & desc if needed to fit the new photo
c = c.replace(
  '<h3 class="live-gallery-title">Alüminyum Cam Kapak & LEDli Ada Mutfak</h3>',
  '<h3 class="live-gallery-title">Akrilik Kahve Köşesi & Ada Mutfak</h3>'
);
c = c.replace(
  '<p class="live-gallery-text">Füme reflekte cam kapaklar, entegre lineer LED aydınlatmalar ve 12 mm İtalyan porselen ada.</p>',
  '<p class="live-gallery-text">Entegre gizli prizli kahve barı, Senosan çizilmez akrilik paneller ve porselen ada tezgahı.</p>'
);

// Replace Card 4's image (which was duplicate of Card 7) with aluminyum-cam-kapakli-mutfak-kahve-kosesi-576x1024.webp
c = c.replace(
  'assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah-768x1024.webp',
  'assets/images/ress/aluminyum-cam-kapakli-mutfak-kahve-kosesi-576x1024.webp'
);
c = c.replace(
  '<h3 class="live-gallery-title">Eksiz Corian Tezgah & Akrilik Dolaplar</h3>',
  '<h3 class="live-gallery-title">Alüminyum Füme Cam Vitrin & Mutfak Barı</h3>'
);
c = c.replace(
  '<p class="live-gallery-text">DuPont Corian eksiz birleşen antibakteriyel tezgah, tavana kadar dolap düzeni ve gizli spotlar.</p>',
  '<p class="live-gallery-text">Füme reflekte cam kapaklı içten aydınlatmalı vitrin kuleleri ve porselen tezgahlı hazırlık barı.</p>'
);

fs.writeFileSync('mutfak-dolaplari.html', c, 'utf8');

// Check uniqueness
const cardRegex = /<article class="live-gallery-card">[\s\S]*?<\/article>/g;
const cards = c.match(cardRegex) || [];
console.log('--- Checking 12 cards in mutfak-dolaplari.html ---');
const used = new Set();
let dups = 0;
cards.forEach((card, i) => {
  const src = (card.match(/src="([^"]+)"/) || [])[1];
  const title = (card.match(/<h3 class="live-gallery-title">([^<]+)<\/h3>/) || [])[1];
  const isDup = used.has(src);
  if (isDup) dups++;
  used.add(src);
  console.log(`Card ${i+1}: ${isDup ? '🔴 DUP' : '🟢 OK '} ${src} -> ${title}`);
});
console.log(`Total duplicates: ${dups}`);

