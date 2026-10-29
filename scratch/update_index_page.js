const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Akrilik Kapak Mutfak Dolabi section image replacement (CRITICAL)
html = html.replace(
  '<img src="assets/images/mutfak/akrilik-kapak.webp" alt="Akrilik Kapak Mutfak Dolabı Örneği" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);" loading="lazy" decoding="async" width="1200" height="675">',
  '<img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Senosan Çizilmez Akrilik Kapak Mutfak Dolabı Örneği" style="width: 100%; height: auto; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);" loading="lazy" decoding="async" width="1024" height="768">'
);

// 2. Lake Kapak tab image upgrade
html = html.replace(
  '<img src="assets/images/mutfak/lake-kapak.webp" alt="Lake Kapak Mutfak Dolabı Örneği" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);" loading="lazy" decoding="async" width="1200" height="675">',
  '<img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="Lake Kapak Mutfak Dolabı ve Porselen Ada Bar Örneği" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);" loading="lazy" decoding="async" width="768" height="1024">'
);

// 3. High Gloss tab image upgrade
html = html.replace(
  '<img src="assets/images/mutfak/high-gloss-kapak.webp" alt="High Gloss Kapak Mutfak Dolabı Örneği" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);" loading="lazy" decoding="async" width="1200" height="675">',
  '<img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="High Gloss Kapak Mutfak Dolabı ve Porselen Tezgah Örneği" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);" loading="lazy" decoding="async" width="768" height="1024">'
);

// 4. Category 1: Mutfak Dolaplari
html = html.replace(
  '<img src="assets/images/mutfak/mutfak-dolaplari.webp" alt="Özel İmalat Mutfak Dolapları Membran Lake Akrilik" width="600" height="375" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="Özel İmalat Mutfak Dolapları Membran Lake Akrilik" width="1024" height="768" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async">'
);

// 5. Category 2: Banyo Dolabi
html = html.replace(
  '<img src="assets/images/banyo/banyo-dolabi.webp" alt="Banyo Dolabı Özel İmalat Suya Dayanıklı" width="600" height="375" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/lake-banyo-dolabi-768x1024.webp" alt="Banyo Dolabı Özel İmalat Suya Dayanıklı Lake" width="768" height="1024" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async">'
);

// 6. Category 4: Mobilya & Dekorasyon
html = html.replace(
  '<img src="assets/images/resim/fortmanto.webp" alt="Mobilya Dekorasyon TV Üniteleri Portmanto" width="600" height="375" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/aynali-giris-dresuar-portmanto-768x1024.webp" alt="Mobilya Dekorasyon TV Üniteleri Portmanto" width="768" height="1024" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async">'
);

// 7. Live gallery cards upgrade
html = html.replace(
  '<img src="assets/images/en-yeni-resimler/akrilik-kapak-ilk-foto-bu-olcak.webp" alt="Lüks Akrilik ve Füme Cam Kapak Mutfak" width="600" height="375" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Lüks Akrilik ve Füme Cam Kapak Mutfak" width="1024" height="768" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async">'
);

html = html.replace(
  '<img src="assets/images/en-yeni-resimler/membran_kapak-2.webp" alt="Klasik Country Membran Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/country-tarzi-mutfak-dolabi-768x1024.webp" alt="Klasik Country Membran Mutfak Dolabı" width="768" height="1024" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async">'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully!');

