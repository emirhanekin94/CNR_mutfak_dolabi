const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const additional = [
  // Mutfaklar
  {
    url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    targetWebp: 'assets/images/mutfak/modern-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/modern-mutfak-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
    targetWebp: 'assets/images/mutfak/lake-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/lake-mutfak-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    targetWebp: 'assets/images/mutfak/membran-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/membran-mutfak-real.jpg'
  },
  // Banyolar
  {
    url: 'https://images.pexels.com/photos/8381834/pexels-photo-8381834.jpeg',
    targetWebp: 'assets/images/banyo/banyo-dolabi-real.webp',
    targetJpg: 'assets/images/banyo/banyo-dolabi-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/6238612/pexels-photo-6238612.jpeg',
    targetWebp: 'assets/images/banyo/ahsap-banyo-real.webp',
    targetJpg: 'assets/images/banyo/ahsap-banyo-real.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };
    https.get(url, options, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Status ${response.statusCode} for ${url}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('--- Ek Gerçek Fotoğrafları İndirme Başlatıldı ---');
  for (const item of additional) {
    const tempJpg = item.targetJpg;
    console.log(`İndiriliyor: ${path.basename(item.targetWebp)}...`);
    try {
      await downloadFile(item.url, tempJpg);
      const cmd = `"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 82 "${item.targetWebp}"`;
      execSync(cmd, { stdio: 'ignore' });
      const stat = fs.statSync(item.targetWebp);
      console.log(`✓ Başarılı: ${path.basename(item.targetWebp)} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Hata:`, err.message);
    }
  }
  console.log('--- Tamamlandı! ---');
}

run();
