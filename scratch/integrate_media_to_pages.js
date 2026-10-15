const fs = require('fs');

console.log('--- Sayfalara Gerçek Kullanıcı Görselleri ve Videoları Entegre Ediliyor ---');

// 1. giyinme-odasi.html
{
  let file = 'giyinme-odasi.html';
  let c = fs.readFileSync(file, 'utf8');

  // Video Vitrini Bölümü
  const videoSection = `
  <!-- ATÖLYE GERÇEK VİDEO VE İMALAT VİTRİNİ -->
  <section class="section-padding" style="background-color: #ffffff; border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Canlı Atölye İmalatı</span>
        <h2 class="section-title">Giyinme Odası <span>Üretim & Montaj Videomuz</span></h2>
        <p class="section-desc">Ümraniye atölyemizde CNC ebatlama, alüminyum cam çerçeve montajı ve yerinde kurulum anları.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;" class="grid-2-col">
        <div class="video-showcase-box">
          <div class="video-overlay-badge">
            <span class="video-badge-dot"></span>
            <span>ATÖLYE İMALAT VİDEOSU</span>
          </div>
          <video controls preload="metadata" poster="assets/videos/giyinme_odasi_video-poster.webp" playsinline>
            <source src="assets/videos/giyinme_odasi_video.webm" type="video/webm">
            <source src="assets/images/video/giyinme_odasi_video.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>

        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 14px;">
            Özel Ölçü Walk-in Closet ve Ada Ünitesi
          </h3>
          <p style="color: var(--color-text-muted); font-size: 1.02rem; line-height: 1.8; margin-bottom: 18px;">
            Videoda atölyemizde üretilen füme temperli reflekte cam kapaklar, dikey lineer LED aydınlatmalı alüminyum profiller ve merkez ada takı ünitesinin gerçek montaj detaylarını izleyebilirsiniz.
          </p>
          <ul style="color: var(--color-text-main); font-size: 0.95rem; line-height: 2; margin-bottom: 22px;">
            <li>✓ 18 mm E1 neme dayanıklı MDF-Lam gövde</li>
            <li>✓ İtalyan gizli menteşeli füme cam kapak sistemi</li>
            <li>✓ Kadife bölmeli takı, saat ve gözlük çekmeceleri</li>
            <li>✓ Ümraniye fabrikamızdan doğrudan aracısız teslimat</li>
          </ul>
          <a href="https://wa.me/905336173555?text=Giyinme%20odasi%20icin%20olcu%20gondermek%20istiyorum." target="_blank" class="btn btn-whatsapp">
            Ölçü Gönder & Fiyat Al &rarr;
          </a>
        </div>
      </div>

      <!-- Gerçek İmalat Fotoğrafları Galerisi -->
      <div style="margin-top: 50px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 20px;">
          📸 Atölyemizden Gerçek Giyinme Odası Uygulamaları
        </h3>
        <div class="user-gallery-grid">
          <div class="user-gallery-item">
            <img src="assets/images/resim/giyinme_odasi.webp" alt="Özel İmalat Giyinme Odası Ada Ünitesi" loading="lazy">
            <div class="info">
              <h5>Merkez Ada Takı Ünitesi & Cam Tablalı Tasarım</h5>
              <p>Özel ölçü kadife bölmeli çekmeceler ve entegre LED aydınlatma.</p>
            </div>
          </div>
          <div class="user-gallery-item">
            <img src="assets/images/resim/giyinme_odasi-1.webp" alt="Lüks Walk-in Closet Dolap Düzeni" loading="lazy">
            <div class="info">
              <h5>Modüler Açık Raf & Asansörlü Askılık</h5>
              <p>Tavana sıfır dikey alüminyum profil ve gizli lineer ışık kurgusu.</p>
            </div>
          </div>
          <div class="user-gallery-item">
            <img src="assets/images/resim/giyinme_odasi-2.webp" alt="Füme Reflekte Camlı Giyinme Dolabı" loading="lazy">
            <div class="info">
              <h5>Reflekte Füme Cam & Alüminyum Çerçeve</h5>
              <p>Toz almayan manyetik fitilli sessiz kapak sistemi.</p>
            </div>
          </div>
          <div class="user-gallery-item">
            <img src="assets/images/resim/giyinme_odasi-3.webp" alt="Özel İmalat Giyinme Dolabı İçi" loading="lazy">
            <div class="info">
              <h5>Fonksiyonel Çekmece & Pantolonluk Sistemi</h5>
              <p>Blum frenli tandem raylar ve teleskopik aksesuar düzenleyiciler.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>`;

  // Replace old categories grid with updated image paths if needed
  c = c.replace('assets/images/gardirop/giyinme-odasi.jpg', 'assets/images/resim/giyinme_odasi.webp');
  c = c.replace('assets/images/gardirop/surgulu-dolap.jpg', 'assets/images/resim/giyinme_odasi-1.webp');
  c = c.replace('assets/images/gardirop/gardirop.jpg', 'assets/images/resim/giyinme_odasi-2.webp');

  // Insert video section right before SEO section
  const targetTag = '<!-- Özel İmalat Giyinme Odası Sistemleri, Ada Modülleri ve 2026 Fiyatları';
  if (c.includes(targetTag) && !c.includes('giyinme_odasi_video.webm')) {
    c = c.replace(targetTag, videoSection + '\n\n  ' + targetTag);
    fs.writeFileSync(file, c, 'utf8');
    console.log('✓ giyinme-odasi.html güncellendi (Video + 4 Gerçek Fotoğraf)');
  }
}

// 2. gardirop-modelleri.html
{
  let file = 'gardirop-modelleri.html';
  let c = fs.readFileSync(file, 'utf8');

  const videoSection = `
  <!-- ATÖLYE GERÇEK VİDEO VE İMALAT VİTRİNİ -->
  <section class="section-padding" style="background-color: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Canlı Atölye İmalatı</span>
        <h2 class="section-title">Gardırop & Ray Dolap <span>Üretim Videomuz</span></h2>
        <p class="section-desc">Ümraniye Dudullu atölyemizde CNC ebatlama, çift frenli ray montajı ve atölye teslimi.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;" class="grid-2-col">
        <div class="video-showcase-box">
          <div class="video-overlay-badge">
            <span class="video-badge-dot"></span>
            <span>ATÖLYE İMALAT VİDEOSU</span>
          </div>
          <video controls preload="metadata" poster="assets/videos/gardolap_video-poster.webp" playsinline>
            <source src="assets/videos/gardolap_video.webm" type="video/webm">
            <source src="assets/images/video/gardolap_video.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>

        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 14px;">
            Özel Ölçü Ray Dolap & Yatak Odası Gardırobu
          </h3>
          <p style="color: var(--color-text-muted); font-size: 1.02rem; line-height: 1.8; margin-bottom: 18px;">
            Videoda odanın ölçüsüne özel olarak ürettiğimiz gardırobun ray mekanizması, yumuşak frenli kapanışı ve gövde işçiliğini canlı izleyebilirsiniz.
          </p>
          <ul style="color: var(--color-text-main); font-size: 0.95rem; line-height: 2; margin-bottom: 22px;">
            <li>✓ Tavana sıfır montaj, sıfır toz toplayan boşluk</li>
            <li>✓ Çift yönlü yavaşlatıcı fren mekanizması (Raydan çıkmaz)</li>
            <li>✓ 18 mm E1 neme dayanıklı MDF gövde ve alüminyum kulp çıtaları</li>
            <li>✓ İstanbul genelinde 1 günde temiz montaj ve 5 yıl garanti</li>
          </ul>
          <a href="https://wa.me/905336173555?text=Gardirop%20icin%20olcu%20gondermek%20istiyorum." target="_blank" class="btn btn-whatsapp">
            Ölçü Gönder & Fiyat Al &rarr;
          </a>
        </div>
      </div>

      <!-- Gerçek Kullanıcı Gardırop Fotoğrafları -->
      <div style="margin-top: 50px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 20px;">
          📸 Atölyemizden Teslim Edilen Gardırop Modelleri
        </h3>
        <div class="user-gallery-grid">
          <div class="user-gallery-item">
            <img src="assets/images/resim/yatak_odasi_dolabi.webp" alt="Özel Ölçü Gardırop Modeli" loading="lazy">
            <div class="info">
              <h5>Tavana Sıfır Özel Ölçü Gardırop</h5>
              <p>18 mm neme dayanıklı MDF gövde ve geniş iç hacim.</p>
            </div>
          </div>
          <div class="user-gallery-item">
            <img src="assets/images/resim/yatak_odasi_dolabi-1.webp" alt="Modern Yatak Odası Dolabı" loading="lazy">
            <div class="info">
              <h5>Modern Çizgili Yatak Odası Gardırobu</h5>
              <p>Frenli menteşeler ve entegre dikey kulp profilleri.</p>
            </div>
          </div>
          <div class="user-gallery-item">
            <img src="assets/images/resim/yatak_odasi_dolabi-2.webp" alt="Geniş Hacimli Ray Dolap" loading="lazy">
            <div class="info">
              <h5>Çift Frenli Sürgülü Ray Dolap</h5>
              <p>Sessiz mekanizma, asansörlü askılık ve pantolonluk rayı.</p>
            </div>
          </div>
          <div class="user-gallery-item">
            <img src="assets/images/resim/yatak_odasi_dolabi-3.webp" alt="Özel İmalat Gardırop Detayı" loading="lazy">
            <div class="info">
              <h5>Fonksiyonel Çekmeceli İç Düzen</h5>
              <p>Blum frenli tandem çekmeceler ve kadife bölmeler.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>`;

  c = c.replace('assets/images/gardirop/surgulu-dolap.jpg', 'assets/images/resim/yatak_odasi_dolabi.webp');
  c = c.replace('assets/images/gardirop/gardirop.jpg', 'assets/images/resim/yatak_odasi_dolabi-1.webp');
  c = c.replace('assets/images/gardirop/giyinme-odasi.jpg', 'assets/images/resim/giyinme_odasi.webp');

  const targetTag = '<!-- Özel İmalat Gardırop Modelleri, Ray Dolap Sistemleri ve 2026 Fiyatları';
  if (c.includes(targetTag) && !c.includes('gardolap_video.webm')) {
    c = c.replace(targetTag, videoSection + '\n\n  ' + targetTag);
    fs.writeFileSync(file, c, 'utf8');
    console.log('✓ gardirop-modelleri.html güncellendi (Video + 4 Gerçek Fotoğraf)');
  }
}

// 3. mobilya-dekorasyon.html (Vestiyer & Portmanto)
{
  let file = 'mobilya-dekorasyon.html';
  let c = fs.readFileSync(file, 'utf8');

  const gallerySection = `
  <!-- GERÇEK ATÖLYE PORTMANTO & VESTİYER VİTRİNİ -->
  <section class="section-padding" style="background-color: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Atölye İmalatımız</span>
        <h2 class="section-title">Gerçek Projelerimizden <span>Vestiyer & Portmanto Modelleri</span></h2>
        <p class="section-desc">Evinizin giriş antresine tam oturan, gizli depolamalı ve boy aynalı özel üretim portmantolar.</p>
      </div>

      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/resim/fortmanto.webp" alt="Özel Ölçü Antre Vestiyer Portmanto" loading="lazy">
          <div class="info">
            <h5>Tavana Sıfır Giriş Portmanto Ünitesi</h5>
            <p>Gizli ayakkabılık rafları, boy aynası ve mont askılıkları.</p>
          </div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/fortmanto-1.webp" alt="Lüks Ahşap Portmanto Modeli" loading="lazy">
          <div class="info">
            <h5>Modern Çizgili Vestiyer Dolabı</h5>
            <p>18 mm neme dayanıklı MDF gövde ve bas-aç kapak sistemi.</p>
          </div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/fortmantı-2.webp" alt="Fonksiyonel Giriş Mobilyası" loading="lazy">
          <div class="info">
            <h5>Puf Oturumlu & Çekmeceli Giriş Ünitesi</h5>
            <p>Alt puf ayakkabılık çekmecesi ve dekoratif ahşap çıtalar.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  c = c.replace('assets/images/dekorasyon/vestiyer.jpg', 'assets/images/resim/fortmanto.webp');
  c = c.replace('assets/images/dekorasyon/tv-unitesi.jpg', 'assets/images/dekorasyon/tv-unitesi-real.webp');

  const targetTag = '<!-- ÖZEL MOBİLYA';
  const altTag = '<!-- Özel Ahşap Mobilya & İç Mimari Dekorasyon İmalatı';
  const target = c.includes(altTag) ? altTag : (c.includes(targetTag) ? targetTag : null);
  if (target && !c.includes('fortmantı-2.webp')) {
    c = c.replace(target, gallerySection + '\n\n  ' + target);
    fs.writeFileSync(file, c, 'utf8');
    console.log('✓ mobilya-dekorasyon.html güncellendi (3 Gerçek Portmanto Fotoğrafı)');
  }
}

// 4. yatak-odasi-mobilyasi.html
{
  let file = 'yatak-odasi-mobilyasi.html';
  let c = fs.readFileSync(file, 'utf8');

  c = c.replace('assets/images/yatak/yatak-paneli.jpg', 'assets/images/resim/yatak_odasi_dolabi-1.webp');
  c = c.replace('assets/images/yatak/komodin.jpg', 'assets/images/resim/yatak_odasi_dolabi-2.webp');
  c = c.replace('assets/images/yatak/makyaj-masasi.jpg', 'assets/images/resim/yatak_odasi_dolabi-3.webp');

  const gallerySection = `
  <!-- GERÇEK ATÖLYE YATAK ODASI MOBİLYALARI -->
  <section class="section-padding" style="background-color: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Atölye Teslimatlarımız</span>
        <h2 class="section-title">Gerçek Projelerimizden <span>Yatak Odası Dolapları</span></h2>
        <p class="section-desc">Ümraniye imalat tesisimizde üretilen ve müşterilerimize monte edilen gerçek yatak odası mobilyaları.</p>
      </div>

      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/resim/yatak_odasi_dolabi.webp" alt="Tavana Sıfır Yatak Odası Dolabı" loading="lazy">
          <div class="info">
            <h5>Özel Ölçü Tavana Sıfır Dolap</h5>
            <p>Kiriş ve kolonlara tam uyum, sıfır toz boşluğu.</p>
          </div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/yatak_odasi_dolabi-1.webp" alt="Lüks Yatak Odası Gardırobu" loading="lazy">
          <div class="info">
            <h5>Modern Çizgili Gardırop Tasarımı</h5>
            <p>Entegre kulp profilleri ve neme dayanıklı MDF gövde.</p>
          </div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/yatak_odasi_dolabi-2.webp" alt="Yatak Odası Ray Dolap Modeli" loading="lazy">
          <div class="info">
            <h5>Çift Frenli Sürgülü Ray Dolap</h5>
            <p>Sessiz mekanizma ve zengin iç donanım aksesuarları.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const altTag = '<!-- Özel İmalat Yatak Odası Mobilyası, Karyola & Şifonyer 2026 Fiyatları';
  if (c.includes(altTag) && !c.includes('Gerçek Projelerimizden')) {
    c = c.replace(altTag, gallerySection + '\n\n  ' + altTag);
    fs.writeFileSync(file, c, 'utf8');
    console.log('✓ yatak-odasi-mobilyasi.html güncellendi (3 Gerçek Yatak Odası Fotoğrafı)');
  }
}

// 5. index.html & mutfak sayfaları (Mutfak Dolabı Gerçek Kullanıcı Görselleri + Atölye İmalat Videosu)
{
  let file = 'index.html';
  let c = fs.readFileSync(file, 'utf8');

  // Replace AI placeholder references in index.html
  c = c.replace(/assets\/images\/mutfak\/membran-mutfak\.jpg/g, 'assets/images/resim/mutfak_dolabi.webp');
  c = c.replace(/assets\/images\/gardirop\/giyinme-odasi\.jpg/g, 'assets/images/resim/giyinme_odasi.webp');
  c = c.replace(/assets\/images\/gardirop\/gardirop\.jpg/g, 'assets/images/resim/yatak_odasi_dolabi.webp');
  c = c.replace(/assets\/images\/dekorasyon\/tv-unitesi\.jpg/g, 'assets/images/dekorasyon/tv-unitesi-real.webp');
  c = c.replace(/assets\/images\/yatak\/yatak-paneli\.jpg/g, 'assets/images/resim/yatak_odasi_dolabi-1.webp');

  // Insert Atölye İmalat Canlı Videosu section into index.html
  const atolyeVideoSection = `
  <!-- ATÖLYE İMALAT CANLI VİDEOSU -->
  <section class="section-padding" style="background-color: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Ümraniye İmalat Tesisimiz</span>
        <h2 class="section-title">Atölyemizden <span>Canlı Üretim & Montaj</span></h2>
        <p class="section-desc">CNC makinelerimiz, fırın boyahanemiz ve uzman marangoz kadromuzla doğrudan üretim gücü.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;" class="grid-2-col">
        <div class="video-showcase-box">
          <div class="video-overlay-badge">
            <span class="video-badge-dot"></span>
            <span>ATÖLYEDEN CANLI GÖRÜNTÜLER</span>
          </div>
          <video controls preload="metadata" poster="assets/videos/imalat_atolye_video-poster.webp" playsinline>
            <source src="assets/videos/imalat_atolye_video.webm" type="video/webm">
            <source src="assets/images/video/imalat_atolye_video.mp4" type="video/mp4">
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>

        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-primary); margin-bottom: 14px;">
            15 Yıllık Tecrübe, Doğrudan Atölye Satışı
          </h3>
          <p style="color: var(--color-text-muted); font-size: 1.02rem; line-height: 1.8; margin-bottom: 18px;">
            Aracı mağaza ve komisyoncu olmadan Ümraniye Yukarı Dudullu tesisimizde üretim yapıyoruz. Videomuzda CNC kesim parkurumuzu, lake boya hazırlıklarımızı ve atölye titizliğimizi izleyebilirsiniz.
          </p>
          <ul style="color: var(--color-text-main); font-size: 0.95rem; line-height: 2; margin-bottom: 22px;">
            <li>✓ 18 mm E1 neme dayanıklı MDF (Kastamonu / Egger)</li>
            <li>✓ Avusturya Blum & Samet frenli ray/menteşe standart</li>
            <li>✓ İstanbul genelinde ücretsiz yerinde lazer ölçüm ve 3D çizim</li>
            <li>✓ Sözleşmeli ve 5 yıl tam imalatçı garantisi</li>
          </ul>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="https://wa.me/905336173555?text=Atolyenizden%20bilgi%20ve%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp">
              WhatsApp'tan Hemen Ulaşın
            </a>
            <a href="tel:+905336173555" class="btn btn-phone">
              0533 617 35 55
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const reviewsTag = '<!-- MÜŞTERİ YORUMLARI & SOSYAL KANIT (REVIEWS) -->';
  if (c.includes(reviewsTag) && !c.includes('imalat_atolye_video.webm')) {
    c = c.replace(reviewsTag, atolyeVideoSection + '\n\n  ' + reviewsTag);
    fs.writeFileSync(file, c, 'utf8');
    console.log('✓ index.html güncellendi (Atölye Videosu + Gerçek Görseller)');
  }
}

// 6. mutfak-dolaplari.html & membran-mutfak-dolabi.html
{
  ['mutfak-dolaplari.html', 'membran-mutfak-dolabi.html'].forEach(f => {
    if (fs.existsSync(f)) {
      let c = fs.readFileSync(f, 'utf8');
      c = c.replace(/assets\/images\/mutfak\/membran-mutfak\.jpg/g, 'assets/images/resim/mutfak_dolabi.webp');
      fs.writeFileSync(f, c, 'utf8');
      console.log('✓ ' + f + ' güncellendi');
    }
  });
}

console.log('--- TÜM ENTEGRASYONLAR EKSİKSİZ TAMAMLANDI ---');
