const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const pages = [];

for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  let drawerEnd = c.indexOf('</aside>');
  let startPos = drawerEnd !== -1 ? drawerEnd + 8 : c.indexOf('</header>');
  if (startPos === -1) continue;
  
  const firstSectionMatch = c.slice(startPos).match(/<section[\s\S]*?<\/section>/);
  if (firstSectionMatch) {
    const s = firstSectionMatch[0];
    if (s.includes('btn-whatsapp') || s.includes('btn-phone')) {
      pages.push(f);
    }
  }
}

console.log('Pages with top buttons in first section:', pages.length);
console.log(pages);
