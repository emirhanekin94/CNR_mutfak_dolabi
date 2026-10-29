const fs = require('fs');

const pages = [
  'index.html',
  'mutfak-dolaplari.html',
  'giyinme-odasi.html',
  'gardirop-modelleri.html',
  'banyo-dolabi.html',
  'kapi-modelleri.html',
  'lake-mutfak-dolabi.html',
  'akrilik-mutfak-dolabi.html',
  'membran-mutfak-dolabi.html'
];

let totalWaLinks = 0;
let totalTelLinks = 0;
let totalIgLinks = 0;
let totalForms = 0;

pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const c = fs.readFileSync(p, 'utf8');
  
  const waMatches = c.match(/href="[^"]*(wa\.me|whatsapp)[^"]*"/gi) || [];
  const telMatches = c.match(/href="tel:[^"]*"/gi) || [];
  const igMatches = c.match(/href="[^"]*instagram\.com[^"]*"/gi) || [];
  const formMatches = c.match(/<form/gi) || [];

  totalWaLinks += waMatches.length;
  totalTelLinks += telMatches.length;
  totalIgLinks += igMatches.length;
  totalForms += formMatches.length;

  console.log(`${p.padEnd(28)} | WA: ${waMatches.length.toString().padStart(2)} | TEL: ${telMatches.length.toString().padStart(2)} | IG: ${igMatches.length.toString().padStart(2)} | Forms: ${formMatches.length}`);
});

console.log('------------------------------------------------------------');
console.log(`TOTAL in sampled core pages | WA: ${totalWaLinks} | TEL: ${totalTelLinks} | IG: ${totalIgLinks} | Forms: ${totalForms}`);

