const fs = require('fs');

let html = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// 1. Extract the Grand Project Gallery section from its current position
const galleryStartMarker = '<!-- Kullanıcı Gerçek Mutfak Fotoğrafları & Zengin Proje Galerisi -->';
const galleryEndMarker = '<!-- TEKNİK KARŞILAŞTIRMA TABLOSU -->';

const gStart = html.indexOf(galleryStartMarker);
const gEnd = html.indexOf(galleryEndMarker);

if (gStart === -1 || gEnd === -1) {
  console.error('Gallery markers not found! gStart:', gStart, 'gEnd:', gEnd);
  process.exit(1);
}

// Extract gallery content
const galleryContent = html.substring(gStart, gEnd);

// In the old location (after High Gloss), keep only the CNC video section cleanly closed
// Let's see what is right before galleryStartMarker
const videoSectionStart = html.indexOf('<!-- ATÖLYE İMALAT VİDEOSU VE GERÇEK KULLANICI MUTFAK GALERİSİ -->');

// Replace the old location: video section ends cleanly without the gallery
const cleanVideoSection = `<!-- ATÖLYE İMALAT VİDEOSU VE ÜRETİM GÜCÜMÜZ -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Gücümüz</span>
        <h2 class="section-title">Atölyemizde <span>Mutfak Dolabı CNC Ebatlama & İmalat</span></h2>
        <p class="section-desc">Milimetrik lazer ölçüleri, CNC hassas kesim makineleri ve usta ellerle mutfaklarınızı sıfır hata ile üretiyoruz.</p>
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
  </section>\n\n  `;

// Replace video+gallery block with cleanVideoSection
html = html.substring(0, videoSectionStart) + cleanVideoSection + html.substring(gEnd);
console.log('Removed gallery from bottom and cleaned video section.');

// 2. Prepare the new Top Showcase Gallery Section
const topGallerySection = `
  <!-- ATÖLYEMİZDEN GERÇEK PROJELER & 2026 MUTFAK KOLEKSİYONU (YUKARI ALINDI) -->
  <section class="section-padding" id="projeler" style="background: #ffffff; border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="section-subtitle" style="display: inline-flex; align-items: center; gap: 6px;">
          <span>⭐</span> Müşterilerimize Teslim Ettiğimiz Mutfaklar
        </span>
        <h2 class="section-title" style="font-size: 2.1rem; margin-top: 8px;">
          2026 Mutfak Dolabı <span>Uygulama Vitrini & Modellerimiz</span>
        </h2>
        <p class="section-desc" style="max-width: 780px; margin: 0 auto;">
          Dudullu imalat atölyemizde 18 mm suya dayanıklı MDF ve Avusturya Blum donanımlarla ürettiğimiz canlı mutfak projeleri. Beğendiğiniz model için doğrudan WhatsApp butonuna basarak anında net metretül fiyatı sorabilirsiniz.
        </p>
      </div>

` + galleryContent.replace(/<!-- Kullanıcı Gerçek Mutfak Fotoğrafları & Zengin Proje Galerisi -->[\s\S]*?<div class="proje-gallery-grid">/, '      <div class="proje-gallery-grid">') + `
    </div>
  </section>
`;

// Insert topGallerySection right after the Google Ads lead banner!
const leadBannerMarker = '</section>\n\n  <!-- 1. MEMBRAN';
const leadBannerMarkerCRLF = '</section>\r\n\r\n  <!-- 1. MEMBRAN';

if (html.includes(leadBannerMarkerCRLF)) {
  html = html.replace(leadBannerMarkerCRLF, '</section>\r\n' + topGallerySection + '\r\n  <!-- 1. MEMBRAN');
} else if (html.includes(leadBannerMarker)) {
  html = html.replace(leadBannerMarker, '</section>\n' + topGallerySection + '\n  <!-- 1. MEMBRAN');
} else {
  // Fallback regex
  html = html.replace(
    /(<!-- GOOGLE ADS ÖZEL HIZLI TEKLİF & KEŞİF BANDI -->[\s\S]*?<\/section>)/,
    '$1\n' + topGallerySection
  );
}
console.log('Inserted gallery at top right after Ads banner.');

// 3. Now let's fix the 5 Door Type sections so text is ALWAYS FIRST, image is SECOND, and no images stack on mobile!
// Membran (1):
html = html.replace(
  '<div class="container grid-2-col">',
  '<div class="container grid-2-col">\n      <div class="section-text-col">'
);
html = html.replace(
  '</div>\n      <div>\n        <img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp"',
  '</div>\n      <div class="section-media-col">\n        <div class="door-sample-frame">\n          <span class="door-sample-badge">1. Membran Kapak Uygulaması</span>\n          <img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp"'
);
html = html.replace(
  'loading="lazy" decoding="async">\n      </div>\n    </div>\n  </section>\n\n  <!-- 2. MATPLUS',
  'loading="lazy" decoding="async">\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- 2. MATPLUS'
);

// Matplus (2): Invert HTML so text is FIRST, image is SECOND! And use desktop-reverse for desktop
const oldMatplus = `  <!-- 2. MATPLUS KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="matplus" style="background-color: var(--color-bg-alt); border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col reverse">
      <div>
        <img src="assets/images/mutfak/matplus-kapak.webp" alt="Matplus Kapak Mutfak Dolabı İmalatı" width="600" height="450" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-md);" loading="lazy" decoding="async">
      </div>
      <div>
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
            <li>Anti-Fingerprint (Kesinlikle parmak izi tutmayan ipek yüzey)</li>
            <li>Mikro çizilmelere karşı termal onarım direnci</li>
            <li>Zarif kaşmir, duman grisi, vizon ve mat antrasit tonları</li>
            <li>Sıfır parıltı, dinlendirici ışık emilimi</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="matplus-mutfak-dolabi.html" class="btn btn-primary">Matplus Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Matplus%20mutfak%20icin%20ornek%20fotograf%20ve%20fiyat%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Matplus Fiyatı Al
          </a>
        </div>
      </div>
    </div>
  </section>`;

const newMatplus = `  <!-- 2. MATPLUS KAPAK MUTFAK DOLABI -->
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
            <li>Anti-Fingerprint (Kesinlikle parmak izi tutmayan ipek yüzey)</li>
            <li>Mikro çizilmelere karşı termal onarım direnci</li>
            <li>Zarif kaşmir, duman grisi, vizon ve mat antrasit tonları</li>
            <li>Sıfır parıltı, dinlendirici ışık emilimi</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="matplus-mutfak-dolabi.html" class="btn btn-primary">Matplus Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Matplus%20mutfak%20icin%20ornek%20fotograf%20ve%20fiyat%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Matplus Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">2. Matplus İpek Kapak Uygulaması</span>
          <img src="assets/images/mutfak/matplus-kapak.webp" alt="Matplus Kapak Mutfak Dolabı İmalatı" width="600" height="450" style="width: 100%; height: auto; max-height: 480px; object-fit: cover;" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;

// Replace Matplus
const matplusNorm = html.replace(/\r\n/g, '\n');
const oldMatplusNorm = oldMatplus.replace(/\r\n/g, '\n');
if (matplusNorm.includes(oldMatplusNorm)) {
  html = matplusNorm.replace(oldMatplusNorm, newMatplus);
  console.log('Replaced Matplus section with clean desktop-reverse order!');
} else {
  console.log('Matplus exact match not found, using regex...');
  html = html.replace(
    /<!-- 2\. MATPLUS KAPAK MUTFAK DOLABI -->[\s\S]*?<\/section>/,
    newMatplus
  );
}

// Akrilik (3): Text first, Media second with badge
const oldAkrilikRegex = /<!-- 3\. AKRİLİK KAPAK MUTFAK DOLABI -->[\s\S]*?<\/section>/;
const newAkrilik = `<!-- 3. AKRİLİK KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="akrilik" style="border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col">
      <div class="section-text-col">
        <span class="section-subtitle">3. Kapak Türü</span>
        <h2 class="section-title">Akrilik Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          Akrilik mutfak kapakları, ham 18 mm MDF plakanın üzerine 1.4 mm kalınlığında orijinal Avusturya Senosan çizilmez akrilik tabakanın poliüretan (PUR) tutkalla yapıştırılmasıyla üretilir.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Sıradan parlak kapaklar zamanla sararırken veya çizilirken, akrilik kapaklar UV dayanımı sayesinde güneş ışığında asla sararmaz ve ayna gibi kristal netliğinde parlamaya devam eder.
        </p>
        <div style="background: var(--color-bg-alt); padding: 18px 24px; border-radius: var(--radius-md); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Teknik Öne Çıkanlar:</h4>
          <ul class="spec-feature-list">
            <li>Cam ve ayna derinliğinde ultra parlak kristal yansıma</li>
            <li>Sararmazlık garantisi (UV ışınlarına %100 dayanıklı)</li>
            <li>Lazer kenar bantlama ile sıfır ek yeri görünümü</li>
            <li>Küçük mutfaklara 2 kat daha geniş ve aydınlık ferahlık kazandırır</li>
          </ul>
        </div>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="akrilik-mutfak-dolabi.html" class="btn btn-primary">Akrilik Modellerini İncele &rarr;</a>
          <a href="https://wa.me/905336173755?text=Akrilik%20parlak%20mutfak%20dolabi%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Akrilik Fiyatı Al
          </a>
        </div>
      </div>
      <div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">3. Senosan Çizilmez Akrilik Uygulaması</span>
          <img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Senosan Çizilmez Akrilik Kapak Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı İmalatı" width="1024" height="768" style="width: 100%; height: auto; max-height: 480px; object-fit: cover;" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;
html = html.replace(oldAkrilikRegex, newAkrilik);
console.log('Replaced Akrilik section with clean layout and badge!');

// Lake (4): Text first, Media second with badge & desktop-reverse
const oldLakeRegex = /<!-- 4\. LAKE KAPAK MUTFAK DOLABI -->[\s\S]*?<\/section>/;
const newLake = `<!-- 4. LAKE KAPAK MUTFAK DOLABI -->
  <section class="section-padding" id="lake" style="background-color: var(--color-bg-alt); border-bottom: 1px solid var(--color-border);">
    <div class="container grid-2-col desktop-reverse">
      <div class="section-text-col">
        <span class="section-subtitle">4. Kapak Türü</span>
        <h2 class="section-title">Lake Kapak <span>Mutfak Dolabı</span></h2>
        <p style="color: var(--color-text-muted); margin-bottom: 18px; line-height: 1.7;">
          Mobilya sanatının ve lüks iç mimarinin zirvesi olan lake dolaplar, özel kurutma ve boya fırınımızda üretilir. Ham MDF yüzeyine sırasıyla astar, zımpara, ara kat ve çok katmanlı poliüretan fırın boyası tatbik edilir.
        </p>
        <p style="color: var(--color-text-muted); margin-bottom: 24px; line-height: 1.7;">
          Kapağın önü, arkası ve 4 kenarı tamamen boya tabakasıyla zırhlandığı için ek yeri kesinlikle olmaz. Yıllar geçse bile tekrar zımparalanıp rengi değiştirilebilir, nesilden nesile aktarılır.
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
          <span class="door-sample-badge">4. İpek Mat Lake & Ada Bar Uygulaması</span>
          <img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="İpek Mat Lake Kapak Mutfak Dolabı ve Porselen Tezgahlı Ada Bar İmalatı" width="768" height="1024" style="width: 100%; height: auto; max-height: 480px; object-fit: cover;" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;
html = html.replace(oldLakeRegex, newLake);
console.log('Replaced Lake section with clean desktop-reverse order and badge!');

// High Gloss (5): Text first, Media second with badge
const oldHighGlossRegex = /<!-- 5\. HIGH GLOSS KAPAK MUTFAK DOLABI -->[\s\S]*?<\/section>/;
const newHighGloss = `<!-- 5. HIGH GLOSS KAPAK MUTFAK DOLABI -->
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
          <span class="door-sample-badge">5. High Gloss UV Parlak Kapak Uygulaması</span>
          <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve High Gloss Kapak Mutfak Dolabı İmalatı" width="768" height="1024" style="width: 100%; height: auto; max-height: 480px; object-fit: cover;" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>`;
html = html.replace(oldHighGlossRegex, newHighGloss);
console.log('Replaced High Gloss section with clean layout and badge!');

fs.writeFileSync('mutfak-dolaplari.html', html, 'utf8');
console.log('mutfak-dolaplari.html completely restructured and saved!');

