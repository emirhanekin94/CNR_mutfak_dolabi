const fs = require('fs');

const districtFiles = [
  'atasehir-mutfak-dolabi.html',
  'bakirkoy-mutfak-dolabi.html',
  'basaksehir-mutfak-dolabi.html',
  'besiktas-mutfak-dolabi.html',
  'beykoz-mutfak-dolabi.html',
  'beylikduzu-mutfak-dolabi.html',
  'cekmekoy-mutfak-dolabi.html',
  'eyupsultan-mutfak-dolabi.html',
  'kadikoy-mutfak-dolabi.html',
  'kagithane-mutfak-dolabi.html',
  'kartal-mutfak-dolabi.html',
  'maltepe-mutfak-dolabi.html',
  'pendik-mutfak-dolabi.html',
  'sancaktepe-mutfak-dolabi.html',
  'sariyer-mutfak-dolabi.html',
  'sile-mutfak-dolabi.html',
  'sisli-mutfak-dolabi.html',
  'sultanbeyli-mutfak-dolabi.html',
  'tuzla-mutfak-dolabi.html',
  'umraniye-mutfak-dolabi.html',
  'uskudar-mutfak-dolabi.html'
];

for (const f of districtFiles) {
  let c = fs.readFileSync(f, 'utf8');

  // Match ads lead section: <!-- Fiyat Bilgisi & Teklif Paneli --> <section ...> ... </section>
  const adsRegex = /<!-- Fiyat Bilgisi & Teklif Paneli -->\s*<section[\s\S]*?<\/section>/;
  const adsMatch = c.match(adsRegex);
  if (!adsMatch) {
    console.error(f, 'District ads lead box not found');
    continue;
  }
  let adsBlock = adsMatch[0];

  // Update badge to: ATÖLYE TEKLİF HATTI AKTİF · 15 DAKİKADA CEVAP
  adsBlock = adsBlock.replace(
    /<div class="ads-badge-live">[\s\S]*?<\/div>/,
    `<div class="ads-badge-live">
          <span class="ads-pulse-dot"></span>
          <span>ATÖLYE TEKLİF HATTI AKTİF · 15 DAKİKADA CEVAP</span>
        </div>`
  );

  // Remove from top position
  c = c.replace(adsRegex, '');

  // Match FAQ section
  const faqRegex = /<!-- [^>]*?Sıkça Sorulan Sorular \(FAQ\) -->\s*<section[\s\S]*?<\/section>/;
  const faqMatch = c.match(faqRegex);
  if (!faqMatch) {
    console.error(f, 'District FAQ not found');
    continue;
  }
  const faqBlock = faqMatch[0];

  // Place adsBlock right after faqBlock
  const combined = faqBlock + '\n\n  ' + adsBlock;
  c = c.replace(faqRegex, combined);

  fs.writeFileSync(f, c, 'utf8');
  console.log(f, 'reordered successfully');
}
