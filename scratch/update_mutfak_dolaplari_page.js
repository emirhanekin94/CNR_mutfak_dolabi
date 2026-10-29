const fs = require('fs');

let html = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// 1. Update OG Image
html = html.replace(
  '<meta property="og:image" content="https://mutfakdolabiniz.com.tr/assets/images/resim/mutfak_dolabi.webp">',
  '<meta property="og:image" content="https://mutfakdolabiniz.com.tr/assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp">'
);

// 2. Update Hero Image
const oldHero = `<div class="hero-visual-frame">
        <img src="assets/images/en_yeni_resim/mutfak-dolaplari.webp" alt="İstanbul Özel İmalat Mutfak Dolapları" width="1200" height="675" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>2026 Özel İmalat Mutfak Dolabı Koleksiyonu</p>
          <span>2026 Koleksiyonu</span>
        </div>
      </div>`;

const newHero = `<div class="hero-visual-frame">
        <img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="İstanbul Özel İmalat Alüminyum Cam Kapak ve LED Aydınlatmalı Lüks Mutfak Dolabı" width="1024" height="768" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>Lüks Alüminyum Cam Kapak & Akrilik Ada Mutfak</p>
          <span>2026 Özel Seri</span>
        </div>
      </div>`;

if (html.includes(oldHero)) {
  html = html.replace(oldHero, newHero);
  console.log('Hero image replaced successfully!');
} else {
  console.log('Old hero exact string not found, doing regex replacement...');
  html = html.replace(
    /<div class="hero-visual-frame">[\s\S]*?<\/div>\s*<\/div>/,
    newHero + '\n    </div>'
  );
}

// 3. Add Google Ads Conversion Banner below editorial collection bar
const adsBanner = `
  <!-- GOOGLE ADS ÖZEL HIZLI TEKLİF & KEŞİF BANDI -->
  <section style="background: #f8fafc; padding: 25px 0; border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="ads-conversion-banner">
        <div class="ads-conversion-text">
          <span style="color: var(--color-accent); font-weight: 700; font-size: 0.82rem; letter-spacing: 1px; text-transform: uppercase;">⚡ Google Ads Kampanyasına Özel</span>
          <h3 style="margin-top: 4px;">Atölyeden Doğrudan Aracısız Fiyat & Ücretsiz 3D Çizim</h3>
          <p>İstanbul Anadolu ve Avrupa yakasında yerinde milimetrik lazer ölçüsü, 3D mutfak çizimi ve aynı gün net metretül fiyat teklifi.</p>
        </div>
        <div class="ads-conversion-actions">
          <a href="https://wa.me/905336173755?text=Merhaba,%20Google'dan%20ulastim.%20Mutfak%20dolabi%20modelleri%20icin%20ucretsiz%20kesif%20ve%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp" style="font-weight: 700; padding: 12px 24px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            WhatsApp'tan Fiyat Al
          </a>
          <a href="tel:+905336173755" class="btn btn-primary" style="font-weight: 700; padding: 12px 24px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Hemen Ara: 0533 617 37 55
          </a>
        </div>
      </div>
    </div>
  </section>`;

if (!html.includes('GOOGLE ADS ÖZEL HIZLI TEKLİF & KEŞİF BANDI')) {
  html = html.replace('</nav>\n\n  <!-- 1. MEMBRAN', '</nav>\n' + adsBanner + '\n\n  <!-- 1. MEMBRAN');
}

// 4. Update Membran Section Image
html = html.replace(
  '<img src="assets/images/mutfak/membran-kapak.webp" alt="Membran Kapak Mutfak Dolabı İmalatı Ümraniye" width="600" height="450" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp" alt="Country Tarzı Membran Kapak Mutfak Dolabı İmalatı Ümraniye" width="768" height="1024" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">'
);

// 5. Update Akrilik Section Image (CRITICAL: requested by user: photo was blurry)
html = html.replace(
  '<img src="assets/images/mutfak/akrilik-kapak.webp" alt="Akrilik Kapak Mutfak Dolabı Ümraniye" width="600" height="450" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Senosan Çizilmez Akrilik Kapak Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı İmalatı" width="1024" height="768" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">'
);

// 6. Update Lake Section Image
html = html.replace(
  '<img src="assets/images/mutfak/lake-kapak.webp" alt="Lake Kapak Mutfak Dolabı Özel Boya" width="600" height="450" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="İpek Mat Lake Kapak Mutfak Dolabı ve Porselen Tezgahlı Ada Bar İmalatı" width="768" height="1024" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">'
);

// 7. Update High Gloss Section Image
html = html.replace(
  '<img src="assets/images/mutfak/high-gloss-kapak.webp" alt="High Gloss Mutfak Dolabı Ümraniye Atölyesi" width="600" height="450" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">',
  '<img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve High Gloss Kapak Mutfak Dolabı İmalatı" width="768" height="1024" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">'
);

// 8. Replace User Gallery with 12 Grand Kitchen Project Cards
const newGallerySection = `      <!-- Kullanıcı Gerçek Mutfak Fotoğrafları & Zengin Proje Galerisi -->
      <div class="section-header" style="margin-top: 35px; margin-bottom: 25px;">
        <span class="section-subtitle">Atölyemizden Gerçek Projeler</span>
        <h3 class="section-title" style="font-size: 2rem;">Müşterilerimize Teslim Ettiğimiz <span>2026 Mutfak Uygulamaları</span></h3>
        <p class="section-desc">Tüm projeler Ümraniye atölyemizde üretilmiş, kendi montaj ekibimizce teslim edilmiştir. Beğendiğiniz projenin butonuna tıklayarak doğrudan metretül fiyatı sorabilirsiniz.</p>
      </div>

      <div class="proje-gallery-grid">
        <!-- Kart 1: Akrilik Kahve Kosesi & Kiler -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Akrilik & Kiler</span>
            <img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Akrilik Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı" width="1024" height="768" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Akrilik Kahve Köşesi & Boy Kiler Dolabı</h4>
              <p class="proje-card-desc">Senosan çizilmez akrilik paneller, entegre kahve barı ve tam boy erzak kileri.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Çizilmez Akrilik</span>
                <span class="proje-card-tag">Blum Ray</span>
                <span class="proje-card-tag">Kahve Barı</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Akrilik%20Kahve%20Kosesi%20ve%20Kiler%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 2: Aluminyum Cam Kapak & LED High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Lüks Mimari Seri</span>
            <img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="Alüminyum Cam Kapak High Gloss Porselen Tezgah LED Mutfak" width="1024" height="768" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Alüminyum Cam Kapak & Porselen Ada Mutfak</h4>
              <p class="proje-card-desc">Füme reflekte cam vitrinler, lineer gizli LED kanalları ve çizilmez porselen ada tezgah.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Füme Cam Vitrin</span>
                <span class="proje-card-tag">Porselen Ada</span>
                <span class="proje-card-tag">Gizli LED</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Aluminyum%20Cam%20Kapak%20ve%20Porselen%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 3: Lake Kapak Ada Bar & Porselen Tezgah -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">İpek Mat Lake</span>
            <img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="Lake Kapak Mutfak Dolabı ve Porselen Tezgahlı Ada Bar" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">İpek Mat Lake Ada Mutfak & Kahvaltı Barı</h4>
              <p class="proje-card-desc">Fırın boyalı çıtalı lake kapaklar, entegre oturma barı ve mermer damarlı porselen.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Özel Fırın Lake</span>
                <span class="proje-card-tag">Ada Bar</span>
                <span class="proje-card-tag">Sıfır Ek Yeri</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Ipek%20Mat%20Lake%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 4: Corian Tezgah & Akrilik Mutfak -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Akrilik & Corian</span>
            <img src="assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp" alt="LED Tavan Aydınlatmalı Corian Tezgah Akrilik Mutfak Dolabı" width="1024" height="862" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Corian Masif Tezgah & Akrilik Mutfak</h4>
              <p class="proje-card-desc">Eksiz birleşen DuPont Corian akrilik tezgah, tavana kadar dolap düzeni ve tavan spotları.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Eksiz Corian</span>
                <span class="proje-card-tag">Ayna Akrilik</span>
                <span class="proje-card-tag">Maksimum Hacim</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Corian%20Tezgah%20ve%20Akrilik%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 5: Klasik Country Citali Membran -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Country Membran</span>
            <img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp" alt="Klasik Beyaz Çıtalı Country Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Beyaz Çıtalı Klasik Country Mutfak</h4>
              <p class="proje-card-desc">CNC oyma desenli tek parça vakum membran, porselen kulplar ve neme tam dayanıklılık.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">CNC Çıtalı</span>
                <span class="proje-card-tag">Neme Dayanıklı</span>
                <span class="proje-card-tag">Bütçe Dostu</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Beyaz%20Citali%20Country%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 6: Ada Masali Country Mutfak -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Country & Ada</span>
            <img src="assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp" alt="Ada Masalı Country Tarzı Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Ada Masalı Geniş Hacimli Country Mutfak</h4>
              <p class="proje-card-desc">Merkez ada yemek masası ünitesi, vitrin camlı üst dolaplar ve rustik şıklık.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Ada Masası</span>
                <span class="proje-card-tag">Cam Vitrin</span>
                <span class="proje-card-tag">Geniş Depolama</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Ada%20Masali%20Country%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 7: Akrilik & Porselen Tezgah -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Akrilik & Porselen</span>
            <img src="assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp" alt="Senosan Çizilmez Akrilik Mutfak ve Porselen Tezgah" width="1440" height="1920" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Senosan Çizilmez Akrilik & Porselen Mutfak</h4>
              <p class="proje-card-desc">Lazer kenar bantlı saf akrilik dolaplar, ısıya ve çizilmeye dayanıklı porselen tezgah.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Lazer Kenar</span>
                <span class="proje-card-tag">Lamar Porselen</span>
                <span class="proje-card-tag">UV Sararmaz</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Senosan%20Akrilik%20ve%20Porselen%20Tezgah%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 8: Cam Kapak & LED High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">LED Vitrin High Gloss</span>
            <img src="assets/images/ress/aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp" alt="Alüminyum Cam Kapak ve LEDli High Gloss Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">LED Vitrinli High Gloss Modern Mutfak</h4>
              <p class="proje-card-desc">Alüminyum çerçeveli cam bölmeler, iç aydınlatma ve parlak high gloss yüzey.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">İç LED Işık</span>
                <span class="proje-card-tag">High Gloss</span>
                <span class="proje-card-tag">Modern Seri</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20LED%20Vitrinli%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 9: Kahve Kosesi Modulu -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Kahve Köşesi</span>
            <img src="assets/images/ress/aluminyum-cam-kapakli-mutfak-kahve-kosesi-576x1024.webp" alt="Alüminyum Cam Kapaklı Mutfak Kahve Köşesi" width="576" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Entegre Mutfak Kahve & Bar İstasyonu</h4>
              <p class="proje-card-desc">Özel cam kadehlik bölmesi, espresso makinesi nişi ve sıcak LED atmosfer aydınlatması.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Kahve İstasyonu</span>
                <span class="proje-card-tag">Kadehlik Rafı</span>
                <span class="proje-card-tag">Özel Modül</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Mutfak%20Kahve%20Kosesi%20Modulu%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 10: Porselen Tezgah & High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Porselen & Gloss</span>
            <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve Tezgah Arası High Gloss Mutfak" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Porselen Tezgah Arası High Gloss Dolap</h4>
              <p class="proje-card-desc">Tezgah ile tezgah arasının yekpare porselenle kaplandığı silinebilir şık tasarım.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Yekpare Porselen</span>
                <span class="proje-card-tag">Kolay Temizlik</span>
                <span class="proje-card-tag">Uzun Ömürlü</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Porselen%20Tezgah%20Arasi%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 11: Cimstone & High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Çimstone & Gloss</span>
            <img src="assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp" alt="Çimstone Tezgah ve High Gloss Mutfak Dolabı" width="576" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Çimstone Kuvars Tezgah & Kulpsuz Mutfak</h4>
              <p class="proje-card-desc">Leke tutmaz kuvars tezgah, gizli gola profil kulpsuz kapaklar ve ergonomik yerleşim.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Çimstone Kuvars</span>
                <span class="proje-card-tag">Gola Kulpsuz</span>
                <span class="proje-card-tag">Modern Hatlar</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Cimstone%20Tezgah%20ve%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 12: Mimari Tasarim & Uretim -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Mimari Özel Tasarım</span>
            <img src="assets/images/ress/Mekaniniza-Ozel-Mimari-Tasarim-ve-Hassas-Uretim-Mutfak.webp" alt="Mekana Özel Mimari Tasarım ve Hassas Üretim Mutfak" width="1024" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Mekana Özel Mimari Projelendirme & İmalat</h4>
              <p class="proje-card-desc">Evinizin mimari yapısına göre sıfır hata ile tasarlanan, atölyemizde CNC ile üretilen özel mutfak.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Milimetrik CNC</span>
                <span class="proje-card-tag">3D Render</span>
                <span class="proje-card-tag">15 Günde Teslim</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Mekana%20Ozel%20Mimari%20Mutfak%20Projesi%20icin%20kesif%20ve%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;

// Replace the old user gallery section
const galleryStartMarker = '<!-- Kullanıcı Gerçek Mutfak Fotoğrafları -->';
const galleryEndMarker = '<!-- TEKNİK KARŞILAŞTIRMA TABLOSU -->';

const startIndex = html.indexOf(galleryStartMarker);
const endIndex = html.indexOf(galleryEndMarker);

if (startIndex !== -1 && endIndex !== -1) {
  html = html.substring(0, startIndex) + newGallerySection + '\n    </div>\n  </section>\n\n  ' + html.substring(endIndex);
  console.log('Grand gallery section replaced successfully!');
} else {
  console.log('Markers not found! startIndex:', startIndex, 'endIndex:', endIndex);
}

fs.writeFileSync('mutfak-dolaplari.html', html, 'utf8');
console.log('mutfak-dolaplari.html updated and saved successfully!');

