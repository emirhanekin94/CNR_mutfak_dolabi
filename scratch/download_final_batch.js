const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const downloads = [
  // 1. Camlı Kapı (Glass interior door)
  {
    url: 'https://images.pexels.com/photos/10608219/pexels-photo-10608219.jpeg',
    targetWebp: 'assets/images/kapi/camli-kapi.webp',
    targetJpg: 'assets/images/kapi/camli-kapi.jpg'
  },
  // 2. Mutfak Tezgah & Seramik (Marble countertop)
  {
    url: 'https://images.pexels.com/photos/7535035/pexels-photo-7535035.jpeg',
    targetWebp: 'assets/images/mutfak/tezgah-seramik.webp',
    targetJpg: 'assets/images/mutfak/tezgah-seramik.jpg'
  },
  // 3. Sürgülü Gardırop (Sliding wardrobe / built-in closet)
  {
    url: 'https://images.pexels.com/photos/6436758/pexels-photo-6436758.jpeg',
    targetWebp: 'assets/images/gardirop/surgulu-dolap.webp',
    targetJpg: 'assets/images/gardirop/surgulu-dolap.jpg'
  },
  // 4. Ahşap Lambri / Duvar Paneli
  {
    url: 'https://images.pexels.com/photos/11018242/pexels-photo-11018242.jpeg',
    targetWebp: 'assets/images/dekorasyon/ahsap-lambri.webp',
    targetJpg: 'assets/images/dekorasyon/ahsap-lambri.jpg'
  },
  // 5. Komodin
  {
    url: 'https://images.pexels.com/photos/4819822/pexels-photo-4819822.jpeg',
    targetWebp: 'assets/images/yatak/komodin.webp',
    targetJpg: 'assets/images/yatak/komodin.jpg'
  },
  // 6. Makyaj Masası
  {
    url: 'https://images.pexels.com/photos/6782568/pexels-photo-6782568.jpeg',
    targetWebp: 'assets/images/yatak/makyaj-masasi.webp',
    targetJpg: 'assets/images/yatak/makyaj-masasi.jpg'
  },
  // 7. Banyo Tadilat Yenileme Gerçek Fotoğrafı (Cam duş & seramik banyo tadilatı)
  {
    url: 'https://images.pexels.com/photos/4258278/pexels-photo-4258278.jpeg',
    targetWebp: 'assets/images/banyo/banyo-tadilat-real.webp',
    targetJpg: 'assets/images/banyo/banyo-tadilat-real.jpg'
  },
  // 8. Banyo Lüks Çift Lavabo Tadilat Fotoğrafı
  {
    url: 'https://images.pexels.com/photos/16501253/pexels-photo-16501253.jpeg',
    targetWebp: 'assets/images/banyo/banyo-tadilat-luks.webp',
    targetJpg: 'assets/images/banyo/banyo-tadilat-luks.jpg'
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
  console.log('--- Son Grup Gerçek Fotoğrafları İndirme ve WebP Dönüştürme Başlatıldı ---');
  for (const item of downloads) {
    const tempJpg = item.targetJpg;
    const destWebp = item.targetWebp;
    console.log(`İndiriliyor: ${path.basename(destWebp)}...`);
    try {
      await downloadFile(item.url, tempJpg);
      // Convert to WebP and scale to max 1280px width
      const cmdWebp = `"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 82 "${destWebp}"`;
      execSync(cmdWebp, { stdio: 'ignore' });
      // Scale down jpg as well to match
      const tempResizedJpg = tempJpg + '.tmp.jpg';
      const cmdJpg = `"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 85 "${tempResizedJpg}"`;
      execSync(cmdJpg, { stdio: 'ignore' });
      fs.copyFileSync(tempResizedJpg, tempJpg);
      fs.unlinkSync(tempResizedJpg);

      const statWebp = fs.statSync(destWebp);
      const statJpg = fs.statSync(tempJpg);
      console.log(`✓ Başarılı: ${path.basename(destWebp)} (${Math.round(statWebp.size / 1024)} KB) | JPG (${Math.round(statJpg.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Hata: ${path.basename(destWebp)}:`, err.message);
    }
  }
  console.log('--- Son Grup Tamamlandı! ---');
}

run();
