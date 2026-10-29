const fs = require('fs');

let css = fs.readFileSync('assets/css/main.css', 'utf8');

// Replace .ads-conversion-banner styles
const oldBannerCSSRegex = /\.ads-conversion-banner\s*\{[\s\S]*?@media\s*\(max-width:\s*768px\)\s*\{\s*\.ads-conversion-banner[\s\S]*?\}\s*\}/;

const newBannerCSS = `.ads-conversion-banner {
  background: linear-gradient(135deg, #161b24 0%, #0d1117 100%);
  border: 1px solid rgba(197, 155, 63, 0.45);
  border-radius: 18px;
  padding: 30px 36px;
  margin: 10px 0 20px 0;
  color: #ffffff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(197, 155, 63, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}

.banner-badge-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.banner-gold-pill {
  background: rgba(197, 155, 63, 0.16);
  border: 1px solid rgba(197, 155, 63, 0.45);
  color: #dfb76c;
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
}

.banner-sub-pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e2e8f0;
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.ads-conversion-text {
  max-width: 680px;
}

.ads-conversion-text h3 {
  font-family: var(--font-serif);
  font-size: 1.65rem;
  color: #ffffff;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.ads-conversion-text p {
  color: #cbd5e1;
  font-size: 0.96rem;
  margin: 0;
  line-height: 1.6;
}

.ads-conversion-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

@media (max-width: 768px) {
  .ads-conversion-banner {
    padding: 24px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .ads-conversion-actions {
    width: 100%;
  }
  .ads-conversion-actions a {
    flex: 1;
    justify-content: center;
    text-align: center;
  }
}`;

if (oldBannerCSSRegex.test(css)) {
  css = css.replace(oldBannerCSSRegex, newBannerCSS);
  console.log('Replaced banner CSS successfully.');
} else {
  console.log('Banner CSS regex did not match, appending newBannerCSS');
  css += '\n' + newBannerCSS;
}

// Replace .proje-card styles
const oldCardCSSRegex = /\.proje-gallery-grid\s*\{[\s\S]*?\.proje-card-btn:active\s*\{[\s\S]*?\}\s*\}/;

const newProjeCardCSS = `.proje-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 28px;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .proje-gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .proje-gallery-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

.proje-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
}

.proje-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
  border-color: rgba(197, 155, 63, 0.55);
}

.proje-card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  background: #0f172a;
}

.proje-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.proje-card:hover .proje-card-media img {
  transform: scale(1.06);
}

.proje-card-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 700;
  padding: 5px 13px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 2;
}

.proje-card-badge.gold {
  background: linear-gradient(135deg, rgba(197, 155, 63, 0.95), rgba(161, 122, 36, 0.95));
  border: 1px solid rgba(255, 230, 160, 0.4);
  color: #ffffff;
}

.proje-card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.proje-card-title {
  font-size: 1.12rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
  line-height: 1.35;
}

.proje-card-desc {
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.proje-card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}

.proje-card-tag {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.74rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
}

.proje-card-footer {
  margin-top: auto;
}

.proje-card-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 18px;
  background: linear-gradient(135deg, #25d366 0%, #1ea952 100%);
  color: #ffffff !important;
  font-size: 0.88rem;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 3px 10px rgba(37, 211, 102, 0.25);
  transition: all 0.3s ease;
}

.proje-card-btn:hover {
  background: linear-gradient(135deg, #22bf5b 0%, #178a42 100%);
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
  transform: translateY(-2px);
}

.proje-card-btn svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}`;

if (oldCardCSSRegex.test(css)) {
  css = css.replace(oldCardCSSRegex, newProjeCardCSS);
  console.log('Replaced proje-card CSS successfully.');
} else {
  console.log('Proje-card CSS regex did not match, appending newProjeCardCSS');
  css += '\n' + newProjeCardCSS;
}

// Update door sample frame CSS
const oldDoorSampleFrameRegex = /\/\* Kapak Türü Görsel Çerçevesi ve Ayırt Edici Rozet \*\/[\s\S]*?\.door-sample-badge\s*\{[\s\S]*?\}/;

const newDoorSampleFrame = `/* Kapak Türü Görsel Çerçevesi ve Ayırt Edici Rozet (Ultra Premium) */
.door-sample-frame {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: #f8fafc;
}

.door-sample-frame img {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.door-sample-frame:hover img {
  transform: scale(1.03);
}

.door-sample-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(15, 23, 42, 0.86);
  backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 7px 16px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  z-index: 2;
}`;

if (oldDoorSampleFrameRegex.test(css)) {
  css = css.replace(oldDoorSampleFrameRegex, newDoorSampleFrame);
  console.log('Replaced door-sample-frame CSS successfully.');
}

fs.writeFileSync('assets/css/main.css', css, 'utf8');

// Minify
function minifyCSS(raw) {
  return raw
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

const minified = minifyCSS(css);
fs.writeFileSync('assets/css/main.min.css', minified, 'utf8');
console.log('assets/css/main.min.css updated! Length:', minified.length);

