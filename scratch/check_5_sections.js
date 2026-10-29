const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

['membran', 'matplus', 'akrilik', 'lake', 'highgloss'].forEach(id => {
  const reg = new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`);
  const m = c.match(reg);
  if (m) {
    console.log(`=== SECTION ${id} (length ${m[0].length}) ===`);
    const isReverse = m[0].includes('grid-2-col reverse');
    console.log(`isReverse: ${isReverse}`);
    const imgMatches = [...m[0].matchAll(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"/g)];
    imgMatches.forEach(img => console.log('  Image:', img[1], '| Alt:', img[2]));
  } else {
    console.log(`SECTION ${id} NOT FOUND!`);
  }
});

