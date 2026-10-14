const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const summary = {};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('btn-whatsapp') || line.includes('btn-phone')) {
      // determine section
      let context = 'other';
      if (line.includes('top-bar')) context = 'top-bar';
      else if (line.includes('desktop-only-btn') || line.includes('site-header')) context = 'header';
      else if (line.includes('mobile-bottom-bar') || line.includes('fixed-bottom')) context = 'mobile-bottom-bar';
      else if (line.includes('site-footer') || line.includes('footer')) context = 'footer';
      else if (content.slice(0, content.indexOf(line)).lastIndexOf('<section class="hero-section"') > content.slice(0, content.indexOf(line)).lastIndexOf('</section>')) {
        context = 'hero-section';
      } else if (line.includes('ads-lead-box') || content.slice(Math.max(0, content.indexOf(line) - 500), content.indexOf(line)).includes('ads-lead-box')) {
        context = 'ads-lead-box';
      }
      if (!summary[context]) summary[context] = [];
      summary[context].push({ file, line: i + 1, text: line.trim() });
    }
  });
}

for (const [k, v] of Object.entries(summary)) {
  console.log(`Context: ${k} -> ${v.length} instances`);
}
