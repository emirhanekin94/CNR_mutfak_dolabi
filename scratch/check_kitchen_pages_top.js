const fs = require('fs');

['lake-mutfak-dolabi.html', 'membran-mutfak-dolabi.html', 'akrilik-mutfak-dolabi.html', 'high-gloss-mutfak-dolabi.html', 'matplus-mutfak-dolabi.html', 'mutfak-dekorasyonu.html', 'kapi-modelleri.html'].forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const heroEnd = c.indexOf('</section>');
  console.log(`\n=== ${p} ===`);
  console.log(c.substring(heroEnd, heroEnd + 350));
});

