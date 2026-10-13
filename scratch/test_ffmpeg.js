const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const { execSync } = require('child_process');

console.log('FFmpeg binary path:', ffmpeg.path);
const output = execSync(`"${ffmpeg.path}" -version`).toString();
console.log('Version:', output.split('\n')[0]);
