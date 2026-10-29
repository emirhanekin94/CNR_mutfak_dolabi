const fs = require('fs');

// 1. UPDATE CSS IN assets/css/main.css
let css = fs.readFileSync('assets/css/main.css', 'utf8').replace(/\r\n/g, '\n');

// Desktop rules: perfectly aligned grid and cards
const oldCssBlock = `.live-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
  margin-bottom: 28px;
}

.live-gallery-card {
  background: #ffffff;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth);
  display: flex;
  flex-direction: column;
}

.live-gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

.live-gallery-media {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f8fafc;
  display: block;
}

.live-gallery-media img {
  width: 100%;
  height: auto !important;
  max-width: 100%;
  display: block;
  object-fit: contain;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: zoom-in;
}`;

const newCssBlock = `.live-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
  margin-bottom: 28px;
}

.live-gallery-card {
  background: #ffffff;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.live-gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

.live-gallery-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-in;
}

.live-gallery-media img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: zoom-in;
}

.live-gallery-card:hover .live-gallery-media img {
  transform: scale(1.05);
}`;

if (css.includes(oldCssBlock)) {
  css = css.replace(oldCssBlock, newCssBlock);
  console.log('SUCCESS: Desktop gallery CSS updated to equal-height aligned grid.');
} else {
  console.log('Notice: Could not find exact oldCssBlock, attempting targeted replacements...');
  css = css.replace(/align-items:\s*start;\s*margin-bottom:\s*28px;/g, 'align-items: stretch; margin-bottom: 28px;');
  css = css.replace(/\.live-gallery-media\s*\{[\s\S]*?cursor:\s*zoom-in;\s*\}/g, `.live-gallery-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-in;
}

.live-gallery-media img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: zoom-in;
}`);
}

// Ensure .live-gallery-text has flex-grow: 1 and .live-gallery-meta has margin-top: auto
if (!css.includes('.live-gallery-meta {\n  margin-top: auto;')) {
  css = css.replace(
`.live-gallery-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1ece4;
  padding-top: 12px;`,
`.live-gallery-meta {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1ece4;
  padding-top: 12px;`
  );
}

// Mobile rules: uncropped full natural ratio & vertical 1-column stack
const oldMobileQuery = `  /* Mobilde dikey, alt alta sıralı akış (sağa sola kaydırma yok) */
  .live-gallery-scroll-wrap {
    margin: 0;
    padding: 0;
    overflow: visible;
    width: 100%;
  }
  
  .live-gallery-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    margin-bottom: 24px;
  }
  
  .live-gallery-card {
    width: 100%;
    max-width: 100%;
    flex-shrink: 1;
    margin: 0;
  }`;

const newMobileQuery = `  /* Mobilde dikey, alt alta sıralı akış (sağa sola kaydırma yok, doğal oran) */
  .live-gallery-scroll-wrap {
    margin: 0;
    padding: 0;
    overflow: visible;
    width: 100%;
  }
  
  .live-gallery-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    margin-bottom: 24px;
  }
  
  .live-gallery-card {
    width: 100%;
    max-width: 100%;
    flex-shrink: 1;
    margin: 0;
  }

  .live-gallery-media {
    aspect-ratio: auto !important;
    height: auto !important;
    background: transparent !important;
  }

  .live-gallery-media img {
    width: 100%;
    height: auto !important;
    object-fit: contain !important;
  }`;

if (css.includes(oldMobileQuery)) {
  css = css.replace(oldMobileQuery, newMobileQuery);
  console.log('SUCCESS: Mobile query updated with uncropped natural aspect ratio.');
}

// Lightbox styling in main.css
const lightboxCss = `
/* Lightbox Modal & Navigasyon */
.custom-gallery-lightbox {
  animation: lbFadeIn 0.25s ease-out;
}
@keyframes lbFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
#lb-prev:hover, #lb-next:hover, #lb-close:hover {
  background: rgba(255, 255, 255, 0.35) !important;
  transform: translateY(-50%) scale(1.08) !important;
}
#lb-close:hover {
  transform: scale(1.08) !important;
}
@media (max-width: 768px) {
  #lb-prev { left: 8px !important; width: 44px !important; height: 44px !important; font-size: 26px !important; }
  #lb-next { right: 8px !important; width: 44px !important; height: 44px !important; font-size: 26px !important; }
}
`;

if (!css.includes('.custom-gallery-lightbox')) {
  css += '\n' + lightboxCss;
}

fs.writeFileSync('assets/css/main.css', css.replace(/\n/g, '\r\n'), 'utf8');

// Minify
function simpleMinify(c) {
  return c
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}
fs.writeFileSync('assets/css/main.min.css', simpleMinify(css), 'utf8');
console.log('assets/css/main.min.css updated and saved.');

