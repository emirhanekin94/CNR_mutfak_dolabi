const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

// Find all top-level sections / tags between </header> and <footer>
const headerEnd = c.indexOf('</header>');
const footerStart = c.indexOf('<footer');

const mainBody = c.substring(headerEnd, footerStart);

// Match tags
const matches = [...mainBody.matchAll(/<(section|nav|div\s+class="editorial)[^>]*>/g)];
matches.forEach(m => {
  console.log(m[0]);
});

