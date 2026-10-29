const fs = require('fs');

let c = fs.readFileSync('scratch/apply_top_live_galleries.js', 'utf8');
// remove <span class="live-gallery-tag ${c.tagClass}">${c.tagText}</span>\n
c = c.replace(/<span class="live-gallery-tag \${c\.tagClass}">\${c\.tagText}<\/span>\r?\n?[ \t]*/g, '');
fs.writeFileSync('scratch/apply_top_live_galleries.js', c, 'utf8');
console.log('Updated apply_top_live_galleries.js generator template.');

