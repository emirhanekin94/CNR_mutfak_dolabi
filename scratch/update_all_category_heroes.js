const fs = require('fs');

const pageConfigs = {
  'banyo-dolabi.html': {
    eyebrow: 'ÖZEL İMALAT BANYO DOLAPLARI &middot; SUYA DAYANIKLI TASARIM',
    title: 'Özel Tasarım <span>Banyo Dolapları</span> & Mobilyaları.',
    desc: 'Buhara ve doğrudan suya maruz kalan banyo ortamlarına özel; şişme ve kabarma yapmayan 18 mm neme dayanıklı MDF-Lam ve çok katmanlı poliüretan lake kaplama banyo mobilyaları üretiyoruz.',
    ctaPrimaryText: '2026 Banyo Modellerini İncele',
    ctaPrimaryHref: '#modeller',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20banyo%20dolabi%20icin%20ucretsiz%20kesif%20ve%20fiyat%20almak%20istiyorum.',
    stat1: '15+ Yıl', stat1Sub: 'Atölye Tecrübesi',
    stat2: '%100', stat2Sub: 'Su & Nem Dayanımı',
    stat3: '5 Yıl', stat3Sub: 'İmalatçı Garantisi',
    img: 'assets/images/en_yeni_resim/banyo-dolabi.webp',
    imgAlt: 'Özel İmalat Banyo Dolabı ve LED Ayna Tasarımı',
    caption: 'Doğal Ahşap Dokulu Asma Banyo Dolabı & LED Ayna'
  },
  'banyo-tadilat-yenileme.html': {
    eyebrow: 'ANAHTAR TESLİM BANYO YENİLEME &middot; 10 GÜNDE TESLİM',
    title: 'Anahtar Teslim <span>Banyo Tadilatı & Yenileme</span>.',
    desc: 'Eski banyonuzu 10 günde baştan yaratıyoruz. Kırım dökümden sıhhi tesisat yenilemeye, çift kat su izolasyonundan porselen seramik döşemeye ve lake dolap montajına kadar tek elden, sözleşmeli ve garantili süreç.',
    ctaPrimaryText: '10 Günde Tadilat Süreci',
    ctaPrimaryHref: '#surec',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20banyo%20tadilati%20icin%20ucretsiz%20kesif%20ve%20maliyet%20hesabi%20istiyorum.',
    stat1: '10 Günde', stat1Sub: 'Anahtar Teslim',
    stat2: 'Yazılı', stat2Sub: 'Sabit Fiyat Sözleşmesi',
    stat3: '5 Yıl', stat3Sub: 'Tam Garanti',
    img: 'assets/images/en_yeni_resim/asma-banyo-dolabi.webp',
    imgAlt: 'Anahtar Teslim Banyo Tadilatı ve Yenileme',
    caption: 'Komple Banyo Yenileme & Asma Dolap Uygulaması'
  },
  'gardirop-modelleri.html': {
    eyebrow: 'ÖZEL ÖLÇÜ GARDIROP & RAY DOLAP &middot; TAVANA SIFIR ÜRETİM',
    title: 'Özel Tasarım <span>Gardırop & Ray Dolap</span> Modelleri.',
    desc: 'Odanızın tavanına sıfır, kolon ve kiriş boşluklarını milimetrik değerlendiren, çift yönlü frenli mekanizmalı sürgülü ray dolaplar, füme cam kapaklı gardıroplar ve akıllı giyinme odaları imal ediyoruz.',
    ctaPrimaryText: '2026 Dolap Modellerini Gör',
    ctaPrimaryHref: '#modeller',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20gardirop%20icin%20ucretsiz%20kesif%20ve%20fiyat%20almak%20istiyorum.',
    stat1: '15+ Yıl', stat1Sub: 'Atölye Tecrübesi',
    stat2: 'Tavana Sıfır', stat2Sub: 'Milimetrik İmalat',
    stat3: '5 Yıl', stat3Sub: 'Ray & Kapak Garantisi',
    img: 'assets/images/en_yeni_resim/gardirop-yatak-odasi.webp',
    imgAlt: 'Özel İmalat Tavana Sıfır Gardırop ve Ray Dolap',
    caption: 'Tavana Sıfır Sürgülü Ray Dolap İmalatı'
  },
  'giyinme-odasi.html': {
    eyebrow: 'LÜKS GİYİNME ODASI SİSTEMLERİ &middot; MEKANA ÖZEL MİMARİ',
    title: 'Özel Tasarım <span>Giyinme Odası (Walk-in)</span> Modelleri.',
    desc: 'Her kıyafet, ayakkabı ve aksesuar için akıllıca bölümlendirilmiş, dikey lineer LED aydınlatmalı ve İtalyan mekanizmalı lüks giyinme odaları. Füme reflekte cam veya ipek mat lake kapak seçenekleriyle.',
    ctaPrimaryText: 'Giyinme Odası Sistemleri',
    ctaPrimaryHref: '#modeller',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20giyinme%20odasi%20icin%20ucretsiz%203D%20cizim%20ve%20fiyat%20almak%20istiyorum.',
    stat1: 'Gizli LED', stat1Sub: 'Lineer Aydınlatma',
    stat2: 'Füme Cam', stat2Sub: 'Reflekte Kapaklar',
    stat3: '5 Yıl', stat3Sub: 'İmalatçı Garantisi',
    img: 'assets/images/resim/giyinme_odasi.webp',
    imgAlt: 'Lüks Giyinme Odası ve Merkez Ada Takı Ünitesi',
    caption: 'Füme Cam Kapaklı & Merkez Ada Üniteli Giyinme Odası'
  },
  'kapi-modelleri.html': {
    eyebrow: 'ÖZEL İMALAT İÇ ODA KAPILARI &middot; LAKE & MEMBRAN',
    title: 'Özel İmalat <span>İç Oda Kapısı Modelleri</span> & Fiyatları.',
    desc: 'Masif seren destekli, sarkma yapmayan, EPDM fitilli ses yalıtımlı ve manyetik sessiz kilitli oda kapıları. İpek mat fırın lake, dayanıklı membran PVC ve camlı salon kapısı seçenekleriyle.',
    ctaPrimaryText: 'Kapı Modellerini İncele',
    ctaPrimaryHref: '#modeller',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20ic%20oda%20kapilari%20icin%20adet%20ve%20model%20bilgisiyle%20fiyat%20almak%20istiyorum.',
    stat1: 'Manyetik', stat1Sub: 'Sessiz Kilit Sistemi',
    stat2: 'Masif Seren', stat2Sub: 'Sarkmayan İskelet',
    stat3: '5 Yıl', stat3Sub: 'Tam Kapı Garantisi',
    img: 'assets/images/kapi/lake-oda-kapi.jpg',
    imgAlt: 'Özel İmalat Lake ve Membran İç Oda Kapıları',
    caption: 'Neoklasik Çıtalı İpek Mat Lake Oda Kapısı'
  },
  'mobilya-dekorasyon.html': {
    eyebrow: 'ÖZEL MOBİLYA VE İÇ DEKORASYON &middot; ATÖLYE İMALATI',
    title: 'Özel Tasarım <span>Mobilya & Dekorasyon</span> Çözümleri.',
    desc: 'Salon TV üniteleri, antre vestiyer ve portmantolar, dekoratif ahşap lambriler ve çalışma odası kitaplıkları. Evinizin mimari çizgilerine ve santimetresine tam oturan özel ahşap çözümleri.',
    ctaPrimaryText: 'Dekorasyon Projeleri',
    ctaPrimaryHref: '#projeler',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20ozel%20mobilya%20ve%20tv%20unitesi%20icin%20fiyat%20almak%20istiyorum.',
    stat1: '15+ Yıl', stat1Sub: 'Atölye Tecrübesi',
    stat2: 'Milimetrik', stat2Sub: 'Özel Ölçü Üretim',
    stat3: '5 Yıl', stat3Sub: 'İmalatçı Garantisi',
    img: 'assets/images/resim/fortmanto.webp',
    imgAlt: 'Özel İmalat TV Ünitesi ve Portmanto',
    caption: 'Özel İmalat Giriş Vestiyer & TV Ünitesi'
  },
  'mutfak-dekorasyonu.html': {
    eyebrow: 'KOMPLE MUTFAK DEKORASYONU & TADİLAT &middot; TEK ELDEN SÜREÇ',
    title: 'Komple <span>Mutfak Dekorasyonu</span> & Ada Tasarımları.',
    desc: 'Mutfak dolabından porselen ve kuvars tezgaha, tezgah arası seramikten tavan aydınlatma ve tesisat yenilemeye kadar komple anahtar teslim mutfak dekorasyonu.',
    ctaPrimaryText: 'Hizmetleri İncele',
    ctaPrimaryHref: '#hizmetler',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20komple%20mutfak%20dekorasyonu%20ve%20tadilati%20icin%20kesif%20istiyorum.',
    stat1: 'Anahtar Teslim', stat1Sub: 'Tek Elden Hizmet',
    stat2: '3D Proje', stat2Sub: 'Fotogerçekçi Çizim',
    stat3: '5 Yıl', stat3Sub: 'İmalat Garantisi',
    img: 'assets/images/en_yeni_resim/mutfak-dekorasyonu.webp',
    imgAlt: 'Komple Mutfak Dekorasyonu ve Ada Tezgah',
    caption: 'Ada Mutfak & Porselen Tezgah Komple Dekorasyon'
  },
  'mutfak-dolaplari.html': {
    eyebrow: '2026 MUTFAK DOLABI KOLEKSİYONU &middot; 5 KAPAK TEKNOLOJİSİ',
    title: 'İstanbul <span>Mutfak Dolabı</span> Modelleri & 2026 Fiyatları.',
    desc: 'Membran, lake, matplus, akrilik ve high gloss teknolojisiyle doğrudan Dudullu atölyemizden aracısız imalat. 18 mm Kastamonu/Egger E1 MDF gövde ve Avusturya Blum mekanizmalar standart.',
    ctaPrimaryText: '2026 Modellerini Keşfet',
    ctaPrimaryHref: '#modeller',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20mutfak%20dolabi%20modelleri%20icin%20ucretsiz%20kesif%20ve%20fiyat%20almak%20istiyorum.',
    stat1: '15+ Yıl', stat1Sub: 'Atölye Tecrübesi',
    stat2: '1.800+', stat2Sub: 'Teslim Edilen Mutfak',
    stat3: '5 Yıl', stat3Sub: 'Tam Garanti',
    img: 'assets/images/en_yeni_resim/mutfak-dolaplari.webp',
    imgAlt: 'İstanbul Özel İmalat Mutfak Dolapları',
    caption: '2026 Özel İmalat Mutfak Dolabı Koleksiyonu'
  },
  'yatak-odasi-mobilyasi.html': {
    eyebrow: 'ÖZEL YATAK ODASI MOBİLYASI &middot; MEKANA ENTEGRE MİMARİ',
    title: 'Özel Tasarım <span>Yatak Odası Mobilyası</span> & Karyolalar.',
    desc: 'Mekana entegre lüks yatak başlıkları, LED aydınlatmalı komodinler, şifonyerler ve makyaj masası üniteleri. İpek mat lake ve sıcak ahşap dokuları tek çatı altında.',
    ctaPrimaryText: 'Modelleri İncele',
    ctaPrimaryHref: '#modeller',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20yatak%20odasi%20mobilyasi%20icin%20fiyat%20ve%20olcu%20bilgisi%20almak%20istiyorum.',
    stat1: 'Mekana Özel', stat1Sub: 'Entegre Çözümler',
    stat2: 'Gizli LED', stat2Sub: 'Gece Aydınlatması',
    stat3: '5 Yıl', stat3Sub: 'İmalat Garantisi',
    img: 'assets/images/resim/yatak_odasi_dolabi-1.webp',
    imgAlt: 'Özel Tasarım Yatak Odası Mobilyası',
    caption: 'Mekana Entegre Karyola, Başlık & Komodin İmalatı'
  },
  'katalog.html': {
    eyebrow: '2026 DİJİTAL TASARIM KATALOĞU &middot; MUTFAK, BANYO & MOBİLYA',
    title: '2026 Mutfak & Mobilya <span>Tasarım Kataloğu</span>.',
    desc: 'Ümraniye ahşap atölyemizde imal edilen en yeni membran, lake, matplus ve akrilik mutfak serileri, suya dayanıklı banyo mobilyaları, füme camlı gardıroplar ve 2026 renk kartelası tek çatı altında.',
    ctaPrimaryText: '📥 2026 Kataloğu İndir (PDF)',
    ctaPrimaryHref: 'assets/mutfak-dolabiniz-kapak-katalogu.pdf',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%202026%20kapak%20katalogunuzu%20inceledim,%20fiyat%20almak%20istiyorum.',
    stat1: '80+ Renk', stat1Sub: '& Kapak Kartelası',
    stat2: '5 Farklı', stat2Sub: 'Kapak Teknolojisi',
    stat3: 'Doğrudan', stat3Sub: 'Atölye Fiyatı',
    img: 'assets/images/mutfak/lake-mutfak-real.webp',
    imgAlt: '2026 Mutfak Dolabı ve Kapak Kataloğu',
    caption: '2026 Mutfak ve Kapak Koleksiyonu E-Katalog'
  },
  'hizmet-bolgeleri.html': {
    eyebrow: 'İSTANBUL GENELİ İMALAT & HİZMET AĞI &middot; 21 İLÇE',
    title: 'İstanbul Geneli <span>Mutfak Dolabı İmalatı</span> Bölgelerimiz.',
    desc: 'Ümraniye Dudullu atölyemizden İstanbul’un 21 ilçesine aracısız doğrudan imalat satış, yerinde lazerli ölçü alımı, 3D projelendirme ve kendi ekibimizle anahtar teslim montaj.',
    ctaPrimaryText: 'İlçeleri İncele',
    ctaPrimaryHref: '#ilceler',
    ctaSecondaryText: 'Ücretsiz Keşif & 3D Proje',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20bulundugum%20ilce%20icin%20ucretsiz%20kesif%20randevusu%20almak%20istiyorum.',
    stat1: '21 İlçe', stat1Sub: 'Hizmet Ağı',
    stat2: 'Aynı Gün', stat2Sub: 'Keşif Planlama',
    stat3: '5 Yıl', stat3Sub: 'Tam Garanti',
    img: 'assets/images/hero/hero-kitchen-luxury.webp',
    imgAlt: 'İstanbul Mutfak Dolabı Hizmet Bölgeleri',
    caption: 'İstanbul Geneli Ücretsiz Yerinde Lazer Ölçüm'
  },
  'iletisim.html': {
    eyebrow: 'ÜMRANİYE İMALAT ATÖLYESİ & SHOWROOM &middot; DOĞRUDAN FABRİKA SATIŞI',
    title: 'Bize Ulaşın & <span>Atölyemizi Ziyaret Edin</span>.',
    desc: 'Ümraniye Dudullu imalat tesisimize gelerek CNC kesim parkurumuzu, lake boya fırınımızı ve gerçek kapak numunelerimizi canlı görebilir; projenizi iç mimarımızla birebir çizebilirsiniz.',
    ctaPrimaryText: '🗺️ Haritada Gör & Yol Tarifi',
    ctaPrimaryHref: 'https://maps.app.goo.gl/QAGTGZNpzLp7gjTRA',
    ctaSecondaryText: 'WhatsApp ile Danış',
    ctaSecondaryHref: 'https://wa.me/905336173755?text=Merhaba,%20atolyenizi%20ziyaret%20etmek%20ve%20kesif%20randevusu%20almak%20istiyorum.',
    stat1: 'Canlı Atölye', stat1Sub: 'Ziyareti & Numune',
    stat2: '15+ Yıl', stat2Sub: 'Atölye Tecrübesi',
    stat3: 'Doğrudan', stat3Sub: 'İmalatçı Fiyatı',
    img: 'assets/images/hero/hero-kitchen-luxury.webp',
    imgAlt: 'Ümraniye Dudullu Mutfak İmalat Atölyesi',
    caption: 'Ümraniye Dudullu İmalat Atölyemiz & Showroom'
  }
};

let count = 0;

for (const [file, cfg] of Object.entries(pageConfigs)) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Build the new hero HTML
  const newHeroHtml = `  <!-- LÜKS MİMARİ HERO (LINEADECOR & LAZZONI ÇİZGİSİ) -->
  <section class="hero-section">
    <div class="hero-bg-overlay"></div>
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-eyebrow">${cfg.eyebrow}</span>
        <h1 class="hero-title">
          ${cfg.title}
        </h1>
        <p class="hero-description">
          ${cfg.desc}
        </p>

        <!-- Prestijli İki Eylem Butonu -->
        <div class="hero-cta-group">
          <a href="${cfg.ctaPrimaryHref}" class="btn-hero-primary">
            ${cfg.ctaPrimaryText}
          </a>
          <a href="${cfg.ctaSecondaryHref}" target="_blank" class="btn-hero-secondary" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color: #25d366;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            ${cfg.ctaSecondaryText}
          </a>
        </div>

        <!-- Kurumsal Güven Barı -->
        <div class="hero-trust-bar">
          <div class="trust-bar-item">
            <strong>${cfg.stat1}</strong>
            <span>${cfg.stat1Sub}</span>
          </div>
          <div class="trust-bar-divider"></div>
          <div class="trust-bar-item">
            <strong>${cfg.stat2}</strong>
            <span>${cfg.stat2Sub}</span>
          </div>
          <div class="trust-bar-divider"></div>
          <div class="trust-bar-item">
            <strong>${cfg.stat3}</strong>
            <span>${cfg.stat3Sub}</span>
          </div>
        </div>
      </div>

      <!-- Mimari Vitrin Sahnesi (Architectural Showcase) -->
      <div class="hero-visual-frame">
        <img src="${cfg.img}" alt="${cfg.imgAlt}" width="1200" height="675" fetchpriority="high" decoding="async">
        <div class="hero-visual-caption">
          <p>${cfg.caption}</p>
          <span>2026 Koleksiyonu</span>
        </div>
      </div>
    </div>
  </section>

  <!-- MİMARİ KOLEKSİYON GEZİNME ŞERİDİ (LINEADECOR STYLE EDITORIAL BAR) -->
  <nav class="editorial-collection-bar" aria-label="Koleksiyonlar">
    <div class="container">
      <div class="editorial-collection-inner">
        <a href="mutfak-dolaplari.html" class="editorial-tab-link">Tüm Modeller</a>
        <a href="lake-mutfak-dolabi.html" class="editorial-tab-link">Lake Mutfak</a>
        <a href="membran-mutfak-dolabi.html" class="editorial-tab-link">Membran Mutfak</a>
        <a href="akrilik-mutfak-dolabi.html" class="editorial-tab-link">Akrilik Mutfak</a>
        <a href="matplus-mutfak-dolabi.html" class="editorial-tab-link">Matplus Nano Mutfak</a>
        <a href="banyo-dolabi.html" class="editorial-tab-link ${file === 'banyo-dolabi.html' ? 'active' : ''}">Banyo Dolapları</a>
        <a href="banyo-tadilat-yenileme.html" class="editorial-tab-link ${file === 'banyo-tadilat-yenileme.html' ? 'active' : ''}">Banyo Tadilat</a>
        <a href="gardirop-modelleri.html" class="editorial-tab-link ${file === 'gardirop-modelleri.html' ? 'active' : ''}">Gardırop & Ray Dolap</a>
        <a href="giyinme-odasi.html" class="editorial-tab-link ${file === 'giyinme-odasi.html' ? 'active' : ''}">Giyinme Odası</a>
        <a href="kapi-modelleri.html" class="editorial-tab-link ${file === 'kapi-modelleri.html' ? 'active' : ''}">İç Oda Kapıları</a>
        <a href="fiyat-hesapla.html" class="editorial-tab-link highlight">Fiyat Hesapla</a>
        <a href="katalog.html" class="editorial-tab-link highlight ${file === 'katalog.html' ? 'active' : ''}">2026 E-Katalog (PDF)</a>
      </div>
    </div>
  </nav>`;

  // Find the hero section in file (either <section class="hero-section"> or the first <section style="background...>)
  let drawerEnd = content.indexOf('</aside>');
  let startPos = drawerEnd !== -1 ? drawerEnd + 8 : content.indexOf('</header>');

  const slice = content.slice(startPos);
  const sectionMatch = slice.match(/<!-- (?:Hero Bölümü|LÜKS MİMARİ HERO)[^>]*-->[\s\S]*?<section[\s\S]*?<\/section>/) || slice.match(/<section[\s\S]*?<\/section>/);

  if (sectionMatch) {
    const fullMatch = sectionMatch[0];
    content = content.replace(fullMatch, newHeroHtml);
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated hero in ${file}`);
  } else {
    console.warn(`Could not find hero in ${file}`);
  }
}

console.log(`Successfully updated ${count} of ${Object.keys(pageConfigs).length} pages with luxury photo covers.`);
