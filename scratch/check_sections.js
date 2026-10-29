const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('</section>') || l.includes('editorial-collection-bar') || l.includes('proje-gallery-grid')) {
    console.log((i+1) + ': ' + l.trim());
  }
});

