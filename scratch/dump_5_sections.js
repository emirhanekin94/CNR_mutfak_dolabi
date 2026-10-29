const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

['membran', 'matplus', 'akrilik', 'lake', 'highgloss'].forEach(id => {
  const reg = new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`);
  const m = c.match(reg);
  if (m) {
    console.log(`\n================== ${id.toUpperCase()} ==================`);
    console.log(m[0]);
  }
});

