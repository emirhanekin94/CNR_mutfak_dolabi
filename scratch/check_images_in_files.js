const fs = require('fs');

function checkFileImages(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
  let match;
  console.log(`\n=== Images in ${file} ===`);
  while ((match = regex.exec(content)) !== null) {
    console.log(match[1]);
  }
}

['index.html', 'katalog.html', 'akrilik-mutfak-dolabi.html', 'matplus-mutfak-dolabi.html'].forEach(checkFileImages);
