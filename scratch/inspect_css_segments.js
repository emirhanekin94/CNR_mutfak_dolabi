const fs = require('fs');
const css = fs.readFileSync('assets/css/main.css', 'utf8');

const s1 = css.indexOf('.live-gallery-media {');
const e1 = css.indexOf('.live-gallery-info {', s1);
console.log('--- Segment 1 (.live-gallery-media) ---');
console.log(css.substring(s1, e1));

const s2 = css.indexOf('.live-gallery-scroll-wrap {', e1);
const e2 = css.indexOf('/* ==========================================================================', s2);
console.log('--- Segment 2 (media query mobile scroll-wrap) ---');
console.log(css.substring(s2 - 80, e2));

