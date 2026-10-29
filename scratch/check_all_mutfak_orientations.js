const fs = require('fs');
const path = require('path');

function getDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') {
    const chunk = buf.slice(12, 16).toString();
    if (chunk === 'VP8X') return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
    if (chunk === 'VP8 ') return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    if (chunk === 'VP8L') {
      const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
      return { w: 1 + (((b1 & 0x3f) << 8) | b0), h: 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)) };
    }
  }
  return null;
}

const ress = fs.readdirSync('assets/images/ress');
console.log('--- ALL MUTFAK IMAGES IN RESS WITH ORIENTATION ---');
ress.filter(f => /mutfak/i.test(f)).forEach(f => {
  const p = path.join('assets/images/ress', f);
  const d = getDimensions(p);
  if (d) {
    const isVert = d.h > d.w;
    console.log((isVert ? 'VERTICAL  ' : 'HORIZONTAL') + ` ${d.w}x${d.h}`.padEnd(12) + f);
  }
});

