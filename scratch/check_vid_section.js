const fs = require('fs');
const c = fs.readFileSync('mutfak-dolaplari.html', 'utf8');

const vidMatch = c.match(/<!-- ATÖLYE İMALAT VİDEOSU[\s\S]*?<\/section>/);
if (vidMatch) {
  console.log('Vid match length:', vidMatch[0].length);
  console.log(vidMatch[0]);
} else {
  console.log('Vid match not found');
}

