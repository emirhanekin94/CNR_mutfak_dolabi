const fs = require('fs');

let js = fs.readFileSync('assets/js/main.js', 'utf8').replace(/\r\n/g, '\n');

const oldAnalyticsRegex = /\/\/ 6\. GOOGLE ANALYTICS 4[\s\S]*?\}\)\(\);\s*\}\s*$/;

const newAnalyticsBlock = `// 6. GOOGLE ANALYTICS 4 & ADS - %100 KAPSAMLI TIKLAMA & DÖNÜŞÜM TAKİBİ (SIFIR KAÇAK)
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
      text = text.replace(/[\\n\\r\\t]+/g, ' ').replace(/\\s{2,}/g, ' ').trim();
      if (text.length > 0 && text.length < 80) return text;

      // 10. URL akıllı analizi
      const href = (el.getAttribute('href') || '').toLowerCase();
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '').replace(/[^\\d+]/g, '');
        if (phone.includes('5336173755') || phone.includes('533')) {
          return 'Mobil Hat Arama (0533 617 37 55)';
        } else if (phone.includes('2162088281') || phone.includes('216')) {
          return 'Sabit Hat Arama (0216 208 82 81)';
        }
        return 'Telefonla Arama: ' + phone;
      }

      if (href.includes('wa.me') || href.includes('whatsapp')) {
        return 'WhatsApp İletişim Hattı';
      }

      if (href.includes('instagram.com')) return 'Instagram Profil Ziyareti (@cinarahsapurunleri)';
      if (href.includes('maps') || href.includes('goo.gl')) return 'Google Haritalar Yol Tarifi';
      if (href.endsWith('.pdf') || href.includes('katalog')) return '2026 E-Katalog İncele / İndir';

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

      // 2. WHATSAPP (wa.me, api.whatsapp, tüm whatsapp sınıfları ve modal whatsapp butonu)
      if (h.includes('wa.me') || 
          h.includes('whatsapp') || 
          elClass.includes('whatsapp') || 
          elClass.includes('btn-wa') || 
          elId.includes('whatsapp') || 
          elId === 'lb-wa-btn' ||
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
`;

js = js.replace(oldAnalyticsRegex, newAnalyticsBlock);
fs.writeFileSync('assets/js/main.js', js.replace(/\n/g, '\r\n'), 'utf8');
console.log('SUCCESS: Upgraded assets/js/main.js analytics tracking.');

