const fs = require('fs');
const path = require('path');

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
  </div>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');

let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Standardize Top Bar
  // Regex to find top bar from <div class="top-bar"> until </header> or <header class="site-header">
  const topBarRegex = /<!--\s*Üst Bilgi Çubuğu[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i;
  const genericTopBarRegex = /<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>\s*(?=<!--\s*Ana Başlık|<header)/i;

  if (topBarRegex.test(content)) {
    content = content.replace(topBarRegex, standardTopBar);
  } else if (genericTopBarRegex.test(content)) {
    content = content.replace(genericTopBarRegex, standardTopBar + '\n\n  ');
  }

  // 2. Remove all .mp4 <source> tags inside <video> tags, keep ONLY webm
  // Also ensure preload="none" for PageSpeed performance
  content = content.replace(/<source[^>]*\.mp4[^>]*>\s*/gi, '');
  content = content.replace(/<video([^>]*)preload="(?:metadata|auto)"/gi, '<video$1preload="none"');
  
  // Also ensure video tags have preload="none" if missing preload
  content = content.replace(/<video((?:(?!preload=)[^>])*)>/gi, (match, attrs) => {
    if (!attrs.includes('preload=')) {
      return `<video${attrs} preload="none">`;
    }
    return match;
  });

  // Ensure video tags have title or aria-label for accessibility & SEO
  content = content.replace(/<video([^>]*)>/gi, (match, attrs) => {
    if (!attrs.includes('aria-label=') && !attrs.includes('title=')) {
      return `<video${attrs} aria-label="ÇNR Ahşap & Mobilya İmalat Atölyesi Video Gösterimi" title="ÇNR Ahşap İmalat Videosu">`;
    }
    return match;
  });

  // 3. PageSpeed: ensure all scripts have defer
  content = content.replace(/<script src="([^"]+)"(?!\s+defer)(?!\s+type="module")>/gi, '<script src="$1" defer>');

  // 4. Ensure non-hero images have loading="lazy" and decoding="async"
  // And ensure all img tags have an alt attribute
  content = content.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
    let newAttrs = attrs;

    // Check if alt attribute exists
    if (!/alt\s*=\s*["'][^"']*["']/i.test(newAttrs)) {
      newAttrs += ' alt="Özel Ölçü Mutfak ve Banyo Dolabı İmalatı Ümraniye ÇNR Ahşap"';
    } else {
      // If alt is empty, give it descriptive text
      newAttrs = newAttrs.replace(/alt\s*=\s*["']\s*["']/i, 'alt="Özel Ölçü Mutfak ve Banyo Dolabı İmalatı Ümraniye ÇNR Ahşap"');
    }

    // Add decoding="async" if not present
    if (!/decoding\s*=\s*/i.test(newAttrs)) {
      newAttrs += ' decoding="async"';
    }

    // If not a hero image, ensure loading="lazy"
    const isHero = /hero|banner/i.test(newAttrs) || /class="[^"]*hero[^"]*"/i.test(newAttrs);
    if (isHero) {
      // Hero image should NOT be lazy-loaded and should have fetchpriority="high"
      newAttrs = newAttrs.replace(/loading\s*=\s*["']lazy["']/i, '');
      if (!/fetchpriority\s*=\s*/i.test(newAttrs)) {
        newAttrs += ' fetchpriority="high"';
      }
    } else {
      if (!/loading\s*=\s*/i.test(newAttrs)) {
        newAttrs += ' loading="lazy"';
      }
    }

    return `<img ${newAttrs.trim().replace(/\s+/g, ' ')}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Total HTML files updated: ${updatedCount}`);
