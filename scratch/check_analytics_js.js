const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

const s = js.indexOf('initAnalyticsTracking');
if (s !== -1) {
  console.log(js.substring(s - 50, s + 1500));
} else {
  console.log('initAnalyticsTracking not found, searching for gtag:');
  const lines = js.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('gtag') || l.includes('analytics')) console.log((i+1) + ': ' + l.trim());
  });
}

