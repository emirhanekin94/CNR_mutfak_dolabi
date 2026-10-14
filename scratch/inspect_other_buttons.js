const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const others = [];
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if ((line.includes('btn-whatsapp') || line.includes('btn-phone')) &&
        !line.includes('desktop-only-btn') &&
        !line.includes('mobile-bottom-bar')) {
      const pos = content.indexOf(line);
      const lastHeroStart = content.slice(0, pos).lastIndexOf('class="hero-section"');
      const lastHeroEnd = content.slice(0, pos).lastIndexOf('</section>');
      const isHero = lastHeroStart !== -1 && lastHeroStart > lastHeroEnd;
      if (!isHero) {
        others.push({ file, line: i + 1, text: line.trim() });
      }
    }
  });
}
console.log('Total non-hero:', others.length);
const byFile = {};
others.forEach(o => {
  byFile[o.file] = (byFile[o.file] || 0) + 1;
});
console.log(byFile);
console.log('\nSample from 3 files:');
others.slice(0, 10).forEach(o => console.log(`${o.file}:${o.line} -> ${o.text}`));
