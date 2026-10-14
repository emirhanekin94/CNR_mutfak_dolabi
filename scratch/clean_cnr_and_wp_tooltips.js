const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let updated = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Remove "CNR" from catalog links and titles
  content = content.replace(/📖\s*CNR\s*Kapak\s*Kataloğu\s*İndir\s*\(PDF\)/g, '📖 2026 Kapak Kataloğu İndir (PDF)');
  content = content.replace(/CNR\s*Kapak\s*Kataloğunu\s*İnceleyin/g, '2026 Kapak Kataloğumuzu İnceleyin');
  content = content.replace(/📥\s*CNR\s*Kapak\s*Kataloğunu\s*İndir\s*\(PDF\)/g, '📥 2026 Kapak Kataloğunu İndir (PDF)');
  content = content.replace(/CNR\s*Kapak\s*Kataloğu/g, '2026 Kapak Kataloğu');
  content = content.replace(/title="CNR Ahşap Instagram"/g, 'title="Instagram Profilimiz"');
  content = content.replace(/assets\/CNR%20KAPAK%20KATALOG\.pdf/g, 'assets/mutfak-dolabiniz-kapak-katalogu.pdf');
  content = content.replace(/download="CNR-KAPAK-KATALOG\.pdf"/g, 'download="mutfak-dolabiniz-kapak-katalogu.pdf"');
  content = content.replace(/CNR%20Kapak%20Katalo/g, '2026%20Kapak%20Katalo');

  // 2. Remove "WhatsApp Canlı Destek" and tooltips completely
  content = content.replace(/<span class="float-tooltip">WhatsApp Canlı Destek<\/span>\s*/g, '');
  content = content.replace(/<span class="float-tooltip">[^<]*<\/span>\s*/g, '');
  content = content.replace(/<span class="float-whatsapp-tooltip">[^<]*<\/span>\s*/g, '');
  content = content.replace(/<span class="float-phone-tooltip">[^<]*<\/span>\s*/g, '');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    updated++;
    console.log(`Updated: ${f}`);
  }
});

console.log(`Total HTML files updated for CNR removal & WP tooltip cleanup: ${updated}`);
