const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const report = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const logoMatch = content.match(/<a[^>]*class=["']site-logo["'][^>]*>([\s\S]*?)<\/a>/i);
  const navMatch = content.match(/<nav[^>]*class=["']main-nav["'][^>]*>([\s\S]*?)<\/nav>/i);
  const actionsMatch = content.match(/<div[^>]*class=["']header-actions["'][^>]*>([\s\S]*?)<\/div>/i);

  report.push({
    file,
    logo: logoMatch ? logoMatch[1].replace(/\s+/g, ' ').trim() : 'NONE',
    hasNav: !!navMatch,
    navLinks: navMatch ? (navMatch[1].match(/<a /g) || []).length : 0,
    hasActions: !!actionsMatch
  });
}

console.log('Total HTML files:', files.length);
const diffLogos = report.filter(r => !r.logo.includes('Mutfak & Ahşap Atölyesi • Ümraniye'));
console.log('Files with different logo tagline:', diffLogos.length);
diffLogos.forEach(d => console.log(d.file, '-->', d.logo));
