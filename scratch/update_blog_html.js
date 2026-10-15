const fs = require('fs');

const articlesData = JSON.parse(fs.readFileSync('scratch/blog_articles_data.json', 'utf8'));

const slugs = {
  'makale-1': 'blog-membran-lake-akrilik-karsilastirmasi.html',
  'makale-2': 'blog-mutfak-dolabi-metretul-fiyati-nasil-hesaplanir.html',
  'makale-3': 'blog-matplus-leke-tutmaz-kapak-nedir.html',
  'makale-4': 'blog-kucuk-mutfaklar-icin-10-akilli-depolama-fikri.html',
  'makale-5': 'blog-banyo-tadilati-kac-gun-surer.html',
  'makale-6': 'blog-ozel-olcu-gardirop-rehberi.html'
};

const excerpts = {
  'makale-1': 'Yeni bir mutfak yaptırırken verilen en kritik karar kapak modelidir. Membran, Lake ve Akrilik kapakların dayanıklılık, temizlik ve 2026 maliyet karşılaştırması.',
  'makale-2': 'Mutfak dolabı fiyatı alt ve üst dolap metretülü üzerinden nasıl hesaplanır? 2026 malzeme, mekanizma ve montaj dahil net maliyet formülü.',
  'makale-3': 'Elektron ışını ile kürlenen nano partiküllü Matplus yüzeyler neden parmak izi ve yağ lekesi tutmaz? Mutfaklarda devrim yaratan yeni nesil teknoloji.',
  'makale-4': 'Dar ve küçük mutfakları iki kat daha geniş ve kullanışlı hale getiren tavana sıfır dolaplar, kör köşe sepetleri ve gizli kiler sistemleri.',
  'makale-5': 'Kırım dökümden sıhhi tesisata, su yalıtımından seramik ve dolap montajına kadar 10 günde anahtar teslim banyo tadilatının aşama aşama takvimi.',
  'makale-6': 'Yatak odası veya giyinme odasına özel gardırop yaptırırken ray mekanizması, gövde MDF kalitesi ve iç bölme ergonomisi rehberi.'
};

let cardsHtml = '';
for (const art of articlesData) {
  const filename = slugs[art.id];
  cardsHtml += `
        <!-- BLOG KARTI: ${art.id} -->
        <article class="blog-card">
          <div class="blog-card-media">
            <img src="${art.img}" alt="${art.alt}" width="600" height="375" loading="lazy" decoding="async">
            <span class="blog-card-badge">${art.badge}</span>
          </div>
          <div class="blog-card-body">
            <div class="blog-card-meta">
              <span>📅 ${art.meta.split('&middot;')[0].replace('📅', '').trim()}</span>
              <span>&middot;</span>
              <span>⏱️ ${art.meta.split('&middot;')[1] ? art.meta.split('&middot;')[1].replace('⏱️', '').trim() : '5 dk'}</span>
            </div>
            <h2 class="blog-card-title">
              <a href="${filename}" style="color: inherit; text-decoration: none;">${art.title}</a>
            </h2>
            <p class="blog-card-excerpt">
              ${excerpts[art.id]}
            </p>
            <a href="${filename}" class="blog-card-link">
              <span>Yazıyı Oku</span>
              <span>&rarr;</span>
            </a>
          </div>
        </article>`;
}

const newBlogContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog & Mutfak Tasarım Rehberi | Mutfak Dolabınız</title>
  <meta name="description" content="Mutfak dolabı kapak modelleri karşılaştırması, metretül fiyat hesaplama, banyo tadilatı ve akıllı mobilya depolama rehberleri. İmalatçısından uzman tavsiyeleri.">
  <link rel="canonical" href="https://mutfakdolabiniz.com.tr/blog.html">
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>

  <!-- Üst Bilgi Çubuğu (Top Bar) -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-badge">
        <span>📍 Ümraniye Atölyemizden İstanbul Geneline Aracısız İmalat & Ücretsiz Keşif</span>
      </div>
      <div class="top-bar-links">
        <a href="tel:+905336173555" class="top-bar-link">📞 0533 617 35 55</a>
        <a href="https://maps.app.goo.gl/QAGTGZNpzLp7gjTRA" target="_blank" rel="noopener" class="top-bar-link">🗺️ Haritada Gör</a>
        <a href="katalog.html" class="top-bar-link">📖 E-Katalog İncele</a>
        <a href="https://instagram.com/cinarahsapurunleri?cplk=ZTR0YmgyczRkOTB4" target="_blank" rel="noopener" class="top-bar-link" title="Instagram Profilimiz"><span class="top-icon">📸</span> @cinarahsapurunleri</a>
      </div>
    </div>
  </div>

  <!-- Ana Başlık ve Gezinme (Header) -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="site-logo">
        <span class="brand-name">MUTFAK DOLABINIZ</span>
        <span class="brand-tagline">İstanbul Mutfak & Ahşap Atölyesi • Ümraniye</span>
      </a>

      <!-- Masaüstü Navigasyon -->
      <nav class="main-nav" aria-label="Ana Menü">
        <a href="index.html" class="nav-link">Ana Sayfa</a>
        
        <div class="nav-item has-dropdown">
          <a href="mutfak-dolaplari.html" class="nav-link dropdown-toggle">
            Mutfak Dolapları <span class="arrow">▾</span>
          </a>
          <div class="nav-dropdown">
            <a href="membran-mutfak-dolabi.html" class="dropdown-link"><span>Membran Kapak</span> <span class="dropdown-tag">Popüler</span></a>
            <a href="matplus-mutfak-dolabi.html" class="dropdown-link"><span>Matplus Kapak</span> <span class="dropdown-tag">Leke Tutmaz</span></a>
            <a href="akrilik-mutfak-dolabi.html" class="dropdown-link"><span>Akrilik Kapak</span> <span class="dropdown-tag">Ultra Parlak</span></a>
            <a href="lake-mutfak-dolabi.html" class="dropdown-link"><span>Lake Kapak</span> <span class="dropdown-tag">Lüks Boya</span></a>
            <a href="high-gloss-mutfak-dolabi.html" class="dropdown-link"><span>High Gloss Kapak</span> <span class="dropdown-tag">Ekonomik</span></a>
            <a href="mutfak-dolaplari.html" class="dropdown-link" style="border-top: 1px solid #f1f5f9; margin-top: 4px; padding-top: 8px;"><span>Tüm Mutfak Modelleri &rarr;</span></a>
          </div>
        </div>

        <a href="banyo-dolabi.html" class="nav-link">Banyo Dolabı</a>
        <a href="banyo-tadilat-yenileme.html" class="nav-link">Banyo Tadilat</a>
        <a href="gardirop-modelleri.html" class="nav-link">Gardırop</a>

        <div class="nav-item has-dropdown">
          <a href="mobilya-dekorasyon.html" class="nav-link dropdown-toggle">
            Özel Mobilya & Dekorasyon <span class="arrow">▾</span>
          </a>
          <div class="nav-dropdown">
            <a href="giyinme-odasi.html" class="dropdown-link"><span>Giyinme Odası (Walk-in)</span> <span class="dropdown-tag">Lüks</span></a>
            <a href="kapi-modelleri.html" class="dropdown-link"><span>İç Oda Kapıları</span> <span class="dropdown-tag">Lake/PVC</span></a>
            <a href="mobilya-dekorasyon.html" class="dropdown-link"><span>Özel Mobilya & TV Ünitesi</span></a>
            <a href="mutfak-dekorasyonu.html" class="dropdown-link"><span>Mutfak Dekorasyonu & Ada</span></a>
            <a href="yatak-odasi-mobilyasi.html" class="dropdown-link"><span>Yatak Odası Mobilyası</span></a>
          </div>
        </div>

        <a href="hizmet-bolgeleri.html" class="nav-link">Hizmet Bölgeleri</a>
        <a href="blog.html" class="nav-link active">Blog</a>
        <a href="katalog.html" class="nav-link">Katalog</a>
        <a href="iletisim.html" class="nav-link">İletişim</a>
      </nav>

      <div class="header-actions">
        <button class="search-trigger-btn" aria-label="Hızlı Arama Aç">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Ara...</span>
        </button>
        <a href="https://wa.me/905336173555?text=Merhaba,%20Mutfak%20Dolabınız%20İstanbul%20atölyenizden%20ücretsiz%20keşif%20ve%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm desktop-only-btn" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
          <span>WhatsApp Teklif</span>
        </a>
        <button class="mobile-nav-toggle" aria-label="Menüyü Aç">☰</button>
      </div>
    </div>
  </header>

  <div class="drawer-backdrop"></div>
  <aside class="mobile-drawer" aria-label="Mobil Menü">
    <div class="drawer-header">
      <div class="site-logo">
        <span class="brand-name">MUTFAK DOLABINIZ</span>
        <span class="brand-tagline">İstanbul İmalat Atölyesi • Ümraniye</span>
      </div>
      <button class="drawer-close" aria-label="Menüyü Kapat">&times;</button>
    </div>
    <ul class="mobile-menu-list">
      <li class="mobile-menu-item"><a href="index.html">🏠 Ana Sayfa</a></li>
      <li class="mobile-menu-item"><a href="mutfak-dolaplari.html">🍳 Mutfak Dolapları</a></li>
      <li class="mobile-menu-item"><a href="banyo-dolabi.html">🚿 Banyo Dolabı</a></li>
      <li class="mobile-menu-item"><a href="banyo-tadilat-yenileme.html">🔨 Banyo Tadilat & Yenileme</a></li>
      <li class="mobile-menu-item"><a href="gardirop-modelleri.html">🚪 Gardırop & Ray Dolap</a></li>
      <li class="mobile-menu-item"><a href="giyinme-odasi.html">👗 Giyinme Odası</a></li>
      <li class="mobile-menu-item"><a href="kapi-modelleri.html">🚪 İç Oda Kapıları</a></li>
      <li class="mobile-menu-item"><a href="mobilya-dekorasyon.html">🛋️ Mobilya Dekorasyon</a></li>
      <li class="mobile-menu-item"><a href="mutfak-dekorasyonu.html">✨ Mutfak Dekorasyonu</a></li>
      <li class="mobile-menu-item"><a href="yatak-odasi-mobilyasi.html">🛏️ Yatak Odası Mobilyası</a></li>
      <li class="mobile-menu-item"><a href="hizmet-bolgeleri.html">📍 Hizmet Bölgelerimiz</a></li>
      <li class="mobile-menu-item"><a href="blog.html" class="active">📝 Blog & Rehber</a></li>
      <li class="mobile-menu-item"><a href="katalog.html">📖 2026 E-Katalog</a></li>
      <li class="mobile-menu-item"><a href="iletisim.html">🗺️ İletişim & Atölye</a></li>
    </ul>
  </aside>

  <!-- LÜKS MİMARİ HERO (LINEADECOR & LAZZONI ÇİZGİSİ) -->
  <section class="hero-section">
    <div class="hero-bg-overlay"></div>
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-eyebrow">MİMARİ REHBER &middot; ATÖLYE İPUÇLARI VE TAVSİYELER</span>
        <h1 class="hero-title">
          Mutfak & Mobilya <span>Tasarım ve Maliyet Rehberi</span>.
        </h1>
        <p class="hero-description">
          Ümraniye imalat ustalarımız ve iç mimarlarımızın kaleminden; 2026 kapak malzemesi karşılaştırmaları, metretül hesaplama yöntemleri, banyo tadilat süreleri ve küçük alanlar için akıllı depolama çözümleri.
        </p>

        <!-- Prestijli İki Eylem Butonu -->
        <div class="hero-cta-group">
          <a href="#yazilar" class="btn-hero-primary">
            Yazıları İncele
          </a>
          <a href="katalog.html" class="btn-hero-secondary">
            📖 2026 E-Katalog
          </a>
        </div>

        <!-- Kurumsal Güven Barı -->
        <div class="hero-trust-bar">
          <div class="trust-bar-item">
            <strong>6+</strong>
            <span>Detaylı Mimari Rehber</span>
          </div>
          <div class="trust-bar-divider"></div>
          <div class="trust-bar-item">
            <strong>15+ Yıl</strong>
            <span>Atölye Tecrübesi</span>
          </div>
          <div class="trust-bar-divider"></div>
          <div class="trust-bar-item">
            <strong>%100</strong>
            <span>Doğrudan İmalatçı</span>
          </div>
        </div>
      </div>

      <!-- Mimari Vitrin Sahnesi -->
      <div class="hero-visual-frame">
        <img src="assets/images/mutfak/lake-mutfak.webp" alt="Mutfak Dolabı Tasarım ve Mimarlık Rehberi" width="1200" height="675" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>Mutfak & Ahşap Mobilya İmalat İpuçları</p>
          <span>2026 Rehberi</span>
        </div>
      </div>
    </div>
  </section>

  <!-- MİMARİ KOLEKSİYON GEZİNME ŞERİDİ -->
  <nav class="editorial-collection-bar" aria-label="Koleksiyonlar">
    <div class="container">
      <div class="editorial-collection-inner">
        <a href="mutfak-dolaplari.html" class="editorial-tab-link">Tüm Modeller</a>
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
  </nav>

  <!-- BLOG KARTLARI LİSTESİ -->
  <section class="section-padding" style="background-color: var(--color-bg-light);" id="yazilar">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Uzman İç Mimari Yazıları</span>
        <h2 class="section-title">En Son <span>Rehber ve Makaleler</span></h2>
        <p class="section-desc">Mutfak ve mobilya yaptırmadan önce bilmeniz gereken tüm teknik ve maliyet ayrıntıları.</p>
      </div>

      <div class="blog-cards-grid">
        ${cardsHtml}
      </div>

      <!-- Danışma Kartı -->
      <div style="margin-top: 50px; background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 36px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-primary); margin-bottom: 6px;">Projeniz İçin Aklınıza Takılan Sorular mı Var?</h3>
          <p style="color: var(--color-text-muted); max-width: 600px; margin: 0;">İç mimarımız ve imalat ustalarımız mekanınıza en uygun çözümü ve net atölye fiyatını sunmaktan mutluluk duyar.</p>
        </div>
        <div>
          <a href="iletisim.html" class="btn btn-primary" style="font-weight: 700; padding: 14px 28px;">
            <span>İletişim & Atölye Bilgileri &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ALT BİLGİ (FOOTER) -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="site-logo" style="margin-bottom: 16px;">
          <span class="brand-name" style="color: #ffffff;">MUTFAK DOLABINIZ</span>
          <span class="brand-tagline">İstanbul Mutfak & Ahşap İmalat Atölyesi</span>
        </div>
        <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
          İstanbul Ümraniye imalat tesisimizde membran kapak, lake boya, akrilik ve matplus teknolojisiyle özel ölçü mutfak, banyo ve mobilya üretiyoruz. Aracısız atölye fiyatları ve sözleşmeli teslim garantisi.
        </p>
        <p style="font-size: 0.85rem; color: var(--color-accent);">★ 15 Yıllık Atölye Tecrübesi &middot; 5 Yıl Garanti</p>
      </div>

      <div>
        <h4 class="footer-col-title">Mutfak Kapak Türleri</h4>
        <div class="footer-links">
          <a href="membran-mutfak-dolabi.html">Membran Kapak Mutfak</a>
          <a href="matplus-mutfak-dolabi.html">Matplus Leke Tutmaz Mutfak</a>
          <a href="akrilik-mutfak-dolabi.html">Akrilik Parlak Mutfak</a>
          <a href="lake-mutfak-dolabi.html">Lake Özel Boya Mutfak</a>
          <a href="high-gloss-mutfak-dolabi.html">High Gloss Kapak Mutfak</a>
          <a href="mutfak-dolaplari.html">Tüm Mutfak Modelleri</a>
        </div>
      </div>

      <div>
        <h4 class="footer-col-title">Mobilya & Dekorasyon</h4>
        <div class="footer-links">
          <a href="banyo-dolabi.html">Özel Banyo Dolapları</a>
          <a href="banyo-tadilat-yenileme.html">Banyo Tadilat & Yenileme</a>
          <a href="gardirop-modelleri.html">Gardırop & Ray Dolap</a>
          <a href="giyinme-odasi.html">Giyinme Odası (Walk-in)</a>
          <a href="kapi-modelleri.html">İç Oda Kapıları (Lake/PVC)</a>
          <a href="mobilya-dekorasyon.html">TV Ünitesi & Mobilya</a>
          <a href="mutfak-dekorasyonu.html">Mutfak Dekorasyonu & Ada</a>
          <a href="yatak-odasi-mobilyasi.html">Yatak Odası Mobilyası</a>
        </div>
      </div>

      <div>
        <h4 class="footer-col-title">İletişim & Atölye</h4>
        <div class="footer-contact-info">
          <p><strong>İmalat & Atölye:</strong><br>Adem Yavuz Mah. Alemdağ Cad. No:12/A, Ümraniye / İSTANBUL</p>
          <p><strong>Telefon:</strong> 0533 617 35 55</p>
          <p><strong>WhatsApp:</strong> 0533 617 35 55</p>
          <p><strong>Çalışma Saatleri:</strong><br>Pazartesi - Cumartesi: 08:30 - 19:30<br>Pazar: Keşif Randevuları</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2026 Mutfak Dolabınız. Tüm hakları saklıdır. İstanbul Mutfak & Ahşap İmalat Atölyesi.</p>
        <div class="footer-bottom-links">
          <a href="hizmet-bolgeleri.html">Hizmet Bölgelerimiz</a>
          <a href="katalog.html">E-Katalog</a>
          <a href="blog.html">Blog & Rehber</a>
          <a href="fiyat-hesapla.html">Fiyat Hesapla</a>
          <a href="iletisim.html">İletişim</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Mobil Sabit Alt Bar -->
  <div class="mobile-bottom-bar" aria-label="Hızlı İşlemler">
    <a href="tel:+905336173555" class="mobile-bottom-btn btn-call" aria-label="Telefonla Ara">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>Ara</span>
    </a>
    <a href="https://wa.me/905336173555?text=Merhaba,%20Mutfak%20Dolabınız%20İstanbul%20atölyenizden%20bilgi%20almak%20istiyorum." target="_blank" class="mobile-bottom-btn btn-wa" aria-label="WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="fiyat-hesapla.html" class="mobile-bottom-btn btn-quote" aria-label="Fiyat Hesapla">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <span>Hesapla</span>
    </a>
  </div>

  <aside class="floating-actions" aria-label="Hızlı İletişim">
    <a href="https://wa.me/905336173555?text=Merhaba,%20bilgi%20almak%20istiyorum." target="_blank" class="float-btn float-whatsapp" aria-label="WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.217 8.217 0 01-5.83 2.42c-1.47 0-2.91-.4-4.17-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.188 8.188 0 01-1.25-4.4c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
    </a>
  </aside>

  <script src="assets/js/main.js" defer></script>
  <script src="assets/js/search.js" defer></script>
</body>
</html>`;

fs.writeFileSync('blog.html', newBlogContent, 'utf8');
console.log('Successfully updated blog.html with cards layout and cover image.');
