const fs = require('fs');

let html = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// 1. Remove "⚡ Google Ads Kampanyasına Özel" and upgrade the banner
const oldBannerRegex = /<!-- GOOGLE ADS ÖZEL HIZLI TEKLİF & KEŞİF BANDI -->[\s\S]*?<\/section>/;

const newBannerHTML = `<!-- DOĞRUDAN ATÖLYE İMALATI VE ARACISIZ FİYAT BANDI -->
  <section style="background: #f8fafc; padding: 20px 0; border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="ads-conversion-banner">
        <div class="ads-conversion-text">
          <div class="banner-badge-wrapper">
            <span class="banner-gold-pill">✦ DOĞRUDAN ATÖLYE İMALATI</span>
            <span class="banner-sub-pill">Ücretsiz 3D Çizim & Lazer Keşif</span>
          </div>
          <h3 style="margin-top: 8px;">Atölyeden Doğrudan Aracısız Fiyat & Ücretsiz 3D Mimari Çizim</h3>
          <p>İstanbul genelinde yerinde milimetrik lazer ölçüsü, evinize özel 3D mimari mutfak projelendirme ve aynı gün net metretül fiyat teklifi.</p>
        </div>
        <div class="ads-conversion-actions">
          <a href="https://wa.me/905336173755?text=Merhaba,%20mutfak%20dolabi%20modelleri%20icin%20ucretsiz%20kesif%20ve%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp" style="font-weight: 700; padding: 13px 26px; border-radius: 10px; box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
            WhatsApp'tan Fiyat Al
          </a>
          <a href="tel:+905336173755" class="btn btn-primary" style="font-weight: 700; padding: 13px 26px; border-radius: 10px; background: rgba(255, 255, 255, 0.08); border: 1.5px solid rgba(197, 155, 63, 0.6); color: #ffffff;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            0533 617 37 55
          </a>
        </div>
      </div>
    </div>
  </section>`;

if (oldBannerRegex.test(html)) {
  html = html.replace(oldBannerRegex, newBannerHTML);
  console.log('Conversion banner updated cleanly (removed Google Ads text).');
} else {
  console.error('ERROR: oldBannerRegex not matched!');
}

// 2. Update Card 1 in #modeller (Replace tall pantry with full kitchen!)
const oldCard1Regex = /<!-- Kart 1: Akrilik Kahve Kosesi & Kiler -->[\s\S]*?<!-- Kart 2:/;

const newCard1HTML = `<!-- Kart 1: Lüks Akrilik & Alüminyum Cam Kapak Ada Mutfak -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Akrilik & Ada Mutfak</span>
            <img src="assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp" alt="Lüks Akrilik ve Alüminyum Cam Kapak Ada Mutfak Dolabı" width="1440" height="1920" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Lüks Akrilik & Füme Cam Kapak Ada Mutfak</h4>
              <p class="proje-card-desc">Senosan çizilmez parlak akrilik modüller, füme reflekte cam üst vitrin ve geniş porselen ada tezgahı.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Ayna Akrilik</span>
                <span class="proje-card-tag">Füme Cam Vitrin</span>
                <span class="proje-card-tag">Ada Tezgah</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Luks%20Akrilik%20ve%20Fume%20Cam%20Kapak%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 2:`;

if (oldCard1Regex.test(html)) {
  html = html.replace(oldCard1Regex, newCard1HTML);
  console.log('Card 1 updated to full Akrilik kitchen!');
} else {
  console.error('ERROR: oldCard1Regex not matched!');
}

// 3. Update Card 5 in #modeller (Replace green tile photo with pure white country)
const oldCard5Regex = /<!-- Kart 5: Klasik Beyaz Citali Country -->[\s\S]*?<!-- Kart 6:/;

const newCard5HTML = `<!-- Kart 5: Klasik Beyaz Citali Country -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Klasik Country</span>
            <img src="assets/images/ress/country-tarzi-mutfak-dolabi-768x1024.webp" alt="Klasik Beyaz Çıtalı Country Mutfak Dolabı İmalatı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Klasik Çıtalı Beyaz Country Mutfak</h4>
              <p class="proje-card-desc">Vakum pres yekpare membran çıta detayları, beyaz tezgah ve seramik eviye ile aydınlık country tarzı.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">CNC Çıta Desen</span>
                <span class="proje-card-tag">Beyaz Country</span>
                <span class="proje-card-tag">Neme Dayanıklı</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Klasik%20Citali%20Beyaz%20Country%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 6:`;

if (oldCard5Regex.test(html)) {
  html = html.replace(oldCard5Regex, newCard5HTML);
  console.log('Card 5 updated to pure white country kitchen!');
} else {
  console.error('ERROR: oldCard5Regex not matched!');
}

// 4. Update Card 9 in #modeller (Replace coffee corner with full High Gloss kitchen)
const oldCard9Regex = /<!-- Kart 9: Aluminyum Cam Kapakli Kahve Kosesi -->[\s\S]*?<!-- Kart 10:/;

const newCard9HTML = `<!-- Kart 9: High Gloss Parlak Beyaz Modern Mutfak -->
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">UV High Gloss</span>
            <img src="assets/images/ress/high-gloss-kapak-mutfak-dolabi-768x1024.webp" alt="High Gloss Parlak Beyaz Modern Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">High Gloss Parlak Beyaz Modern Mutfak</h4>
              <p class="proje-card-desc">Işıltılı UV lake yüzey, granit tezgah ve geniş tencere çekmeceleri ile modern ferah tasarım.</p>
              <div class="proje-card-features">
                <span class="proje-card-tag">Yüksek Parlak</span>
                <span class="proje-card-tag">Kolay Silinir</span>
                <span class="proje-card-tag">Geniş Çekmece</span>
              </div>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20High%20Gloss%20Parlak%20Beyaz%20Modern%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Kart 10:`;

if (oldCard9Regex.test(html)) {
  html = html.replace(oldCard9Regex, newCard9HTML);
  console.log('Card 9 updated to full High Gloss kitchen!');
} else {
  console.error('ERROR: oldCard9Regex not matched!');
}

// 5. Update Membran Section Image (Section 1)
const oldMembranMedia = `<div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Beyaz Çıtalı Membran Kapak</span>
          <img src="assets/images/ress/country-mutfak-dolabi-768x1024.webp" alt="Country Tarzı Membran Kapak Mutfak Dolabı İmalatı Ümraniye" width="768" height="1024" loading="lazy" decoding="async">
        </div>
      </div>`;

const newMembranMedia = `<div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ 2026 Özel İmalat: Beyaz Çıtalı Country Membran Mutfak</span>
          <img src="assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp" alt="İstanbul Özel İmalat Beyaz Çıtalı Country Membran Kapak Mutfak Dolabı" width="768" height="1024" loading="lazy" decoding="async">
        </div>
      </div>`;

if (html.includes(oldMembranMedia)) {
  html = html.replace(oldMembranMedia, newMembranMedia);
  console.log('Membran door sample image updated to country island kitchen!');
} else {
  console.error('ERROR: oldMembranMedia not found!');
}

// 6. Update Akrilik Section Image (Section 3) - Replace tall pantry with full kitchen!
const oldAkrilikMedia = `<div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Çizilmez Senosan Akrilik Kapak & Kiler</span>
          <img src="assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp" alt="Senosan Çizilmez Akrilik Kapak Mutfak Dolabı Kahve Köşesi ve Kiler Dolabı İmalatı" width="1024" height="768" loading="lazy" decoding="async">
        </div>
      </div>`;

const newAkrilikMedia = `<div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ 2026 Özel İmalat: Çizilmez Senosan Akrilik Kapak Mutfak</span>
          <img src="assets/images/en-yeni-resimler/akrilik-kapak-ilk-foto-bu-olcak.webp" alt="Senosan Çizilmez Akrilik Kapak Mutfak Dolabı İmalatı Ümraniye Atölyesi" width="1200" height="675" loading="lazy" decoding="async">
        </div>
      </div>`;

if (html.includes(oldAkrilikMedia)) {
  html = html.replace(oldAkrilikMedia, newAkrilikMedia);
  console.log('Akrilik door sample image updated to full kitchen!');
} else {
  console.error('ERROR: oldAkrilikMedia not found!');
}

// 7. Update High Gloss Section Image (Section 5)
const oldHighGlossMedia = `<div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ Canlı İmalat: Porselen Tezgah & High Gloss Kapak</span>
          <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve High Gloss Kapak Mutfak Dolabı İmalatı" width="768" height="1024" loading="lazy" decoding="async">
        </div>
      </div>`;

const newHighGlossMedia = `<div class="section-media-col">
        <div class="door-sample-frame">
          <span class="door-sample-badge">✦ 2026 Özel İmalat: UV High Gloss Parlak Mutfak Dolabı</span>
          <img src="assets/images/en-yeni-resimler/high-gloss-kapak-ilk-foto-bu-olcak.webp" alt="High Gloss Yüksek Parlak Kapak Mutfak Dolabı İmalatı Ümraniye" width="1200" height="675" loading="lazy" decoding="async">
        </div>
      </div>`;

if (html.includes(oldHighGlossMedia)) {
  html = html.replace(oldHighGlossMedia, newHighGlossMedia);
  console.log('High Gloss door sample image updated to stunning 1200x675 kitchen!');
} else {
  console.error('ERROR: oldHighGlossMedia not found!');
}

fs.writeFileSync('mutfak-dolaplari.html', html, 'utf8');
console.log('Successfully written updated mutfak-dolaplari.html!');

