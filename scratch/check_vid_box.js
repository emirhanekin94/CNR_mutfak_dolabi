const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const vidBox = c.indexOf('video-showcase-box');
console.log(c.substring(vidBox, vidBox + 900));

