const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const ctaOccurrences = [];
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const heroMatch = content.match(/<section[^>]*class="[^"]*hero-section[^"]*"[\s\S]*?<\/section>/);
  if (heroMatch) {
    const heroContent = heroMatch[0];
    const hasWhatsApp = heroContent.includes('btn-whatsapp') || heroContent.includes('btn-phone');
    if (hasWhatsApp) {
      ctaOccurrences.push(f);
    }
  }
}
console.log('Files with whatsapp/phone in hero:', ctaOccurrences.length);
console.log(JSON.stringify(ctaOccurrences, null, 2));
