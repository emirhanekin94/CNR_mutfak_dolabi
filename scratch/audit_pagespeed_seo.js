const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');

let issues = [];
let imgCount = 0;
let videoCount = 0;

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');

  // 1. Check images without alt
  const imgMatches = html.match(/<img[^>]*>/gi) || [];
  imgCount += imgMatches.length;
  imgMatches.forEach(img => {
    if (!img.includes('alt=') || /alt=["']\s*["']/.test(img)) {
      issues.push({ file, type: 'Missing/Empty alt on img', tag: img });
    }
  });

  // 2. Check videos
  const videoMatches = html.match(/<video[^>]*>/gi) || [];
  videoCount += videoMatches.length;
  videoMatches.forEach(vid => {
    if (!vid.includes('preload="none"')) {
      issues.push({ file, type: 'Video without preload="none"', tag: vid });
    }
    if (!vid.includes('aria-label=') && !vid.includes('title=')) {
      issues.push({ file, type: 'Video without aria-label/title', tag: vid });
    }
  });

  // 3. Check for .mp4 inside video sources
  if (html.includes('.mp4')) {
    issues.push({ file, type: 'Contains .mp4 reference' });
  }

  // 4. Check for scripts without defer
  const scriptMatches = html.match(/<script\s+src="[^"]+"(?![^>]*defer)(?![^>]*type="module")[^>]*>/gi) || [];
  if (scriptMatches.length > 0) {
    issues.push({ file, type: 'Script without defer', tags: scriptMatches });
  }

  // 5. Check viewport
  if (!html.includes('name="viewport"')) {
    issues.push({ file, type: 'Missing viewport meta tag' });
  }

  // 6. Check description
  if (!html.includes('name="description"')) {
    issues.push({ file, type: 'Missing description meta tag' });
  }
});

console.log(`Audited ${files.length} HTML files.`);
console.log(`Total images checked: ${imgCount}`);
console.log(`Total videos checked: ${videoCount}`);
console.log(`Total issues found: ${issues.length}`);
if (issues.length > 0) {
  console.log(JSON.stringify(issues.slice(0, 20), null, 2));
} else {
  console.log('ALL AUDITS PASSED! ZERO ISSUES FOUND!');
}
