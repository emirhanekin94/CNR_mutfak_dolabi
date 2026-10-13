const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');

const standardLogo = `<a href="index.html" class="site-logo">
        <span class="brand-name">ÇNR MOBİLYA</span>
        <span class="brand-tagline">Mutfak & Ahşap Atölyesi • Ümraniye</span>
      </a>`;

let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Match the desktop header site-logo specifically inside site-header
  const headerRegex = /(<header class=["']site-header["']>[\s\S]*?<div class=["']container header-inner["']>[\s\S]*?)(<a href=["'][^"']*["'] class=["']site-logo["']>[\s\S]*?<\/a>)/i;
  
  if (headerRegex.test(content)) {
    const newContent = content.replace(headerRegex, (match, prefix, oldLogo) => {
      return prefix + standardLogo;
    });
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      updated++;
      console.log('Standardized logo in:', file);
    }
  } else {
    console.log('HEADER NOT MATCHED in:', file);
  }
}

console.log('Total files updated:', updated);
