const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const { execSync } = require('child_process');

const cardRegex = /<article class="live-gallery-card">[\s\S]*?<\/article>/g;
const cards = c.match(cardRegex) || [];

console.log('Total cards in mutfak-dolaplari:', cards.length);

cards.forEach((card, i) => {
  const imgSrc = (card.match(/src="([^"]+)"/) || [])[1];
  const title = (card.match(/<h3 class="live-gallery-title">([^<]+)<\/h3>/) || [])[1];
  
  let dims = null;
  if (imgSrc && fs.existsSync(imgSrc)) {
    const buf = fs.readFileSync(imgSrc);
    if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') {
      const chunk = buf.slice(12, 16).toString();
      if (chunk === 'VP8X') {
        dims = { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
      } else if (chunk === 'VP8 ') {
        dims = { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
      } else if (chunk === 'VP8L') {
        const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
        dims = { w: 1 + (((b1 & 0x3f) << 8) | b0), h: 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)) };
      }
    }
  }
  const ratio = dims ? (dims.w / dims.h).toFixed(2) : 'unknown';
  const type = dims ? (dims.w > dims.h ? 'HORIZONTAL' : 'VERTICAL') : 'unknown';
  console.log(`Card ${i+1}: [${type} ${ratio}] ${dims ? dims.w + 'x' + dims.h : ''} -> ${title}`);
});

