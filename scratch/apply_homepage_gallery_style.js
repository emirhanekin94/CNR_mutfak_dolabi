const fs = require('fs');

let html = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const modellerRegex = /<!-- CANLI ATÖLYE TESLİMATLARI[\s\S]*?<\/section>/;

const newSectionHTML = `<!-- ATÖLYEMİZDEN GERÇEK KARELER (ANA SAYFADAKİ GİBİ CANLI TESLİMAT VİTRİNİ) -->
  <section class="live-gallery-section" id="modeller">
    <div class="container">
      <div class="section-header" style="margin-bottom: 22px;">
        <div class="gallery-trust-badge">
          <span class="pulse-dot"></span>
          <span>ARACISIZ DOĞRUDAN İMALATÇIDAN TESLİM</span>
        </div>
        <h2 class="section-title">Atölyemizden Evlere: <span>Gerçek İmalat & Montaj</span></h2>
        <p class="section-desc">
          İstanbul genelinde teslim ettiğimiz gerçek müşteri mutfakları ve Dudullu atölyemizin usta işçiliğinden güncel 2026 modellerimiz.
        </p>
      </div>

      <div class="gallery-swipe-hint">
        <span>👈 Fotoğrafları yana kaydırarak gerçek projelerimizi inceleyin 👉</span>
      </div>

      <!-- Mobilde Kaydırılabilir (Swipeable), Masaüstünde 3 Sütunlu Prestij Gridi -->
      <div class="live-gallery-scroll-wrap">
        <div class="live-gallery-grid">

          <!-- Kart 1: Lüks Akrilik & Alüminyum Cam Kapak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp" alt="Lüks Akrilik ve Alüminyum Cam Kapak Ada Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Akrilik & Ada Mutfak</span>
              <h3 class="live-gallery-title">Lüks Akrilik & Füme Cam Kapak Ada Mutfak</h3>
              <p class="live-gallery-text">Senosan parlak beyaz akrilik modüller, füme reflekte cam üst vitrin ve porselen ada tezgahı.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Kadıköy / Rezidans</span>
                <span class="meta-check">✓ Çizilmez Senosan</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Luks%20Akrilik%20ve%20Fume%20Cam%20Kapak%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 2: Alüminyum Cam Kapak & LED Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="Alüminyum Cam Kapak High Gloss Porselen Tezgah LED Mutfak" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Mimari Seri</span>
              <h3 class="live-gallery-title">Alüminyum Cam Kapak & LEDli Ada Mutfak</h3>
              <p class="live-gallery-text">Füme reflekte cam kapaklar, entegre lineer LED aydınlatmalar ve 12 mm İtalyan porselen ada.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Ataşehir / Villa</span>
                <span class="meta-check">✓ Gizli Lineer LED</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Aluminyum%20Cam%20Kapak%20ve%20Porselen%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 3: İpek Mat Lake Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="Lake Kapak Mutfak Dolabı ve Porselen Tezgahlı Ada Bar" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">İpek Mat Lake</span>
              <h3 class="live-gallery-title">İpek Mat Lake & Porselen Ada Bar</h3>
              <p class="live-gallery-text">Özel fırın boyalı çıtalı lake kapaklar, entegre kahvaltı barı ve damarlı beyaz porselen tezgah.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Çekmeköy / Konut</span>
                <span class="meta-check">✓ Özel Fırın Lake</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Ipek%20Mat%20Lake%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 4: Corian Tezgah & Akrilik Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp" alt="LED Tavan Aydınlatmalı Corian Tezgah Akrilik Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Akrilik & Corian</span>
              <h3 class="live-gallery-title">Eksiz Corian Tezgah & Akrilik Dolaplar</h3>
              <p class="live-gallery-text">DuPont Corian eksiz birleşen antibakteriyel tezgah, tavana kadar dolap düzeni ve gizli spotlar.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Beşiktaş / Daire</span>
                <span class="meta-check">✓ Eksiz Masif Yüzey</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Corian%20Tezgah%20ve%20Akrilik%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 5: Klasik Çıtalı Membran -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/country-tarzi-mutfak-dolabi-768x1024.webp" alt="Klasik Beyaz Çıtalı Country Mutfak Dolabı İmalatı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Membran Kapak</span>
              <h3 class="live-gallery-title">Country Çıtalı Beyaz Membran Mutfak</h3>
              <p class="live-gallery-text">Yekpare vakum PVC presleme çıta desenleri, seramik eviye ve buhara %100 dayanıklı kapaklar.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Ümraniye / Daire</span>
                <span class="meta-check">✓ Kolay Temizlenir</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Klasik%20Citali%20Beyaz%20Country%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 6: Ahşap Detaylı Country Ada Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp" alt="Ada Masalı Country Tarzı Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Country Ada</span>
              <h3 class="live-gallery-title">Ahşap Detaylı Country Ada Mutfak</h3>
              <p class="live-gallery-text">Sıcak ahşap açık raf detayları, geniş ada hazırlık masası ve rustik kulp koleksiyonu.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Beykoz / Müstakil</span>
                <span class="meta-check">✓ Masif Ahşap Ada</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Ahsap%20Detayli%20Country%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 7: Senosan Çizilmez Akrilik Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp" alt="Senosan Çizilmez Akrilik Mutfak ve Porselen Tezgah" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Senosan Akrilik</span>
              <h3 class="live-gallery-title">Senosan Çizilmez Akrilik & Porselen</h3>
              <p class="live-gallery-text">Avusturya Senosan 6H çizilmez akrilik paneller, 12 mm porselen tezgah ve kulpsuz gola profil.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Üsküdar / Konut</span>
                <span class="meta-check">✓ 6H Çizilmezlik</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Senosan%20Akrilik%20ve%20Porselen%20Tezgah%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 8: LED Aydınlatmalı High Gloss Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp" alt="Alüminyum Cam Kapak ve LEDli High Gloss Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">High Gloss & Cam</span>
              <h3 class="live-gallery-title">LED Aydınlatmalı High Gloss Cam Vitrin</h3>
              <p class="live-gallery-text">UV yüksek parlak High Gloss kapaklar, füme camlı alüminyum profil ve sensörlü LED aydınlatma.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Maltepe / Rezidans</span>
                <span class="meta-check">✓ UV Yüksek Parlaklık</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20LEDli%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 9: High Gloss Parlak Beyaz Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/en-yeni-resimler/high-gloss-kapak-ilk-foto-bu-olcak.webp" alt="High Gloss Parlak Beyaz Modern Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">High Gloss Mutfak</span>
              <h3 class="live-gallery-title">High Gloss Parlak Beyaz Modern Mutfak</h3>
              <p class="live-gallery-text">Işıltılı UV lake yüzey, granit tezgah ve geniş tencere çekmeceleri ile modern ferah mutfak.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Pendik / Daire</span>
                <span class="meta-check">✓ Kolay Silinir</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20High%20Gloss%20Parlak%20Beyaz%20Modern%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 10: Monolitik Porselen & High Gloss -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve Tezgah Arası High Gloss Mutfak" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Monolitik Porselen</span>
              <h3 class="live-gallery-title">Porselen Tezgah Arası & High Gloss Mutfak</h3>
              <p class="live-gallery-text">Tezgahtan duvara kesintisiz uzanan derzsiz monolitik porselen ve parlak beyaz dolaplar.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Sarıyer / Konut</span>
                <span class="meta-check">✓ Derzsiz Hijyenik</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Porselen%20Tezgah%20ve%20High%20Gloss%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 11: Çimstone Kuvars & High Gloss -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp" alt="Çimstone Tezgah ve High Gloss Mutfak Dolabı" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Kuvars Çimstone</span>
              <h3 class="live-gallery-title">Çimstone Kuvars Tezgah & High Gloss</h3>
              <p class="live-gallery-text">Çizilmeye ve lekeye dayanıklı Çimstone kuvars yüzey, parlak kapak ve gizli kulp imalatı.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Kartal / Konut</span>
                <span class="meta-check">✓ Sıfır Gözenek</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Cimstone%20Tezgah%20ve%20High%20Gloss%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
                  <span>Bu Modeli Sor (WhatsApp)</span>
                </a>
              </div>
            </div>
          </article>

          <!-- Kart 12: Mekana Özel Lüks Ada Mutfak -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="assets/images/ress/Mekaniniza-Ozel-Mimari-Tasarim-ve-Hassas-Uretim-Mutfak.webp" alt="Mekana Özel Mimari Tasarım ve Hassas Üretim Mutfak" width="600" height="375" loading="lazy" decoding="async">
              <span class="live-gallery-tag delivery-tag">⭐ Teslim Edildi</span>
            </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">Özel Mimari Seri</span>
              <h3 class="live-gallery-title">Mekana Özel Lüks Ada Mutfak Projesi</h3>
              <p class="live-gallery-text">Evinizin ölçülerine milimetrik CNC kesim, tavan gizli aydınlatması ve akıllı kiler sistemleri.</p>
              <div class="live-gallery-meta">
                <span class="meta-location">📍 Dudullu / Özel Proje</span>
                <span class="meta-check">✓ 10 Yıl Gövde</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20Mekana%20Ozel%20Luks%20Ada%20Mutfak%20Projesi%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
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
          <span>Eviniz için benzer bir mutfak veya dolap projesi mi hayal ediyorsunuz?</span>
          <a href="https://wa.me/905336173755?text=Merhaba,%20web%20sitenizdeki%20gercek%20teslimat%20fotograflarini%20inceledim.%20Kendi%20evim%20icin%20ucretsiz%20kesif%20ve%20fiyat%20bilgisi%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            <span>Kendi Eviniz İçin Fiyat Alın</span>
          </a>
        </div>
      </div>

    </div>
  </section>`;

if (modellerRegex.test(html)) {
  html = html.replace(modellerRegex, newSectionHTML);
  console.log('Replaced #modeller with index.html live-gallery structure successfully!');
  fs.writeFileSync('mutfak-dolaplari.html', html, 'utf8');
} else {
  console.error('ERROR: modellerRegex not matched!');
}

