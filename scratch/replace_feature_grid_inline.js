const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace inline grid
  const pattern1 = /<div style="display:\s*grid;\s*grid-template-columns:\s*1fr\s+1fr;\s*gap:\s*24px;\s*margin-bottom:\s*35px;">/g;
  if (pattern1.test(content)) {
    content = content.replace(pattern1, '<div class="feature-cards-grid">');
    changed = true;
  }

  // Also catch variations with different spacing
  const pattern2 = /<div style="display:\s*grid;\s*grid-template-columns:\s*1fr\s+1fr;[^"]*">/g;
  content = content.replace(pattern2, (match) => {
    // Keep it if it's not the 4 feature cards
    if (match.includes('gap:') && (match.includes('35px') || match.includes('24px'))) {
      changed = true;
      return '<div class="feature-cards-grid">';
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated feature grid in: ${file}`);
    count++;
  }
});

console.log(`Successfully updated ${count} files.`);
