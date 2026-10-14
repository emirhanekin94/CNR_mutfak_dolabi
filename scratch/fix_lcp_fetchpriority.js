const fs = require('fs');

const heroFiles = [
  'akrilik-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html',
  'lake-mutfak-dolabi.html',
  'matplus-mutfak-dolabi.html',
  'membran-mutfak-dolabi.html'
];

heroFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match hero image inside .hero-visual-card or .hero-visual-frame or .hero-section
  const updated = content.replace(
    /(<div class="hero-visual-(?:card|frame)">\s*<img\s+[^>]*?)(loading="eager"|loading="lazy")?([^>]*?>)/i,
    (match, p1, p2, p3) => {
      let tag = p1 + (p3 || '');
      if (!tag.includes('fetchpriority=')) {
        tag = tag.replace('<img ', '<img fetchpriority="high" ');
      }
      return tag;
    }
  );
  if (updated !== content) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`Updated LCP in: ${file}`);
  }
});
