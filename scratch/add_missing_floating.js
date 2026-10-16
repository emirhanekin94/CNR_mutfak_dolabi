const fs = require('fs');

const missingFiles = [
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html',
  'katalog.html'
];

const floatingActionsHtml = `  <!-- Masaüstü Sabit Yüzen Butonlar (Mobilde Gizlenir) -->
  <div class="floating-actions">
    <a href="tel:+905336173755" 
       class="float-phone-btn" 
       aria-label="Hemen Telefonla Ara">
      <span class="float-phone-tooltip">Hemen Ara (0533 617 37 55)</span>
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    </a>
    <a href="https://wa.me/905336173755?text=Merhaba,%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Bilgi%20ve%20fiyat%20almak%20istiyorum." 
       class="float-whatsapp-btn" 
       target="_blank" 
       rel="noopener" 
       aria-label="WhatsApp Canlı Danışma">
      <span class="float-whatsapp-tooltip">WhatsApp'tan Canlı Fiyat Al</span>
      <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
    </a>
  </div>\n\n`;

for (const file of missingFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('float-phone-btn')) continue;

  const target = '<!-- Mobil Sabit Alt Bar';
  if (content.includes(target)) {
    content = content.replace(target, floatingActionsHtml + target);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Added floating actions to:', file);
  } else {
    // If comment is slightly different
    const navTarget = '<nav class="mobile-bottom-bar"';
    if (content.includes(navTarget)) {
      content = content.replace(navTarget, floatingActionsHtml + navTarget);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Added floating actions before nav in:', file);
    } else {
      console.error('Could not find insertion point in:', file);
    }
  }
}
