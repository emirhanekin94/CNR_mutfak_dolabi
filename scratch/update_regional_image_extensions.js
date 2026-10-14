const fs = require('fs');

const regionalFiles = fs.readdirSync('.').filter(f => f.endsWith('-mutfak-dolabi.html') && !['lake-mutfak-dolabi.html', 'membran-mutfak-dolabi.html', 'matplus-mutfak-dolabi.html', 'akrilik-mutfak-dolabi.html', 'high-gloss-mutfak-dolabi.html'].includes(f));

let count = 0;
regionalFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  content = content.replace(/assets\/images\/mutfak\/lake-mutfak\.jpg/g, 'assets/images/mutfak/lake-mutfak.webp');
  content = content.replace(/assets\/images\/mutfak\/membran-mutfak\.jpg/g, 'assets/images/mutfak/membran-mutfak.webp');
  content = content.replace(/assets\/images\/mutfak\/matplus-mutfak\.jpg/g, 'assets/images/mutfak/matplus-mutfak.webp');
  content = content.replace(/assets\/images\/mutfak\/akrilik-mutfak\.jpg/g, 'assets/images/mutfak/akrilik-mutfak.webp');
  content = content.replace(/assets\/images\/mutfak\/highgloss-mutfak\.jpg/g, 'assets/images/mutfak/highgloss-mutfak.webp');
  content = content.replace(/assets\/images\/banyo\/banyo-dolabi\.jpg/g, 'assets/images/banyo/banyo-dolabi.webp');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});

console.log(`Updated images to .webp in ${count} regional files.`);
