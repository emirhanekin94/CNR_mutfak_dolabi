const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const videoSrcDir = path.join(__dirname, '..', 'assets', 'images', 'video');
const videoOutDir = path.join(__dirname, '..', 'assets', 'videos');

if (!fs.existsSync(videoOutDir)) {
  fs.mkdirSync(videoOutDir, { recursive: true });
}

console.log('--- Video Dönüştürme Başlatıldı ---');
console.log('Kaynak Dizin:', videoSrcDir);
console.log('Çıkış Dizini:', videoOutDir);

const files = fs.readdirSync(videoSrcDir).filter(f => f.endsWith('.mp4'));
console.log(`Bulunan MP4 videolar (${files.length} adet):`, files.join(', '));

for (const f of files) {
  const baseName = path.basename(f, '.mp4');
  const inputPath = path.join(videoSrcDir, f);
  const outWebm = path.join(videoOutDir, `${baseName}.webm`);
  const outPoster = path.join(videoOutDir, `${baseName}-poster.webp`);

  console.log(`\n>>> İşleniyor: ${f}`);
  
  // 1. WebM dönüştürme (hızlı, yüksek uyumlu VP9 + web optimizasyonu)
  if (!fs.existsSync(outWebm)) {
    console.log(`WebM kodlanıyor -> ${baseName}.webm`);
    const cmd = `"${ffmpeg.path}" -y -i "${inputPath}" -c:v libvpx-vp9 -b:v 1400k -crf 33 -c:a libopus -b:a 96k "${outWebm}"`;
    try {
      execSync(cmd, { stdio: 'inherit' });
      console.log(`WebM hazır!`);
    } catch (err) {
      console.error(`WebM dönüştürme hatası:`, err.message);
    }
  } else {
    console.log(`WebM zaten mevcut: ${baseName}.webm`);
  }

  // 2. Poster karesi (1. saniyeden WebP)
  if (!fs.existsSync(outPoster)) {
    console.log(`Poster üretiliyor -> ${baseName}-poster.webp`);
    const posterCmd = `"${ffmpeg.path}" -y -ss 00:00:01 -i "${inputPath}" -vframes 1 -vf "scale=1280:-1" "${outPoster}"`;
    try {
      execSync(posterCmd, { stdio: 'ignore' });
      console.log(`Poster hazır!`);
    } catch (err) {
      console.error(`Poster hatası:`, err.message);
    }
  } else {
    console.log(`Poster zaten mevcut: ${baseName}-poster.webp`);
  }
}

console.log('\n--- Tüm videolar başarıyla işlendi! ---');
