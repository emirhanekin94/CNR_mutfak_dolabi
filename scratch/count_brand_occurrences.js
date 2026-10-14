const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f === 'sitemap.xml' || f === 'robots.txt' || f === 'llms.txt');

let domainReplacements = 0;
let brandReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const dMatches = (content.match(/istanbulmutfakdolabi\.com\.tr/g) || []).length;
  const bMatches = (content.match(/ÇNR MOBİLYA|ÇNR Mobilya|ÇNR Mutfak|CNR MOBİLYA/g) || []).length;
  domainReplacements += dMatches;
  brandReplacements += bMatches;
});

console.log('Total files to process:', files.length);
console.log('Domain matches (istanbulmutfakdolabi.com.tr):', domainReplacements);
console.log('Brand matches (ÇNR/CNR):', brandReplacements);
