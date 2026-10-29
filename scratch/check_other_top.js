const fs = require('fs');

['giyinme-odasi.html', 'yatak-odasi-mobilyasi.html', 'mobilya-dekorasyon.html'].forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const navEnd = c.indexOf('</nav>', c.indexOf('editorial-collection-bar'));
  console.log(`\n=== ${p} ===`);
  console.log(c.substring(navEnd, navEnd + 300));
});

