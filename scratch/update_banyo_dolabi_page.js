const fs = require('fs');

let html = fs.readFileSync('banyo-dolabi.html', 'utf8');

// Target position: right after <!-- 4 Güven & Kalite Bandı --> section
const targetEnd = html.indexOf('</section>', html.indexOf('features-bar-grid')) + 10;

const galleryHTML = `

  <!-- ATÖLYEMİZDEN GERÇEK KARELER (CANLI TESLİMAT VİTRİNİ - SAYFANIN EN ÜSTÜNDE) -->
  <section class="live-gallery-section" id="canli-teslimatlar">
    <div class="container">
      <div class="section-header" style="margin-bottom: 22px;">
        <div class="gallery-trust-badge">
          <span class="pulse-dot"></span>
          <span>ARACISIZ DOĞRUDAN İMALATÇIDAN TESLİM</span>
        </div>
        <h2 class="section-title">Atölyemizden Evlere: <span>Gerçek Banyo Dolabı İmalat & Montaj</span></h2>
        <p class="section-desc">
          İstanbul genelinde teslim ettiğimiz gerçek müşteri banyo dolabı projelerimiz ve Dudullu atölyemizin usta işçiliğinden güncel kareler.
        </p>
      </div>

      <div class="gallery-swipe-hint">
        <span>👈 Fotoğrafları yana kaydırarak gerçek projelerimizi inceleyin 👉</span>
      </div>

      <!-- Mobilde Kaydırılabilir (Swipeable), Masaüstünde 3 Sütunlu Prestij Gridi -->
      <div class="live-gallery-scroll-wrap">
        <div class="live-gallery-grid">

          <!-- Kart 1: İpek Mat Lake Asma Banyo Dolabı -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/lake-banyo-dolabi-768x1024.webp" alt="İpek Mat Lake Çift Lavabolu Asma Banyo Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">İpek Mat Lake</span>
              <h3 class="live-gallery-title">İpek Mat Lake Asma Banyo Dolabı & LED Ayna</h3>
              <p class="live-gallery-text">Suya dayanıklı marin MDF gövde, dokunmatik buğu çözücülü LED ayna ve gizli çekmece düzeni.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Ataşehir / Konut</span>
                <span class="meta-check">✓ Marin MDF Gövde</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Lake%20Asma%20Banyo%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 2: Çamaşır Üniteli Banyo Dolabı -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/membran-banyo-dolabi-ve-camasir-makinesi-dolabi.webp" alt="Özel İmalat Çamaşır ve Kurutma Makinesi Banyo Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Özel Ölçü Çözüm</span>
              <h3 class="live-gallery-title">Çift Lavabolu Dolap & Çamaşır Ünitesi</h3>
              <p class="live-gallery-text">Çamaşır ve kurutma makinesini şıkça gizleyen boy dolap modülü ve yekpare porselen lavabo.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Kadıköy / Rezidans</span>
                <span class="meta-check">✓ Çamaşır Kulesi</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Camasir%20Makineli%20Banyo%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 3: Gömme Rezervuar & Klozet Üstü Dolap -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/banyo-dolabi-klozet-dusakabin-768x1024.webp" alt="Klozet Üstü Dolap ve Duşakabin Banyo Çözümü" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Komple Çözüm</span>
              <h3 class="live-gallery-title">Gömme Rezervuar & Klozet Üstü Boy Dolap</h3>
              <p class="live-gallery-text">Ölü alanları değerlendiren klozet üstü ekstra depolama, duşakabin ve asma lavabolu alt dolap.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Ümraniye / Daire</span>
                <span class="meta-check">✓ Sıfır Ölü Alan</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Klozet%20Ustu%20Banyo%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 4: Gizli Lineer LED Aydınlatmalı Banyo -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/led-aydinlatmali-lake-banyo-dolabi-576x1024.webp" alt="Gizli LED Aydınlatmalı Lake Asma Banyo Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Gizli LED Serisi</span>
              <h3 class="live-gallery-title">Lineer LED Aydınlatmalı Asma Banyo Dolabı</h3>
              <p class="live-gallery-text">Doğal ahşap sıcaklığı, çanak lavabo ve sensörlü tezgah altı günışığı LED ambiyansı.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Çekmeköy / Villa</span>
                <span class="meta-check">✓ IP67 Su Korumalı LED</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20LED%20Aydinlatmali%20Banyo%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 5: Suya Dayanıklı Membran Banyo Dolabı -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/membran-banyo-dolabi-576x1024.webp" alt="Suya Dayanıklı Membran Banyo Dolabı Modeli" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Membran Seri</span>
              <h3 class="live-gallery-title">Suya Dayanıklı Membran Banyo Dolabı</h3>
              <p class="live-gallery-text">Yekpare vakum PVC kaplama ile şişme ve kabarma yapmayan, kolay silinen hijyenik banyo modülü.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Üsküdar / Daire</span>
                <span class="meta-check">✓ %100 Buhara Mukavim</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Membran%20Banyo%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 6: İpek Mat Beyaz Lake Banyo Dolabı -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/lake-banyo-dolabi-1-576x1024.webp" alt="İpek Mat Beyaz Lake Banyo Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Beyaz Lake</span>
              <h3 class="live-gallery-title">İpek Mat Beyaz Lake & Çanak Lavabo Dolabı</h3>
              <p class="live-gallery-text">Poliüretan lake fırın boya, İtalyan çanak lavabo ve Blum yavaşlatıcılı ray konforu.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Beşiktaş / Konut</span>
                <span class="meta-check">✓ 5 Yıl Tam Garanti</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Beyaz%20Lake%20Banyo%20Dolabi%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>

      <!-- Alt Hızlı WhatsApp Teklif Bandı -->
      <div class="gallery-bottom-cta">
        <div class="gallery-cta-action">
          <span>Banyonuz için özel ölçü suya dayanıklı dolap mı yaptırmak istiyorsunuz?</span>
          <a href="https://wa.me/905336173755?text=Merhaba,%20web%20sitenizdeki%20gercek%20banyo%20dolabi%20fotograflarini%20inceledim.%20Banyom%20icin%20ucretsiz%20kesif%20ve%20fiyat%20bilgisi%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            <span>Banyonuz İçin Fiyat Alın</span>
          </a>
        </div>
      </div>

    </div>
  </section>`;

html = html.substring(0, targetEnd) + galleryHTML + html.substring(targetEnd);

// Also remove redundant duplicate gallery from inside section 4 (under video)
const oldUserGalleryRegex = /<!-- Gerçek Banyo Fotoğrafları -->[\s\S]*?<div class="user-gallery-grid">[\s\S]*?<\/div>\s*<\/div>/;
if (oldUserGalleryRegex.test(html)) {
  html = html.replace(oldUserGalleryRegex, '</div>');
  console.log('Removed bottom duplicate user-gallery-grid from banyo-dolabi.html');
}

fs.writeFileSync('banyo-dolabi.html', html, 'utf8');
console.log('Successfully updated banyo-dolabi.html with top live gallery!');

