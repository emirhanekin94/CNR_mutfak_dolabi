const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

// 1. Convert real downloaded images to both .webp and .jpg to completely overwrite any AI placeholders
const replacements = [
  // Mutfaklar
  { src: 'assets/images/mutfak/membran-mutfak-real.webp', dstJpg: 'assets/images/mutfak/membran-mutfak.jpg', dstWebp: 'assets/images/mutfak/membran-mutfak.webp' },
  { src: 'assets/images/mutfak/lake-mutfak-real.webp', dstJpg: 'assets/images/mutfak/lake-mutfak.jpg', dstWebp: 'assets/images/mutfak/lake-mutfak.webp' },
  { src: 'assets/images/mutfak/akrilik-mutfak-real.webp', dstJpg: 'assets/images/mutfak/akrilik-mutfak.jpg', dstWebp: 'assets/images/mutfak/akrilik-mutfak.webp' },
  { src: 'assets/images/mutfak/matplus-mutfak-real.webp', dstJpg: 'assets/images/mutfak/matplus-mutfak.jpg', dstWebp: 'assets/images/mutfak/matplus-mutfak.webp' },
  { src: 'assets/images/mutfak/highgloss-mutfak-real.webp', dstJpg: 'assets/images/mutfak/highgloss-mutfak.jpg', dstWebp: 'assets/images/mutfak/highgloss-mutfak.webp' },
  { src: 'assets/images/mutfak/ada-mutfak-real.webp', dstJpg: 'assets/images/mutfak/ada-mutfak.jpg', dstWebp: 'assets/images/mutfak/ada-mutfak.webp' },
  
  // Banyolar
  { src: 'assets/images/banyo/banyo-dolabi-real.webp', dstJpg: 'assets/images/banyo/banyo-dolabi.jpg', dstWebp: 'assets/images/banyo/banyo-dolabi.webp' },
  { src: 'assets/images/banyo/ahsap-banyo-real.webp', dstJpg: 'assets/images/banyo/ahsap-banyo.jpg', dstWebp: 'assets/images/banyo/ahsap-banyo.webp' },
  { src: 'assets/images/banyo/camasir-dolabi-real.webp', dstJpg: 'assets/images/banyo/camasir-dolabi.jpg', dstWebp: 'assets/images/banyo/camasir-dolabi.webp' },
  
  // Kapılar
  { src: 'assets/images/kapi/lake-kapi-real.webp', dstJpg: 'assets/images/kapi/lake-kapi.jpg', dstWebp: 'assets/images/kapi/lake-kapi.webp' },
  { src: 'assets/images/kapi/ahsap-kapi-real.webp', dstJpg: 'assets/images/kapi/kapi-ahsap.jpg', dstWebp: 'assets/images/kapi/kapi-ahsap.webp' },

  // Dekorasyon / TV
  { src: 'assets/images/dekorasyon/tv-unitesi-real.webp', dstJpg: 'assets/images/dekorasyon/tv-unitesi.jpg', dstWebp: 'assets/images/dekorasyon/tv-unitesi.webp' }
];

console.log('--- Placeholder Görsellerini Gerçek Fotoğraflarla Güncelleme ---');
for (const item of replacements) {
  if (fs.existsSync(item.src)) {
    // WebP kopyala
    fs.copyFileSync(item.src, item.dstWebp);
    // JPG olarak da dönüştür (eski html referansları için tam uyum)
    try {
      execSync(`"${ffmpeg.path}" -y -i "${item.src}" -q:v 85 "${item.dstJpg}"`, { stdio: 'ignore' });
      console.log(`✓ Güncellendi: ${path.basename(item.dstWebp)} & ${path.basename(item.dstJpg)}`);
    } catch (e) {
      console.error('Hata:', e.message);
    }
  }
}

// 2. Kullanıcının Kendi Fotoğraflarını Temel Kategorilere Birebir Entegre Et
// fortmanto -> assets/images/dekorasyon/vestiyer.jpg & webp
if (fs.existsSync('assets/images/resim/fortmanto.webp')) {
  fs.copyFileSync('assets/images/resim/fortmanto.webp', 'assets/images/dekorasyon/vestiyer.webp');
  execSync(`"${ffmpeg.path}" -y -i "assets/images/resim/fortmanto.webp" -q:v 85 "assets/images/dekorasyon/vestiyer.jpg"`, { stdio: 'ignore' });
  console.log('✓ Kullanıcı Vestiyer/Portmanto fotoğrafı entegre edildi');
}

// giyinme_odasi -> assets/images/gardirop/giyinme-odasi.jpg & webp
if (fs.existsSync('assets/images/resim/giyinme_odasi.webp')) {
  fs.copyFileSync('assets/images/resim/giyinme_odasi.webp', 'assets/images/gardirop/giyinme-odasi.webp');
  execSync(`"${ffmpeg.path}" -y -i "assets/images/resim/giyinme_odasi.webp" -q:v 85 "assets/images/gardirop/giyinme-odasi.jpg"`, { stdio: 'ignore' });
  console.log('✓ Kullanıcı Giyinme Odası fotoğrafı entegre edildi');
}

// yatak_odasi_dolabi -> assets/images/gardirop/gardirop.jpg & webp
if (fs.existsSync('assets/images/resim/yatak_odasi_dolabi.webp')) {
  fs.copyFileSync('assets/images/resim/yatak_odasi_dolabi.webp', 'assets/images/gardirop/gardirop.webp');
  execSync(`"${ffmpeg.path}" -y -i "assets/images/resim/yatak_odasi_dolabi.webp" -q:v 85 "assets/images/gardirop/gardirop.jpg"`, { stdio: 'ignore' });
  console.log('✓ Kullanıcı Gardırop fotoğrafı entegre edildi');
}

// yatak_odasi_dolabi-1 -> assets/images/yatak/yatak-paneli.jpg & webp
if (fs.existsSync('assets/images/resim/yatak_odasi_dolabi-1.webp')) {
  fs.copyFileSync('assets/images/resim/yatak_odasi_dolabi-1.webp', 'assets/images/yatak/yatak-paneli.webp');
  execSync(`"${ffmpeg.path}" -y -i "assets/images/resim/yatak_odasi_dolabi-1.webp" -q:v 85 "assets/images/yatak/yatak-paneli.jpg"`, { stdio: 'ignore' });
  console.log('✓ Kullanıcı Yatak Odası Mobilyası fotoğrafı entegre edildi');
}

// mutfak_dolabi -> assets/images/mutfak/membran-mutfak.jpg & webp
if (fs.existsSync('assets/images/resim/mutfak_dolabi.webp')) {
  fs.copyFileSync('assets/images/resim/mutfak_dolabi.webp', 'assets/images/mutfak/membran-mutfak.webp');
  execSync(`"${ffmpeg.path}" -y -i "assets/images/resim/mutfak_dolabi.webp" -q:v 85 "assets/images/mutfak/membran-mutfak.jpg"`, { stdio: 'ignore' });
  console.log('✓ Kullanıcı Mutfak Dolabı fotoğrafı entegre edildi');
}

console.log('--- TÜM GÖRSELLER GERÇEK FOTOĞRAFLARLA DEĞİŞTİRİLDİ ---');
