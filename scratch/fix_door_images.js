const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ffmpegPath = path.resolve('node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe');

function convert(webp, jpg) {
  try {
    if (fs.existsSync(jpg)) fs.unlinkSync(jpg);
    execFileSync(ffmpegPath, ['-y', '-i', webp, '-q:v', '2', jpg], { stdio: 'ignore' });
    console.log(`Converted: ${webp} -> ${jpg}`);
  } catch (e) {
    console.error(`Error converting ${webp}:`, e.message);
  }
}

// 1. kapi-modelleri.webp (Lake Kapı)
const lakeWebp = 'assets/images/en_yeni_resim/kapi-modelleri.webp';
fs.copyFileSync(lakeWebp, 'assets/images/kapi/kapi-modelleri.webp');
fs.copyFileSync(lakeWebp, 'assets/images/kapi/lake-kapi.webp');
convert('assets/images/kapi/lake-kapi.webp', 'assets/images/kapi/lake-kapi.jpg');

// 2. kapi-ahsap.webp (Ahşap / Membran Kapı from git history: ahsap-kapi-real.webp)
if (fs.existsSync('assets/images/kapi/ahsap-kapi-real.webp')) {
  fs.copyFileSync('assets/images/kapi/ahsap-kapi-real.webp', 'assets/images/kapi/kapi-ahsap.webp');
  convert('assets/images/kapi/kapi-ahsap.webp', 'assets/images/kapi/kapi-ahsap.jpg');
}

// 3. camli-kapi.webp (Camlı Salon Kapısı from git history: camli-kapi.webp)
if (fs.existsSync('assets/images/kapi/camli-kapi.webp')) {
  convert('assets/images/kapi/camli-kapi.webp', 'assets/images/kapi/camli-kapi.jpg');
}

console.log('Door images successfully refreshed with distinct visuals:');
['kapi-modelleri.webp', 'kapi-ahsap.webp', 'camli-kapi.webp'].forEach(f => {
  const p = 'assets/images/kapi/' + f;
  console.log(f, fs.statSync(p).size, 'bytes');
});
