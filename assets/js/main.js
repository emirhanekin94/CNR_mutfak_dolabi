/**
 * MUTFAK DOLABINIZ - ANA JAVASCRIPT ÇEKİRDEĞİ
 * Sıfır Harici Kütüphane, Yüksek Performans, Google PageSpeed 90+ Uyumlu
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobil Menü Açma / Kapama (Drawer)
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerBackdrop) {
      mobileDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // 2. SSS (FAQ) Akordiyon Mantığı
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // İsteğe bağlı: Diğerlerini kapat
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Mutfak Kapak Türü ve Kategori Sekmeleri (Tabs)
  const tabButtons = document.querySelectorAll('.spec-tab-btn');
  const tabPanels = document.querySelectorAll('.spec-tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 4. WhatsApp Hızlı Mesaj Bağlantıları (Özel Proje Gönderimi)
  const whatsappButtons = document.querySelectorAll('[data-wa-action]');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.getAttribute('data-wa-action');
      let text = "Merhaba, web siteniz üzerinden ulaşıyorum. ";
      
      if (action === 'kesif') {
        text += "Ümraniye / İstanbul adresim için ücretsiz mutfak keşif ve 3D çizim randevusu almak istiyorum.";
      } else if (action === 'teklif') {
        text += "Mutfak dolabı / mobilya projem için yaklaşık fiyat teklifi almak istiyorum.";
      } else if (action === 'katalog') {
        text += "Yeni sezon mutfak ve kapak modelleri kataloğunuzu incelemek istiyorum.";
      }
      
      // Standart şirket WhatsApp hattı numarası
      const phone = "905336173555"; // İletişim numarasıyla güncellenebilir
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  });

  // 5. Basit & Hızlı Görsel Lightbox (Sıfır Reflow - İlk Tıklamada Lazy Yükleme)
  const galleryItems = document.querySelectorAll('.media-slot img, .live-gallery-media img');
  if (galleryItems.length > 0) {
    let lightboxModal = null;
    let lightboxImg = null;

    function ensureLightbox() {
      if (lightboxModal) return;
      lightboxModal = document.createElement('div');
      lightboxModal.className = 'lightbox-modal';
      lightboxModal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.88); z-index: 5000; display: none;
        align-items: center; justify-content: center; padding: 20px;
        backdrop-filter: blur(5px); cursor: zoom-out;
      `;
      lightboxImg = document.createElement('img');
      lightboxImg.style.cssText = `
        max-width: 90%; max-height: 85vh; border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5); object-fit: contain;
      `;
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
  }
});
