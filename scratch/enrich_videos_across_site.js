const fs = require('fs');

// 1. membran-mutfak-dolabi.html
{
  let file = 'membran-mutfak-dolabi.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE İMALAT VİDEOSU VE GERÇEK MEMBRAN MUTFAK FOTOĞRAFLARI -->
  <section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Standartlarımız</span>
        <h2 class="section-title">Atölyemizde <span>Membran Mutfak Dolabı İmalat Süreci</span></h2>
        <p class="section-desc">E1 sertifikalı suya dayanıklı MDF gövdeler ve vakum pres teknolojisiyle üretilen membran mutfak dolaplarımızın atölye üretim anları.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 35px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-poster.webp">
          <source src="assets/videos/imalat_atolye_video.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>

      <div class="user-gallery-grid">
        <div class="user-gallery-item">
          <img src="assets/images/mutfak/membran-kapak.webp" alt="Özel İmalat Membran Mutfak Dolabı Montajı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Atölye İmalatımız Country Membran Kapak</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/resim/mutfak_dolabi-1.webp" alt="Atölyede Üretilen Modern Mutfak Dolabı" width="600" height="450" loading="lazy">
          <div class="user-gallery-caption">Özel Ölçü Ada & Boy Dolap İmalatı</div>
        </div>
      </div>
    </div>
  </section>`;

    if (!c.includes('imalat_atolye_video.webm')) {
      const target = '<section class="section-padding" style="background: var(--color-bg-alt);">';
      c = c.replace(target, vidSection + '\n\n  ' + target);
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ membran-mutfak-dolabi.html güncellendi');
    }
  }
}

// 2. mutfak-dekorasyonu.html
{
  let file = 'mutfak-dekorasyonu.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE İMALAT & ADA MUTFAK VİDEOSU -->
  <section class="section-padding" style="background: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim ve Montaj Gücümüz</span>
        <h2 class="section-title">Atölyemizden <span>Ada Mutfak & Komple Dekorasyon</span></h2>
        <p class="section-desc">Kendi atölyemizde CNC kesim, porselen/kuvars tezgah entegrasyonu ve titiz montaj aşamalarımız.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 35px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE VE MONTAJ VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-1-poster.webp">
          <source src="assets/videos/imalat_atolye_video-1.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video-1.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

    if (!c.includes('imalat_atolye_video-1.webm')) {
      const target = '<!-- Komple Mutfak Dekorasyonu, Ada Mutfak ve Tezgah';
      c = c.replace(target, vidSection + '\n\n  ' + target);
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ mutfak-dekorasyonu.html güncellendi');
    }
  }
}

// 3. mobilya-dekorasyon.html
{
  let file = 'mobilya-dekorasyon.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE AHŞAP & MOBİLYA İMALAT VİDEOSU -->
  <section class="section-padding" style="background: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Canlı Üretim Parkuru</span>
        <h2 class="section-title">Atölyemizde <span>Özel Ahşap & Vestiyer Üretimi</span></h2>
        <p class="section-desc">Yukarı Dudullu imalat atölyemizde TV ünitesi, portmanto ve dekoratif lambri panellerin usta ellerde hazırlanışı.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 35px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-4-poster.webp">
          <source src="assets/videos/imalat_atolye_video-4.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video-4.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

    if (!c.includes('imalat_atolye_video-4.webm')) {
      const target = '<!-- GERÇEK ATÖLYE PORTMANTO & VESTİYER VİTRİNİ -->';
      c = c.replace(target, vidSection + '\n\n  ' + target);
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ mobilya-dekorasyon.html güncellendi');
    }
  }
}

// 4. yatak-odasi-mobilyasi.html
{
  let file = 'yatak-odasi-mobilyasi.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE YATAK ODASI & RAY DOLAP İMALAT VİDEOSU -->
  <section class="section-padding" style="background: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Atölye Canlı Çekim</span>
        <h2 class="section-title">Yatak Odası & <span>Gardırop İmalat Sürecimiz</span></h2>
        <p class="section-desc">Sessiz çift frenli ray mekanizmaları, neme dayanıklı MDF gövdeler ve birinci sınıf işçilik detaylarımız.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 35px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/gardolap_video-poster.webp">
          <source src="assets/videos/gardolap_video.webm" type="video/webm">
          <source src="assets/images/video/gardolap_video.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

    if (!c.includes('gardolap_video.webm')) {
      const target = '<!-- GERÇEK ATÖLYE YATAK ODASI MOBİLYALARI -->';
      c = c.replace(target, vidSection + '\n\n  ' + target);
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ yatak-odasi-mobilyasi.html güncellendi');
    }
  }
}

// 5. katalog.html
{
  let file = 'katalog.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE İMALAT GÜVENCESİ VİDEOSU -->
  <section class="section-padding" style="background-color: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Canlı Atölye Güvencesi</span>
        <h2 class="section-title">Katalogdaki Modellerimizin <span>Atölyede Üretim Anları</span></h2>
        <p class="section-desc">E-Kataloğumuzda yer alan tüm mutfak, gardırop ve banyo tasarımları doğrudan kendi CNC parkurumuzda sıfırdan üretilmektedir.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 25px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-poster.webp">
          <source src="assets/videos/imalat_atolye_video.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

    if (!c.includes('imalat_atolye_video.webm')) {
      const target = '<!-- 2026 Renk Kartelası & Doku Seçenekleri -->';
      c = c.replace(target, vidSection + '\n\n  ' + target);
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ katalog.html güncellendi');
    }
  }
}

// 6. blog.html
{
  let file = 'blog.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE ÜRETİM VİDEOSU BÖLÜMÜ -->
  <section class="section-padding" style="background-color: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Gerçek İmalatçı Güveni</span>
        <h2 class="section-title">Atölyemizden <span>Canlı İmalat & Malzeme Kalitesi</span></h2>
        <p class="section-desc">Rehberimizde bahsettiğimiz 18 mm MDF dayanıklılığını, fırın lake boya ve sessiz menteşe standartlarını canlı izleyin.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 25px;">
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
    </div>
  </section>`;

    if (!c.includes('imalat_atolye_video-1.webm')) {
      const target = '<!-- Çağrı Kutusu -->';
      c = c.replace(target, vidSection + '\n\n      ' + target);
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ blog.html güncellendi');
    }
  }
}

// 7. hizmet-bolgeleri.html
{
  let file = 'hizmet-bolgeleri.html';
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    const vidSection = `
  <!-- ATÖLYE İMALAT & TÜM İSTANBUL SERVİS GÜVENCESİ -->
  <section class="section-padding" style="background-color: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Ümraniye İmalat Tesisimiz</span>
        <h2 class="section-title">İstanbul Geneline <span>Doğrudan Atölyeden Teslimat</span></h2>
        <p class="section-desc">Tüm ilçelerimize aracısız atölye fiyatıyla hizmet veriyoruz. İmalat parkurumuzu ve montaj titizliğimizi inceleyebilirsiniz.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 30px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/imalat_atolye_video-poster.webp">
          <source src="assets/videos/imalat_atolye_video.webm" type="video/webm">
          <source src="assets/images/video/imalat_atolye_video.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

    if (!c.includes('imalat_atolye_video.webm')) {
      const target = '<!-- SIKÇA SORULAN SORULAR';
      if (c.includes(target)) {
        c = c.replace(target, vidSection + '\n\n  ' + target);
      } else {
        const altTarget = '<footer class="site-footer">';
        c = c.replace(altTarget, vidSection + '\n\n  ' + altTarget);
      }
      fs.writeFileSync(file, c, 'utf8');
      console.log('✓ hizmet-bolgeleri.html güncellendi');
    }
  }
}

// 8. 21 İlçe Sayfaları (Regional Pages)
const regionalFiles = fs.readdirSync('.').filter(f => f.endsWith('-mutfak-dolabi.html') && !['lake-mutfak-dolabi.html', 'membran-mutfak-dolabi.html', 'matplus-mutfak-dolabi.html', 'akrilik-mutfak-dolabi.html', 'high-gloss-mutfak-dolabi.html'].includes(f));

console.log('Found ' + regionalFiles.length + ' regional pages to enrich with video.');

const districtVideos = [
  { webm: 'imalat_atolye_video.webm', mp4: 'imalat_atolye_video.mp4', poster: 'imalat_atolye_video-poster.webp' },
  { webm: 'imalat_atolye_video-1.webm', mp4: 'imalat_atolye_video-1.mp4', poster: 'imalat_atolye_video-1-poster.webp' },
  { webm: 'imalat_atolye_video-2.webm', mp4: 'imalat_atolye_video-2.mp4', poster: 'imalat_atolye_video-2-poster.webp' },
  { webm: 'imalat_atolye_video-3.webm', mp4: 'imalat_atolye_video-3.mp4', poster: 'imalat_atolye_video-3-poster.webp' },
  { webm: 'imalat_atolye_video-4.webm', mp4: 'imalat_atolye_video-4.mp4', poster: 'imalat_atolye_video-4-poster.webp' }
];

regionalFiles.forEach((file, idx) => {
  let c = fs.readFileSync(file, 'utf8');
  if (!c.includes('<video')) {
    const vid = districtVideos[idx % districtVideos.length];
    
    // Extract district name from title
    const match = c.match(/<title>([^|]+)Mutfak Dolab/i);
    const districtName = match ? match[1].trim() : 'İstanbul';

    const vidSection = `
  <!-- ATÖLYE İMALAT GÜVENCESİ VİDEOSU -->
  <section class="section-padding" style="background-color: var(--color-bg-alt); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Parkurumuz & Müşteri Güveni</span>
        <h2 class="section-title">${districtName} İçin <span>Doğrudan Atölyeden İmalat</span></h2>
        <p class="section-desc">Aracı mağaza komisyonu olmadan Ümraniye atölyemizde CNC makinelerimizde üretilen mutfaklarımızı ve usta işçiliğimizi canlı izleyin.</p>
      </div>

      <div class="video-showcase-box" style="margin-bottom: 30px;">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>ÇNR MOBİLYA · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="metadata" poster="assets/videos/${vid.poster}">
          <source src="assets/videos/${vid.webm}" type="video/webm">
          <source src="assets/images/video/${vid.mp4}" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

    // Insert before FAQ or before footer
    const faqTarget = c.match(/<!-- [^>]*Sıkça Sorulan Sorular/i);
    if (faqTarget) {
      c = c.replace(faqTarget[0], vidSection + '\n\n  ' + faqTarget[0]);
    } else {
      const footerTarget = '<footer class="site-footer">';
      c = c.replace(footerTarget, vidSection + '\n\n  ' + footerTarget);
    }
    fs.writeFileSync(file, c, 'utf8');
    console.log('✓ ' + file + ' güncellendi (Video eklendi)');
  }
});
