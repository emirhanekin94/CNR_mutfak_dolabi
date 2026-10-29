const fs = require('fs');

// 1. UPDATE assets/js/main.js LIGHTBOX
let js = fs.readFileSync('assets/js/main.js', 'utf8').replace(/\r\n/g, '\n');

const oldJsLightbox = `  // 5. Basit & Hızlı Görsel Lightbox (Sıfır Reflow - İlk Tıklamada Lazy Yükleme)
  const galleryItems = document.querySelectorAll('.media-slot img, .live-gallery-media img');
  if (galleryItems.length > 0) {
    let lightboxModal = null;
    let lightboxImg = null;

    function ensureLightbox() {
      if (lightboxModal) return;
      lightboxModal = document.createElement('div');
      lightboxModal.className = 'lightbox-modal';
      lightboxModal.style.cssText = \`
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.88); z-index: 5000; display: none;
        align-items: center; justify-content: center; padding: 20px;
        backdrop-filter: blur(5px); cursor: zoom-out;
      \`;
      lightboxImg = document.createElement('img');
      lightboxImg.style.cssText = \`
        max-width: 90%; max-height: 85vh; border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5); object-fit: contain;
      \`;
      lightboxModal.appendChild(lightboxImg);
      document.body.appendChild(lightboxModal);

      lightboxModal.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
      });
    }

    galleryItems.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        if (img.src && !img.src.includes('data:image/svg')) {
          ensureLightbox();
          lightboxImg.src = img.src;
          lightboxModal.style.display = 'flex';
        }
      });
    });
  }`;

const newJsLightbox = `  // 5. GELİŞMİŞ ETKİLEŞİMLİ FOTOĞRAF GALERİSİ & LIGHTBOX (SAĞA/SOLA KAYDIRMA, SWIPE & WHATSAPP)
  (function initInteractiveGalleryLightbox() {
    const galleryImages = Array.from(document.querySelectorAll('.live-gallery-media img, .media-slot img, .door-sample-frame img'));
    if (!galleryImages.length) return;

    let currentIndex = 0;
    let modal = null;
    let mainImg = null;
    let titleEl = null;
    let counterEl = null;
    let waBtn = null;
    let touchStartX = 0;
    let touchStartY = 0;

    const items = galleryImages.map((img, idx) => {
      const card = img.closest('.live-gallery-card, .door-sample-frame, article, section') || img.parentElement;
      const title = card ? (card.querySelector('.live-gallery-title, h3, h4')?.textContent?.trim() || img.alt || 'Özel İmalat Modelimiz') : (img.alt || 'Özel İmalat Modelimiz');
      return {
        src: img.src,
        alt: img.alt || title,
        title: title,
        index: idx
      };
    });

    function createLightbox() {
      if (modal) return;
      modal = document.createElement('div');
      modal.className = 'custom-gallery-lightbox';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Fotoğraf Galerisi');
      modal.style.cssText = \`
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(10, 15, 25, 0.95); z-index: 999999; display: none;
        flex-direction: column; align-items: center; justify-content: center;
        backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        user-select: none; touch-action: pan-y;
      \`;

      modal.innerHTML = \`
        <!-- Üst Bar: Kapatma & Sayaç -->
        <div style="position: absolute; top: 16px; left: 20px; right: 20px; display: flex; justify-content: space-between; align-items: center; z-index: 1000000;">
          <div id="lb-counter" style="background: rgba(255,255,255,0.15); color: #f8fafc; font-size: 0.88rem; font-weight: 700; padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.22); letter-spacing: 0.5px;">
            1 / \${items.length}
          </div>
          <button id="lb-close" aria-label="Kapat" style="background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; transition: all 0.2s;">
            ✕
          </button>
        </div>

        <!-- Ana Görsel Sahnesi -->
        <div style="position: relative; width: 100%; height: 75vh; display: flex; align-items: center; justify-content: center; padding: 0 16px;">
          <img id="lb-main-img" src="" alt="" style="max-width: 92vw; max-height: 72vh; border-radius: 12px; box-shadow: 0 25px 60px rgba(0,0,0,0.7); object-fit: contain; transition: opacity 0.2s ease, transform 0.2s ease;">
          
          <!-- Sol Ok (Önceki Fotoğraf) -->
          <button id="lb-prev" aria-label="Önceki Fotoğraf" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.20); border: 1px solid rgba(255,255,255,0.30); color: #ffffff; width: 54px; height: 54px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 34px; cursor: pointer; transition: all 0.2s; backdrop-filter: blur(8px); z-index: 1000000;">
            ‹
          </button>
          
          <!-- Sağ Ok (Sonraki Fotoğraf) -->
          <button id="lb-next" aria-label="Sonraki Fotoğraf" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.20); border: 1px solid rgba(255,255,255,0.30); color: #ffffff; width: 54px; height: 54px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 34px; cursor: pointer; transition: all 0.2s; backdrop-filter: blur(8px); z-index: 1000000;">
            ›
          </button>
        </div>

        <!-- Alt Bar: Model Başlığı & Doğrudan WhatsApp Butonu -->
        <div style="position: absolute; bottom: 20px; left: 16px; right: 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; z-index: 1000000;">
          <div id="lb-title" style="color: #ffffff; font-family: var(--font-serif, serif); font-size: 1.1rem; font-weight: 600; text-shadow: 0 2px 8px rgba(0,0,0,0.8); max-width: 650px;">
            Model Başlığı
          </div>
          <a id="lb-wa-btn" href="#" target="_blank" rel="noopener" class="btn btn-whatsapp" style="font-weight: 700; border-radius: 28px; padding: 11px 26px; box-shadow: 0 8px 24px rgba(37,211,102,0.4); text-decoration: none; font-size: 0.95rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.217 8.217 0 01-5.83 2.42c-1.47 0-2.91-.4-4.17-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.188 8.188 0 01-1.25-4.4c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
            Bu Modeli WhatsApp'tan Sor
          </a>
        </div>
      \`;

      document.body.appendChild(modal);

      mainImg = modal.querySelector('#lb-main-img');
      titleEl = modal.querySelector('#lb-title');
      counterEl = modal.querySelector('#lb-counter');
      waBtn = modal.querySelector('#lb-wa-btn');

      // Buton Tıklamaları
      modal.querySelector('#lb-close').addEventListener('click', closeModal);
      modal.querySelector('#lb-prev').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
      modal.querySelector('#lb-next').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
      
      // Boşluğa tıklayınca kapatma
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.id === 'lb-main-img') {
          // Resme tıklayınca değil, arka plana tıklayınca kapat
          if (e.target === modal) closeModal();
        }
      });

      // Mobilde Sağa/Sola Dokunmatik Kaydırma (Swipe Gestures)
      modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
      }, { passive: true });

      modal.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        // Yatay kaydırma dikeyden baskınsa ve 40px eşiğini geçtiyse
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextImage(); // Sola kaydırdı -> Sonraki fotoğraf
          } else {
            prevImage(); // Sağa kaydırdı -> Önceki fotoğraf
          }
        }
      }, { passive: true });

      // Klavye Kontrolleri
      document.addEventListener('keydown', (e) => {
        if (!modal || modal.style.display !== 'flex') return;
        if (e.key === 'ArrowRight' || e.key === 'd') nextImage();
        else if (e.key === 'ArrowLeft' || e.key === 'a') prevImage();
        else if (e.key === 'Escape') closeModal();
      });
    }

    function renderActiveImage(dir = 0) {
      if (!items.length) return;
      const cur = items[currentIndex];

      mainImg.style.opacity = '0';
      mainImg.style.transform = dir > 0 ? 'translateX(25px)' : (dir < 0 ? 'translateX(-25px)' : 'scale(0.97)');

      setTimeout(() => {
        mainImg.src = cur.src;
        mainImg.alt = cur.alt;
        titleEl.textContent = cur.title;
        counterEl.textContent = \`\${currentIndex + 1} / \${items.length}\`;
        const waMsg = encodeURIComponent(\`Merhaba, web sitenizdeki "\${cur.title}" modeli hakkinda bilgi ve fiyat almak istiyorum.\`);
        waBtn.href = \`https://wa.me/905336173755?text=\${waMsg}\`;

        mainImg.style.opacity = '1';
        mainImg.style.transform = 'translateX(0) scale(1)';
      }, 100);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % items.length;
      renderActiveImage(1);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      renderActiveImage(-1);
    }

    function openModal(idx) {
      createLightbox();
      currentIndex = idx;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      renderActiveImage(0);
    }

    function closeModal() {
      if (!modal) return;
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    // Görsellere tıklama bağlama
    galleryImages.forEach((img, idx) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(idx);
      });
    });
  })();`;

if (js.includes(oldJsLightbox)) {
  js = js.replace(oldJsLightbox, newJsLightbox);
  console.log('SUCCESS: Updated main.js with swipeable interactive lightbox.');
  fs.writeFileSync('assets/js/main.js', js.replace(/\n/g, '\r\n'), 'utf8');
} else {
  console.error('ERROR: Could not find oldJsLightbox in main.js');
}

