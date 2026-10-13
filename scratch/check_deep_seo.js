const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('-mutfak-dolabi.html'));

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const m = content.match(/<!--[^\n]*\(Kapsamlı Bölgesel SEO Rehberi\)[\s\S]*?<\/section>/i);
  if (m) {
    // strip HTML tags to count actual text chars
    const textOnly = m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`${file}: ${textOnly.length} chars of deep SEO text`);
  } else {
    console.log(`${file}: NOT FOUND`);
  }
}
