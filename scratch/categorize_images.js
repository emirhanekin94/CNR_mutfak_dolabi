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
const kapi = listFiles('assets/images/kapi');

console.log('RESS files count:', ress.length);
console.log('EN-YENI files count:', enYeni.length);
console.log('KAPI files count:', kapi.length);

console.log('\n--- BANYO & TADİLAT ---');
ress.filter(f => /banyo|dusa|lavabo|dusakabin/i.test(f)).forEach(f => console.log(f));

console.log('\n--- GARDIRAP & GIYINME ODASI ---');
ress.filter(f => /gardirop|gardrop|giyinme|ray|dolap|giysi/i.test(f)).forEach(f => console.log(f));

console.log('\n--- YATAK ODASI ---');
ress.filter(f => /yatak/i.test(f)).forEach(f => console.log(f));

console.log('\n--- MOBİLYA DEKORASYON & TV ---');
ress.filter(f => /tv|panel|dresuar|portmanto|vestiyer|salon|ahsap/i.test(f)).forEach(f => console.log(f));

console.log('\n--- KAPI MODELLERİ ---');
ress.filter(f => /kapi/i.test(f)).forEach(f => console.log(f));
kapi.forEach(f => console.log(f));

