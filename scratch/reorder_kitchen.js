const fs = require('fs');

const kitchenFiles = [
  'membran-mutfak-dolabi.html',
  'akrilik-mutfak-dolabi.html',
  'lake-mutfak-dolabi.html',
  'matplus-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html'
];

for (const f of kitchenFiles) {
  let c = fs.readFileSync(f, 'utf8');

  // Match ads lead section
  const adsRegex = /<!-- GOOGLE ADS ANINDA TEKLİF & KEŞİF KARTI -->[\s\S]*?<\/section>/;
  const adsMatch = c.match(adsRegex);
  if (!adsMatch) {
    console.error(f, 'ADS lead section not found');
    continue;
  }
  let adsBlock = adsMatch[0];

  // Update badge in adsBlock to exact request
  adsBlock = adsBlock.replace(
    /<div class="ads-badge-live">[\s\S]*?<\/div>/,
    `<div class="ads-badge-live">
          <span class="ads-pulse-dot"></span>
          <span>ATÖLYE TEKLİF HATTI AKTİF · 15 DAKİKADA CEVAP</span>
        </div>`
  );

  // Remove original ads block
  c = c.replace(adsRegex, '');

  // Match SEO section
  const seoRegex = /<!-- [^>]*?Kapsamlı Ticari Ürün & Teknik İmalat Rehberi[\s\S]*?<\/section>/;
  const seoMatch = c.match(seoRegex);
  if (!seoMatch) {
    console.error(f, 'SEO section not found');
    continue;
  }
  const seoBlock = seoMatch[0];

  // Remove SEO block from current position
  c = c.replace(seoRegex, '');

  // Match FAQ section
  const faqRegex = /<!-- SIKÇA SORULAN SORULAR[\s\S]*?<\/section>/;
  const faqMatch = c.match(faqRegex);
  if (!faqMatch) {
    console.error(f, 'FAQ section not found');
    continue;
  }
  const faqBlock = faqMatch[0];

  // Clean stray footer comments that were trapped between FAQ and SEO
  c = c.replace(/\s*<!-- FOOTER -->\s*<!-- ALT BİLGİ \(FOOTER - TÜM SAYFALARDA BİREBİR STANDART\) -->/g, '');

  // Target structure:
  // SEO Section -> FAQ Section -> Ads Lead Box ("ATÖLYE TEKLİF HATTI AKTİF · 15 DAKİKADA CEVAP")
  const newGroup = seoBlock + '\n\n  ' + faqBlock + '\n\n  ' + adsBlock;
  c = c.replace(faqRegex, newGroup);

  fs.writeFileSync(f, c, 'utf8');
  console.log(f, 'Successfully reordered!');
}
