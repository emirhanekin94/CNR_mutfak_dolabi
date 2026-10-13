const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const videoDir = path.join(__dirname, 'assets', 'videos');
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

console.log('--- Otomatik Video Dönüştürücü Başlatıldı ---');
console.log('Video Dizini:', videoDir);

// Desteklenen girdi uzantıları
const inputExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.wmv', '.m4v'];

const files = fs.readdirSync(videoDir);
let convertedCount = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  if (inputExtensions.includes(ext) && !file.endsWith('.webm')) {
    const inputPath = path.join(videoDir, file);
    const outputWebm = path.join(videoDir, `${baseName}.webm`);
    const posterJpg = path.join(videoDir, `${baseName}-poster.webp`);

    console.log(`\nİşleniyor: ${file} -> ${baseName}.webm`);

    try {
      // 1. WebM Dönüştürme (VP9 / hafif, ses sıkıştırmalı veya sessiz web optimizasyonlu)
      const convertCmd = `"${ffmpeg.path}" -y -i "${inputPath}" -c:v libvpx-vp9 -b:v 1500k -crf 32 -c:a libopus -b:a 96k "${outputWebm}"`;
      console.log('Dönüştürülüyor (WebM)...');
      execSync(convertCmd, { stdio: 'inherit' });

      // 2. İlk saniyeden hafif WebP poster karesi alma (Sayfa açılış hızı için)
      if (!fs.existsSync(posterJpg)) {
        console.log('Poster karesi oluşturuluyor (WebP)...');
        const posterCmd = `"${ffmpeg.path}" -y -ss 00:00:01 -i "${inputPath}" -vframes 1 -vf "scale=1280:-1" "${posterJpg}"`;
        execSync(posterCmd, { stdio: 'ignore' });
      }

      console.log(`Tamamlandı: ${baseName}.webm ve poster görseli hazır!`);
      convertedCount++;
    } catch (err) {
      console.error(`Dönüştürme hatası (${file}):`, err.message);
    }
  }
}

if (convertedCount === 0) {
  console.log('\nDönüştürülecek yeni MP4/MOV videosu bulunamadı.');
  console.log('Videolarınızı assets/videos/ klasörüne ekleyip tekrar çalıştırabilirsiniz.');
} else {
  console.log(`\nToplam ${convertedCount} video başarıyla WebM formatına dönüştürüldü!`);
}
