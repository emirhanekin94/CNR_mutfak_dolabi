const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const url = 'https://images.pexels.com/photos/3935334/pexels-photo-3935334.jpeg';
const tempJpg = 'scratch/temp_laundry.jpg';

const file = fs.createWriteStream(tempJpg);
https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  res.pipe(file);
  file.on('finish', () => {
    file.close(() => {
      console.log('Downloaded temp_laundry.jpg');
      execSync(`"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 82 "assets/images/banyo/camasir-dolabi-real.webp"`);
      execSync(`"${ffmpeg.path}" -y -i "${tempJpg}" -vf "scale=1280:-1" -q:v 85 "assets/images/banyo/camasir-dolabi.jpg"`);
      fs.copyFileSync('assets/images/banyo/camasir-dolabi-real.webp', 'assets/images/banyo/camasir-dolabi.webp');
      console.log('Updated camasir-dolabi-real.webp and camasir-dolabi.jpg successfully!');
    });
  });
});
