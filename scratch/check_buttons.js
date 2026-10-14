const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const findings = [];
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  // Check for instances of btn-phone or btn-whatsapp outside header or footer/fixed-bottom-bar
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if ((line.includes('btn-whatsapp') || line.includes('btn-phone')) && 
        !line.includes('desktop-only-btn') && 
        !line.includes('mobile-bottom-bar') &&
        !line.includes('fixed-bottom') &&
        !line.includes('footer')) {
      findings.push({ file: f, line: idx + 1, content: line.trim() });
    }
  });
}
console.log('Total non-header non-bottom-bar occurrences:', findings.length);
findings.slice(0, 30).forEach(x => console.log(`${x.file}:${x.line} -> ${x.content}`));
