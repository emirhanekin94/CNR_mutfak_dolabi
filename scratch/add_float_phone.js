const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'fiyat-hesapla.html');

const phoneButtonHtml = `    <a href="tel:+905320000000" 
       class="float-phone-btn" 
       aria-label="Hemen Telefonla Ara">
      <span class="float-phone-tooltip">Hemen Ara (0532 000 00 00)</span>
      <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
    </a>`;

let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Check if float-phone-btn already exists
  if (content.includes('float-phone-btn')) {
    console.log(file, 'already has float-phone-btn');
    continue;
  }

  // Regex to match <div class="floating-actions">
  const regex = /(<div class=["']floating-actions["']>)([\s\S]*?)(<a[^>]*class=["'](?:float-whatsapp-btn|float-btn float-whatsapp)[^>]*>)/i;

  if (regex.test(content)) {
    content = content.replace(regex, (match, openDiv, space, waLink) => {
      return `${openDiv}\n${phoneButtonHtml}\n    ${waLink}`;
    });
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log('Added phone button to:', file);
  } else {
    console.error('FAILED to match floating-actions in:', file);
  }
}

console.log(`Successfully updated ${updatedCount} files.`);
