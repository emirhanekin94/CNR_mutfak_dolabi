const fs = require('fs');

let html = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// 1. Update CSS cache-busting version
html = html.replace('assets/css/main.min.css?v=7', 'assets/css/main.min.css?v=8');
html = html.replace('assets/css/main.css?v=7', 'assets/css/main.css?v=8');

// 2. Update OG Image
html = html.replace(
  '<meta property="og:image" content="https://mutfakdolabiniz.com.tr/assets/images/resim/mutfak_dolabi.webp">',
  '<meta property="og:image" content="https://mutfakdolabiniz.com.tr/assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp">'
);

// 3. Update Hero Visual Showcase Frame
const oldHeroVisual = `<div class="hero-visual-frame">
        <img src="assets/images/en_yeni_resim/mutfak-dolaplari.webp" alt="İstanbul Özel İmalat Mutfak Dolapları" width="1200" height="675" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>2026 Özel İmalat Mutfak Dolabı Koleksiyonu</p>
          <span>2026 Koleksiyonu</span>
        </div>
      </div>`;

const newHeroVisual = `<div class="hero-visual-frame">
        <img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="İstanbul Özel İmalat Alüminyum Cam Kapak ve LED Aydınlatmalı Lüks Mutfak Dolabı" width="1024" height="768" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>Lüks Alüminyum Cam Kapak & Akrilik Ada Mutfak</p>
          <span>2026 Özel Koleksiyon</span>
        </div>
      </div>`;

if (html.includes(oldHeroVisual)) {
  html = html.replace(oldHeroVisual, newHeroVisual);
  console.log('Hero visual frame replaced successfully.');
} else {
  console.log('Warning: oldHeroVisual exact match not found, trying regex replacement.');
  html = html.replace(
    /<div class="hero-visual-frame">[\s\S]*?<\/div>\s*<\/div>/,
    newHeroVisual
  );
}

// 4. Google Ads Conversion Banner + 12 Grand Real Kitchen Projects Gallery (Placed right after </nav> of .editorial-collection-bar)
const editorialNavEnd = '</nav>';
const leadBannerAndGallery = `

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
  </section>

  <!-- CANLI ATÖLYE TESLİMATLARI & 2026 MUTFAK MODELLERİ (YUKARI ALINDI) -->
  <section class="section-padding" id="modeller" style="background: #ffffff; border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="section-subtitle" style="display: inline-flex; align-items: center; gap: 6px;">
          <span>⭐</span> Atölyemizden Gerçek Teslimatlar
        </span>
        <h2 class="section-title" style="font-size: 2.1rem; margin-top: 8px;">
          Müşterilerimize Teslim Ettiğimiz <span>2026 Mutfak Modelleri</span>
        </h2>
        <p class="section-desc" style="max-width: 800px; margin: 0 auto;">
          Dudullu atölyemizde CNC makinelerimizle sıfır hata ile üretilmiş, kendi marangoz ustalarımızca montajı yapılmış gerçek projelerimiz. Beğendiğiniz mutfak için tek tıkla doğrudan WhatsApp'tan metretül fiyatı sorabilirsiniz.
        </p>
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
              <h4 class="proje-card-title">Alüminyum Cam Kapak & Porselen Ada</h4>
              <p class="proje-card-desc">Füme reflekte cam kapaklar, iç LED aydınlatmalar ve porselen ada tezgahı.</p>
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
                <span class="proje-card-tag">Tavan Spot</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Corian%20Tezgah%20ve%20Akrilik%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 5: Klasik Beyaz Citali Country -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Klasik Country</span>
            <img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp" alt="Klasik Beyaz Çıtalı Country Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Klasik Çıtalı Beyaz Country Mutfak</h4>
              <p class="proje-card-desc">Vakum pres yekpare membran çıta detayları, siyah granit tezgah ve seramik eviye.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">CNC Çıta Desen</span>
                <span class="proje-card-tag">Siyah Granit</span>
                <span class="proje-card-tag">Neme Dayanıklı</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Klasik%20Citali%20Country%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 6: Ada Masali Country Mutfak -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Country Ada</span>
            <img src="assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp" alt="Ada Masalı Country Tarzı Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Ahşap Detaylı Country Ada Mutfak</h4>
              <p class="proje-card-desc">Sıcak ahşap dokulu açık raflar, geniş ada hazırlık masası ve rustik kulp koleksiyonu.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Geniş Ada</span>
                <span class="proje-card-tag">Açık Raf</span>
                <span class="proje-card-tag">Porselen Kulp</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Ahsap%20Detayli%20Country%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 7: Senosan Akrilik & Porselen Tezgah -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Senosan Akrilik</span>
            <img src="assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp" alt="Senosan Çizilmez Akrilik Mutfak ve Porselen Tezgah" width="1024" height="768" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Senosan Çizilmez Akrilik & Porselen</h4>
              <p class="proje-card-desc">Avusturya Senosan çizilmez akrilik paneller, 12 mm porselen tezgah ve gizli gola profil.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">6H Çizilmezlik</span>
                <span class="proje-card-tag">Gola Kulpsuz</span>
                <span class="proje-card-tag">Isıya Dayanıklı</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Senosan%20Akrilik%20ve%20Porselen%20Tezgah%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 8: Aluminyum Cam Kapak & LEDli High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">LED Vitrin</span>
            <img src="assets/images/ress/aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp" alt="Alüminyum Cam Kapak ve LEDli High Gloss Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">LED Aydınlatmalı High Gloss Cam Dolap</h4>
              <p class="proje-card-desc">UV yüksek parlak High Gloss kapaklar, füme camlı alüminyum profil ve sensörlü LED raf.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Sensörlü LED</span>
                <span class="proje-card-tag">UV Parlaklık</span>
                <span class="proje-card-tag">Ekonomik Lüks</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20LEDli%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 9: Aluminyum Cam Kapakli Kahve Kosesi -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Kahve Barı</span>
            <img src="assets/images/ress/aluminyum-cam-kapakli-mutfak-kahve-kosesi-576x1024.webp" alt="Alüminyum Cam Kapaklı Mutfak Kahve Köşesi" width="576" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Mimari Kahve Köşesi & Kadeh Dolabı</h4>
              <p class="proje-card-desc">Özel cam vitrin, baristalara özel espresso istasyonu ve fincan askılık modülü.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Espresso Barı</span>
                <span class="proje-card-tag">Kadeh Vitrini</span>
                <span class="proje-card-tag">Özel Ölçü</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Mutfak%20Kahve%20Kosesi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 10: Porselen Tezgah ve Tezgah Arasi High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Monolitik Porselen</span>
            <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve Tezgah Arası High Gloss Mutfak" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Porselen Tezgah Arası & High Gloss</h4>
              <p class="proje-card-desc">Tezgahtan duvara kesintisiz uzanan monolitik porselen kaplama ve parlak beyaz dolaplar.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Kesintisiz Desen</span>
                <span class="proje-card-tag">Derzsiz Duvar</span>
                <span class="proje-card-tag">Leke Bırakmaz</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Porselen%20Tezgah%20ve%20High%20Gloss%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 11: Cimstone Tezgah & High Gloss -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Kuvars Çimstone</span>
            <img src="assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp" alt="Çimstone Tezgah ve High Gloss Mutfak Dolabı" width="576" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Çimstone Kuvars Tezgah & High Gloss</h4>
              <p class="proje-card-desc">Çizilmeye ve lekeye dayanıklı Çimstone kuvars yüzey, parlak kapak ve gizli kulp imalatı.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Kuvars Yüzey</span>
                <span class="proje-card-tag">Sıfır Gözenek</span>
                <span class="proje-card-tag">Uzun Ömür</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Cimstone%20Tezgah%20ve%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 12: Mimari Tasarim ve Hassas Uretim Mutfak -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Özel Mimari Seri</span>
            <img src="assets/images/ress/Mekaniniza-Ozel-Mimari-Tasarim-ve-Hassas-Uretim-Mutfak.webp" alt="Mekana Özel Mimari Tasarım ve Hassas Üretim Mutfak" width="1024" height="768" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Mekana Özel Lüks Ada Mutfak Projesi</h4>
              <p class="proje-card-desc">Evinizin ölçülerine milimetrik CNC kesim, tavan gizli aydınlatması ve akıllı kiler mekanizmaları.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Milimetrik CNC</span>
                <span class="proje-card-tag">Akıllı Kiler</span>
                <span class="proje-card-tag">10 Yıl Gövde</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Mekana%20Ozel%20Luks%20Ada%20Mutfak%20Projesi%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// Find the editorial collection bar nav end:
// It looks like:
// <nav class="editorial-collection-bar" aria-label="Koleksiyonlar">
// ...
// </nav>
const navMatch = html.match(/<nav class="editorial-collection-bar"[\s\S]*?<\/nav>/);
if (navMatch) {
  html = html.replace(navMatch[0], navMatch[0] + leadBannerAndGallery);
  console.log('Lead banner and 12-card projects gallery inserted right after editorial bar nav!');
} else {
  console.error('ERROR: editorial-collection-bar nav not found!');
}

// 5. Replace the 5 door type sections with strictly TEXT-FIRST, IMAGE-SECOND DOM structure!
const newMembranSection = `  <!-- 1. MEMBRAN KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="membran" style="border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col">
      <div class="section-text-col">
        <span class="section-subtitle">1. Kapak Türü</span>
        <h2 class="section-title">Membran Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          Membran kapaklar, 18 mm ham MDF levhaların CNC tezgahlarda istenilen profil ve oyma desenleriyle işlenmesinin ardından, yüksek ısı ve vakum pres altında PVC membran folyo ile kaplanmasıyla üretilir.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Kapağın kenarlarında ek yeri (kenar bandı) bulunmaz. Folyonun yekpare dönmesi sayesinde neme, su buharına ve neme karşı mükemmel bir bariyer oluşturur. Country, klasik çıtalı veya düz modern tasarımlar için vazgeçilmezdir.
        </p>
        <div style="background: var(--color-bg-alt); padding: 18px 24px; border-radius: var(--radius-md); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Teknik Öne Çıkanlar:</h4>
          <ul class="spec-feature-list">
            <li>Kenar bandsız tek parça vakum presleme teknolojisi</li>
            <li>Country çıtalı, dalgalı, çizgili veya düz sınırsız CNC model imkanı</li>
            <li>Ahşap dokulu, mat beyaz, taş grisi, antrasit ve pastel ton seçenekleri</li>
            <li>Kolay silinebilir, leke tutmaz ve solmaz yüzey</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="membran-mutfak-dolabi.html" class="btn btn-primary">Membran Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Membran%20kapak%20mutfak%20dolabi%20icin%20katalog%20ve%20fiyat%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Membran Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Beyaz Çıtalı Membran Kapak</span>
          <img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp" alt="Country Tarzı Membran Kapak Mutfak Dolabı İmalatı Ümraniye" width="768" height="1024" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;

const newMatplusSection = `  <!-- 2. MATPLUS KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="matplus" style="background-color: var(--color-bg-alt); border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col desktop-reverse">
      <div class="section-text-col">
        <span class="section-subtitle">2. Kapak Türü</span>
        <h2 class="section-title">Matplus Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          Matplus teknolojisi, modern mimaride son yılların parlayan yıldızıdır. Yüzeyindeki nano-kaplama sayesinde el izi, yağ lekesi veya parmak izi bırakmaz. Dokunulduğunda ipeksi, sıcak ve kadifemsi bir his uyandırır.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Özellikle gün ışığı alan mutfaklarda ışığı kırmadan homojen emer ve mekana son derece dingil, sofistike ve lüks bir mimari derinlik kazandırır.
        </p>
        <div style="background: #ffffff; padding: 18px 24px; border-radius: var(--radius-md); margin-bottom: 24px; border: 1px solid var(--color-border);">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Teknik Öne Çıkanlar:</h4>
          <ul class="spec-feature-list">
            <li>Anti-Fingerprint (Kesinlikle parmak izi tutmayan ipeksi nano yüzey)</li>
            <li>Mikro çizilmelere karşı termal kendini onarma kabiliyeti</li>
            <li>Derin mat siyah, antrasit, kaşmir, latte ve vizon renk skalası</li>
            <li>Gola profilli kulpsuz modern mutfak kurgusuna %100 uyum</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="matplus-mutfak-dolabi.html" class="btn btn-primary">Matplus Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Matplus%20leke%20tutmaz%20kapak%20icin%20fiyat%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Matplus Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Leke Tutmaz Matplus Nano Mutfak</span>
          <img src="assets/images/mutfak/matplus-kapak.webp" alt="Matplus Kapak Mutfak Dolabı İmalatı" width="600" height="450" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;

const newAkrilikSection = `  <!-- 3. AKRİLİK KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="akrilik" style="border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col">
      <div class="section-text-col">
        <span class="section-subtitle">3. Kapak Türü</span>
        <h2 class="section-title">Akrilik Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          Akrilik mutfak dolapları, 1. sınıf Senosan çizilmez akrilik levhaların MDF panellere PUR (Poliüretan) tutkalla preslenmesiyle imal edilir. Ayna parlaklığında kristal derinlik veya asil ipeksi mat seçenekleri sunar.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Lazer kenar bandı (ZeroJoint) teknolojimiz sayesinde kapağın kenarlarında kir toplayan ek çizgisi oluşmaz. UV koruması sayesinde güneş ışığında kesinlikle sararma yapmaz, yıllarca ilk günkü parlaklığını korur.
        </p>
        <div style="background: var(--color-bg-alt); padding: 18px 24px; border-radius: var(--radius-md); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Teknik Öne Çıkanlar:</h4>
          <ul class="spec-feature-list">
            <li>Orijinal Senosan çizilmez 6H yüzey sertliği güvencesi</li>
            <li>Sıfır ek yeri (ZeroJoint) lazer kenar bandı uygulaması</li>
            <li>Kristal ayna parlaklığı ve derinlik hissi veren optik netlik</li>
            <li>Suya, neme, mutfak buharına ve temizlik kimyasallarına tam mukavemet</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="akrilik-mutfak-dolabi.html" class="btn btn-primary">Akrilik Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Akrilik%20kapak%20mutfak%20dolabi%20icin%20net%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Akrilik Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Çizilmez Senosan Akrilik Kapak & Kiler</span>
          <img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Senosan Çizilmez Akrilik Kapak Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı İmalatı" width="1024" height="768" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;

const newLakeSection = `  <!-- 4. LAKE KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="lake" style="background-color: var(--color-bg-alt); border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col desktop-reverse">
      <div class="section-text-col">
        <span class="section-subtitle">4. Kapak Türü</span>
        <h2 class="section-title">Lake Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          Lake kapaklar, lüks mimari tasarımların zirvesidir. CNC işlemesi tamamlanan yüksek yoğunluklu ham MDF panellerin üzerine astar, dolgu ve en az 3 kat poliüretan/akrilik lake boya püskürtülerek özel fırınlarda kurutulmasıyla elde edilir.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Kapağın 6 yüzeyi de boya katmanıyla mühürlendiği için kesinlikle kenar bandı bulunmaz. Su ve neme karşı tam monoblok koruma sağlar. İlerleyen yıllarda sadece kapak rengini değiştirerek mutfağınızı sıfırdan yenileme özgürlüğü sunar.
        </p>
        <div style="background: #ffffff; padding: 18px 24px; border-radius: var(--radius-md); margin-bottom: 24px; border: 1px solid var(--color-border);">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Teknik Öne Çıkanlar:</h4>
          <ul class="spec-feature-list">
            <li>Sınırsız Renk Özgürlüğü: İstediğiniz herhangi bir RAL veya NCS boya kodu</li>
            <li>Sıfır Kenar Bandı: 6 yüzeyi boya ile sarılmış monoblok gövde</li>
            <li>İpek mat, kadife saten veya fırın cilalı yüksek parlak seçenekleri</li>
            <li>Çıtalı klasik, Shaker tarzı veya modern kulpsuz gizli kanal modelleri</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="lake-mutfak-dolabi.html" class="btn btn-primary">Lake Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Ozel%20lake%20mutfak%20dolabi%20icin%20kesif%20ve%20fiyat%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Lake Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: İpek Mat Lake Kapak & Porselen Ada Bar</span>
          <img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="İpek Mat Lake Kapak Mutfak Dolabı ve Porselen Tezgahlı Ada Bar İmalatı" width="768" height="1024" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;

const newHighglossSection = `  <!-- 5. HIGH GLOSS KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="highgloss" style="border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col">
      <div class="section-text-col">
        <span class="section-subtitle">5. Kapak Türü</span>
        <h2 class="section-title">High Gloss Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          High Gloss mutfak kapakları, 18 mm MDF levhaların üzerine UV lak teknolojisiyle uygulanan yüksek parlaklıktaki kaplamadır.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Bütçesini yormadan modern, parlak ve pırıl pırıl bir mutfak yaptırmak isteyen ev sahipleri ve müteahhit projeleri için en ekonomik ve pratik tercihtir.
        </p>
        <div style="background: var(--color-bg-alt); padding: 18px 24px; border-radius: var(--radius-md); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Teknik Öne Çıkanlar:</h4>
          <ul class="spec-feature-list">
            <li>En ekonomik parlak kapak çözümü</li>
            <li>Düz renkler, mermer ve ahşap damarlı zengin kartela</li>
            <li>Kolay silinir ve kir barındırmaz</li>
            <li>Kısa sürede imalat ve seri teslimat avantajı</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="high-gloss-mutfak-dolabi.html" class="btn btn-primary">High Gloss Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=High%20gloss%20parlak%20mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            High Gloss Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Porselen Tezgah & High Gloss Kapak</span>
          <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve High Gloss Kapak Mutfak Dolabı İmalatı" width="768" height="1024" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;

// Helper regex replacer
function replaceSection(id, newContent) {
  const reg = new RegExp(`<!-- \\d\\.[^>]*-->\\s*<section[^>]*id="${id}"[\\s\\S]*?<\\/section>|<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`);
  if (reg.test(html)) {
    html = html.replace(reg, newContent);
    console.log(`Replaced section ${id} successfully.`);
  } else {
    console.error(`ERROR: Section ${id} could not be matched!`);
  }
}

replaceSection('membran', newMembranSection);
replaceSection('matplus', newMatplusSection);
replaceSection('akrilik', newAkrilikSection);
replaceSection('lake', newLakeSection);
replaceSection('highgloss', newHighglossSection);

// 6. Replace CNC Video section with clean version
const cleanVideoSection = `  <!-- ATÖLYE İMALAT VİDEOSU VE ÜRETİM GÜCÜMÜZ -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Gücümüz</span>
        <h2 class="section-title">Atölyemizde <span>Mutfak Dolabı CNC Ebatlama & İmalat</span></h2>
        <p class="section-desc">Milimetrik lazer ölçüleri, CNC hassas kesim makineleri ve marangoz ustalarımızla mutfaklarınızı sıfır hata ile üretiyoruz.</p>
      </div>

      <div class="video-showcase-box">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>MUTFAK DOLABINIZ · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="none" poster="assets/videos/imalat_atolye_video-1-poster.webp" aria-label="Mutfak Dolabınız İstanbul İmalat Atölyesi Video Gösterimi" title="Mutfak Dolabınız İmalat Videosu">
          <source src="assets/videos/imalat_atolye_video-1.webm" type="video/webm">
          <track kind="captions" src="assets/videos/captions.vtt" srclang="tr" label="Türkçe" default>
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

const videoRegex = /<!-- ATÖLYE İMALAT VİDEOSU[\s\S]*?<\/section>/;
if (videoRegex.test(html)) {
  html = html.replace(videoRegex, cleanVideoSection);
  console.log('Video section cleaned successfully.');
} else {
  console.error('ERROR: Video section not found!');
}

fs.writeFileSync('mutfak-dolaplari.html', html, 'utf8');
console.log('Successfully wrote updated mutfak-dolaplari.html!');

