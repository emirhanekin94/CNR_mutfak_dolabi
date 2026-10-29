const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const imgMatches = c.match(/<img[^>]+>/g) || [];
console.log('Total img tags in mutfak-dolaplari:', imgMatches.length);
imgMatches.forEach(m => {
  if (m.includes('country-tarzi') || m.includes('matplus') || m.includes('akrilik') || m.includes('lake') || m.includes('high-gloss')) {
    console.log(m);
  }
});

