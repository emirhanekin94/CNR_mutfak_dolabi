const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');
const samples = {};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const m = content.match(/<div class=["']floating-actions["']>([\s\S]*?)<\/div>/i);
  if (m) {
    const text = m[1].replace(/\s+/g, ' ').trim();
    samples[text] = (samples[text] || []).concat(file);
  }
}

console.log('Variations count:', Object.keys(samples).length);
for (const [text, list] of Object.entries(samples)) {
  console.log(`Used by ${list.length} files:`);
  console.log(text.substring(0, 150) + '...');
}
