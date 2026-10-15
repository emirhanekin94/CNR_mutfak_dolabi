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

  // 6. GOOGLE ANALYTICS 4 - KAPSAMLI BUTON & CTA ETKİLEŞİM İZLEYİCİSİ (SIFIR BOŞ ETİKET)
  (function initAnalyticsTracking() {
    let lastTrackTime = 0;
    let lastTrackTarget = null;

    function sendGtag(eventName, params) {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: eventName, ...params });
      }
    }

    function detectLocation(el) {
      if (el.closest('.top-bar')) return 'Ust_Bilgi_Cubugu';
      if (el.closest('.site-header, header, .nav-container')) return 'Ana_Menu_Header';
      if (el.closest('.mobile-drawer, .drawer-content')) return 'Mobil_Menu_Cekmecesi';
      if (el.closest('.hero, .hero-section')) return 'Hero_Karsilama';
      if (el.closest('.mobile-bottom-bar')) return 'Mobil_Sabit_Alt_Bar';
      if (el.closest('.float-btn-group, .float-whatsapp-btn, .float-call-btn')) return 'Sabit_Kose_Butonlari';
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

      // 2. Aria-label (ikon butonlarda net isim verir)
      const ariaLabel = el.getAttribute('aria-label');
      if (ariaLabel && ariaLabel.trim()) return ariaLabel.trim();

      // 3. Title niteliği
      const titleAttr = el.getAttribute('title');
      if (titleAttr && titleAttr.trim()) return titleAttr.trim();

      // 4. Görünen metin (ikon ve boşlukları ayıkla)
      let text = el.innerText || el.textContent || '';
      text = text.replace(/[\n\r\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
      if (text.length > 0 && text.length < 80) return text;

      // 5. Görsel alt etiketi
      const img = el.querySelector('img');
      if (img && img.alt && img.alt.trim()) return img.alt.trim();

      // 6. URL / Href akıllı analizi (Boş etiket oluşmasını engeller)
      const href = (el.getAttribute('href') || '').toLowerCase();
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '').replace(/[^\d+]/g, '');
        if (phone.includes('5336173555') || phone.includes('533')) {
          return 'Mobil Hat Arama (0533 617 35 55)';
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

      // 7. Buton sınıfı veya ID kontrolü
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
      if (h.startsWith('tel:')) return 'telefon_arama';
      if (h.includes('wa.me') || h.includes('whatsapp')) return 'whatsapp_mesaj';
      if (h.includes('maps') || h.includes('goo.gl')) return 'harita_konum';
      if (h.includes('instagram.com')) return 'sosyal_medya';
      if (h.endsWith('.pdf') || h.includes('katalog')) return 'katalog';
      if (h.includes('fiyat-hesapla') || el.id === 'calcWhatsappBtn') return 'fiyat_hesapla';
      if (el.classList.contains('spec-tab-btn')) return 'sekme_secimi';
      if (el.classList.contains('faq-question')) return 'sss_etkilesim';
      if (el.id === 'agentSearchBtn') return 'arama_motoru';
      if (el.type === 'submit' || el.tagName === 'BUTTON') return 'form_veya_eylem';
      if (el.classList.contains('nav-link') || el.classList.contains('mobile-nav-link')) return 'navigasyon_linki';
      return 'genel_buton';
    }

    // Tıklamaları yakala (Capture: true ile hiçbir tıklama kaçmaz)
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

      // 1. Standart Buton Tıklama Olayı (GA4 Raporlarında doğrudan görünür)
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

      // 2. Yüksek Değerli Dönüşüm Olayları (GA4 Dönüşümler Raporuna Otomatik Düşer)
      if (buttonType === 'whatsapp_mesaj') {
        sendGtag('generate_lead', {
          event_category: 'Dönüşüm',
          event_label: buttonLabel,
          lead_type: 'WhatsApp Danışma & Teklif',
          button_location: buttonLocation,
          value: 1
        });
      } else if (buttonType === 'telefon_arama') {
        sendGtag('contact', {
          event_category: 'Dönüşüm',
          event_label: buttonLabel,
          contact_method: href.includes('216') ? 'Sabit Hat (0216 208 82 81)' : 'Mobil Hat (0533 617 35 55)',
          button_location: buttonLocation,
          value: 1
        });
      } else if (buttonType === 'katalog') {
        sendGtag('file_download', {
          event_category: 'İçerik İndirme',
          event_label: buttonLabel,
          file_name: 'mutfak-dolabiniz-kapak-katalogu.pdf',
          file_extension: 'pdf'
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
});
