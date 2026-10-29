const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const startIdx = js.indexOf('// 5. Basit & Hızlı Görsel Lightbox');
const endIdx = js.indexOf('// 6. GOOGLE ANALYTICS 4', startIdx);
console.log('--- Current Lightbox in main.js ---');
console.log(js.substring(startIdx, endIdx));

