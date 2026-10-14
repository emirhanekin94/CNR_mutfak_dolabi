const fs = require('fs');
const files = [
  'atasehir-mutfak-dolabi.html',
  'bakirkoy-mutfak-dolabi.html',
  'basaksehir-mutfak-dolabi.html',
  'besiktas-mutfak-dolabi.html',
  'beykoz-mutfak-dolabi.html',
  'beylikduzu-mutfak-dolabi.html',
  'cekmekoy-mutfak-dolabi.html',
  'eyupsultan-mutfak-dolabi.html',
  'kadikoy-mutfak-dolabi.html',
  'kagithane-mutfak-dolabi.html',
  'kartal-mutfak-dolabi.html',
  'maltepe-mutfak-dolabi.html',
  'pendik-mutfak-dolabi.html',
  'sancaktepe-mutfak-dolabi.html',
  'sariyer-mutfak-dolabi.html',
  'sile-mutfak-dolabi.html',
  'sisli-mutfak-dolabi.html',
  'sultanbeyli-mutfak-dolabi.html',
  'tuzla-mutfak-dolabi.html',
  'umraniye-mutfak-dolabi.html',
  'uskudar-mutfak-dolabi.html'
];

const results = [];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const titleMatch = c.match(/<h1[^>]*class="hero-title"[^>]*>([\s\S]*?)<\/h1>/);
  const descMatch = c.match(/<p[^>]*class="hero-description"[^>]*>([\s\S]*?)<\/p>/);
  const imgMatch = c.match(/<div class="hero-visual-[^"]*">[\s\S]*?<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"/);
  
  results.push({
    file: f,
    title: titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : 'NO TITLE',
    desc: descMatch ? descMatch[1].replace(/\s+/g, ' ').trim() : 'NO DESC',
    img: imgMatch ? imgMatch[1] : 'assets/images/mutfak/lake-mutfak.webp',
    alt: imgMatch ? imgMatch[2] : 'Özel İmalat Mutfak Dolabı'
  });
}

console.log(JSON.stringify(results, null, 2));
