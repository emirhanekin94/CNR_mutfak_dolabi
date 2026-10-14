const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ffmpegPath = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

function convertWebpToJpg(webpPath, jpgPath) {
  try {
    if (fs.existsSync(jpgPath)) {
      fs.unlinkSync(jpgPath);
    }
    execFileSync(ffmpegPath, ['-y', '-i', webpPath, '-q:v', '2', jpgPath], { stdio: 'ignore' });
    console.log(`Converted: ${webpPath} -> ${jpgPath}`);
  } catch (err) {
    console.error(`Failed to convert ${webpPath} to JPG:`, err.message);
  }
}

function copyFile(src, dst) {
  const dir = path.dirname(dst);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.copyFileSync(src, dst);
  console.log(`Copied: ${src} -> ${dst}`);
}

const syncPlans = [
  // 1. Akrilik Kapak (User's high gloss photo)
  {
    srcWebp: 'assets/images/en_yeni_resim/Akrilik-kapak.webp',
    targetsWebp: [
      'assets/images/mutfak/akrilik-mutfak.webp',
      'assets/images/mutfak/akrilik-kapak.webp',
      'assets/images/mutfak/akrilik-mutfak-real.webp',
      'assets/images/Akrilik-kapak.webp'
    ],
    targetsJpg: [
      'assets/images/mutfak/akrilik-mutfak.jpg',
      'assets/images/mutfak/akrilik-mutfak-real.jpg'
    ]
  },
  // 2. Matplus Kapak (User's matte nano photo)
  {
    srcWebp: 'assets/images/en_yeni_resim/matplus-kapak.webp',
    targetsWebp: [
      'assets/images/mutfak/matplus-mutfak.webp',
      'assets/images/mutfak/matplus-kapak.webp',
      'assets/images/mutfak/matplus-mutfak-real.webp',
      'assets/images/matplus-kapak.webp'
    ],
    targetsJpg: [
      'assets/images/mutfak/matplus-mutfak.jpg',
      'assets/images/mutfak/matplus-mutfak-real.jpg'
    ]
  },
  // 3. Lake Kapak (User's white lacquer shaker photo)
  {
    srcWebp: 'assets/images/en_yeni_resim/lake-kapak.webp',
    targetsWebp: [
      'assets/images/mutfak/lake-mutfak.webp',
      'assets/images/mutfak/lake-kapak.webp',
      'assets/images/mutfak/lake-mutfak-real.webp',
      'assets/images/lake-kapak.webp'
    ],
    targetsJpg: [
      'assets/images/mutfak/lake-mutfak.jpg',
      'assets/images/mutfak/lake-mutfak-real.jpg'
    ]
  },
  // 4. Membran Kapak (User's country grey shaker photo)
  {
    srcWebp: 'assets/images/en_yeni_resim/membran-kapak.webp',
    targetsWebp: [
      'assets/images/mutfak/membran-mutfak.webp',
      'assets/images/mutfak/membran-kapak.webp',
      'assets/images/mutfak/membran-mutfak-real.webp',
      'assets/images/membran-kapak.webp'
    ],
    targetsJpg: [
      'assets/images/mutfak/membran-mutfak.jpg',
      'assets/images/mutfak/membran-mutfak-real.jpg'
    ]
  },
  // 5. High Gloss Kapak (User's glossy two-tone photo)
  {
    srcWebp: 'assets/images/en_yeni_resim/high-gloss-kapak.webp',
    targetsWebp: [
      'assets/images/mutfak/highgloss-mutfak.webp',
      'assets/images/mutfak/high-gloss-kapak.webp',
      'assets/images/mutfak/highgloss-mutfak-real.webp',
      'assets/images/high-gloss-kapak.webp'
    ],
    targetsJpg: [
      'assets/images/mutfak/highgloss-mutfak.jpg',
      'assets/images/mutfak/highgloss-mutfak-real.jpg'
    ]
  },
  // 6. Mutfak Dolapları & Ada Mutfak
  {
    srcWebp: 'assets/images/en_yeni_resim/mutfak-dolaplari.webp',
    targetsWebp: [
      'assets/images/mutfak/mutfak-dolaplari.webp',
      'assets/images/mutfak/ada-mutfak.webp',
      'assets/images/mutfak/ada-mutfak-real.webp',
      'assets/images/mutfak-dolaplari.webp'
    ],
    targetsJpg: [
      'assets/images/mutfak/ada-mutfak.jpg',
      'assets/images/mutfak/ada-mutfak-real.jpg'
    ]
  },
  // 7. Mutfak Dekorasyonu
  {
    srcWebp: 'assets/images/en_yeni_resim/mutfak-dekorasyonu.webp',
    targetsWebp: [
      'assets/images/mutfak/mutfak-dekorasyonu.webp',
      'assets/images/mutfak-dekorasyonu.webp'
    ],
    targetsJpg: []
  },
  // 8. Banyo Dolabı
  {
    srcWebp: 'assets/images/en_yeni_resim/banyo-dolabi.webp',
    targetsWebp: [
      'assets/images/banyo/banyo-dolabi.webp',
      'assets/images/banyo/banyo-dolabi-real.webp',
      'assets/images/banyo-dolabi.webp'
    ],
    targetsJpg: [
      'assets/images/banyo/banyo-dolabi.jpg',
      'assets/images/banyo/banyo-dolabi-real.jpg'
    ]
  },
  // 9. Asma Banyo Dolabı
  {
    srcWebp: 'assets/images/en_yeni_resim/asma-banyo-dolabi.webp',
    targetsWebp: [
      'assets/images/banyo/asma-banyo-dolabi.webp',
      'assets/images/banyo/ahsap-banyo.webp',
      'assets/images/banyo/ahsap-banyo-real.webp',
      'assets/images/asma-banyo-dolabi.webp'
    ],
    targetsJpg: [
      'assets/images/banyo/ahsap-banyo.jpg',
      'assets/images/banyo/ahsap-banyo-real.jpg'
    ]
  },
  // 10. Gardırop & Yatak Odası
  {
    srcWebp: 'assets/images/en_yeni_resim/gardirop-yatak-odasi.webp',
    targetsWebp: [
      'assets/images/gardirop/gardirop.webp',
      'assets/images/gardirop/gardirop-yatak-odasi.webp',
      'assets/images/gardirop/surgulu-dolap.webp',
      'assets/images/gardirop-yatak-odasi.webp'
    ],
    targetsJpg: [
      'assets/images/gardirop/gardirop.jpg',
      'assets/images/gardirop/surgulu-dolap.jpg'
    ]
  },
  // 11. Giyinme Odası (User's real walk-in photo)
  {
    srcWebp: 'assets/images/resim/giyinme_odasi.webp',
    targetsWebp: [
      'assets/images/gardirop/giyinme-odasi.webp'
    ],
    targetsJpg: [
      'assets/images/gardirop/giyinme-odasi.jpg'
    ]
  },
  // 12. Kapı Modelleri
  {
    srcWebp: 'assets/images/en_yeni_resim/kapi-modelleri.webp',
    targetsWebp: [
      'assets/images/kapi/kapi-modelleri.webp',
      'assets/images/kapi/kapi-ahsap.webp',
      'assets/images/kapi/lake-kapi.webp',
      'assets/images/kapi/camli-kapi.webp',
      'assets/images/kapi/ahsap-kapi-real.webp',
      'assets/images/kapi/lake-kapi-real.webp',
      'assets/images/kapi-modelleri.webp'
    ],
    targetsJpg: [
      'assets/images/kapi/kapi-ahsap.jpg',
      'assets/images/kapi/lake-kapi.jpg',
      'assets/images/kapi/camli-kapi.jpg',
      'assets/images/kapi/ahsap-kapi-real.jpg',
      'assets/images/kapi/lake-kapi-real.jpg'
    ]
  },
  // 13. Vestiyer / Portmanto (User's real photo)
  {
    srcWebp: 'assets/images/resim/fortmanto.webp',
    targetsWebp: [
      'assets/images/dekorasyon/vestiyer.webp'
    ],
    targetsJpg: [
      'assets/images/dekorasyon/vestiyer.jpg'
    ]
  }
];

console.log('--- Starting User Photo Synchronization ---');
syncPlans.forEach(plan => {
  if (!fs.existsSync(plan.srcWebp)) {
    console.warn(`WARNING: Source webp does not exist: ${plan.srcWebp}`);
    return;
  }
  plan.targetsWebp.forEach(dst => {
    copyFile(plan.srcWebp, dst);
  });
  plan.targetsJpg.forEach(dst => {
    convertWebpToJpg(plan.srcWebp, dst);
  });
});
console.log('--- Completed User Photo Synchronization ---');
