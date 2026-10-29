const fs = require('fs');

const candidateImages = [
  // Akrilik
  'assets/images/en-yeni-resimler/akrilik-kapak-ilk-foto-bu-olcak.webp',
  'assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp',
  'assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp',
  'assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp',
  'assets/images/mutfak/akrilik-mutfak-real.webp',
  // Membran
  'assets/images/en-yeni-resimler/membran_kapak-2.webp',
  'assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp',
  'assets/images/ress/country-tarzi-mutfak-dolabi-768x1024.webp',
  'assets/images/mutfak/membran-mutfak-real.webp',
  // High Gloss
  'assets/images/en-yeni-resimler/high-gloss-kapak-ilk-foto-bu-olcak.webp',
  'assets/images/ress/high-gloss-kapakli-mutfak-dolabi-1-768x1024.webp',
  'assets/images/ress/high-gloss-kapak-mutfak-dolabi-768x1024.webp',
  'assets/images/ress/high-gloss-kapakli-mutfak-dolabi-768x1024.webp',
  'assets/images/ress/aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp',
  'assets/images/mutfak/highgloss-mutfak-real.webp',
  // Lake & Matplus
  'assets/images/en-yeni-resimler/lake-kapak-2.webp',
  'assets/images/en-yeni-resimler/matplus-2.webp',
  'assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp',
  'assets/images/ress/Mekaniniza-Ozel-Mimari-Tasarim-ve-Hassas-Uretim-Mutfak.webp'
];

candidateImages.forEach(img => {
  if (fs.existsSync(img)) {
    const s = fs.statSync(img);
    console.log(`EXISTS: ${img} (${(s.size/1024).toFixed(1)} KB)`);
  } else {
    console.log(`MISSING: ${img}`);
  }
});

