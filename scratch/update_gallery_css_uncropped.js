const fs = require('fs');

let css = fs.readFileSync('assets/css/main.css', 'utf8').replace(/\r\n/g, '\n');

// 1. Update .live-gallery-grid desktop to align-items: start
css = css.replace(
`.live-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 28px;
}`,
`.live-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
  margin-bottom: 28px;
}`
);

// 2. Update .live-gallery-media and .live-gallery-media img (NO CROPPING!)
const oldMediaBlock = `.live-gallery-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #181d24;
}

.live-gallery-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: zoom-in;
}`;

const newMediaBlock = `.live-gallery-media {
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

if (css.includes(oldMediaBlock)) {
  css = css.replace(oldMediaBlock, newMediaBlock);
  console.log('Updated .live-gallery-media to uncropped natural aspect ratio');
} else {
  console.error('Still could not find oldMediaBlock in normalized main.css!');
}

// 3. Update door-sample-frame img to not crop
css = css.replace(
`.door-sample-frame img {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}`,
`.door-sample-frame img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}`
);

// 4. Update @media (max-width: 768px) mobile behavior: VERTICAL ALT ALTA, NO HORIZONTAL SCROLL!
const oldMobileScroll = `  .gallery-swipe-hint {
    display: block;
    margin-bottom: 10px;
    letter-spacing: 0.3px;
  }
  
  /* Mobilde akıcı yatay kaydırma */
  .live-gallery-scroll-wrap {
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    padding-bottom: 12px;
  }
  
  .live-gallery-scroll-wrap::-webkit-scrollbar {
    display: none;
  }
  
  .live-gallery-grid {
    display: flex;
    flex-wrap: nowrap;
    gap: 14px;
    width: max-content;
    margin-bottom: 14px;
  }
  
  .live-gallery-card {
    width: 285px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }`;

const newMobileScroll = `  .gallery-swipe-hint {
    display: none !important;
  }
  
  /* Mobilde dikey, alt alta sıralı akış (sağa sola kaydırma yok) */
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

if (css.includes(oldMobileScroll)) {
  css = css.replace(oldMobileScroll, newMobileScroll);
  console.log('Updated mobile CSS to vertical column (alt alta)');
} else {
  console.error('Still could not find oldMobileScroll in normalized main.css!');
}

// Convert back to CRLF for Windows consistency
fs.writeFileSync('assets/css/main.css', css.replace(/\n/g, '\r\n'), 'utf8');

// Minify simple
function simpleMinify(c) {
  return c
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

fs.writeFileSync('assets/css/main.min.css', simpleMinify(css), 'utf8');
console.log('main.min.css generated successfully.');
