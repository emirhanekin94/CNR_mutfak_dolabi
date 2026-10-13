const fs = require('fs');
const path = require('path');

console.log('--- Kapsamlı Medya Entegrasyonu Başlatılıyor ---');

// =========================================================================
// 1. banyo-tadilat-yenileme.html
// =========================================================================
if (fs.existsSync('banyo-tadilat-yenileme.html')) {
  let content = fs.readFileSync('banyo-tadilat-yenileme.html', 'utf8');
  if (!content.includes('imalat_atolye_video-3')) {
    const targetTag = '<!-- 2026 Banyo Tadilat Maliyet Paketleri Tablosu -->';
    const mediaSection = `  <!-- ATÖLYE & SAHA UYGULAMA VİDEOSU VE GERÇEK FOTOĞRAFLAR -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Canlı İmalat & Montaj Aşamaları</span>
        <h2 class="section-title">Atölye ve Sahada <span>Banyo Yenileme Sürecimiz</span></h2>
        <p class="section-desc">Eski banyonun kırımından su yalıtımına, özel lake dolap üretiminden montajına kadar tüm süreci kendi profesyonel ekibimizle yönetiyoruz.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 40px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE & MONTAJ VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-3-poster.webp">
          <source src="assets/videos/imalat_atolye_video-3.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video-3.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>

      <!-- Gerçek Uygulama Fotoğrafları -->
      <div class="section-header" style="margin-top: 30px; margin-bottom: 25px;">
        <span class="section-subtitle">Gerçek İşlerimizden Kareler</span>
        <h3 class="section-title" style="font-size: 1.85rem;">Tamamlanan <span>Banyo Tadilat & Dolap Projelerimiz</span></h3>
      </div>
      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/banyo/banyo-tadilat-real.webp" alt="Anahtar Teslim Banyo Yenileme ve Duşakabin Uygulaması" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Komple Banyo Yenileme & Seramik Döşeme</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/banyo/banyo-tadilat-luks.webp" alt="Lüks Çift Lavabolu Özel Lake Banyo Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Lüks Çift Lavabolu Lake Banyo Dolabı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/banyo/camasir-dolabi-real.webp" alt="Özel İmalat Çamaşır ve Kurutma Makinesi Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Gömme Çamaşır & Deterjanlık Kule Dolabı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/banyo/banyo-dolabi-real.webp" alt="Suya Dayanıklı Özel Ölçü Banyo Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Suya Dayanıklı Özel Tasarım Asma Banyo Dolabı</div>
        </div>
      </div>
    </div>
  </section>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    fs.writeFileSync('banyo-tadilat-yenileme.html', content, 'utf8');
    console.log('✓ banyo-tadilat-yenileme.html güncellendi (Video 3 + 4 Gerçek Banyo Fotoğrafı)');
  }
}

// =========================================================================
// 2. banyo-dolabi.html
// =========================================================================
if (fs.existsSync('banyo-dolabi.html')) {
  let content = fs.readFileSync('banyo-dolabi.html', 'utf8');
  if (!content.includes('imalat_atolye_video-2')) {
    const targetTag = '<!-- 2026 Banyo Dolabı Fiyat Tablosu -->';
    const mediaSection = `  <!-- ATÖLYE İMALAT VİDEOSU VE GERÇEK BANYO GALERİSİ -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Kalitemiz</span>
        <h2 class="section-title">Atölyemizde <span>Özel Ölçü Banyo Dolabı İmalatı</span></h2>
        <p class="section-desc">Su buharına ve neme %100 dayanıklı 18 mm MDF-Lam gövdeler ve çok katmanlı poliüretan fırın lake boya ile uzun ömürlü banyo mobilyaları üretiyoruz.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 40px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-2-poster.webp">
          <source src="assets/videos/imalat_atolye_video-2.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video-2.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>

      <!-- Gerçek Banyo Fotoğrafları -->
      <div class="section-header" style="margin-top: 30px; margin-bottom: 25px;">
        <span class="section-subtitle">Özel Ölçü Üretimlerimiz</span>
        <h3 class="section-title" style="font-size: 1.85rem;">Gerçek <span>Banyo Mobilyası Referanslarımız</span></h3>
      </div>
      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/banyo/banyo-dolabi-real.webp" alt="İpek Mat Lake Asma Banyo Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">İpek Mat Lake Asma Banyo Dolabı & LED Ayna</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/banyo/luks-banyo-real.webp" alt="Lüks Çift Lavabolu Özel İmalat Banyo Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Geniş Çift Lavabolu Özel Banyo Mobilyası</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/banyo/camasir-dolabi-real.webp" alt="Kule Çamaşır ve Kurutma Makinesi Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Gizli Çamaşır & Kurutma Makinesi Kulesi</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/banyo/ahsap-banyo-real.webp" alt="Ahşap Dokulu Çanak Lavabolu Banyo Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Doğal Ahşap Dokulu & Çanak Lavabolu Modül</div>
        </div>
      </div>
    </div>
  </section>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    fs.writeFileSync('banyo-dolabi.html', content, 'utf8');
    console.log('✓ banyo-dolabi.html güncellendi (Video 2 + 4 Gerçek Banyo Fotoğrafı)');
  }
}

// =========================================================================
// 3. mutfak-dolaplari.html
// =========================================================================
if (fs.existsSync('mutfak-dolaplari.html')) {
  let content = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
  if (!content.includes('imalat_atolye_video-1')) {
    const targetTag = '<!-- TEKNİK KARŞILAŞTIRMA TABLOSU -->';
    const mediaSection = `  <!-- ATÖLYE İMALAT VİDEOSU VE GERÇEK KULLANICI MUTFAK GALERİSİ -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Gücümüz</span>
        <h2 class="section-title">Atölyemizde <span>Mutfak Dolabı CNC Ebatlama & İmalat</span></h2>
        <p class="section-desc">Milimetrik lazer ölçüleri, CNC hassas kesim makineleri ve usta ellerle mutfaklarınızı sıfır hata ile üretiyoruz.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 40px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-1-poster.webp">
          <source src="assets/videos/imalat_atolye_video-1.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video-1.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>

      <!-- Kullanıcı Gerçek Mutfak Fotoğrafları -->
      <div class="section-header" style="margin-top: 30px; margin-bottom: 25px;">
        <span class="section-subtitle">Atölyemizden Gerçek Projeler</span>
        <h3 class="section-title" style="font-size: 1.85rem;">Müşterilerimize Teslim Ettiğimiz <span>Mutfak Uygulamaları</span></h3>
      </div>
      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Lake ve Ahşap Mutfak Dolabı Montajı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Özel İmalat Ada ve Boy Dolap Mutfak Montajı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyemizde Üretilen Özel Ölçü Mutfak Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Geniş Depolamalı Modern Mutfak Dolabı İmalatı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/mutfak/modern-mutfak-real.webp" alt="Modern Akrilik Parlak Mutfak Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Modern Kulpsuz Akrilik Mutfak Tasarımı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/mutfak/lake-mutfak-real.webp" alt="İpek Mat Lake Boyalı Mutfak Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">İpek Mat Özel Fırın Lake Mutfak Dolabı</div>
        </div>
      </div>
    </div>
  </section>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    fs.writeFileSync('mutfak-dolaplari.html', content, 'utf8');
    console.log('✓ mutfak-dolaplari.html güncellendi (Video 1 + 4 Gerçek Mutfak Fotoğrafı)');
  }
}

// =========================================================================
// 4. katalog.html
// =========================================================================
if (fs.existsSync('katalog.html')) {
  let content = fs.readFileSync('katalog.html', 'utf8');
  if (!content.includes('gardolap_video.webm')) {
    const targetTag = '<!-- 2026 Teknik Özellikler ve Fiyat Karşılaştırma Tablosu -->';
    const mediaSection = `  <!-- VİDEO VE GERÇEK ATÖLYE PROJE VİTRİNİ -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Canlı İmalat & Montaj Deneyimi</span>
        <h2 class="section-title">Atölyemizden ve Montajdan <span>Gerçek Videolar</span></h2>
        <p class="section-desc">Kendi atölyemizde ürettiğimiz ve müşterilerimizin evlerine kurduğumuz özel mobilyaların montaj anları.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 45px;">
        <!-- Video 1: Gardırop -->
        <div class="video-showcase-box" style="margin-bottom: 0;">
          <div class="video-overlay-badge">
            <span class="video-badge-dot"></span>
            <span>ÖZEL ÖLÇÜ GARDIROP MONTAJI</span>
          </div>
          <video controls playsinline preload="metadata" poster="assets/videos/gardolap_video-poster.webp">
            <source src="assets/videos/gardolap_video.webm" type="video/webm">
            <source src="assets/images/video/gardolap_video.mp4" type="video/mp4">
          </video>
        </div>

        <!-- Video 2: Giyinme Odası -->
        <div class="video-showcase-box" style="margin-bottom: 0;">
          <div class="video-overlay-badge">
            <span class="video-badge-dot"></span>
            <span>GİYİNME ODASI UYGULAMASI</span>
          </div>
          <video controls playsinline preload="metadata" poster="assets/videos/giyinme_odasi_video-poster.webp">
            <source src="assets/videos/giyinme_odasi_video.webm" type="video/webm">
            <source src="assets/images/video/giyinme_odasi_video.mp4" type="video/mp4">
          </video>
        </div>

        <!-- Video 3: Atölye İmalatı -->
        <div class="video-showcase-box" style="margin-bottom: 0;">
          <div class="video-overlay-badge">
            <span class="video-badge-dot"></span>
            <span>ATÖLYE İMALAT SÜRECİ</span>
          </div>
          <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-poster.webp">
            <source src="assets/videos/imalat_atolye_video.webm" type="video/webm">
            <source src="assets/images/video/imalat_atolye_video.mp4" type="video/mp4">
          </video>
        </div>
      </div>

      <!-- Kullanıcının Gerçek Fotoğraf Portfolyosu -->
      <div class="section-header" style="margin-top: 35px; margin-bottom: 25px;">
        <span class="section-subtitle">Üretimlerimizden Seçmeler</span>
        <h3 class="section-title" style="font-size: 1.85rem;">Atölyemizde Üretilen <span>Özel İmalat Proje Galerisi</span></h3>
      </div>
      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Mutfak Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Özel Ölçü Ada Mutfak Dolabı Montajı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölye Mutfak Dolabı Üretimi" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Modern Lake Mutfak Dolabı Tasarımı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/giyinme_odasi.webp" alt="Özel Giyinme Odası Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Işıklı ve Raflı Lüks Giyinme Odası</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/giyinme_odasi-1.webp" alt="Giyinme Odası Ada Çekmece Ünitesi" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Giyinme Odası Takı & Ada Çekmecesi</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/yatak_odasi_dolabi.webp" alt="Özel Gardırop ve Yatak Odası Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Akıllı İç Düzenlemeli Gardırop İmalatı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/fortmanto.webp" alt="Antre Portmanto ve Vestiyer Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Gömme Aynalı Antre Portmanto & Vestiyer</div>
        </div>
      </div>
    </div>
  </section>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    fs.writeFileSync('katalog.html', content, 'utf8');
    console.log('✓ katalog.html güncellendi (3 Video + 6 Kullanıcı Gerçek Fotoğrafı)');
  }
}

// =========================================================================
// 5. kapi-modelleri.html
// =========================================================================
if (fs.existsSync('kapi-modelleri.html')) {
  let content = fs.readFileSync('kapi-modelleri.html', 'utf8');
  if (!content.includes('imalat_atolye_video-4')) {
    const targetTag = '<!-- 4 Detaylı İmalat ve Mimari Kart -->';
    const mediaSection = `  <!-- ATÖLYE İMALAT VİDEOSU -->
  <div style="margin-bottom: 45px;">
    <div class="section-header" style="text-align: left; margin-bottom: 20px;">
      <span class="section-subtitle">Atölye İşçiliği</span>
      <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-primary);">Özel Lake & Ahşap Kapı İmalat Sürecimiz</h3>
    </div>
    <div class="video-showcase-box" style="margin-bottom: 0;">
      <div class="video-overlay-badge">
        <span class="video-badge-dot"></span>
        <span>ÇNR MOBİLYA · ÖZEL İMALAT VE MONTAJ VİDEOSU</span>
      </div>
      <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-4-poster.webp">
        <source src="assets/videos/imalat_atolye_video-4.webm" type="video/webm">
        <source src="assets/images/video/imalat_atolye_video-4.mp4" type="video/mp4">
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </div>
  </div>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    // Ayrıca görsel referanslarını webp olarak güncelle
    content = content.replace('assets/images/kapi/lake-kapi.jpg', 'assets/images/kapi/lake-kapi.webp');
    content = content.replace('assets/images/kapi/kapi-ahsap.jpg', 'assets/images/kapi/kapi-ahsap.webp');
    content = content.replace('assets/images/kapi/camli-kapi.jpg', 'assets/images/kapi/camli-kapi.webp');
    fs.writeFileSync('kapi-modelleri.html', content, 'utf8');
    console.log('✓ kapi-modelleri.html güncellendi (Video 4 + WebP kapı görselleri)');
  }
}

// =========================================================================
// 6. mutfak-dekorasyonu.html
// =========================================================================
if (fs.existsSync('mutfak-dekorasyonu.html')) {
  let content = fs.readFileSync('mutfak-dekorasyonu.html', 'utf8');
  if (!content.includes('imalat_atolye_video-1')) {
    const targetTag = '<!-- Kapsamlı SEO Tablosu & Trendler -->';
    const mediaSection = `  <!-- ATÖLYE İMALAT VİDEOSU & GERÇEK ADA MUTFAK FOTOĞRAFLARI -->
  <div style="margin-bottom: 45px;">
    <div class="section-header" style="text-align: left; margin-bottom: 20px;">
      <span class="section-subtitle">Canlı Atölye İmalatı</span>
      <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-primary);">Mutfak Adası ve Tezgah İmalat Sürecimiz</h3>
    </div>
    <div class="video-showcase-box" style="margin-bottom: 30px;">
      <div class="video-overlay-badge">
        <span class="video-badge-dot"></span>
        <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
      </div>
      <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-1-poster.webp">
        <source src="assets/videos/imalat_atolye_video-1.webm" type="video/webm">
        <source src="assets/images/video/imalat_atolye_video-1.mp4" type="video/mp4">
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </div>

    <!-- Gerçek Mutfak Referansları -->
    <div class="user-gallery-grid">
      <div class="user-gallery-item">
        <img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Ada Mutfak Montajı" width="600" height="450" loading="lazy">
        <div class="user-gallery-caption">Özel İmalat Ada Mutfak Montajımız</div>
      </div>
      <div class="user-gallery-item">
        <img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölye Mutfak Dolabı Üretimi" width="600" height="450" loading="lazy">
        <div class="user-gallery-caption">Geniş Ada Tezgah & Boy Dolap Ünitesi</div>
      </div>
      <div class="user-gallery-item">
        <img src="assets/images/mutfak/tezgah-seramik.webp" alt="Kuvars Mermer Tezgah ve Seramik" width="600" height="450" loading="lazy">
        <div class="user-gallery-caption">Kuvars Tezgah & Porselen Seramik İşçiliği</div>
      </div>
      <div class="user-gallery-item">
        <img src="assets/images/mutfak/ada-mutfak-real.webp" alt="Ada Mutfak Masası Uygulaması" width="600" height="450" loading="lazy">
        <div class="user-gallery-caption">Fonksiyonel Kahvaltı Barı & Ada Ünitesi</div>
      </div>
    </div>
  </div>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    content = content.replace('assets/images/mutfak/tezgah-seramik.jpg', 'assets/images/mutfak/tezgah-seramik.webp');
    fs.writeFileSync('mutfak-dekorasyonu.html', content, 'utf8');
    console.log('✓ mutfak-dekorasyonu.html güncellendi (Video 1 + 4 Gerçek Fotoğraf)');
  }
}

// =========================================================================
// 7. mobilya-dekorasyon.html
// =========================================================================
if (fs.existsSync('mobilya-dekorasyon.html')) {
  let content = fs.readFileSync('mobilya-dekorasyon.html', 'utf8');
  if (!content.includes('imalat_atolye_video-4')) {
    const targetTag = '<!-- Kapsamlı SEO Tablosu & Karşılaştırma -->';
    const mediaSection = `  <!-- ATÖLYE İMALAT VİDEOSU -->
  <div style="margin-bottom: 45px;">
    <div class="section-header" style="text-align: left; margin-bottom: 20px;">
      <span class="section-subtitle">Atölyemizden Canlı Görüntüler</span>
      <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-primary);">Özel Ahşap ve Panel Mobilya İmalatı</h3>
    </div>
    <div class="video-showcase-box" style="margin-bottom: 0;">
      <div class="video-overlay-badge">
        <span class="video-badge-dot"></span>
        <span>ÇNR MOBİLYA · ATÖLYE VE MONTAJ VİDEOSU</span>
      </div>
      <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-4-poster.webp">
        <source src="assets/videos/imalat_atolye_video-4.webm" type="video/webm">
        <source src="assets/images/video/imalat_atolye_video-4.mp4" type="video/mp4">
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </div>
  </div>

  `;
    content = content.replace(targetTag, mediaSection + targetTag);
    content = content.replace('assets/images/dekorasyon/ahsap-lambri.jpg', 'assets/images/dekorasyon/ahsap-lambri.webp');
    fs.writeFileSync('mobilya-dekorasyon.html', content, 'utf8');
    console.log('✓ mobilya-dekorasyon.html güncellendi (Video 4 + Ahşap Lambri WebP)');
  }
}

// =========================================================================
// 8. lake-mutfak-dolabi.html, akrilik-mutfak-dolabi.html, matplus-mutfak-dolabi.html, high-gloss-mutfak-dolabi.html
// =========================================================================
const subMutfakPages = [
  { file: 'lake-mutfak-dolabi.html', name: 'Lake' },
  { file: 'akrilik-mutfak-dolabi.html', name: 'Akrilik' },
  { file: 'matplus-mutfak-dolabi.html', name: 'Matplus' },
  { file: 'high-gloss-mutfak-dolabi.html', name: 'High Gloss' }
];

subMutfakPages.forEach(p => {
  if (fs.existsSync(p.file)) {
    let content = fs.readFileSync(p.file, 'utf8');
    if (!content.includes('imalat_atolye_video')) {
      const targetTag = '<section class="section-padding" style="background: var(--color-bg-alt);">';
      const mediaSection = `  <!-- ATÖLYE İMALAT VİDEOSU VE GERÇEK MUTFAK FOTOĞRAFLARI -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Standartlarımız</span>
        <h2 class="section-title">Atölyemizde <span>${p.name} Mutfak Dolabı İmalat Süreci</span></h2>
        <p class="section-desc">E1 sertifikalı suya dayanıklı MDF gövdeler ve hassas işçilikle hazırlanan özel mutfak dolaplarımızın atölye üretim anları.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 35px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-1-poster.webp">
          <source src="assets/videos/imalat_atolye_video-1.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video-1.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>

      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi.webp" alt="Özel İmalat Mutfak Dolabı Montajı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Atölye İmalatımız Özel Mutfak Montajı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyede Üretilen Modern Mutfak Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Özel Ölçü Ada & Boy Dolap İmalatı</div>
        </div>
      </div>
    </div>
  </section>

`;
      content = content.replace(targetTag, mediaSection + targetTag);
      fs.writeFileSync(p.file, content, 'utf8');
      console.log(`✓ ${p.file} güncellendi (${p.name} Video + 2 Gerçek Mutfak Fotoğrafı)`);
    }
  }
});

console.log('--- TÜM SAYFALAR EKSİKSİZ VE MÜKEMMEL BİÇİMDE GÜNCELLENDİ ---');
