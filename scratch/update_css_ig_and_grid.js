const fs = require('fs');

let css = fs.readFileSync('assets/css/main.css', 'utf8');

const replacementStr = `.mobile-bottom-btn.btn-wa-sticky:active {
  background: #20bd5a;
}

.mobile-bottom-btn.btn-ig-sticky {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 4px 14px rgba(225, 48, 108, 0.4) !important;
}

.mobile-bottom-btn.btn-ig-sticky svg {
  fill: #ffffff !important;
  color: #ffffff !important;
}

.mobile-bottom-btn.btn-ig-sticky span {
  color: #ffffff !important;
  font-weight: 700 !important;
}

.mobile-bottom-btn.btn-ig-sticky:active {
  opacity: 0.92;
  transform: scale(0.97);
}

/* Masaustunde sirali sag-sol, mobilde ise kesinlikle [Baslik/Metin -> Fotograf] sirasi */
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
  /* Eger eski kodda reverse kalmissa mobilde gorseli metnin altina at */
  .grid-2-col.reverse > div:first-child {
    order: 2 !important;
  }
  .grid-2-col.reverse > div:last-child {
    order: 1 !important;
  }
}

/* Kapak Turu Gorsel Cercevesi ve Ayirt Edici Rozet */
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
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
}
`;

css = css.replace(
  /\.mobile-bottom-btn\.btn-wa-sticky:active\s*\{[^}]*\}\s*/,
  replacementStr + '\n\n'
);

fs.writeFileSync('assets/css/main.css', css, 'utf8');
console.log('main.css updated with btn-ig-sticky and desktop-reverse rules!');

// Re-minify
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
console.log('main.min.css updated and minified successfully!');
