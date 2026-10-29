const fs = require('fs');

let c = fs.readFileSync('banyo-dolabi.html', 'utf8');

const videoSecRegex = /<section class="section-padding" style="background: #ffffff; border-top: 1px solid var\(--color-border\); border-bottom: 1px solid var\(--color-border\);">[\s\S]*?<\/section>/;

const cleanVideoSec = `<section class="section-padding" style="background: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Üretim Kalitemiz</span>
        <h2 class="section-title">Atölyemizde <span>Özel Ölçü Banyo Dolabı İmalatı</span></h2>
        <p class="section-desc">Su buharına ve neme %100 dayanıklı 18 mm MDF-Lam gövdeler ve çok katmanlı poliüretan fırın lake boya ile uzun ömürlü banyo mobilyaları üretiyoruz.</p>
      </div>

      <div class="video-showcase-box">
        <div class="video-overlay-badge">
          <span class="video-badge-dot"></span>
          <span>MUTFAK DOLABINIZ · ATÖLYE İMALAT VİDEOSU</span>
        </div>
        <video controls playsinline preload="none" poster="assets/videos/imalat_atolye_video-2-poster.webp" aria-label="Mutfak Dolabınız İstanbul İmalat Atölyesi Video Gösterimi" title="Mutfak Dolabınız İmalat Videosu">
          <source src="assets/videos/imalat_atolye_video-2.webm" type="video/webm">
          <track kind="captions" src="assets/videos/captions.vtt" srclang="tr" label="Türkçe" default>
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
    </div>
  </section>`;

c = c.replace(videoSecRegex, cleanVideoSec);
fs.writeFileSync('banyo-dolabi.html', c, 'utf8');

const openDivs = (c.match(/<div[\s>]/g) || []).length;
const closeDivs = (c.match(/<\/div>/g) || []).length;
console.log('banyo-dolabi.html div balance:', openDivs, 'open vs', closeDivs, 'close (diff:', openDivs - closeDivs, ')');

