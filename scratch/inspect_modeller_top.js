const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const modellerMatch = c.match(/<section[^>]*id="modeller"[\s\S]*?<\/section>/);
console.log(modellerMatch ? modellerMatch[0].substring(0, 1500) : 'not found');

