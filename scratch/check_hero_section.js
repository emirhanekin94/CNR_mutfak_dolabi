const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const heroMatch = c.match(/<section class="hero-section"[\s\S]*?<\/section>/);
if (heroMatch) {
  console.log('Hero section length:', heroMatch[0].length);
  console.log(heroMatch[0].substring(0, 300));
  console.log('...');
  console.log(heroMatch[0].substring(heroMatch[0].length - 300));
} else {
  console.log('Hero section not found');
}

