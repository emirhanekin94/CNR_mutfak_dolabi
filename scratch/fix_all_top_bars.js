const fs = require('fs');

const standardTopBar = `  <!-- Üst Bilgi Çubuğu (Top Bar) -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-badge">
        <span>📍 Ümraniye Atölyemizden İstanbul Geneline Aracısız İmalat & Ücretsiz Keşif</span>
      </div>
      <div class="top-bar-links">
        <a href="tel:+905336173755" class="top-bar-link">📞 0533 617 37 55</a>
        <a href="https://maps.app.goo.gl/QAGTGZNpzLp7gjTRA" target="_blank" rel="noopener" class="top-bar-link">🗺️ Haritada Gör</a>
        <a href="katalog.html" class="top-bar-link">📖 E-Katalog İncele</a>
        <a href="https://instagram.com/cinarahsapurunleri?cplk=ZTR0YmgyczRkOTB4" target="_blank" rel="noopener" class="top-bar-link" title="CNR Ahşap Instagram"><span class="top-icon">📸</span> @cinarahsapurunleri</a>
      </div>
    </div>
  </div>\n\n`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');

let fixed = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Match from <!-- Top Bar --> or <div class="top-bar"> until <header class="site-header">
  const regex = /(?:<!--\s*Top Bar\s*-->\s*)?<div class="top-bar">[\s\S]*?(?=\s*<!--\s*Header\s*-->|\s*<!--\s*Ana Başlık|\s*<header class="site-header">)/i;
  
  if (regex.test(content)) {
    content = content.replace(regex, standardTopBar);
    fs.writeFileSync(f, content, 'utf8');
    fixed++;
    console.log('Fixed top-bar in:', f);
  } else {
    console.log('Regex did NOT match in:', f);
  }
});

console.log(`Total files updated: ${fixed}`);
