const fs = require('fs');

let c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const target = `<!-- Kart 2: Alüminyum Cam Kapak & LED Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="Alüminyum Cam Kapak High Gloss Porselen Tezgah LED Mutfak" width="600" height="auto" loading="lazy" decoding="async">`;

const replacement = `<!-- Kart 2: Alüminyum Cam Kapak & LED Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi-768x1024.webp" alt="Alüminyum Cam Kapak ve Akrilik Ada Mutfak" width="600" height="auto" loading="lazy" decoding="async">`;

if (c.includes(target)) {
  c = c.replace(target, replacement);
  fs.writeFileSync('mutfak-dolaplari.html', c, 'utf8');
  console.log('SUCCESS: Card 2 updated to vertical 768x1024 photo.');
} else {
  console.error('Target not found for Card 2');
}

