const fs = require('fs');
const path = require('path');

// Read first few bytes of WebP/JPEG to get width and height
function getDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  // Simple WebP VP8/VP8L/VP8X parser
  if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') {
    const chunk = buf.slice(12, 16).toString();
    if (chunk === 'VP8X') {
      const w = 1 + buf.readUIntLE(24, 3);
      const h = 1 + buf.readUIntLE(27, 3);
      return { width: w, height: h };
    }
    if (chunk === 'VP8 ') {
      // Keyframe header
      const w = buf.readUInt16LE(26) & 0x3fff;
      const h = buf.readUInt16LE(28) & 0x3fff;
      return { width: w, height: h };
    }
    if (chunk === 'VP8L') {
      const b0 = buf[21];
      const b1 = buf[22];
      const b2 = buf[23];
      const b3 = buf[24];
      const w = 1 + (((b1 & 0x3f) << 8) | b0);
      const h = 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      return { width: w, height: h };
    }
  }
  return null;
}

const ressDir = 'assets/images/ress';
const files = fs.readdirSync(ressDir);
console.log('Sample image dimensions:');
files.slice(0, 15).forEach(f => {
  const p = path.join(ressDir, f);
  const dims = getDimensions(p);
  console.log(f, dims);
});

