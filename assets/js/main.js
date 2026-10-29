/**
 * MUTFAK DOLABINIZ - ANA JAVASCRIPT ÇEKİRDEĞİ
 * Sıfır Harici Kütüphane, Yüksek Performans, Google PageSpeed 90+ Uyumlu
 */

function initMutfakDolabinizApp() {
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
      const phone = "905336173755"; // İletişim numarasıyla güncellenebilir
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  });

  // 5. GELİŞMİŞ ETKİLEŞİMLİ FOTOĞRAF GALERİSİ & LIGHTBOX (SAĞA/SOLA KAYDIRMA, SWIPE & WHATSAPP)
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
      modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(10, 15, 25, 0.95); z-index: 999999; display: none;
        flex-direction: column; align-items: center; justify-content: center;
        backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        user-select: none; touch-action: pan-y;
      `;

      modal.innerHTML = `
        <!-- Üst Bar: Kapatma & Sayaç -->
        <div style="position: absolute; top: 16px; left: 20px; right: 20px; display: flex; justify-content: space-between; align-items: center; z-index: 1000000;">
          <div id="lb-counter" style="background: rgba(255,255,255,0.15); color: #f8fafc; font-size: 0.88rem; font-weight: 700; padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.22); letter-spacing: 0.5px;">
            1 / ${items.length}
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
      `;

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
        counterEl.textContent = `${currentIndex + 1} / ${items.length}`;
        const waMsg = encodeURIComponent(`Merhaba, web sitenizdeki "${cur.title}" modeli hakkinda bilgi ve fiyat almak istiyorum.`);
        waBtn.href = `https://wa.me/905336173755?text=${waMsg}`;

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
  })();

  // 6. GOOGLE ANALYTICS 4 & ADS - %100 KAPSAMLI TIKLAMA & DÖNÜŞÜM TAKİBİ (SIFIR KAÇAK)
  (function initAnalyticsTracking() {
    let lastTrackTime = 0;
    let lastTrackTarget = null;

    function sendGtag(eventName, params) {
      try {
        console.log('[GA4 Takip] Etkinlik: ' + eventName, params);
        if (typeof window.gtag === 'function') {
          window.gtag('event', eventName, params);
        } else {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: eventName, ...params });
        }
      } catch (err) {
        console.warn('GA4 Takip Hatası:', err);
      }
    }

    function detectLocation(el) {
      if (el.closest('.custom-gallery-lightbox')) return 'Fotograf_Buyutme_Lightbox';
      if (el.closest('.live-gallery-card')) return 'Atolye_Teslimat_Karti';
      if (el.closest('.gallery-bottom-cta')) return 'Galeri_Alti_Model_Gonder_Bandi';
      if (el.closest('.ads-lead-box, .ads-lead-container')) return 'Hizli_Teklif_Kutusu';
      if (el.closest('.mobile-bottom-bar')) return 'Mobil_Sabit_Alt_Bar';
      if (el.closest('.floating-actions, .float-btn-group, .float-whatsapp-btn, .float-phone-btn, .float-call-btn, .float-instagram-btn')) return 'Masaustu_Yuzen_Buton';
      if (el.closest('.hero-section, .hero, .hero-grid')) return 'Hero_Karsilama';
      if (el.closest('.site-header, header, .nav-container')) return 'Ana_Menu_Header';
      if (el.closest('.top-bar')) return 'Ust_Bilgi_Cubugu';
      if (el.closest('.mobile-drawer, .drawer-content')) return 'Mobil_Menu_Cekmecesi';
      if (el.closest('.calculator-section, #priceCalculatorForm, .calc-wrapper')) return 'Fiyat_Hesaplayici';
      if (el.closest('.site-footer, footer')) return 'Site_Alti_Footer';
      if (el.closest('.faq-section, .faq-container')) return 'SSS_Bolumu';
      if (el.closest('.spec-tabs, .tabs-wrapper')) return 'Kategori_Sekmeleri';
      if (el.closest('.agent-search-modal, .search-container')) return 'Akilli_Arama_Paneli';
      return 'Sayfa_Govdesi';
    }

    function extractCleanLabel(el) {
      // 1. Manuel tanımlı analiz etiketi
      const customLabel = el.getAttribute('data-ga-label') || el.getAttribute('data-analytics-label');
      if (customLabel && customLabel.trim()) return customLabel.trim();

      // 2. Lightbox içindeki WhatsApp butonu ise aktif model başlığını çek
      if (el.id === 'lb-wa-btn' || el.closest('#lb-wa-btn')) {
        const lbTitle = document.getElementById('lb-title');
        const modelName = lbTitle ? lbTitle.textContent.trim() : 'Özel İmalat Model';
        return 'Lightbox WhatsApp: ' + modelName;
      }

      // 3. Teslimat kartı içindeki WhatsApp butonu ise o kartın model başlığını çek
      const card = el.closest('.live-gallery-card, .category-card');
      if (card) {
        const cardTitle = card.querySelector('.live-gallery-title, .category-title, h3, h4');
        if (cardTitle && cardTitle.textContent.trim()) {
          return 'Model: ' + cardTitle.textContent.trim();
        }
      }

      // 4. Galeri altındaki model fotoğrafı gönder bandı
      if (el.closest('.gallery-bottom-cta')) {
        return 'Galeri Altı: Model Fotoğrafı Gönder & Fiyat Al';
      }

      // 5. Mobil sabit alt bar
      if (el.closest('.mobile-bottom-bar')) {
        if (el.classList.contains('btn-call-sticky') || el.closest('.btn-call-sticky')) return 'Mobil Alt Bar: Hemen Ara (0533 617 37 55)';
        if (el.classList.contains('btn-wa-sticky') || el.closest('.btn-wa-sticky')) return 'Mobil Alt Bar: WhatsApp Teklifi';
        if (el.classList.contains('btn-ig-sticky') || el.closest('.btn-ig-sticky')) return 'Mobil Alt Bar: Instagram (@cinarahsapurunleri)';
      }

      // 6. Masaüstü yüzen butonlar
      if (el.closest('.floating-actions')) {
        if (el.classList.contains('float-whatsapp') || el.closest('.float-whatsapp')) return 'Masaüstü Yüzen WhatsApp';
        if (el.classList.contains('float-phone') || el.closest('.float-phone')) return 'Masaüstü Yüzen Telefon';
      }

      // 7. Aria-label (ikon butonlarda net isim verir)
      const ariaLabel = el.getAttribute('aria-label');
      if (ariaLabel && ariaLabel.trim()) return ariaLabel.trim();

      // 8. Title niteliği
      const titleAttr = el.getAttribute('title');
      if (titleAttr && titleAttr.trim()) return titleAttr.trim();

      // 9. Görünen metin
      let text = el.innerText || el.textContent || '';
      text = text.replace(/[\n\r\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
      if (text.length > 0 && text.length < 80) return text;

      // 10. Görsel alt etiketi
      const img = el.querySelector('img');
      if (img && img.alt && img.alt.trim()) return img.alt.trim();

      // 11. URL / Href akıllı analizi
      const href = (el.getAttribute('href') || '').toLowerCase();
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '').replace(/[^\d+]/g, '');
        if (phone.includes('5336173755') || phone.includes('533')) {
          return 'Mobil Hat Arama (0533 617 37 55)';
        } else if (phone.includes('2162088281') || phone.includes('216')) {
          return 'Sabit Hat Arama (0216 208 82 81)';
        }
        return 'Telefonla Arama: ' + phone;
      }

      if (href.includes('wa.me') || href.includes('whatsapp')) {
        const waAction = el.getAttribute('data-wa-action');
        if (waAction === 'kesif') return 'WhatsApp Ücretsiz Keşif Randevusu';
        if (waAction === 'teklif') return 'WhatsApp Fiyat Teklifi';
        if (waAction === 'katalog') return 'WhatsApp Katalog Talebi';
        return 'WhatsApp İletişim Hattı';
      }

      if (href.includes('instagram.com')) return 'Instagram Profil Ziyareti (@cinarahsapurunleri)';
      if (href.includes('maps') || href.includes('goo.gl')) return 'Google Haritalar Yol Tarifi';
      if (href.endsWith('.pdf') || href.includes('katalog')) return '2026 E-Katalog İncele / İndir';
      if (href.includes('fiyat-hesapla') || href.includes('#hesaplama')) return 'Mutfak Dolabı Fiyat Hesaplama';

      if (el.classList.contains('mobile-nav-toggle')) return 'Mobil Menü Açma Butonu';
      if (el.classList.contains('drawer-close')) return 'Mobil Menü Kapatma Butonu';
      if (el.classList.contains('faq-question')) return 'SSS Soru Başlığı: ' + (text || 'Soru');
      if (el.classList.contains('spec-tab-btn')) {
        const target = el.getAttribute('data-target') || '';
        return 'Kapak Sekmesi Değiştir: ' + (text || target);
      }
      if (el.id === 'calcWhatsappBtn') return 'Hesaplayıcıdan WhatsApp Teklifi Al';
      if (el.id === 'agentSearchBtn') return 'Akıllı Arama Penceresini Aç';

      if (el.id) return 'Buton: #' + el.id;
      if (el.className && typeof el.className === 'string') {
        const firstClass = el.className.split(' ').filter(c => c && !c.includes('active'))[0];
        if (firstClass) return 'Buton (' + firstClass + ')';
      }

      return 'Site İçi Buton';
    }

    function detectButtonType(el, href) {
      const h = (href || '').toLowerCase();
      const elClass = (typeof el.className === 'string' ? el.className.toLowerCase() : '');
      const elId = (el.id || '').toLowerCase();

      // 1. TELEFON ARAMA (Tüm tel: linkleri ve arama butonları)
      if (h.startsWith('tel:') || 
          h.includes('tel:+90') || 
          h.includes('tel:0533') || 
          h.includes('tel:0216') ||
          elClass.includes('phone') || 
          elClass.includes('btn-call') || 
          el.closest('.btn-call-sticky, .float-phone-btn, .float-call-btn, a[href^="tel:"]')) {
        return 'telefon_arama';
      }

      // 2. WHATSAPP (wa.me, api.whatsapp ve tüm whatsapp sınıfları)
      if (h.includes('wa.me') || 
          h.includes('whatsapp') || 
          elClass.includes('whatsapp') || 
          elClass.includes('btn-wa') || 
          elId.includes('whatsapp') || 
          el.id === 'lb-wa-btn' ||
          el.closest('.btn-whatsapp, .float-whatsapp-btn, .btn-wa-sticky, #calcWhatsappBtn, #lb-wa-btn, a[href*="wa.me"], a[href*="whatsapp"]')) {
        return 'whatsapp_mesaj';
      }

      // 3. INSTAGRAM (instagram.com linkleri ve butonları)
      if (h.includes('instagram.com') || 
          elClass.includes('instagram') || 
          elClass.includes('btn-ig') || 
          el.closest('.btn-hero-instagram, .float-instagram-btn, .btn-ig-sticky, a[href*="instagram.com"]')) {
        return 'instagram_ziyaret';
      }

      if (h.includes('maps') || h.includes('goo.gl')) return 'harita_konum';
      if (h.endsWith('.pdf') || h.includes('katalog')) return 'katalog';
      if (h.includes('fiyat-hesapla') || el.id === 'calcWhatsappBtn') return 'fiyat_hesapla';
      if (el.classList.contains('spec-tab-btn')) return 'sekme_secimi';
      if (el.classList.contains('faq-question')) return 'sss_etkilesim';
      if (el.id === 'agentSearchBtn') return 'arama_motoru';
      if (el.type === 'submit' || el.tagName === 'BUTTON') return 'form_veya_eylem';
      if (el.classList.contains('nav-link') || el.classList.contains('mobile-nav-link')) return 'navigasyon_linki';
      return 'genel_buton';
    }

    // Tıklamaları yakala (Capture: true ile DOM'daki dinamik ve statik hiçbir tıklama kaçmaz)
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button, input[type="submit"], input[type="button"], [role="button"], .faq-question, .spec-tab-btn');
      if (!target) return;

      // Hızlı çift tıklamayı önle (250ms debounce)
      const now = Date.now();
      if (target === lastTrackTarget && now - lastTrackTime < 250) return;
      lastTrackTarget = target;
      lastTrackTime = now;

      const href = target.getAttribute('href') || '';
      const buttonLabel = extractCleanLabel(target);
      const buttonLocation = detectLocation(target);
      const buttonType = detectButtonType(target, href);

      // 1. MÜŞTERİNİN GA4 PANELİNDE DİREKT VE NET GÖRECEĞİ ÖZEL ETKİNLİKLER
      if (buttonType === 'whatsapp_mesaj') {
        // A) Doğrudan 'whatsapp_click' Etkinliği (Ana tabloda gün/hafta bazında ayrı satırda çıkar)
        sendGtag('whatsapp_click', {
          event_category: 'WhatsApp',
          event_label: buttonLabel,
          button_location: buttonLocation,
          button_text: buttonLabel,
          link_url: href || window.location.href,
          page_path: window.location.pathname
        });

        // B) Google Ads Dönüşüm Takibi (Mevcut generate_lead korunur)
        sendGtag('generate_lead', {
          event_category: 'Dönüşüm',
          event_label: buttonLabel,
          lead_type: 'WhatsApp Danışma & Teklif',
          button_location: buttonLocation,
          value: 1
        });
      } else if (buttonType === 'telefon_arama') {
        // A) Doğrudan 'telefon_arama_click' Etkinliği (Ana tabloda gün/hafta bazında ayrı satırda çıkar)
        sendGtag('telefon_arama_click', {
          event_category: 'Telefon Arama',
          event_label: buttonLabel,
          button_location: buttonLocation,
          button_text: buttonLabel,
          contact_method: href.includes('216') ? 'Sabit Hat (0216 208 82 81)' : 'Mobil Hat (0533 617 37 55)',
          link_url: href || window.location.href,
          page_path: window.location.pathname
        });

        // B) Google Ads Dönüşüm Takibi (Mevcut contact korunur)
        sendGtag('contact', {
          event_category: 'Dönüşüm',
          event_label: buttonLabel,
          contact_method: href.includes('216') ? 'Sabit Hat (0216 208 82 81)' : 'Mobil Hat (0533 617 37 55)',
          button_location: buttonLocation,
          value: 1
        });
      } else if (buttonType === 'instagram_ziyaret') {
        // A) Doğrudan 'instagram_click' Etkinliği (Ana tabloda gün/hafta bazında ayrı satırda çıkar)
        sendGtag('instagram_click', {
          event_category: 'Instagram',
          event_label: buttonLabel,
          button_location: buttonLocation,
          button_text: buttonLabel,
          link_url: href || window.location.href,
          page_path: window.location.pathname
        });
      } else if (buttonType === 'katalog') {
        sendGtag('file_download', {
          event_category: 'İçerik İndirme',
          event_label: buttonLabel,
          file_name: 'mutfak-dolabiniz-kapak-katalogu.pdf',
          file_extension: 'pdf'
        });
      } else {
        // 2. Diğer Tüm Genel Butonlar (Yalnızca WhatsApp, Instagram, Telefon veya Katalog DIŞINDAKİ butonlar)
        sendGtag('button_click', {
          event_category: 'Buton Tıklama',
          event_label: buttonLabel,
          button_name: buttonLabel,
          button_text: buttonLabel,
          button_type: buttonType,
          button_location: buttonLocation,
          link_url: href || window.location.href,
          page_location: window.location.href,
          page_path: window.location.pathname,
          page_title: document.title
        });
      }
    }, { capture: true, passive: true });

    // 3. Form Gönderim Takibi (Keşif Formları)
    document.addEventListener('submit', (e) => {
      const form = e.target;
      const formName = form.id || form.getAttribute('name') || 'Ücretsiz Keşif Randevusu Formu';
      const formLocation = detectLocation(form);

      sendGtag('form_submit', {
        event_category: 'Form Gönderimi',
        event_label: formName,
        form_name: formName,
        button_location: formLocation,
        page_path: window.location.pathname
      });

      sendGtag('generate_lead', {
        event_category: 'Dönüşüm',
        event_label: formName,
        lead_type: 'Web Keşif Formu Talebi',
        value: 1
      });
    }, { capture: true, passive: true });
  })();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMutfakDolabinizApp);
} else {
  initMutfakDolabinizApp();
}
