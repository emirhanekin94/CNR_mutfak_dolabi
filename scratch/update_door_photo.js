const fs = require('fs');

let c = fs.readFileSync('kapi-modelleri.html', 'utf8');
c = c.replace(
  'assets/images/kapi/lake-kapi-real.webp',
  'assets/images/kapi/lake-oda-kapi.jpg'
);
fs.writeFileSync('kapi-modelleri.html', c, 'utf8');

if (fs.existsSync('scratch/apply_top_live_galleries.js')) {
  let gen = fs.readFileSync('scratch/apply_top_live_galleries.js', 'utf8');
  gen = gen.replace('assets/images/kapi/lake-kapi-real.webp', 'assets/images/kapi/lake-oda-kapi.jpg');
  fs.writeFileSync('scratch/apply_top_live_galleries.js', gen, 'utf8');
}

console.log('SUCCESS: Updated kapi-modelleri.html to modern lake-oda-kapi.jpg');

