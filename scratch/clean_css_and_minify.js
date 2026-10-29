const fs = require('fs');

let css = fs.readFileSync('assets/css/main.css', 'utf8');

// Target block to replace:
const targetStart = '/* Masaustunde sirali sag-sol, mobilde ise kesinlikle [Baslik/Metin -> Fotograf] sirasi */';
const targetEnd = '.categories-grid {';

const startIndex = css.indexOf(targetStart);
const endIndex = css.indexOf(targetEnd);

if (startIndex === -1 || endIndex === -1) {
  console.error('Target boundary not found in assets/css/main.css');
  process.exit(1);
}

const cleanedGridAndFrameBlock = `/* ==========================================================================
   2 KOLONLU DÜZEN & AYIRT EDİCİ GÖRSEL ÇERÇEVELERİ
   Masaüstünde dengeli zikzak (sağ-sol), Mobilde kesinlikle [Başlık/Metin -> Görsel] sırası
   ========================================================================== */
.grid-2-col {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
}

.grid-2-col.reverse {
  grid-template-columns: 0.85fr 1.15fr;
}

@media (min-width: 993px) {
  .grid-2-col.desktop-reverse {
    grid-template-columns: 0.85fr 1.15fr;
  }
  .grid-2-col.desktop-reverse > .section-text-col {
    order: 2;
  }
  .grid-2-col.desktop-reverse > .section-media-col {
    order: 1;
  }
}

@media (max-width: 992px) {
  .grid-2-col,
  .grid-2-col.reverse,
  .grid-2-col.desktop-reverse {
    display: flex !important;
    flex-direction: column !important;
    gap: 24px !important;
  }
  /* Mobilde Başlık/Metin her zaman üstte (1), Görsel her zaman altta (2) */
  .grid-2-col > .section-text-col,
  .grid-2-col.desktop-reverse > .section-text-col,
  .grid-2-col.reverse > .section-text-col {
    order: 1 !important;
  }
  .grid-2-col > .section-media-col,
  .grid-2-col.desktop-reverse > .section-media-col,
  .grid-2-col.reverse > .section-media-col {
    order: 2 !important;
  }
  /* Eski kodda düz div kalmışsa */
  .grid-2-col.reverse > div:first-child {
    order: 2 !important;
  }
  .grid-2-col.reverse > div:last-child {
    order: 1 !important;
  }
}

/* Kapak Türü Görsel Çerçevesi ve Ayırt Edici Rozet */
.door-sample-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: #f8fafc;
}

.door-sample-frame img {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

.door-sample-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

`;

css = css.substring(0, startIndex) + cleanedGridAndFrameBlock + css.substring(endIndex);
fs.writeFileSync('assets/css/main.css', css, 'utf8');
console.log('assets/css/main.css updated cleanly!');

// Simple robust minifier for CSS:
function minifyCSS(raw) {
  return raw
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ')             // Collapse whitespace
    .replace(/\s*([{}:;,>])\s*/g, '$1') // Remove spaces around delimiters
    .replace(/;}/g, '}')              // Remove trailing semicolons
    .trim();
}

const minified = minifyCSS(css);
fs.writeFileSync('assets/css/main.min.css', minified, 'utf8');
console.log('assets/css/main.min.css successfully updated! Length:', minified.length);

