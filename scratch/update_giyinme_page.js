const fs = require('fs');

let c = fs.readFileSync('giyinme-odasi.html', 'utf8');

// 1. Kapak Fotosu (Hero Image)
c = c.replace(
  '<img src="assets/images/resim/giyinme_odasi.webp" alt="Lüks Giyinme Odası ve Merkez Ada Takı Ünitesi" width="1200" height="675" fetchpriority="high" decoding="async">',
  '<img src="assets/images/ress/led-aydinlatmali-giysi-dolabi-1-giyinme-odasi-768x1024.webp" alt="Lüks LED Aydınlatmalı Özel İmalat Giyinme Odası" width="768" height="1024" fetchpriority="high" decoding="async">'
);

// 2. Video bölümündeki çirkin artık bloğu kaldırma
const leftoverBlock = `      <!-- Gerçek İmalat Fotoğrafları Galerisi -->
      <div style="margin-top: 50px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 20px;">
          📸 Atölyemizden Gerçek Giyinme Odası Uygulamaları
        </h3>
        
      
        <div class="user-gallery-item">
          <img src="assets/images/ress/giyinme-odasi-2-576x1024.webp" alt="Açık Raf ve Çekmeceli Modern Giyinme Odası" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Açık Raf & Çekmeceli Walk-in Closet Modülü</div>
        </div>
      </div>`;

c = c.replace(leftoverBlock, '');

// 3. Butik Konsept & Kusursuz Düzen bölümüne yeni fotoğraflar koyma
c = c.replace(
  '<img src="assets/images/resim/giyinme_odasi.webp" alt="Ada Giyinme Ünitesi" width="600" height="400" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/giyinme-odasi-2-576x1024.webp" alt="Merkez Ada Takı ve Çekmece Ünitesi" width="576" height="1024" loading="lazy" decoding="async">'
);

c = c.replace(
  '<img src="assets/images/resim/giyinme_odasi-1.webp" alt="Açık Sistem Giyinme Odası" width="600" height="400" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/giyinme-odasi-1-578x1024.webp" alt="U Tipi Açık Modüler Giyinme Odası" width="578" height="1024" loading="lazy" decoding="async">'
);

c = c.replace(
  '<img src="assets/images/resim/giyinme_odasi-2.webp" alt="Bronz Cam Kapaklı Giyinme Dolabı" width="600" height="400" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/led-aydinlatmali-giysi-dolabi-giyinme-odasi-768x1024.webp" alt="Lineer LED Aydınlatmalı Füme Cam Kapaklı Dolap" width="768" height="1024" loading="lazy" decoding="async">'
);

// Check div balance
const o = (c.match(/<div[\s>]/g) || []).length;
const cl = (c.match(/<\/div>/g) || []).length;
console.log('giyinme-odasi.html div balance:', o, 'open vs', cl, 'close (diff:', o - cl, ')');

if (o - cl === 0) {
  fs.writeFileSync('giyinme-odasi.html', c, 'utf8');
  console.log('SUCCESS: giyinme-odasi.html updated and saved!');
} else {
  console.error('ERROR: Div balance mismatch!');
}

