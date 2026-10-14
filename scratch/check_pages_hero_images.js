const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const pagesWithoutHeroImage = [];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  let drawerEnd = c.indexOf('</aside>');
  let startPos = drawerEnd !== -1 ? drawerEnd + 8 : c.indexOf('</header>');
  if (startPos === -1) continue;

  const firstSectionMatch = c.slice(startPos).match(/<section[\s\S]*?<\/section>/);
  if (firstSectionMatch) {
    const s = firstSectionMatch[0];
    const hasImg = s.includes('<img');
    if (!hasImg) {
      pagesWithoutHeroImage.push(f);
    }
  } else {
    pagesWithoutHeroImage.push(`${f} (no section)`);
  }
}

console.log('Pages without hero image:', pagesWithoutHeroImage.length);
console.log(pagesWithoutHeroImage);
