const fs = require('fs');

const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const cardRegex = /<article class="live-gallery-card">[\s\S]*?<\/article>/g;
const cards = c.match(cardRegex) || [];

console.log('--- ALL CARDS IN mutfak-dolaplari.html ---');
const usedSrcs = new Set();
cards.forEach((card, i) => {
  const src = (card.match(/src="([^"]+)"/) || [])[1];
  const title = (card.match(/<h3 class="live-gallery-title">([^<]+)<\/h3>/) || [])[1];
  const isDup = usedSrcs.has(src);
  usedSrcs.add(src);
  console.log(`Card ${i+1}: ${isDup ? '🔴 DUPLICATE ' : '🟢 UNIQUE '} ${src} -> ${title}`);
});
