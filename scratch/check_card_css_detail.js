const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const cardIdx = css.indexOf('.proje-card {');
if (cardIdx !== -1) {
  console.log(css.substring(cardIdx, cardIdx + 1800));
} else {
  console.log('proje-card css not found');
}

