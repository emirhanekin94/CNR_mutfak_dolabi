const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const { execSync } = require('child_process');
const fs = require('fs');

console.log('Converting image with FFmpeg at:', ffmpeg.path);
execSync(`"${ffmpeg.path}" -y -i "assets/images/hero/hero-kitchen-luxury.jpg" -vf "scale=1920:-1" -c:v libwebp -quality 82 "assets/images/hero/hero-kitchen-luxury.webp"`);

const stat = fs.statSync('assets/images/hero/hero-kitchen-luxury.webp');
console.log('WebP created successfully! Size:', (stat.size / 1024).toFixed(1), 'KB');
