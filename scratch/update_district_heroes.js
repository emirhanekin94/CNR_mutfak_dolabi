const fs = require('fs');

const districts = [
  'atasehir', 'bakirkoy', 'basaksehir', 'besiktas', 'beykoz', 'beylikduzu',
  'cekmekoy', 'eyupsultan', 'kadikoy', 'kagithane', 'kartal', 'maltepe',
  'pendik', 'sancaktepe', 'sariyer', 'sile', 'sisli', 'sultanbeyli',
  'tuzla', 'umraniye', 'uskudar'
];

districts.forEach(d => {
  const file = d + '-mutfak-dolabi.html';
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(
      /(<div class="hero-visual-frame">[\s\S]*?<img src=")assets\/images\/mutfak\/lake-mutfak\.webp(")/,
      '$1assets/images/mutfak/ada-mutfak.webp$2'
    );
    if (updated !== content) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
