const fs = require('fs');
const c = fs.readFileSync('index.html', 'utf8');

const targetIdx = c.indexOf('Atölyemizden Evlere: Gerçek İmalat & Montaj');
if (targetIdx !== -1) {
  // Find surrounding section
  const sectionStart = c.lastIndexOf('<section', targetIdx);
  const sectionEnd = c.indexOf('</section>', targetIdx) + 10;
  console.log(c.substring(sectionStart, sectionEnd));
} else {
  console.log('Target text not found in index.html, searching case-insensitive or partial...');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('Atölyemizden Evlere') || l.includes('Gerçek İmalat')) {
      console.log(`Line ${i+1}: ${l}`);
    }
  });
}

