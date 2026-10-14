const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const leadBoxFiles = [];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('ads-lead-box')) {
    leadBoxFiles.push(f);
  }
}

console.log('Files with ads-lead-box:', leadBoxFiles.length);

for (const f of leadBoxFiles) {
  const c = fs.readFileSync(f, 'utf8');
  const match = c.match(/<div class="ads-lead-box">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
  if (!match) {
    console.log(`Could not match full box in ${f}`);
  }
}
