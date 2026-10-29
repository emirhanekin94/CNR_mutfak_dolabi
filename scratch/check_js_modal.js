const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const matches = [];
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (/modal|lightbox|zoom|gallery|image|foto/i.test(l)) {
    console.log((i+1) + ': ' + l.trim());
  }
});

