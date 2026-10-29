const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(listFiles(full));
    } else {
      results.push(full.replace(/\\/g, '/'));
    }
  });
  return results;
}

const ress = listFiles('assets/images/ress');
const enYeni = listFiles('assets/images/en-yeni-resimler');
const resim = listFiles('assets/images/resim');

console.log('--- LAKE MUTFAK ---');
[...ress, ...enYeni, ...resim].filter(f => /lake/i.test(f) && /mutfak/i.test(f)).forEach(f => console.log(f));

console.log('\n--- MEMBRAN MUTFAK ---');
[...ress, ...enYeni, ...resim].filter(f => (/membran/i.test(f) || /country/i.test(f)) && /mutfak/i.test(f)).forEach(f => console.log(f));

console.log('\n--- AKRİLİK MUTFAK ---');
[...ress, ...enYeni, ...resim].filter(f => /akr/i.test(f) && /mutfak/i.test(f)).forEach(f => console.log(f));

console.log('\n--- HIGH GLOSS MUTFAK ---');
[...ress, ...enYeni, ...resim].filter(f => /high-gloss|highgloss/i.test(f)).forEach(f => console.log(f));

console.log('\n--- MATPLUS MUTFAK ---');
[...ress, ...enYeni, ...resim].filter(f => /matplus|mat-plus/i.test(f)).forEach(f => console.log(f));

console.log('\n--- MUTFAK GENEL & DEKORASYON ---');
[...ress, ...enYeni, ...resim].filter(f => /mutfak/i.test(f) && !/banyo/i.test(f)).forEach(f => console.log(f));

