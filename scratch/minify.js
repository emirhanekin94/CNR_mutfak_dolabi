const fs = require('fs');

const raw = fs.readFileSync('assets/css/main.css', 'utf8');

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')       // Remove comments
    .replace(/\s+/g, ' ')                   // Collapse whitespace
    .replace(/\s*([{}:;,>])\s*/g, '$1')     // Remove space around delimiters
    .replace(/;}/g, '}')                    // Remove trailing semicolons
    .trim();
}

const minified = minifyCSS(raw);
fs.writeFileSync('assets/css/main.min.css', minified, 'utf8');
console.log('Minification complete! Bytes:', minified.length);

