const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const modellerMatch = c.match(/<section[^>]*id="modeller"[\s\S]*?<\/section>/);
if (modellerMatch) {
  const cards = [...modellerMatch[0].matchAll(/<div class="proje-card">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g)];
  console.log('Total cards found in #modeller:', cards.length);
  cards.forEach((card, i) => {
    const title = card[0].match(/<h4[^>]*class="proje-card-title"[^>]*>([^<]+)<\/h4>/);
    const img = card[0].match(/<img[^>]+src="([^"]+)"/);
    console.log(`Card ${i+1}: ${title ? title[1] : 'No title'} => ${img ? img[1] : 'No img'}`);
  });
} else {
  console.log('#modeller section not found');
}

