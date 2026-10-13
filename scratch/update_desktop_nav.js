const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// The enhanced desktop navigation HTML
function getNavHtml(currentFile) {
  const isMutfakActive = [
    'mutfak-dolaplari.html', 'membran-mutfak-dolabi.html', 'matplus-mutfak-dolabi.html',
    'akrilik-mutfak-dolabi.html', 'lake-mutfak-dolabi.html', 'high-gloss-mutfak-dolabi.html'
  ].includes(currentFile);

  const isMobilyaActive = [
    'giyinme-odasi.html', 'kapi-modelleri.html', 'mobilya-dekorasyon.html',
    'mutfak-dekorasyonu.html', 'yatak-odasi-mobilyasi.html'
  ].includes(currentFile);

  return `<nav class="main-nav" aria-label="Ana Menü">
        <a href="index.html" class="nav-link${currentFile === 'index.html' ? ' active' : ''}">Ana Sayfa</a>
        
        <div class="nav-item has-dropdown">
          <a href="mutfak-dolaplari.html" class="nav-link dropdown-toggle${isMutfakActive ? ' active' : ''}">
            Mutfak Dolapları <span class="arrow">▾</span>
          </a>
          <div class="nav-dropdown">
            <a href="membran-mutfak-dolabi.html" class="dropdown-link"><span>Membran Kapak</span> <span class="dropdown-tag">Popüler</span></a>
            <a href="matplus-mutfak-dolabi.html" class="dropdown-link"><span>Matplus Kapak</span> <span class="dropdown-tag">Leke Tutmaz</span></a>
            <a href="akrilik-mutfak-dolabi.html" class="dropdown-link"><span>Akrilik Kapak</span> <span class="dropdown-tag">Ultra Parlak</span></a>
            <a href="lake-mutfak-dolabi.html" class="dropdown-link"><span>Lake Kapak</span> <span class="dropdown-tag">Lüks Boya</span></a>
            <a href="high-gloss-mutfak-dolabi.html" class="dropdown-link"><span>High Gloss Kapak</span> <span class="dropdown-tag">Ekonomik</span></a>
            <a href="mutfak-dolaplari.html" class="dropdown-link" style="border-top: 1px solid #f1f5f9; margin-top: 4px; padding-top: 8px;"><span>Tüm Mutfak Modelleri &rarr;</span></a>
          </div>
        </div>

        <a href="banyo-dolabi.html" class="nav-link${currentFile === 'banyo-dolabi.html' ? ' active' : ''}">Banyo Dolabı</a>
        <a href="banyo-tadilat-yenileme.html" class="nav-link${currentFile === 'banyo-tadilat-yenileme.html' ? ' active' : ''}">Banyo Tadilat</a>
        <a href="gardirop-modelleri.html" class="nav-link${currentFile === 'gardirop-modelleri.html' ? ' active' : ''}">Gardırop</a>

        <div class="nav-item has-dropdown">
          <a href="mobilya-dekorasyon.html" class="nav-link dropdown-toggle${isMobilyaActive ? ' active' : ''}">
            Özel Mobilya & Dekorasyon <span class="arrow">▾</span>
          </a>
          <div class="nav-dropdown">
            <a href="giyinme-odasi.html" class="dropdown-link"><span>Giyinme Odası (Walk-in)</span> <span class="dropdown-tag">Lüks</span></a>
            <a href="kapi-modelleri.html" class="dropdown-link"><span>İç Oda Kapıları</span> <span class="dropdown-tag">Lake/PVC</span></a>
            <a href="mobilya-dekorasyon.html" class="dropdown-link"><span>Özel Mobilya & TV Ünitesi</span></a>
            <a href="mutfak-dekorasyonu.html" class="dropdown-link"><span>Mutfak Dekorasyonu & Ada</span></a>
            <a href="yatak-odasi-mobilyasi.html" class="dropdown-link"><span>Yatak Odası Mobilyası</span></a>
          </div>
        </div>

        <a href="hizmet-bolgeleri.html" class="nav-link${currentFile === 'hizmet-bolgeleri.html' ? ' active' : ''}">Hizmet Bölgeleri</a>
        <a href="blog.html" class="nav-link${currentFile === 'blog.html' ? ' active' : ''}">Blog</a>
        <a href="katalog.html" class="nav-link${currentFile === 'katalog.html' ? ' active' : ''}">Katalog</a>
        <a href="iletisim.html" class="nav-link${currentFile === 'iletisim.html' ? ' active' : ''}">İletişim</a>
      </nav>`;
}

let count = 0;
for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  const navRegex = /<nav class="main-nav"[^>]*>[\s\S]*?<\/nav>/;
  if (navRegex.test(c)) {
    c = c.replace(navRegex, getNavHtml(f));
    fs.writeFileSync(f, c, 'utf8');
    count++;
  }
}

console.log('Updated desktop main-nav in', count, 'files!');
