const fs = require('fs');

let html = fs.readFileSync('akrilik-mutfak-dolabi.html', 'utf8');

// 1. Replace blurry photo in section
html = html.replace(
  '<img src="assets/images/mutfak/akrilik-kapak.webp" alt="Akrilik Mutfak Dolabı Detay Görünümü" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%;" decoding="async" loading="lazy" width="1200" height="675">',
  '<img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Senosan Çizilmez Akrilik Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı Detayı" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-md); width: 100%; height: auto; object-fit: cover;" decoding="async" loading="lazy" width="1024" height="768">'
);

// 2. Expand gallery from 2 items to 6 authentic acrylic project cards
const oldGallery = `<div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Mutfak Dolabı Montajı" width="600" height="450" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Atölye İmalatımız Özel Mutfak Montajı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyede Üretilen Modern Mutfak Dolabı" width="600" height="450" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Özel Ölçü Ada & Boy Dolap İmalatı</div>
        </div>
      </div>`;

const newGallery = `<div class="proje-gallery-grid">
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Akrilik & Kiler</span>
            <img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Akrilik Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı" width="1024" height="768" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Akrilik Kahve Köşesi & Kiler Dolabı</h4>
              <p class="proje-card-desc">Senosan çizilmez akrilik paneller, tam boy kiler ve entegre kahve istasyonu.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Akrilik%20Kahve%20Kosesi%20ve%20Kiler%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Akrilik & Porselen</span>
            <img src="assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp" alt="Senosan Çizilmez Akrilik Mutfak ve Porselen Tezgah" width="1440" height="1920" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Çizilmez Akrilik & Porselen Tezgah</h4>
              <p class="proje-card-desc">UV dayanımlı sararmaz akrilik kapaklar, fırınlı porselen ada tezgah uygulaması.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Akrilik%20ve%20Porselen%20Tezgah%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Vitrinli Akrilik</span>
            <img src="assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp" alt="Alüminyum Cam Kapaklı Akrilik Mutfak Dolabı" width="1440" height="1920" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Alüminyum Cam Vitrinli Akrilik Mutfak</h4>
              <p class="proje-card-desc">Füme reflekte camlı üst modüller ve ayna parlaklığında beyaz akrilik alt dolaplar.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Vitrinli%20Akrilik%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Corian & Akrilik</span>
            <img src="assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp" alt="LED Tavan Aydınlatmalı Corian Tezgah Akrilik Mutfak" width="1024" height="862" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Corian Masif Tezgah & Akrilik Dolaplar</h4>
              <p class="proje-card-desc">Eksiz lamine Corian tezgah, tavan aydınlatma ve lazer kenar bantlı kapaklar.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Corian%20Tezgah%20Akrilik%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Kahve İstasyonu</span>
            <img src="assets/images/ress/akrilik-kapakli-kahve-kosesi-mutfak-768x1024.webp" alt="Akrilik Kapaklı Kahve Köşesi Mutfak" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Akrilik Kapaklı Özel Kahve İstasyonu</h4>
              <p class="proje-card-desc">Mutfak içerisine entegre edilmiş kompakt ve fonksiyonel kahve köşesi ünitesi.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Akrilik%20Kahve%20Istasyonu%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Cam Vitrin & Bar</span>
            <img src="assets/images/ress/aluminyum-cam-kapakli-mutfak-kahve-kosesi-576x1024.webp" alt="Alüminyum Cam Kapaklı Mutfak Kahve Köşesi" width="576" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Aydınlatmalı Cam Vitrin Kahve Modülü</h4>
              <p class="proje-card-desc">İçten sıcak sarı LED aydınlatmalı, alüminyum profil çerçeveli modern vitrin.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Cam%20Vitrin%20Kahve%20Modulu%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldGallery)) {
  html = html.replace(oldGallery, newGallery);
  console.log('akrilik gallery replaced successfully!');
} else {
  console.log('oldGallery not found, trying regex...');
  html = html.replace(/<div class="user-gallery-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newGallery + '\n    </div>\n  </section>');
}

fs.writeFileSync('akrilik-mutfak-dolabi.html', html, 'utf8');
console.log('akrilik-mutfak-dolabi.html updated successfully!');

