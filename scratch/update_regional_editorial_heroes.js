const fs = require('fs');

const districtMap = {
  'atasehir-mutfak-dolabi.html': { name: 'Ataşehir', upper: 'ATAŞEHİR' },
  'bakirkoy-mutfak-dolabi.html': { name: 'Bakırköy', upper: 'BAKIRKÖY' },
  'basaksehir-mutfak-dolabi.html': { name: 'Başakşehir', upper: 'BAŞAKŞEHİR' },
  'besiktas-mutfak-dolabi.html': { name: 'Beşiktaş', upper: 'BEŞİKTAŞ' },
  'beykoz-mutfak-dolabi.html': { name: 'Beykoz', upper: 'BEYKOZ' },
  'beylikduzu-mutfak-dolabi.html': { name: 'Beylikdüzü', upper: 'BEYLİKDÜZÜ' },
  'cekmekoy-mutfak-dolabi.html': { name: 'Çekmeköy', upper: 'ÇEKMEKÖY' },
  'eyupsultan-mutfak-dolabi.html': { name: 'Eyüpsultan', upper: 'EYÜPSULTAN' },
  'kadikoy-mutfak-dolabi.html': { name: 'Kadıköy', upper: 'KADIKÖY' },
  'kagithane-mutfak-dolabi.html': { name: 'Kağıthane', upper: 'KAĞITHANE' },
  'kartal-mutfak-dolabi.html': { name: 'Kartal', upper: 'KARTAL' },
  'maltepe-mutfak-dolabi.html': { name: 'Maltepe', upper: 'MALTEPE' },
  'pendik-mutfak-dolabi.html': { name: 'Pendik', upper: 'PENDİK' },
  'sancaktepe-mutfak-dolabi.html': { name: 'Sancaktepe', upper: 'SANCAKTEPE' },
  'sariyer-mutfak-dolabi.html': { name: 'Sarıyer', upper: 'SARIYER' },
  'sile-mutfak-dolabi.html': { name: 'Şile', upper: 'ŞİLE' },
  'sisli-mutfak-dolabi.html': { name: 'Şişli', upper: 'ŞİŞLİ' },
  'sultanbeyli-mutfak-dolabi.html': { name: 'Sultanbeyli', upper: 'SULTANBEYLİ' },
  'tuzla-mutfak-dolabi.html': { name: 'Tuzla', upper: 'TUZLA' },
  'umraniye-mutfak-dolabi.html': { name: 'Ümraniye', upper: 'ÜMRANİYE' },
  'uskudar-mutfak-dolabi.html': { name: 'Üsküdar', upper: 'ÜSKÜDAR' }
};

let count = 0;

for (const [file, info] of Object.entries(districtMap)) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Extract title, desc, img
  const titleMatch = content.match(/<h1[^>]*class="hero-title"[^>]*>([\s\S]*?)<\/h1>/);
  const descMatch = content.match(/<p[^>]*class="hero-description"[^>]*>([\s\S]*?)<\/p>/);
  const imgMatch = content.match(/<div class="hero-visual-[^"]*">[\s\S]*?<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"/);

  const titleHtml = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : `${info.name} <span>Mutfak Dolabı</span> İmalatı & Özel Ölçü Tasarım.`;
  const descText = descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : `${info.name} genelinde aracısız atölye imalatıyla özel ölçü mutfak dolabı ve mobilya üretiyoruz.`;
  const imgSrc = imgMatch ? imgMatch[1] : 'assets/images/mutfak/lake-mutfak.webp';
  const imgAlt = imgMatch ? imgMatch[2] : `${info.name} Özel İmalat Mutfak Dolabı`;

  // Hero section pattern
  const heroRegex = /<!-- Hero Bölümü[^>]*-->[\s\S]*?<section class="hero-section">[\s\S]*?<\/section>/;
  const directHeroRegex = /<section class="hero-section">[\s\S]*?<\/section>/;

  const newHeroHtml = `  <!-- LÜKS MİMARİ HERO (LINEADECOR & LAZZONI ÇİZGİSİ) -->
  <section class="hero-section">
    <div class="hero-bg-overlay"></div>
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-eyebrow">${info.upper} MUTFAK DOLABI İMALATI &middot; ÖZEL ÖLÇÜ TASARIM</span>
        <h1 class="hero-title">
          ${titleHtml}
        </h1>
        <p class="hero-description">
          ${descText}
        </p>

        <!-- Prestijli İki Eylem Butonu -->
        <div class="hero-cta-group">
          <a href="mutfak-dolaplari.html" class="btn-hero-primary">
            2026 Koleksiyonunu Keşfet
          </a>
          <a href="https://wa.me/905336173555?text=Merhaba,%20${encodeURIComponent(info.name)}%20icin%20ucretsiz%203D%20mimari%20cizim%20ve%20fiyat%20almak%20istiyorum." target="_blank" class="btn-hero-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color: #25d366;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            Ücretsiz Keşif & 3D Proje
          </a>
        </div>

        <!-- Kurumsal Güven Barı -->
        <div class="hero-trust-bar">
          <div class="trust-bar-item">
            <strong>15+ Yıl</strong>
            <span>Atölye Tecrübesi</span>
          </div>
          <div class="trust-bar-divider"></div>
          <div class="trust-bar-item">
            <strong>1.800+</strong>
            <span>Teslim Edilen Mutfak</span>
          </div>
          <div class="trust-bar-divider"></div>
          <div class="trust-bar-item">
            <strong>5 Yıl</strong>
            <span>Mekanik & Kapak Garantisi</span>
          </div>
        </div>
      </div>

      <!-- Mimari Vitrin Sahnesi (Architectural Showcase) -->
      <div class="hero-visual-frame">
        <img src="${imgSrc}" alt="${imgAlt}" width="1200" height="675" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>${info.name} Özel İmalat Lüks Mutfak</p>
          <span>2026 Koleksiyonu</span>
        </div>
      </div>
    </div>
  </section>

  <!-- MİMARİ KOLEKSİYON GEZİNME ŞERİDİ (LINEADECOR STYLE EDITORIAL BAR) -->
  <nav class="editorial-collection-bar" aria-label="Koleksiyonlar">
    <div class="container">
      <div class="editorial-collection-inner">
        <a href="mutfak-dolaplari.html" class="editorial-tab-link active">Tüm Modeller</a>
        <a href="lake-mutfak-dolabi.html" class="editorial-tab-link">Lake Mutfak</a>
        <a href="membran-mutfak-dolabi.html" class="editorial-tab-link">Membran Mutfak</a>
        <a href="akrilik-mutfak-dolabi.html" class="editorial-tab-link">Akrilik Mutfak</a>
        <a href="matplus-mutfak-dolabi.html" class="editorial-tab-link">Matplus Nano Mutfak</a>
        <a href="banyo-dolabi.html" class="editorial-tab-link">Banyo Dolapları</a>
        <a href="banyo-tadilat-yenileme.html" class="editorial-tab-link">Banyo Tadilat</a>
        <a href="gardirop-modelleri.html" class="editorial-tab-link">Gardırop & Ray Dolap</a>
        <a href="giyinme-odasi.html" class="editorial-tab-link">Giyinme Odası</a>
        <a href="kapi-modelleri.html" class="editorial-tab-link">İç Oda Kapıları</a>
        <a href="fiyat-hesapla.html" class="editorial-tab-link highlight">Fiyat Hesapla</a>
        <a href="katalog.html" class="editorial-tab-link highlight">2026 E-Katalog (PDF)</a>
      </div>
    </div>
  </nav>`;

  if (heroRegex.test(content)) {
    content = content.replace(heroRegex, newHeroHtml);
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated ${file} (heroRegex)`);
  } else if (directHeroRegex.test(content)) {
    content = content.replace(directHeroRegex, newHeroHtml);
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated ${file} (directHeroRegex)`);
  } else {
    console.warn(`Could not match hero in ${file}`);
  }
}

console.log(`Successfully updated ${count} of 21 regional pages.`);
