const fs = require('fs');
const c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const matches = [...c.matchAll(/<section[\s\S]*?<\/section>/g)];
matches.forEach((s, i) => {
  if (s[0].includes('ress/') || s[0].includes('banyo') || s[0].includes('Teslim')) {
    const h2 = s[0].match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const h3 = s[0].match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    console.log(`Section ${i+1}:`, h2 ? h2[1].replace(/<[^>]+>/g, '') : (h3 ? h3[1].replace(/<[^>]+>/g, '') : 'No H2/H3'));
    const imgs = [...s[0].matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
    console.log('   Images:', imgs);
  }
});

