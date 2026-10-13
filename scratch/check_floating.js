const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');
const report = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const hasFloatingActions = content.includes('floating-actions');
  const hasFloatWa = content.includes('float-whatsapp-btn') || content.includes('float-whatsapp');
  report.push({ file, hasFloatingActions, hasFloatWa });
}

console.log('Total HTML files:', files.length);
console.log('Files with floating-actions:', report.filter(r => r.hasFloatingActions).length);
console.log('Files with floatWa:', report.filter(r => r.hasFloatWa).length);
console.log('Files missing floating-actions:', report.filter(r => !r.hasFloatingActions).map(r => r.file));
