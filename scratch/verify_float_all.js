const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');
const report = files.map(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasPhone = content.includes('float-phone-btn');
  const hasWa = content.includes('float-whatsapp-btn');
  return { file, hasPhone, hasWa };
});

const missingPhone = report.filter(r => !r.hasPhone);
const missingWa = report.filter(r => !r.hasWa);

console.log('Total checked:', files.length);
console.log('Files missing float-phone-btn:', missingPhone.length);
console.log('Files missing float-whatsapp-btn:', missingWa.length);
