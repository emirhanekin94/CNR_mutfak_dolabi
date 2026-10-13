const fs = require('fs');

const content = fs.readFileSync('hizmet-bolgeleri.html', 'utf8');

const districtMatches = [...content.matchAll(/<div class="region-card"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];

console.log('Found region-cards:', districtMatches.length);

const districts = [];
const cardRegex = /<div class="region-card"[\s\S]*?<h3 class="region-card-title"><a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a><\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;

let m;
while ((m = cardRegex.exec(content)) !== null) {
  districts.push({
    href: m[1],
    title: m[2].trim(),
    textLength: m[3].trim().length,
    text: m[3].trim().substring(0, 80) + '...'
  });
}

console.log('Parsed districts:', districts.length);
console.log(districts);
