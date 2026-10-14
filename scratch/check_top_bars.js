const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const wrong = [];
const correct = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<div class="top-bar">[\s\S]*?<\/header>/);
  if (!match) {
    wrong.push({ file: f, reason: 'No top-bar found' });
    return;
  }
  const topBar = match[0].split('</nav>')[0];
  const hasInsta = topBar.includes('@cinarahsapurunleri');
  const hasMaps = topBar.includes('Haritada Gör');
  const hasCatalog = topBar.includes('E-Katalog İncele');
  const hasStandartText = topBar.includes('Ümraniye Atölyemizden İstanbul Geneline Aracısız İmalat & Ücretsiz Keşif');

  if (!hasInsta || !hasMaps || !hasCatalog || !hasStandartText) {
    wrong.push({ file: f, hasInsta, hasMaps, hasCatalog, hasStandartText });
  } else {
    correct.push(f);
  }
});

console.log(`Total files: ${files.length}`);
console.log(`Correct top bar (${correct.length}):`, correct);
console.log(`Wrong/Incomplete top bar (${wrong.length}):`, wrong);
