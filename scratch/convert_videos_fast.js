const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const videoSrcDir = path.join(__dirname, '..', 'assets', 'images', 'video');
const videoOutDir = path.join(__dirname, '..', 'assets', 'videos');

if (!fs.existsSync(videoOutDir)) {
  fs.mkdirSync(videoOutDir, { recursive: true });
}

const files = fs.readdirSync(videoSrcDir).filter(f => f.endsWith('.mp4'));
console.log('Bulunan videolar:', files.length);

for (const f of files) {
  const baseName = path.basename(f, '.mp4');
  const inputPath = path.join(videoSrcDir, f);
  const outWebm = path.join(videoOutDir, `${baseName}.webm`);
  const outPoster = path.join(videoOutDir, `${baseName}-poster.webp`);

  console.log(`\n>>> İşleniyor: ${f}`);

  // 1. Poster karesi üret
  if (!fs.existsSync(outPoster)) {
    try {
      execSync(`"${ffmpeg.path}" -y -ss 00:00:01 -i "${inputPath}" -vframes 1 -vf "scale=1280:-1" "${outPoster}"`, { stdio: 'ignore' });
      console.log(`  ✓ Poster üretildi: ${baseName}-poster.webp`);
    } catch (e) {
      console.error('  ✗ Poster hatası:', e.message);
    }
  }

  // 2. Hızlı WebM dönüşümü (-deadline realtime -cpu-used 8)
  console.log(`  Hızlı WebM dönüştürülüyor...`);
  try {
    const cmd = `"${ffmpeg.path}" -y -i "${inputPath}" -c:v libvpx-vp9 -b:v 1500k -crf 32 -deadline realtime -cpu-used 8 -an "${outWebm}"`;
    execSync(cmd, { stdio: 'ignore' });
    const stat = fs.statSync(outWebm);
    console.log(`  ✓ WebM hazır: ${baseName}.webm (${Math.round(stat.size / 1024)} KB)`);
  } catch (e) {
    console.error('  ✗ WebM dönüştürme hatası:', e.message);
  }
}

console.log('\n=== TÜM VİDEOLAR DÖNÜŞTÜRÜLDÜ ===');
