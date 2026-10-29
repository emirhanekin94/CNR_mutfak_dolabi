const fs = require('fs');

console.log('--- Checking for all door images site-wide ---');
function walk(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = dir + '/' + f;
    if (fs.statSync(full).isDirectory()) {
      res = res.concat(walk(full));
    } else if (/kapi|door/i.test(f)) {
      res.push(full);
    }
  });
  return res;
}

walk('assets/images').forEach(f => {
  const stat = fs.statSync(f);
  console.log(f.padEnd(45), (stat.size / 1024).toFixed(1) + ' KB');
});

