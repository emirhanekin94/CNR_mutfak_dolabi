const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const matches = [];
let idx = 0;
while ((idx = css.indexOf('.live-gallery', idx)) !== -1) {
  const lineStart = css.lastIndexOf('\n', idx);
  const blockEnd = css.indexOf('}', idx);
  matches.push(css.substring(lineStart, blockEnd + 1));
  idx = blockEnd + 1;
}

console.log('Found', matches.length, 'live-gallery CSS blocks');
matches.forEach((m, i) => console.log(`--- Block ${i+1} ---\n${m.trim()}\n`));
