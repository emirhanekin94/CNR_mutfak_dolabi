const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const stats = {
  total: files.length,
  missingCanonical: [],
  missingDescription: [],
  missingTitle: [],
  missingH1: [],
  missingOg: [],
  missingSchema: [],
  missingPreconnect: [],
  missingViewport: [],
  brokenImages: [],
  missingWidthHeight: [],
  missingLazyLoading: []
};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');

  if (!content.includes('<link rel="canonical"')) stats.missingCanonical.push(f);
  if (!content.includes('<meta name="description"')) stats.missingDescription.push(f);
  if (!content.includes('<title>')) stats.missingTitle.push(f);
  if (!content.includes('<h1')) stats.missingH1.push(f);
  if (!content.includes('property="og:title"')) stats.missingOg.push(f);
  if (!content.includes('application/ld+json')) stats.missingSchema.push(f);
  if (!content.includes('rel="preconnect"') && content.includes('fonts.googleapis.com')) stats.missingPreconnect.push(f);
  if (!content.includes('name="viewport"')) stats.missingViewport.push(f);

  const imgMatches = [...content.matchAll(/<img\b([^>]*?)>/gi)];
  imgMatches.forEach(m => {
    const attrs = m[1];
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
    if (srcMatch) {
      const src = srcMatch[1];
      if (!src.startsWith('http') && !src.startsWith('data:') && !fs.existsSync(src)) {
        stats.brokenImages.push({ file: f, src });
      }
    }
    if (!attrs.includes('width=') || !attrs.includes('height=')) {
      stats.missingWidthHeight.push({ file: f, img: m[0] });
    }
  });
});

console.log('=== ULTRA DETAILED AUDIT REPORT ===');
console.log('Total HTML Files:', stats.total);
console.log('Missing Canonical:', stats.missingCanonical.length, stats.missingCanonical);
console.log('Missing Description:', stats.missingDescription.length, stats.missingDescription);
console.log('Missing Title:', stats.missingTitle.length);
console.log('Missing H1:', stats.missingH1.length);
console.log('Missing OpenGraph (excluding redirect):', stats.missingOg.length, stats.missingOg);
console.log('Missing Schema JSON-LD (excluding redirect):', stats.missingSchema.length, stats.missingSchema);
console.log('Missing Preconnect for Fonts:', stats.missingPreconnect.length);
console.log('Broken Images:', stats.brokenImages.length);
console.log('Missing Width/Height on Images:', stats.missingWidthHeight.length);
