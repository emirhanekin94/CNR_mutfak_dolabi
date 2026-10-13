const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const downloads = [
  // 1. Mutfaklar
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Modern_Kitchen.jpg',
    targetWebp: 'assets/images/mutfak/modern-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/modern-mutfak-real.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Modern_Kitchen_Design_in_the_USA.jpg',
    targetWebp: 'assets/images/mutfak/lake-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/lake-mutfak-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/29713266/pexels-photo-29713266.jpeg',
    targetWebp: 'assets/images/mutfak/akrilik-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/akrilik-mutfak-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/7166645/pexels-photo-7166645.jpeg',
    targetWebp: 'assets/images/mutfak/matplus-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/matplus-mutfak-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg',
    targetWebp: 'assets/images/mutfak/highgloss-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/highgloss-mutfak-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/6210570/pexels-photo-6210570.jpeg',
    targetWebp: 'assets/images/mutfak/ada-mutfak-real.webp',
    targetJpg: 'assets/images/mutfak/ada-mutfak-real.jpg'
  },
  // 2. Banyolar
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Modern_Bathroom_Designs.jpg',
    targetWebp: 'assets/images/banyo/banyo-dolabi-real.webp',
    targetJpg: 'assets/images/banyo/banyo-dolabi-real.jpg'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Modern_Bathroom_Countertop.jpg',
    targetWebp: 'assets/images/banyo/ahsap-banyo-real.webp',
    targetJpg: 'assets/images/banyo/ahsap-banyo-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/30986990/pexels-photo-30986990.jpeg',
    targetWebp: 'assets/images/banyo/luks-banyo-real.webp',
    targetJpg: 'assets/images/banyo/luks-banyo-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/16501253/pexels-photo-16501253.jpeg',
    targetWebp: 'assets/images/banyo/camasir-dolabi-real.webp',
    targetJpg: 'assets/images/banyo/camasir-dolabi-real.jpg'
  },
  // 3. Kapılar
  {
    url: 'https://images.pexels.com/photos/10608219/pexels-photo-10608219.jpeg',
    targetWebp: 'assets/images/kapi/lake-kapi-real.webp',
    targetJpg: 'assets/images/kapi/lake-kapi-real.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/7533836/pexels-photo-7533836.jpeg',
    targetWebp: 'assets/images/kapi/ahsap-kapi-real.webp',
    targetJpg: 'assets/images/kapi/ahsap-kapi-real.jpg'
  },
  // 4. Dekorasyon / TV Ünitesi
  {
    url: 'https://images.pexels.com/photos/3423817/pexels-photo-3423817.jpeg',
    targetWebp: 'assets/images/dekorasyon/tv-unitesi-real.webp',
    targetJpg: 'assets/images/dekorasyon/tv-unitesi-real.jpg'
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
  console.log('--- Gerçek Fotoğrafları İndirme & WebP Dönüştürme Başlatıldı ---');
  for (const item of downloads) {
    const dir = path.dirname(item.targetWebp);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const tempJpg = item.targetJpg;
    console.log(`İndiriliyor: ${path.basename(item.targetWebp)}...`);
    try {
      await downloadFile(item.url, tempJpg);
      // FFmpeg ile WebP formatına dönüştür ve optimize et
      const cmd = `"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 82 "${item.targetWebp}"`;
      execSync(cmd, { stdio: 'ignore' });
      // JPG yedeğini de güncelle
      const cmdJpg = `"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 85 "${item.targetJpg}"`;
      execSync(cmdJpg, { stdio: 'ignore' });
      const stat = fs.statSync(item.targetWebp);
      console.log(`✓ Başarılı: ${path.basename(item.targetWebp)} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Hata (${item.url}):`, err.message);
    }
  }
  console.log('--- Tüm gerçek fotoğraflar indirildi ve WebP yapıldı! ---');
}

run();
