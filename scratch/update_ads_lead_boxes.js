const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updated = 0;

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  if (!c.includes('ads-lead-box')) continue;

  const boxRegex = /<div class="ads-lead-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
  const match = c.match(boxRegex);
  if (!match) {
    console.warn('No match in', f);
    continue;
  }

  const boxContent = match[0];
  // extract heading
  const hMatch = boxContent.match(/<(h[23])[^>]*>([\s\S]*?)<\/\1>/);
  const pMatch = boxContent.match(/<p[^>]*color:\s*#c4ccd4[^>]*>([\s\S]*?)<\/p>/);

  const headingText = hMatch ? hMatch[2].replace(/\s+/g, ' ').trim() : 'Mutfak Dolabınız İçin Anında Net Fabrika Fiyatı Alın';
  const descText = pMatch ? pMatch[1].replace(/\s+/g, ' ').trim() : 'Mutfak ölçülerinizi veya fotoğrafınızı iletin; iç mimarımız 15 dakika içinde ihtiyaçlarınıza özel malzeme detaylarıyla metretül maliyetini çıkarsın.';

  const newBoxHtml = `<div class="ads-lead-box">
        <div class="ads-badge-live">
          <span class="ads-pulse-dot"></span>
          <span>ATÖLYE DANIŞMA HATTI AKTİF · 15 DAKİKADA CEVAP</span>
        </div>
        <div class="ads-lead-content">
          <h2 class="ads-lead-title">
            ${headingText}
          </h2>
          <p class="ads-lead-desc">
            ${descText}
          </p>
          <div class="ads-lead-badges">
            <span class="ads-lead-badge-item"><strong>✓</strong> 18 mm E1 Neme Dayanıklı MDF Gövde</span>
            <span class="ads-lead-badge-item"><strong>✓</strong> Blum & Samet Frenli Mekanizma Standart</span>
            <span class="ads-lead-badge-item"><strong>✓</strong> İstanbul Geneli Ücretsiz Yerinde Lazer Keşif</span>
            <span class="ads-lead-badge-item"><strong>✓</strong> Sözleşmeli 5 Yıl Tam İmalatçı Garantisi</span>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  c = c.replace(boxRegex, newBoxHtml);
  fs.writeFileSync(f, c, 'utf8');
  updated++;
}

console.log(`Successfully transformed ads-lead-box in ${updated} files.`);
