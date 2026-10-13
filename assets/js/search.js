/**
 * ÇNR MUTFAK & MOBİLYA - AKILLI AJAN TABANLI ARAMA MOTORU (AGENT SEARCH)
 * LLM & Doğal Dil Eşleştirme Uyumlu, Milisaniyelik Client-Side Arama
 */

const SEARCH_DATABASE = [
  // 1. Mutfak Dolapları & Alt Kategoriler
  {
    title: "Membran Kapak Mutfak Dolabı",
    category: "Mutfak Dolapları",
    url: "membran-mutfak-dolabi.html",
    keywords: ["membran", "pvc kaplama", "country mutfak", "oymalı kapak", "ahşap dokulu", "balon kapak", "neme dayanıklı", "ümraniye membran dolap"],
    desc: "MDF üzerine CNC işleme ve vakum pres PVC kaplama. Geniş renk ve desen seçeneği, bütçe dostu ve uzun ömürlü."
  },
  {
    title: "Matplus Kapak Mutfak Dolabı",
    category: "Mutfak Dolapları",
    url: "matplus-mutfak-dolabi.html",
    keywords: ["matplus", "mat kapak", "parmak izi tutmayan", "soft touch", "ipek mat", "modern mutfak", "leke tutmaz"],
    desc: "Özel nanoteknolojik ipeksi mat yüzey. Parmak izi bırakmaz, çizilmelere karşı yüksek direnç sağlar."
  },
  {
    title: "Akrilik Kapak Mutfak Dolabı",
    category: "Mutfak Dolapları",
    url: "akrilik-mutfak-dolabi.html",
    keywords: ["akrilik", "çizilmez akrilik", "senosan", "ayna parlaklığı", "modern mutfak", "cam parlaklığı", "parlak mutfak"],
    desc: "Ultra parlak ve çizilmez Akrilik levha kaplama. Sararmaz, UV ışınlarına ve deterjanlara karşı %100 dayanıklıdır."
  },
  {
    title: "Lake Kapak Mutfak Dolabı",
    category: "Mutfak Dolapları",
    url: "lake-mutfak-dolabi.html",
    keywords: ["lake", "lake boya", "poliüretan boya", "parlak lake", "mat lake", "klasik lake", "özel renk", "lüks mutfak"],
    desc: "Ham MDF üzerine çok katmanlı astar ve poliüretan lake boya. RAL koduna göre sınırsız renk ve pürüzsüz yüzey."
  },
  {
    title: "High Gloss Kapak Mutfak Dolabı",
    category: "Mutfak Dolapları",
    url: "high-gloss-mutfak-dolabi.html",
    keywords: ["high gloss", "parlak kapak", "glosspan", "ekonomik parlak", "derin parlaklık", "hayglass"],
    desc: "MDF-Lam üzerine UV lak parlak yüzey. Işıltılı ve modern mutfaklar için ekonomik ve şık kapak çözümü."
  },
  {
    title: "Tüm Mutfak Dolabı Modelleri & İmalat",
    category: "Mutfak Dolapları",
    url: "mutfak-dolaplari.html",
    keywords: ["mutfak dolabı", "imalatçı", "ümraniye mutfak", "özel ölçü dolap", "mutfak dolapları"],
    desc: "Akrilik, lake, membran ve matplus mutfak dolabı modellerimiz ve atölye imalat avantajlarımız."
  },

  // 2. Banyo Dolabı
  {
    title: "Banyo Dolabı İmalatı & Özel Tasarım",
    category: "Banyo Dolabı",
    url: "banyo-dolabi.html",
    keywords: ["banyo dolabı", "suya dayanıklı", "aynalı dolap", "çamaşır makinesi dolabı", "lake banyo", "mdf banyo"],
    desc: "Neme ve buhara dayanıklı gövde, frenli menteşeler, gizli LED aydınlatmalı aynalar ve boy dolapları."
  },

  // 3. Banyo Tadilat ve Yenileme
  {
    title: "Anahtar Teslim Banyo Tadilat & Yenileme",
    category: "Banyo Tadilat",
    url: "banyo-tadilat-yenileme.html",
    keywords: ["banyo tadilat", "banyo yenileme", "kırım döküm", "su tesisatı", "seramik döşeme", "duşakabin", "asma klozet"],
    desc: "Kırım, sıhhi tesisat yenileme, seramik, duşakabin ve banyo mobilyası dahil A'dan Z'ye anahtar teslim banyo çözümleri."
  },

  // 4. Gardırop
  {
    title: "Gardırop Modelleri & Ray Dolap",
    category: "Gardırop",
    url: "gardirop-modelleri.html",
    keywords: ["gardırop", "ray dolap", "sürgülü dolap", "akıllı iç organizatör", "menteşeli gardırop", "pantolonluk", "sensörlü led"],
    desc: "Mekana özel ölçü gardıroplar, sessiz ray sistemleri, füme cam kapaklar ve işlevsel iç bölmeler."
  },

  // 5. Mobilya Dekorasyon
  {
    title: "Özel Mobilya Dekorasyon & TV Üniteleri",
    category: "Mobilya Dekorasyon",
    url: "mobilya-dekorasyon.html",
    keywords: ["mobilya dekorasyon", "tv ünitesi", "duvar paneli", "lambri", "vestiyer", "portmanto", "kitaplık", "ahşap çıta"],
    desc: "Salon TV üniteleri, antre vestiyerleri, dekoratif ahşap lambriler ve mimari mobilya uygulamaları."
  },

  // 6. Yatak Odası Mobilyası
  {
    title: "Yatak Odası Mobilyası & Başlık Tasarımları",
    category: "Yatak Odası",
    url: "yatak-odasi-mobilyasi.html",
    keywords: ["yatak odası", "karyola", "komodin", "şifonyer", "makyaj masası", "yatak başlığı", "ledli başlık"],
    desc: "Konforlu, estetik ve işlevsel yatak odası mobilyaları. Baza, başlık, şifonyer ve komodin takımları."
  },

  // 7. Gardolap / Giyinme Odası
  {
    title: "Lüks Giyinme Odası Sistemleri (Walk-in Closet)",
    category: "Giyinme Odası",
    url: "giyinme-odasi.html",
    keywords: ["giyinme odası", "walk-in closet", "ada giyinme ünitesi", "açık gardırop", "led aydınlatmalı dolap", "cam kapaklı dolap"],
    desc: "Geniş veya dar alanlar için ada üniteli, takı çekmeceli, bronz cam kapaklı lüks giyinme odaları."
  },

  // 8. Mutfak Dekorasyonu
  {
    title: "Komple Mutfak Dekorasyonu & Ada Mutfak",
    category: "Mutfak Dekorasyonu",
    url: "mutfak-dekorasyonu.html",
    keywords: ["mutfak dekorasyonu", "ada mutfak", "tezgah arası porselen", "çimstone", "belenco", "mutfak aydınlatma", "tadilat"],
    desc: "Ada mutfak planlaması, tezgah ve tezgah arası uygulamalar, gizli priz sistemleri ve ergonomik mutfak tasarımı."
  },

  // 9. Kapı Modelleri
  {
    title: "İç Oda Kapısı Modelleri (Lake & Membran)",
    category: "Kapı Modelleri",
    url: "kapi-modelleri.html",
    keywords: ["kapı", "lake kapı", "membran kapı", "ahşap kapı", "oda kapısı", "camlı kapı", "manyetik kilit"],
    desc: "Modern ve klasik tasarımlı, sessiz manyetik kilitli, çizilmeye dayanıklı lake ve membran oda kapıları."
  },

  // Teklif & Keşif
  {
    title: "Ücretsiz Keşif & Proje Fiyat Teklifi",
    category: "Teklif & Keşif",
    url: "iletisim.html",
    keywords: ["fiyat", "ücretsiz keşif", "fiyat teklifi", "mutfak dolabı fiyatı", "gardırop fiyatı", "maliyet", "teklif al", "yerinde ölçü"],
    desc: "Mekanınıza özel yerinde ücretsiz keşif, 3D çizim ve mimar destekli imalat fiyat teklifi alın."
  },

  // SSS & Atölye
  {
    title: "Ümraniye Atölye ve İletişim Bilgileri",
    category: "İletişim",
    url: "iletisim.html",
    keywords: ["ümraniye", "harita", "adres", "telefon", "ücretsiz keşif", "dudullu", "ataşehir", "atölye"],
    desc: "İstanbul Ümraniye imalat atölyemiz, Google harita konumu, telefon ve ücretsiz keşif randevu kanalları."
  },

  // Hizmet Bölgeleri
  {
    title: "Hizmet Bölgelerimiz (Ümraniye, Ataşehir, Çekmeköy, Tüm İstanbul)",
    category: "Bölgeler",
    url: "hizmet-bolgeleri.html",
    keywords: ["bölgeler", "hizmet bölgeleri", "ümraniye", "ataşehir", "çekmeköy", "sancaktepe", "kadıköy", "üsküdar", "maltepe", "kartal", "pendik", "beykoz", "avrupa yakası", "beşiktaş", "sarıyer", "keşif bölgeleri"],
    desc: "Ümraniye atölyemizden İstanbul Anadolu ve Avrupa yakasındaki tüm ilçelere ücretsiz keşif ve montaj hizmeti."
  },

  // Blog & Rehber
  {
    title: "Mutfak & Mobilya Tasarım Blogu ve Rehberi",
    category: "Blog & Rehber",
    url: "blog.html",
    keywords: ["blog", "rehber", "metretül hesaplama", "membran lake farkı", "matplus nedir", "küçük mutfak fikirleri", "banyo tadilatı süresi", "gardırop seçimi"],
    desc: "Mutfak dolabı kapak karşılaştırmaları, metretül fiyat hesaplama formülleri ve mimari marangozluk ipuçları."
  }
];

// Arama Motoru Başlatma Mantığı
document.addEventListener('DOMContentLoaded', () => {
  // Arama Modalı Elementlerini Oluşturma
  const modal = document.createElement('div');
  modal.className = 'search-modal-backdrop';
  modal.id = 'agentSearchModal';
  modal.innerHTML = `
    <div class="search-modal-card">
      <div class="search-input-wrapper">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c59b5f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" class="search-input-field" id="agentSearchInput" placeholder="Model, kapak türü, malzeme veya hizmet arayın... (Örn: membran, lake, ada mutfak)" autocomplete="off">
        <button class="search-close-btn" id="closeSearchModal" aria-label="Aramayı Kapat">&times;</button>
      </div>
      <div class="search-results-list" id="searchResultsList">
        <p style="padding: 16px; font-size: 0.88rem; color: #718096; text-align: center;">Aramak istediğiniz mutfak dolabı kapak türü, gardırop veya dekorasyon detayını yazınız...</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const searchInput = document.getElementById('agentSearchInput');
  const resultsContainer = document.getElementById('searchResultsList');
  const closeBtn = document.getElementById('closeSearchModal');

  function openSearch() {
    modal.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Tetikleyici Butonlar (Header Arama Butonu)
  const triggers = document.querySelectorAll('.search-trigger-btn, [data-open-search]');
  triggers.forEach(tr => tr.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  // Modal Dışına Tıklama
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  // Klavye Kısayolu (Ctrl+K veya Cmd+K veya Escape)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      modal.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Akıllı Arama Filtreleme (Semantic & Normalized Turkish Search)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const rawQuery = e.target.value.trim().toLowerCase();
      
      // Türkçe harf normalizasyonu (ı/i, ç/c, ğ/g, ş/s, ö/o, ü/u)
      const normalize = (str) => {
        return str
          .replace(/ı/g, 'i')
          .replace(/ğ/g, 'g')
          .replace(/ü/g, 'u')
          .replace(/ş/g, 's')
          .replace(/ö/g, 'o')
          .replace(/ç/g, 'c');
      };

      const query = normalize(rawQuery);

      if (query.length < 2) {
        resultsContainer.innerHTML = `<p style="padding: 16px; font-size: 0.88rem; color: #718096; text-align: center;">Aramak istediğiniz modeli veya malzemeyi yazın...</p>`;
        return;
      }

      const matched = SEARCH_DATABASE.filter(item => {
        const titleMatch = normalize(item.title.toLowerCase()).includes(query);
        const descMatch = normalize(item.desc.toLowerCase()).includes(query);
        const categoryMatch = normalize(item.category.toLowerCase()).includes(query);
        const keywordMatch = item.keywords.some(k => normalize(k.toLowerCase()).includes(query));
        return titleMatch || descMatch || categoryMatch || keywordMatch;
      });

      if (matched.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 24px; text-align: center;">
            <p style="font-weight: 600; color: #1e242e;">Sonuç bulunamadı: "${rawQuery}"</p>
            <p style="font-size: 0.85rem; color: #718096; margin-top: 6px;">Atölyemiz tüm özel ölçü mobilya ve kapak modellerini üretmektedir. WhatsApp üzerinden anında bilgi alabilirsiniz.</p>
            <a href="https://wa.me/905320000000?text=Merhaba,%20${encodeURIComponent(rawQuery)}%20hakkinda%20bilgi%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="margin-top: 12px; display: inline-flex;">WhatsApp'tan Sor</a>
          </div>
        `;
        return;
      }

      let html = '';
      matched.forEach(item => {
        html += `
          <a href="${item.url}" class="search-result-item" onclick="document.getElementById('agentSearchModal').classList.remove('active'); document.body.style.overflow='';">
            <div class="search-result-info">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="search-tag-pill">${item.category}</span>
                <h4>${item.title}</h4>
              </div>
              <p style="margin-top: 4px;">${item.desc}</p>
            </div>
            <span style="font-size: 0.85rem; color: var(--color-accent); font-weight: 700;">İncele &rarr;</span>
          </a>
        `;
      });

      resultsContainer.innerHTML = html;
    });
  }
});
