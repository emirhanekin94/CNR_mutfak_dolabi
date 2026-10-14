const fs = require('fs');

const files = [
  'blog-membran-lake-akrilik-karsilastirmasi.html',
  'blog-mutfak-dolabi-metretul-fiyati-nasil-hesaplanir.html',
  'blog-matplus-leke-tutmaz-kapak-nedir.html',
  'blog-kucuk-mutfaklar-icin-10-akilli-depolama-fikri.html',
  'blog-banyo-tadilati-kac-gun-surer.html',
  'blog-ozel-olcu-gardirop-rehberi.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // find article content
  const startIdx = content.indexOf('<div class="article-body"');
  const endIdx = content.indexOf('<!-- ALT BİLGİ (FOOTER) -->');
  if (startIdx !== -1 && endIdx !== -1) {
    const raw = content.substring(startIdx, endIdx);
    const text = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`${f} -> Raw Text Length: ${text.length} characters`);
  }
});
