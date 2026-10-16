/**
 * MUTFAK DOLABINIZ - AKILLI AJAN TABANLI ARAMA MOTORU v2.0 (AGENT SEARCH ENGINE)
 * Çoklu Belirteç, Hızlı Filtre Hapları, Doğrudan Eylemler & Mutfak Dolabınız PDF Katalog Entegreli
 */

const SEARCH_DATABASE = [
  // 0. Özel Doğrudan Eylemler & Katalog
  {
    title: "Mutfak Dolabınız Kapak Kataloğu (Resmi PDF - 2026 Baskı)",
    category: "E-Katalog",
    url: "assets/mutfak-dolabiniz-kapak-katalogu.pdf",
    isDownload: true,
    keywords: ["katalog", "pdf", "kapak kataloğu", "kartela", "renkler", "modeller", "broşür", "e-katalog", "kapak modelleri kataloğu"],
    desc: "Tüm membran, lake, akrilik, matplus kapak modelleri ve renk kartelalarını içeren 94 MB yüksek çözünürlüklü resmi PDF katalog."
  },
  {
    title: "2026 Mutfak Dolabı & Mobilya Fiyat Hesaplayıcı",
    category: "Fiyat & Hesaplama",
    url: "fiyat-hesapla.html",
    keywords: ["fiyat", "hesapla", "metretül", "fiyatı", "ne kadar", "ücret", "maliyet", "bütçe", "teklif"],
    desc: "Mutfak ölçülerinize, seçtiğiniz kapak türüne ve mekanizmalara göre saniyeler içinde tahmini bütçe ve metretül fiyatı hesaplayın."
  },
  {
    title: "Instagram Güncel Atölye ve Montaj Videoları (@cinarahsapurunleri)",
    category: "Sosyal Medya",
    url: "https://instagram.com/cinarahsapurunleri?cplk=ZTR0YmgyczRkOTB4",
    isExternal: true,
    keywords: ["instagram", "sosyal medya", "video", "hikaye", "imalat videoları", "fotoğraf", "referanslar"],
    desc: "Atölyemizde devam eden CNC ebatlama, lake fırın boyama ve müşteri teslimatlarından anlık paylaşımlar."
  },

  // 1. Mutfak Dolapları & Alt Kategoriler
  {
    title: "Membran Kapak Mutfak Dolabı",
    category: "Mutfak",
    url: "membran-mutfak-dolabi.html",
    keywords: ["membran", "pvc kaplama", "country mutfak", "oymalı kapak", "ahşap dokulu", "balon kapak", "neme dayanıklı", "ümraniye membran dolap"],
    desc: "MDF üzerine CNC işleme ve vakum pres PVC kaplama. Geniş renk ve desen seçeneği, bütçe dostu ve uzun ömürlü."
  },
  {
    title: "Matplus Kapak Mutfak Dolabı",
    category: "Mutfak",
    url: "matplus-mutfak-dolabi.html",
    keywords: ["matplus", "mat kapak", "parmak izi tutmayan", "soft touch", "ipek mat", "modern mutfak", "leke tutmaz"],
    desc: "Özel nanoteknolojik ipeksi mat yüzey. Parmak izi bırakmaz, çizilmelere karşı yüksek direnç sağlar."
  },
  {
    title: "Akrilik Kapak Mutfak Dolabı",
    category: "Mutfak",
    url: "akrilik-mutfak-dolabi.html",
    keywords: ["akrilik", "çizilmez akrilik", "senosan", "ayna parlaklığı", "modern mutfak", "cam parlaklığı", "parlak mutfak"],
    desc: "Ultra parlak ve çizilmez Akrilik levha kaplama. Sararmaz, UV ışınlarına ve deterjanlara karşı %100 dayanıklıdır."
  },
  {
    title: "Lake Kapak Mutfak Dolabı",
    category: "Mutfak",
    url: "lake-mutfak-dolabi.html",
    keywords: ["lake", "lake boya", "poliüretan boya", "parlak lake", "mat lake", "klasik lake", "özel renk", "lüks mutfak"],
    desc: "Ham MDF üzerine çok katmanlı astar ve poliüretan lake boya. RAL koduna göre sınırsız renk ve pürüzsüz yüzey."
  },
  {
    title: "High Gloss Kapak Mutfak Dolabı",
    category: "Mutfak",
    url: "high-gloss-mutfak-dolabi.html",
    keywords: ["high gloss", "parlak kapak", "glosspan", "ekonomik parlak", "derin parlaklık", "hayglass"],
    desc: "MDF-Lam üzerine UV lak parlak yüzey. Işıltılı ve modern mutfaklar için ekonomik ve şık kapak çözümü."
  },
  {
    title: "Özel İmalat Mutfak Dolapları (Tüm Modeller)",
    category: "Mutfak",
    url: "mutfak-dolaplari.html",
    keywords: ["mutfak dolabı", "imalatçı", "ümraniye mutfak", "özel ölçü dolap", "mutfak dolapları", "atölye"],
    desc: "Akrilik, lake, membran ve matplus mutfak dolabı modellerimiz ve atölye imalat avantajlarımız."
  },

  // 2. Banyo Dolabı & Tadilat
  {
    title: "Banyo Dolabı İmalatı & Özel Tasarım",
    category: "Banyo",
    url: "banyo-dolabi.html",
    keywords: ["banyo dolabı", "suya dayanıklı", "aynalı dolap", "çamaşır makinesi dolabı", "lake banyo", "mdf banyo", "asma banyo dolabı"],
    desc: "Neme ve buhara dayanıklı gövde, frenli menteşeler, gizli LED aydınlatmalı aynalar ve boy dolapları."
  },
  {
    title: "Anahtar Teslim Banyo Tadilat & Yenileme",
    category: "Banyo",
    url: "banyo-tadilat-yenileme.html",
    keywords: ["banyo tadilat", "banyo yenileme", "kırım döküm", "su tesisatı", "seramik döşeme", "duşakabin", "asma klozet"],
    desc: "Kırım, sıhhi tesisat yenileme, seramik, duşakabin ve banyo mobilyası dahil A'dan Z'ye anahtar teslim banyo çözümleri."
  },

  // 3. Gardırop & Giyinme Odası
  {
    title: "Gardırop Modelleri & Ray Dolap",
    category: "Gardırop",
    url: "gardirop-modelleri.html",
    keywords: ["gardırop", "gardolap", "ray dolap", "sürgülü dolap", "akıllı iç organizatör", "menteşeli gardırop", "pantolonluk", "sensörlü led"],
    desc: "Mekana özel ölçü gardıroplar, sessiz ray sistemleri, füme cam kapaklar ve işlevsel iç bölmeler."
  },
  {
    title: "Lüks Giyinme Odası Sistemleri (Walk-in Closet)",
    category: "Gardırop",
    url: "giyinme-odasi.html",
    keywords: ["giyinme odası", "walk-in closet", "ada giyinme ünitesi", "açık gardırop", "led aydınlatmalı dolap", "cam kapaklı dolap"],
    desc: "Geniş veya dar alanlar için ada üniteli, takı çekmeceli, bronz cam kapaklı lüks giyinme odaları."
  },

  // 4. Kapı & Dekorasyon
  {
    title: "İç Oda Kapısı Modelleri (Lake & Membran)",
    category: "Kapı",
    url: "kapi-modelleri.html",
    keywords: ["kapı", "lake kapı", "membran kapı", "ahşap kapı", "oda kapısı", "camlı kapı", "manyetik kilit", "iç kapı"],
    desc: "Modern ve klasik tasarımlı, sessiz manyetik kilitli, çizilmeye dayanıklı lake ve membran oda kapıları."
  },
  {
    title: "Özel Mobilya Dekorasyon & TV Üniteleri",
    category: "Dekorasyon",
    url: "mobilya-dekorasyon.html",
    keywords: ["mobilya dekorasyon", "tv ünitesi", "duvar paneli", "lambri", "vestiyer", "portmanto", "kitaplık", "ahşap çıta"],
    desc: "Salon TV üniteleri, antre vestiyerleri, dekoratif ahşap lambriler ve mimari mobilya uygulamaları."
  },
  {
    title: "Komple Mutfak Dekorasyonu & Ada Mutfak",
    category: "Dekorasyon",
    url: "mutfak-dekorasyonu.html",
    keywords: ["mutfak dekorasyonu", "ada mutfak", "tezgah arası porselen", "çimstone", "belenco", "mutfak aydınlatma", "tadilat"],
    desc: "Ada mutfak planlaması, tezgah ve tezgah arası uygulamalar, gizli priz sistemleri ve ergonomik mutfak tasarımı."
  },
  {
    title: "Yatak Odası Mobilyası & Başlık Tasarımları",
    category: "Yatak Odası",
    url: "yatak-odasi-mobilyasi.html",
    keywords: ["yatak odası", "karyola", "komodin", "şifonyer", "makyaj masası", "yatak başlığı", "ledli başlık"],
    desc: "Konforlu, estetik ve işlevsel yatak odası mobilyaları. Baza, başlık, şifonyer ve komodin takımları."
  },

  // 5. Hizmet Bölgeleri (21 İlçe)
  {
    title: "Ümraniye Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "umraniye-mutfak-dolabi.html",
    keywords: ["ümraniye", "mutfak dolabı", "keşif", "imalat", "dudullu osb", "çakmak", "yamanevler", "atakent"],
    desc: "Ümraniye bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Ataşehir Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "atasehir-mutfak-dolabi.html",
    keywords: ["ataşehir", "mutfak dolabı", "keşif", "imalat", "batı ataşehir", "içerenköy", "küçükbakkalköy", "barbaros"],
    desc: "Ataşehir bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Çekmeköy Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "cekmekoy-mutfak-dolabi.html",
    keywords: ["çekmeköy", "mutfak dolabı", "keşif", "imalat", "taşdelen", "alemdağ", "mimar sinan"],
    desc: "Çekmeköy bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Sancaktepe Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "sancaktepe-mutfak-dolabi.html",
    keywords: ["sancaktepe", "mutfak dolabı", "keşif", "imalat", "sarıgazi", "samandıra", "yenidoğan"],
    desc: "Sancaktepe bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Kadıköy Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "kadikoy-mutfak-dolabi.html",
    keywords: ["kadıköy", "mutfak dolabı", "keşif", "imalat", "bağdat caddesi", "suadiye", "caddebostan", "fenerbahçe"],
    desc: "Kadıköy bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Üsküdar Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "uskudar-mutfak-dolabi.html",
    keywords: ["üsküdar", "mutfak dolabı", "keşif", "imalat", "çamlıca", "altunizade", "beylerbeyi", "kandilli"],
    desc: "Üsküdar bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Maltepe Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "maltepe-mutfak-dolabi.html",
    keywords: ["maltepe", "mutfak dolabı", "keşif", "imalat", "küçükyalı", "i̇dealtepe", "altayçeşme", "dragos"],
    desc: "Maltepe bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Kartal Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "kartal-mutfak-dolabi.html",
    keywords: ["kartal", "mutfak dolabı", "keşif", "imalat", "soğanlık", "yakacık", "atalar", "kordonboyu"],
    desc: "Kartal bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Pendik Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "pendik-mutfak-dolabi.html",
    keywords: ["pendik", "mutfak dolabı", "keşif", "imalat", "kurtköy", "yenişehir", "batı mahallesi"],
    desc: "Pendik bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Beykoz Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "beykoz-mutfak-dolabi.html",
    keywords: ["beykoz", "mutfak dolabı", "keşif", "imalat", "kavacık", "acarkent", "göksu evleri"],
    desc: "Beykoz bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Sultanbeyli Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "sultanbeyli-mutfak-dolabi.html",
    keywords: ["sultanbeyli", "mutfak dolabı", "keşif", "imalat"],
    desc: "Sultanbeyli bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Tuzla Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "tuzla-mutfak-dolabi.html",
    keywords: ["tuzla", "mutfak dolabı", "keşif", "imalat", "postane mahallesi", "yayla", "aydınlı"],
    desc: "Tuzla bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Şile Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "sile-mutfak-dolabi.html",
    keywords: ["şile", "mutfak dolabı", "keşif", "imalat", "ağva", "kumbaba"],
    desc: "Şile bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Beşiktaş Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "besiktas-mutfak-dolabi.html",
    keywords: ["beşiktaş", "mutfak dolabı", "keşif", "imalat", "etiler", "levent", "bebek", "ulus"],
    desc: "Beşiktaş bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Sarıyer Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "sariyer-mutfak-dolabi.html",
    keywords: ["sarıyer", "mutfak dolabı", "keşif", "imalat", "zekeriyaköy", "tarabya", "yeniköy", "maslak"],
    desc: "Sarıyer bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Şişli Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "sisli-mutfak-dolabi.html",
    keywords: ["şişli", "mutfak dolabı", "keşif", "imalat", "nişantaşı", "teşvikiye", "bomonti", "mecidiyeköy"],
    desc: "Şişli bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Bakırköy Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "bakirkoy-mutfak-dolabi.html",
    keywords: ["bakırköy", "mutfak dolabı", "keşif", "imalat", "ataköy", "florya", "yeşilköy"],
    desc: "Bakırköy bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Başakşehir Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "basaksehir-mutfak-dolabi.html",
    keywords: ["başakşehir", "mutfak dolabı", "keşif", "imalat", "bahçeşehir", "kayaşehir"],
    desc: "Başakşehir bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Beylikdüzü Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "beylikduzu-mutfak-dolabi.html",
    keywords: ["beylikdüzü", "mutfak dolabı", "keşif", "imalat", "adnan kahveci", "yakuplu", "marina"],
    desc: "Beylikdüzü bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Eyüpsultan Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "eyupsultan-mutfak-dolabi.html",
    keywords: ["eyüpsultan", "mutfak dolabı", "keşif", "imalat", "göktürk", "kemerburgaz"],
    desc: "Eyüpsultan bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Kağıthane Mutfak Dolabı İmalatı & Keşif",
    category: "Hizmet Bölgeleri",
    url: "kagithane-mutfak-dolabi.html",
    keywords: ["kağıthane", "mutfak dolabı", "keşif", "imalat", "vadistanbul", "seyrantepe"],
    desc: "Kağıthane bölgesine özel ölçü mutfak dolabı imalatı, 3D tasarım ve ücretsiz yerinde keşif."
  },
  {
    title: "Tüm Hizmet Bölgelerimiz (İstanbul Geneli)",
    category: "Hizmet Bölgeleri",
    url: "hizmet-bolgeleri.html",
    keywords: ["bölgeler", "hizmet bölgeleri", "istanbul", "keşif", "servis"],
    desc: "Ümraniye atölyemizden İstanbul'un tüm Anadolu ve Avrupa ilçelerine ücretsiz keşif ve montaj."
  },
  {
    title: "İletişim, Atölye Adresi & Yol Tarifi",
    category: "İletişim",
    url: "iletisim.html",
    keywords: ["iletişim", "adres", "telefon", "numara", "konum", "atölye", "harita", "whatsapp"],
    desc: "Ümraniye Dudullu atölyemiz, Google Maps navigasyon, doğrudan telefon ve WhatsApp iletişim kanalları."
  },
  {
    title: "Mutfak & Mobilya Tasarım Blogu",
    category: "Blog & Rehber",
    url: "blog.html",
    keywords: ["blog", "rehber", "makale", "tavsiye", "trendler"],
    desc: "2026 mutfak dolabı trendleri, kapak malzeme karşılaştırmaları ve mimari rehberler."
  }
];

// Türkçe karakterleri normalize eden yardımcı fonksiyon
function normalizeTR(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .trim();
}

// Arama Motoru Başlatma (Sıfır Reflow - Tıklama / Boşta Lazy Initialization)
document.addEventListener('DOMContentLoaded', () => {
  let modal = null;
  let searchInput = null;
  let resultsContainer = null;
  let closeBtn = null;
  let currentCategoryFilter = '';

  function ensureModalCreated() {
    if (modal) return;
    modal = document.createElement('div');
    modal.className = 'search-modal-backdrop';
    modal.id = 'agentSearchModal';
    modal.innerHTML = `
      <div class="search-modal-card">
        <div class="search-input-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent, #875d1f)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="search-input-field" id="agentSearchInput" placeholder="Model, malzeme, ilçe veya katalog arayın... (Örn: lake, membran, giyinme odası, beşiktaş)" autocomplete="off">
          <button class="search-close-btn" id="closeSearchModal" aria-label="Aramayı Kapat">&times;</button>
        </div>

        <!-- Akıllı Filtre Hapları (Filter Chips) -->
        <div class="search-filter-chips" style="display: flex; gap: 8px; padding: 10px 20px; overflow-x: auto; background: #fafbfc; border-bottom: 1px solid #edf2f7; -webkit-overflow-scrolling: touch;">
          <button type="button" class="search-chip active" data-filter="" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #e2e8f0; background: #ffffff; cursor: pointer; white-space: nowrap;">✨ Tümü</button>
          <button type="button" class="search-chip" data-filter="Mutfak" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #e2e8f0; background: #ffffff; cursor: pointer; white-space: nowrap;">🍳 Mutfak</button>
          <button type="button" class="search-chip" data-filter="Banyo" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #e2e8f0; background: #ffffff; cursor: pointer; white-space: nowrap;">🚿 Banyo</button>
          <button type="button" class="search-chip" data-filter="Gardırop" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #e2e8f0; background: #ffffff; cursor: pointer; white-space: nowrap;">🚪 Gardırop</button>
          <button type="button" class="search-chip" data-filter="Kapı" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #e2e8f0; background: #ffffff; cursor: pointer; white-space: nowrap;">🚪 Kapı</button>
          <button type="button" class="search-chip" data-filter="E-Katalog" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #875d1f; color: #875d1f; background: #fdf9f3; cursor: pointer; white-space: nowrap;">📖 Mutfak Dolabınız PDF Katalog</button>
          <button type="button" class="search-chip" data-filter="Hizmet Bölgeleri" style="padding: 4px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; border: 1px solid #e2e8f0; background: #ffffff; cursor: pointer; white-space: nowrap;">📍 İlçeler</button>
        </div>

        <div class="search-results-list" id="searchResultsList">
          <div style="padding: 24px; text-align: center; color: #718096;">
            <p style="font-weight: 600; color: #2d3748; margin-bottom: 6px;">Atölye Arama Ajanı Hazır</p>
            <p style="font-size: 0.85rem;">Membran, lake, akrilik, giyinme odası veya hizmet verdiğimiz ilçeleri yazarak arayabilirsiniz.</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    searchInput = document.getElementById('agentSearchInput');
    resultsContainer = document.getElementById('searchResultsList');
    closeBtn = document.getElementById('closeSearchModal');
    const chips = modal.querySelectorAll('.search-chip');

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => {
          c.classList.remove('active');
          c.style.background = '#ffffff';
          c.style.color = '#2d3748';
        });
        chip.classList.add('active');
        chip.style.background = '#1e242e';
        chip.style.color = '#ffffff';
        currentCategoryFilter = chip.getAttribute('data-filter') || '';
        renderSearchResults(searchInput.value);
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
      });
    }
  }

  function openSearch() {
    ensureModalCreated();
    modal.classList.add('active');
    setTimeout(() => { if (searchInput) searchInput.focus(); }, 80);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Tetikleyici Butonlar (Header Arama Butonu)
  const triggers = document.querySelectorAll('.search-trigger-btn, [data-open-search]');
  triggers.forEach(tr => tr.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  // Klavye Kısayolu (Ctrl+K veya Cmd+K veya Escape)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (modal && modal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Sayfa tamamen açıldıktan sonra boşta ön yükle (Idle preload)
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => ensureModalCreated(), { timeout: 3000 });
  } else {
    setTimeout(ensureModalCreated, 2000);
  }

  // Arama Ajanı Motoru
  function renderSearchResults(rawQuery) {
    const query = normalizeTR(rawQuery);
    const tokens = query.split(/\s+/).filter(t => t.length > 0);

    let filtered = SEARCH_DATABASE;

    if (currentCategoryFilter) {
      filtered = filtered.filter(item => item.category === currentCategoryFilter);
    }

    if (tokens.length === 0) {
      if (currentCategoryFilter) {
        // Kategori seçilmişse o kategorideki tüm maddeleri listele
        renderItems(filtered, rawQuery);
        return;
      }
      resultsContainer.innerHTML = `
        <div style="padding: 24px; text-align: center; color: #718096;">
          <p style="font-weight: 600; color: #2d3748; margin-bottom: 6px;">Hızlı Öneriler</p>
          <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 10px;">
            <a href="katalog.html" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">📖 Mutfak Dolabınız PDF Katalog</a>
            <a href="membran-mutfak-dolabi.html" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">Membran Mutfak</a>
            <a href="lake-mutfak-dolabi.html" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">Lake Mutfak</a>
            <a href="giyinme-odasi.html" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">Giyinme Odası</a>
          </div>
        </div>
      `;
      return;
    }

    // Çoklu token ve esnek anahtar kelime eşleştirme
    const matched = filtered.filter(item => {
      const normTitle = normalizeTR(item.title);
      const normDesc = normalizeTR(item.desc);
      const normCat = normalizeTR(item.category);
      const normKeywords = item.keywords.map(k => normalizeTR(k)).join(' ');

      const combined = `${normTitle} ${normDesc} ${normCat} ${normKeywords}`;

      // Tüm arama kelimeleri metin içinde geçmeli
      return tokens.every(token => {
        // Eş anlamlı / yaygın yazım toleransı
        if (token === 'gardolap') return combined.includes('gardirop') || combined.includes('gardolap');
        if (token === 'fiyat' || token === 'ucret') return combined.includes('fiyat') || combined.includes('ucret') || combined.includes('maliyet');
        if (token === 'katalog') return combined.includes('katalog') || combined.includes('pdf');
        return combined.includes(token);
      });
    });

    if (matched.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 28px 20px; text-align: center;">
          <p style="font-weight: 700; color: #1e242e; font-size: 1.05rem;">Sonuç bulunamadı: "${rawQuery}"</p>
          <p style="font-size: 0.88rem; color: #718096; margin-top: 8px; line-height: 1.6;">
            Atölyemizde aradığınız ölçü ve modelde özel üretim yapıyoruz.<br>
            Hemen mimarımızla görüşebilir veya Mutfak Dolabınız PDF kataloğumuzu indirebilirsiniz.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 16px;">
            <a href="https://wa.me/905336173755?text=Merhaba,%20${encodeURIComponent(rawQuery)}%20hakkinda%20ozel%20imalat%20fiyati%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>WhatsApp'tan Mimarımıza Sor</a>
            <a href="assets/mutfak-dolabiniz-kapak-katalogu.pdf" download="mutfak-dolabiniz-kapak-katalogu.pdf" class="btn btn-primary btn-sm">📖 Mutfak Dolabınız Kataloğunu İndir (PDF)</a>
          </div>
        </div>
      `;
      return;
    }

    renderItems(matched, rawQuery);
  }

  function renderItems(items, rawQuery) {
    let html = '';

    // Katalog aramalarında öne çıkan altın kart
    const isCatalogSearch = normalizeTR(rawQuery).includes('katalog') || normalizeTR(rawQuery).includes('pdf') || currentCategoryFilter === 'E-Katalog';

    if (isCatalogSearch) {
      html += `
        <div style="background: linear-gradient(135deg, #fdfbf7 0%, #f6eee0 100%); border: 1.5px solid #c59b5f; border-radius: 10px; padding: 14px 18px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div>
            <div style="font-weight: 700; color: #835b1c; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
              <span>⭐</span> ÖNE ÇIKAN DÖKÜMAN: Mutfak Dolabınız KAPAK KATALOĞU (PDF)
            </div>
            <p style="font-size: 0.82rem; color: #5a4320; margin-top: 4px;">2026 en yeni membran, lake ve akrilik kapak renk ve desen kataloğu.</p>
          </div>
          <a href="assets/mutfak-dolabiniz-kapak-katalogu.pdf" download="mutfak-dolabiniz-kapak-katalogu.pdf" class="btn btn-primary btn-sm" style="flex-shrink: 0;">PDF İndir &rarr;</a>
        </div>
      `;
    }

    items.forEach(item => {
      const isExt = item.isExternal ? 'target="_blank" rel="noopener"' : '';
      const isDl = item.isDownload ? 'download="mutfak-dolabiniz-kapak-katalogu.pdf"' : '';

      html += `
        <a href="${item.url}" ${isExt} ${isDl} class="search-result-item" onclick="document.getElementById('agentSearchModal').classList.remove('active'); document.body.style.overflow='';">
          <div class="search-result-info" style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="search-tag-pill" style="font-size: 0.72rem; padding: 2px 8px; border-radius: 4px; background: #f1f5f9; color: #475569; font-weight: 600;">${item.category}</span>
              <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e242e; margin: 0;">${item.title}</h4>
            </div>
            <p style="font-size: 0.82rem; color: #64748b; margin-top: 4px; line-height: 1.5;">${item.desc}</p>
          </div>
          <span style="font-size: 0.85rem; color: var(--color-accent, #c59b5f); font-weight: 700; margin-left: 14px; white-space: nowrap;">
            ${item.isDownload ? 'İndir (PDF) 📥' : (item.isExternal ? 'Aç ↗' : 'İncele &rarr;')}
          </span>
        </a>
      `;
    });

    resultsContainer.innerHTML = html;
  }

  // Giriş dinleyicisi
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }
});
