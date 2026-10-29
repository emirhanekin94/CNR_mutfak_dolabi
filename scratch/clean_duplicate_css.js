const fs = require('fs');
let css = fs.readFileSync('assets/css/main.css', 'utf8');

// Find where the first .proje-gallery-grid begins and where it ends
const firstStart = css.indexOf('.proje-gallery-grid {');
const secondStart = css.indexOf('.proje-gallery-grid {', firstStart + 20);

console.log('First index:', firstStart, 'Second index:', secondStart);

if (firstStart !== -1 && secondStart !== -1) {
  // Let's remove the first block
  const blockBefore = css.substring(0, firstStart);
  const blockAfter = css.substring(firstStart);
  
  // Find where the first block ends (before .ads-conversion-banner or similar)
  const bannerIdx = blockAfter.indexOf('.ads-conversion-banner {');
  if (bannerIdx !== -1) {
    css = blockBefore + blockAfter.substring(bannerIdx);
    console.log('Successfully removed older duplicate proje-gallery-grid block.');
    fs.writeFileSync('assets/css/main.css', css, 'utf8');
  }
}

// Re-minify
function minifyCSS(raw) {
  return raw
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

const minified = minifyCSS(css);
fs.writeFileSync('assets/css/main.min.css', minified, 'utf8');
console.log('Cleaned and minified! Length:', minified.length);

