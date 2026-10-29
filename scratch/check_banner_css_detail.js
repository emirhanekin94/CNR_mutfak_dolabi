const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const bannerIdx = css.indexOf('.ads-conversion-banner {');
if (bannerIdx !== -1) {
  console.log(css.substring(bannerIdx, bannerIdx + 1200));
} else {
  console.log('banner css not found');
}

