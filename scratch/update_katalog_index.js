const fs = require('fs');

function createAdsLeadSection(title, desc, items, waText, waBtnText) {
  return `  <!-- GOOGLE ADS ANINDA TEKLİF & KEŞİF KARTI -->
  <section class="section-padding" style="background: var(--color-bg-alt);">
    <div class="container">
      <div class="ads-lead-box">
        <div class="ads-badge-live">
          <span class="ads-pulse-dot"></span>
          <span>ATÖLYE TEKLİF HATTI AKTİF · 15 DAKİKADA CEVAP</span>
        </div>
        <div class="ads-lead-grid">
          <div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; color: #ffffff; margin-bottom: 12px;">
              ${title}
            </h3>
            <p style="color: #c4ccd4; font-size: 1.05rem; line-height: 1.6; margin-bottom: 18px;">
              ${desc}
            </p>
            <ul style="color: #c4ccd4; font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">
              ${items.map(it => `<li>✓ ${it}</li>`).join('\n              ')}
            </ul>
          </div>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: var(--radius-md); border: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
            <p style="color: #ffffff; font-weight: 700; margin-bottom: 12px; font-size: 1.1rem;">WhatsApp'tan Anında Bilgi Alın:</p>
            <a href="https://wa.me/905336173555?text=${encodeURIComponent(waText)}" target="_blank" class="btn btn-whatsapp" style="width: 100%; margin-bottom: 12px; font-size: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
              ${waBtnText}
            </a>
            <a href="tel:+905336173555" class="btn btn-phone" style="width: 100%;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              0533 617 35 55 Nolu Hattı Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// katalog.html
{
  let file = 'katalog.html';
  let c = fs.readFileSync(file, 'utf8');
  if (!c.includes('ads-lead-box')) {
    const faqRegex = /<!-- Sıkça Sorulan Sorular \(FAQ\) -->\s*<section[\s\S]*?<\/section>/;
    const faqMatch = c.match(faqRegex);
    if (faqMatch) {
      const newAds = createAdsLeadSection(
        'Katalogdaki Tasarımlar İçin Anında Atölye Fiyatı Alın',
        'Kataloğumuzda beğendiğiniz sayfa veya model numarasını, mutfak veya gardırop ölçülerinizle birlikte iletin; doğrudan imalat maliyetinizi 15 dakikada çıkaralım.',
        [
          'Membran, Lake, Akrilik ve Matplus özel ölçü imalat',
          'Ücretsiz adres keşfi, 3D mimari görselleştirme ve renk numunesi',
          'Aracısız Dudullu fabrika teslimi ve 5 yıl yazılı garanti'
        ],
        'Merhaba, 2026 katalogundan begendigim model icin fiyat teklifi almak istiyorum.',
        'Katalog İçin Fiyat Al'
      );
      c = c.replace(faqRegex, faqMatch[0] + '\n\n' + newAds);
      fs.writeFileSync(file, c, 'utf8');
      console.log('Updated katalog.html');
    }
  }
}

// index.html
{
  let file = 'index.html';
  let c = fs.readFileSync(file, 'utf8');
  if (!c.includes('ads-lead-box')) {
    const faqRegex = /<!-- SSS \(FAQ\) AKORDİYON BÖLÜMÜ[\s\S]*?<\/section>/;
    const faqMatch = c.match(faqRegex);
    if (faqMatch) {
      const newAds = createAdsLeadSection(
        'Mutfak Dolabınız İçin Anında Net Fabrika Fiyatı Alın',
        'Mutfak ölçülerinizi veya fotoğrafınızı WhatsApp hattımıza iletin; iç mimarımız 15 dakika içinde ihtiyaçlarınıza özel malzeme detaylarıyla metretül maliyetini çıkarsın.',
        [
          '18 mm E1 neme dayanıklı MDF gövde (Kastamonu / Egger)',
          'Avusturya Blum / Samet frenli ray ve menteşeler dahil',
          'İstanbul geneli ücretsiz lazer keşif ve sözleşmeli 5 yıl garanti'
        ],
        'Merhaba, mutfak dolabi projem icin olcu ve fotograf gonderiyorum. Fiyat alabilir miyim?',
        'WhatsApp\'tan Hemen Gönder'
      );
      c = c.replace(faqRegex, faqMatch[0] + '\n\n' + newAds);
      fs.writeFileSync(file, c, 'utf8');
      console.log('Updated index.html');
    }
  }
}
