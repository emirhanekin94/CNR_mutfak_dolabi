const fs = require('fs');

const extraCss = `
/* ==========================================================================
   ADS & PORTFOY ZENGIN PROJE GALERISI & DILIMLERI (100% RESPONSIVE)
   ========================================================================== */
.proje-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 26px;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .proje-gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 18px;
  }
}

@media (max-width: 480px) {
  .proje-gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.proje-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.proje-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  border-color: var(--color-accent);
}

.proje-card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #1a202c;
}

.proje-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.proje-card:hover .proje-card-media img {
  transform: scale(1.05);
}

.proje-card-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 2;
}

.proje-card-badge.gold {
  background: linear-gradient(135deg, #c59b27, #9a7316);
  color: #fff;
  border: none;
}

.proje-card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.proje-card-title {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.proje-card-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.proje-card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.proje-card-tag {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
}

.proje-card-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25d366;
  color: #ffffff !important;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 10px 16px;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  width: 100%;
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.25);
}

.proje-card-btn:hover {
  background: #1eb954;
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
}

/* Google Ads Hizli Teklif & Kesif Kutusu */
.ads-conversion-banner {
  background: linear-gradient(135deg, #181d24 0%, #0e1217 100%);
  border: 1px solid rgba(197, 155, 39, 0.4);
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  margin: 28px 0 36px 0;
  color: #ffffff;
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.ads-conversion-text h3 {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  color: #ffffff;
  margin: 0 0 6px 0;
}

.ads-conversion-text p {
  color: #cbd5e1;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
}

.ads-conversion-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .ads-conversion-banner {
    padding: 22px 20px;
    flex-direction: column;
    align-items: flex-start;
  }
  .ads-conversion-actions {
    width: 100%;
  }
  .ads-conversion-actions a {
    flex: 1;
    justify-content: center;
    text-align: center;
  }
}
`;

let css = fs.readFileSync('assets/css/main.css', 'utf8');
if (!css.includes('.proje-gallery-grid')) {
  css += '\n' + extraCss;
  fs.writeFileSync('assets/css/main.css', css, 'utf8');
  console.log('Added extraCss to main.css');
}

function simpleMinify(c) {
  return c
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};:,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

const minified = simpleMinify(css);
fs.writeFileSync('assets/css/main.min.css', minified, 'utf8');
console.log('Updated main.min.css successfully!');

