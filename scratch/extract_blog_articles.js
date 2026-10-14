const fs = require('fs');
const content = fs.readFileSync('blog.html', 'utf8');

const regex = /<article[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/article>/g;
let m;
const articles = [];

while ((m = regex.exec(content)) !== null) {
  const id = m[1];
  const inner = m[2];
  
  const titleMatch = inner.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const badgeMatch = inner.match(/<span[^>]*font-weight:\s*700[^>]*>([\s\S]*?)<\/span>/);
  const metaMatch = inner.match(/<span[^>]*color:\s*#718096[^>]*>([\s\S]*?)<\/span>/);
  const imgMatch = inner.match(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"/);

  articles.push({
    id,
    title: titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : '',
    badge: badgeMatch ? badgeMatch[1].replace(/\s+/g, ' ').trim() : 'Mutfak Rehberi',
    meta: metaMatch ? metaMatch[1].replace(/\s+/g, ' ').trim() : 'Ekim 2026',
    img: imgMatch ? imgMatch[1] : 'assets/images/mutfak/lake-kapak.webp',
    alt: imgMatch ? imgMatch[2] : 'Blog Fotoğrafı',
    fullHtml: inner
  });
}

console.log('Extracted', articles.length, 'articles.');
articles.forEach(a => console.log(a.id, '->', a.title));
fs.writeFileSync('scratch/blog_articles_data.json', JSON.stringify(articles, null, 2), 'utf8');
