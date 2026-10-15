const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

console.log('Processing ' + files.length + ' HTML files...');

let phoneReplaced = 0;
let instagramAdded = 0;
let catalogUpdated = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Phone number replacements
  content = content.replace(/\+905336173555/g, '+905336173555');
  content = content.replace(/905336173555/g, '905336173555');
  content = content.replace(/0533 617 35 55/g, '0533 617 35 55');
  content = content.replace(/0533 617 35 55/g, '0533 617 35 55');

  // 2. Add Instagram to Top Bar if present and not already added
  const instaLink = '<a href="https://instagram.com/cinarahsapurunleri?cplk=ZTR0YmgyczRkOTB4" target="_blank" rel="noopener">📸 @cinarahsapurunleri</a>';
  if (content.includes('top-bar-links') && !content.includes('cinarahsapurunleri')) {
    content = content.replace(
      '<a href="katalog.html">📖 E-Katalog İncele</a>',
      '<a href="katalog.html">📖 E-Katalog İncele</a>\n        ' + instaLink
    );
  }

  // 3. Add Instagram to Mobile Menu Drawer
  const mobileInsta = '<li class="mobile-menu-item"><a href="https://instagram.com/cinarahsapurunleri?cplk=ZTR0YmgyczRkOTB4" target="_blank" rel="noopener" style="color: #e1306c; font-weight: 700;">📸 Instagram (@cinarahsapurunleri)</a></li>';
  if (content.includes('mobile-menu-list') && !content.includes('Instagram (@cinarahsapurunleri)')) {
    content = content.replace(
      '<li class="mobile-menu-item"><a href="katalog.html">📖 2026 E-Katalog</a></li>',
      '<li class="mobile-menu-item"><a href="katalog.html">📖 2026 E-Katalog</a></li>\n      ' + mobileInsta
    );
  }

  // 4. Update Footer in all pages: Add Instagram & CNR Kapak Kataloğu PDF link
  const footerContactOld = `<p style="font-size: 0.9rem; margin-bottom: 6px;">💬 WhatsApp: <a href="https://wa.me/905336173555" target="_blank" style="color: var(--color-whatsapp);">0533 617 35 55</a></p>`;
  const footerContactNew = `<p style="font-size: 0.9rem; margin-bottom: 6px;">💬 WhatsApp: <a href="https://wa.me/905336173555" target="_blank" style="color: var(--color-whatsapp);">0533 617 35 55</a></p>
          <p style="font-size: 0.9rem; margin-bottom: 6px;">📸 Instagram: <a href="https://instagram.com/cinarahsapurunleri?cplk=ZTR0YmgyczRkOTB4" target="_blank" rel="noopener" style="color: #e1306c; font-weight: 600;">@cinarahsapurunleri</a></p>`;

  if (content.includes(footerContactOld) && !content.includes('📸 Instagram:')) {
    content = content.replace(footerContactOld, footerContactNew);
  }

  // Footer catalog link update to point directly to CNR KAPAK KATALOG.pdf as well as katalog.html
  const footerCatOld = `<a href="katalog.html" style="margin-top: 10px; display: inline-block; color: var(--color-accent); font-weight: 700;">📖 2026 E-Katalog İndir &rarr;</a>`;
  const footerCatNew = `<a href="assets/CNR%20KAPAK%20KATALOG.pdf" target="_blank" download="CNR-KAPAK-KATALOG.pdf" style="margin-top: 10px; display: inline-block; color: var(--color-accent); font-weight: 700;">📖 CNR Kapak Kataloğu İndir (PDF) &rarr;</a>`;

  if (content.includes(footerCatOld)) {
    content = content.replace(footerCatOld, footerCatNew);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    phoneReplaced++;
  }
});

console.log('Updated ' + phoneReplaced + ' files successfully.');
