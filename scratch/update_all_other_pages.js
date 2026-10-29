const fs = require('fs');

console.log('--- Updating Lake, High Gloss, Membran, Banyo, Gardirop, Yatak, Dekorasyon Pages ---');

// 1. lake-mutfak-dolabi.html
{
  let file = 'lake-mutfak-dolabi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  // Replace generic images in gallery
  c = c.replace(
    '<img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Mutfak Dolabı Montajı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="İpek Mat Lake Ada Mutfak ve Porselen Ada Bar Montajı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyede Üretilen Modern Mutfak Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="Lüks Alüminyum Çerçeveli Vitrin & Lake Mutfak Dolabı" width="1024" height="768" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('lake-mutfak-dolabi.html updated!');
}

// 2. high-gloss-mutfak-dolabi.html
{
  let file = 'high-gloss-mutfak-dolabi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(
    '<img src="assets/images/mutfak/high-gloss-kapak.webp" alt="High Gloss Mutfak Dolabı Detay Görünümü" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%;" decoding="async" loading="lazy" width="1200" height="675">',
    '<img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve High Gloss Mutfak Dolabı Detay Görünümü" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%; height: auto; max-height: 480px; object-fit: cover;" decoding="async" loading="lazy" width="768" height="1024">'
  );
  c = c.replace(
    '<img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Mutfak Dolabı Montajı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp" alt="LED Aydınlatmalı Cam Vitrin & High Gloss Mutfak" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyede Üretilen Modern Mutfak Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp" alt="Çimstone Tezgah & High Gloss Kulpsuz Mutfak Dolabı" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('high-gloss-mutfak-dolabi.html updated!');
}

// 3. membran-mutfak-dolabi.html
{
  let file = 'membran-mutfak-dolabi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(
    '<img src="assets/images/mutfak/membran-kapak.webp" alt="Özel İmalat Membran Mutfak Dolabı Montajı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp" alt="Özel İmalat Beyaz Çıtalı Membran Mutfak Dolabı Montajı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyede Üretilen Modern Mutfak Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp" alt="Ada Masalı Country Tarzı Membran Mutfak Dolabı İmalatı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('membran-mutfak-dolabi.html updated!');
}

// 4. banyo-dolabi.html
{
  let file = 'banyo-dolabi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  // Replace the duplicate bottom gallery images (images 5, 6, 7, 8)
  c = c.replace(
    '<img src="assets/images/banyo/luks-banyo-real.webp" alt="İpek Mat Lake Asma Banyo Dolabı & LED Ayna" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/lake-banyo-dolabi-768x1024.webp" alt="İpek Mat Lake Çift Lavabolu Asma Banyo Dolabı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/banyo/banyo-tadilat-luks.webp" alt="Lüks Çift Lavabolu Özel İmalat Banyo Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/membran-banyo-dolabi-ve-camasir-makinesi-dolabi.webp" alt="Özel İmalat Çamaşır ve Kurutma Makinesi Banyo Dolabı" width="1440" height="1920" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/banyo/camasir-dolabi-real.webp" alt="Kule Çamaşır ve Kurutma Makinesi Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/banyo-dolabi-klozet-dusakabin-768x1024.webp" alt="Klozet Üstü Dolap ve Duşakabin Banyo Çözümü" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/banyo/banyo-dolabi.webp" alt="Ahşap Dokulu Çanak Lavabolu Banyo Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/led-aydinlatmali-lake-banyo-dolabi-576x1024.webp" alt="Gizli LED Aydınlatmalı Lake Asma Banyo Dolabı" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('banyo-dolabi.html updated!');
}

// 5. banyo-tadilat-yenileme.html
{
  let file = 'banyo-tadilat-yenileme.html';
  let c = fs.readFileSync(file, 'utf8');
  
  // Replace duplicates in gallery
  c = c.replace(
    '<img src="assets/images/banyo/banyo-tadilat-real.webp" alt="Anahtar Teslim Banyo Yenileme ve Duşakabin Uygulaması" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/kurnali-dusakabin-ve-banyo-boy-dolap.webp" alt="Kurnalı Cam Duşakabin ve Banyo Boy Dolabı Montajı" width="1080" height="1920" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/banyo/banyo-tadilat-luks.webp" alt="Lüks Çift Lavabolu Özel Lake Banyo Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/lake-banyo-dolabi-768x1024.webp" alt="Lüks İpek Mat Lake Banyo Dolabı ve LED Aynalı Lavabo" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/banyo/camasir-dolabi-real.webp" alt="Özel İmalat Çamaşır ve Kurutma Makinesi Dolabı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/membran-banyo-dolabi-ve-camasir-makinesi-dolabi.webp" alt="Özel İmalat Çamaşır ve Kurutma Makinesi Boy Dolabı" width="1440" height="1920" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/banyo/banyo-dolabi.webp" alt="Suya Dayanıklı Özel Tasarım Asma Banyo Dolabı İmalatı" width="600" height="450" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/membran-banyo-dolabi-seramik.webp" alt="Seramik Uyumlu Suya Dayanıklı Banyo Dolabı ve Ayna" width="1440" height="1920" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('banyo-tadilat-yenileme.html updated!');
}

// 6. giyinme-odasi.html
{
  let file = 'giyinme-odasi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(
    '<img src="assets/images/resim/giyinme_odasi.webp" alt="Özel İmalat Giyinme Odası Ada Ünitesi" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/tavan-spot-aydinlatmali-giyinme-odasi-768x1024.webp" alt="Tavan Spot Aydınlatmalı Lüks Giyinme Odası" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/giyinme_odasi-1.webp" alt="Lüks Walk-in Closet Dolap Düzeni" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/led-aydinlatmali-giysi-dolabi-giyinme-odasi-768x1024.webp" alt="LED Aydınlatmalı Giysi Dolabı ve Walk-in Closet" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/giyinme_odasi-2.webp" alt="Füme Reflekte Camlı Giyinme Dolabı" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/led-aydinlatmali-giysi-dolabi-1-giyinme-odasi-768x1024.webp" alt="Füme Cam ve LEDli Modern Giyinme Dolabı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/giyinme_odasi-3.webp" alt="Özel İmalat Giyinme Dolabı İçi" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/giyinme-odasi-1-578x1024.webp" alt="Özel İmalat Fonksiyonel Giyinme Odası Düzeni" width="578" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('giyinme-odasi.html updated!');
}

// 7. gardirop-modelleri.html
{
  let file = 'gardirop-modelleri.html';
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi.webp" alt="Özel Ölçü Gardırop Modeli" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-141-768x1024.webp" alt="Lüks Tavana Sıfır Özel Ölçü Gardırop Modeli" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-1.webp" alt="Modern Yatak Odası Dolabı" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-4-768x1024.webp" alt="Modern Yatak Odası Gardırop ve Komodin Düzeni" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-2.webp" alt="Geniş Hacimli Ray Dolap" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-20-768x1024.webp" alt="Geniş Hacimli Sürgülü Ray Dolap İmalatı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-3.webp" alt="Özel İmalat Gardırop Detayı" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-6-768x1024.webp" alt="Özel İmalat Entegre Gardırop ve Yatak Odası Mobilyası" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('gardirop-modelleri.html updated!');
}

// 8. yatak-odasi-mobilyasi.html
{
  let file = 'yatak-odasi-mobilyasi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-2.webp" alt="Komodin ve Şifonyer Takımı" width="600" height="400" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-4-768x1024.webp" alt="Komodin ve Şifonyer Takımı Yatak Odası" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-3.webp" alt="Makyaj Masası ve Aynası" width="600" height="400" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yyatak-odasi-8-768x1024.webp" alt="Özel İmalat Makyaj Masası ve Dolap Takımı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi.webp" alt="Tavana Sıfır Yatak Odası Dolabı" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-141-768x1024.webp" alt="Tavana Sıfır Yatak Odası Dolabı Özel İmalat" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-1.webp" alt="Lüks Yatak Odası Gardırobu" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-20-768x1024.webp" alt="Lüks Yatak Odası Gardırobu ve Depolama" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/yatak_odasi_dolabi-2.webp" alt="Yatak Odası Ray Dolap Modeli" width="600" height="375" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/yatak-odasi-7-768x1024.webp" alt="Yatak Odası Modern Gardırop Düzeni" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('yatak-odasi-mobilyasi.html updated!');
}

// 9. mobilya-dekorasyon.html
{
  let file = 'mobilya-dekorasyon.html';
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(
    '<img src="assets/images/dekorasyon/tv-unitesi-real.webp" alt="Salon TV Ünitesi" width="600" height="400" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/camli-tv-unitesi-768x1024.webp" alt="Camlı ve Aydınlatmalı Lüks TV Ünitesi" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/fortmanto.webp" alt="Vestiyer ve Portmanto" width="600" height="400" loading="lazy" decoding="async">',
    '<img src="assets/images/ress/aynali-giris-dresuar-portmanto-768x1024.webp" alt="Aynalı Giriş Dresuar ve Lüks Portmanto" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/fortmanto.webp" alt="Özel Ölçü Antre Vestiyer Portmanto" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/portmanto-2-768x1024.webp" alt="Özel Ölçü Antre Vestiyer Portmanto İmalatı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/fortmanto-1.webp" alt="Lüks Ahşap Portmanto Modeli" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/portmanto-5-768x1024.webp" alt="Lüks Fonksiyonel Ayakkabılık ve Portmanto" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  c = c.replace(
    '<img src="assets/images/resim/fortmantı-2.webp" alt="Fonksiyonel Giriş Mobilyası" loading="lazy" decoding="async" width="600" height="375">',
    '<img src="assets/images/ress/led-aydinlatmali-tv-unitesi-768x1024.webp" alt="LED Aydınlatmalı Ahşap Duvar Paneli TV Ünitesi" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">'
  );
  
  fs.writeFileSync(file, c, 'utf8');
  console.log('mobilya-dekorasyon.html updated!');
}

console.log('--- ALL OTHER PAGES UPDATED SUCCESSFULLY! ---');

