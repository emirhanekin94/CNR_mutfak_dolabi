const fs = require('fs');

const opengraphData = {
  'banyo-dolabi.html': {
    title: 'Özel İmalat Banyo Dolabı Modelleri & Fiyatları 2026 | Mutfak Dolabınız',
    description: 'Suya ve neme %100 dayanıklı lake banyo dolapları, LED dokunmatik aynalı ve çamaşır kule dolapları. Ümraniye atölye fiyatlarıyla.',
    image: 'assets/images/banyo/banyo-tadilat-luks.webp',
    type: 'website'
  },
  'banyo-tadilat-yenileme.html': {
    title: 'Anahtar Teslim Banyo Tadilatı & Yenileme İstanbul | Mutfak Dolabınız',
    description: 'Kırım, sıhhi tesisat, seramik döşeme, duşakabin ve suya dayanıklı lake banyo dolabı imalatı. 10 günde teslim garantisi.',
    image: 'assets/images/banyo/banyo-tadilat-real.webp',
    type: 'website'
  },
  'gardirop-modelleri.html': {
    title: 'Özel Ölçü Gardırop & Sürgülü Ray Dolap Modelleri 2026 | Mutfak Dolabınız',
    description: 'Yatak odanıza özel sürgülü ray dolap, füme camlı kapaklar ve akıllı iç düzenleyiciler. Ümraniye atölye imalatı.',
    image: 'assets/images/gardirop/gardirop-yatak-odasi.webp',
    type: 'website'
  },
  'giyinme-odasi.html': {
    title: 'Özel Tasarım Giyinme Odası Modelleri & Fiyatları | Mutfak Dolabınız',
    description: 'Füme cam kapaklı, sensörlü dikey LED aydınlatmalı ve kadife takı çekmeceli lüks walk-in giyinme odası tasarımları.',
    image: 'assets/images/resim/giyinme_odasi.webp',
    type: 'website'
  },
  'kapi-modelleri.html': {
    title: 'İç Oda Kapısı Modelleri (Lake & Membran) 2026 | Mutfak Dolabınız',
    description: 'Manyetik kilitli, masif serenli ipek mat lake ve dayanıklı membran iç oda kapıları. Ümraniye atölyesinden montaj dahil.',
    image: 'assets/images/kapi/camli-salon-kapi.jpg',
    type: 'website'
  },
  'mobilya-dekorasyon.html': {
    title: 'Özel İmalat Mobilya Dekorasyon & TV Ünitesi | Mutfak Dolabınız',
    description: 'Mermer arkalıklı lüks TV üniteleri, antre portmanto/vestiyer ve ahşap akustik lambriler. Özel mimari üretim.',
    image: 'assets/images/dekorasyon/tv-unitesi-real.webp',
    type: 'website'
  },
  'mutfak-dekorasyonu.html': {
    title: 'Mutfak Dekorasyonu, Ada Mutfak & Aydınlatma Çözümleri | Mutfak Dolabınız',
    description: 'Ada mutfak tasarımları, tezgah arası porselen ve seramik uygulamaları, lineer profil LED ışıklandırma rehberi.',
    image: 'assets/images/mutfak/mutfak-dekorasyonu.webp',
    type: 'website'
  },
  'yatak-odasi-mobilyasi.html': {
    title: 'Özel Ölçü Yatak Odası Mobilyası & Karyola Başlıkları | Mutfak Dolabınız',
    description: 'Döşemeli ve ahşap yatak panelleri, komodin, şifonyer ve makyaj masası takımları. Doğrudan üretici garantisiyle.',
    image: 'assets/images/resim/yatak_odasi_dolabi-1.webp',
    type: 'website'
  },
  'katalog.html': {
    title: '2026 Mutfak ve Mobilya Modelleri E-Katalogu | Mutfak Dolabınız',
    description: '2026 güncel mutfak dolabı, banyo ve gardırop modellerimizi yüksek çözünürlüklü dijital katalogdan inceleyin.',
    image: 'assets/images/mutfak/lake-mutfak.webp',
    type: 'website'
  },
  'iletisim.html': {
    title: 'İletişim & Atölye Adresi | Mutfak Dolabınız Ümraniye',
    description: 'İstanbul Ümraniye imalat atölyemizi ziyaret edin veya yerinde ücretsiz mimari keşif ve 3D projelendirme randevusu alın.',
    image: 'assets/images/mutfak/lake-mutfak.webp',
    type: 'website'
  },
  'blog.html': {
    title: 'Mutfak, Banyo ve Mobilya Rehberi | Mutfak Dolabınız Blog',
    description: 'Mutfak dolabı fiyat hesaplama, kapak türleri karşılaştırması ve tadilat tüyolarını içeren uzman mimari rehberler.',
    image: 'assets/images/mutfak/lake-mutfak.webp',
    type: 'website'
  },
  'blog-membran-lake-akrilik-karsilastirmasi.html': {
    title: 'Membran, Lake ve Akrilik Mutfak Dolabı Karşılaştırması 2026',
    description: 'Hangi kapak modeli daha dayanıklı? Fırın lake boya, vakum pres membran ve Senosan akrilik kapakların 2026 detaylı analizi.',
    image: 'assets/images/mutfak/lake-kapak.webp',
    type: 'article'
  },
  'blog-mutfak-dolabi-metretul-fiyati-nasil-hesaplanir.html': {
    title: 'Mutfak Dolabı Metretül Fiyatı Nasıl Hesaplanır? | 2026 Rehberi',
    description: 'Mutfak dolabı metretül (mtül) hesaplama formülü, boy dolapları, köşe modülleri ve donanım maliyetleri detaylı anlatım.',
    image: 'assets/images/mutfak/mutfak-dolaplari.webp',
    type: 'article'
  },
  'blog-matplus-leke-tutmaz-kapak-nedir.html': {
    title: 'Matplus Leke Tutmaz Nano Kapak Nedir? | Mutfak Dolabınız Blog',
    description: 'Parmak izi bırakmayan anti-fingerprint Matplus kapak teknolojisi, ipeksi mat doku ve mutfak temizliğinde sağladığı kolaylıklar.',
    image: 'assets/images/mutfak/matplus-kapak.webp',
    type: 'article'
  },
  'blog-kucuk-mutfaklar-icin-10-akilli-depolama-fikri.html': {
    title: 'Küçük Mutfaklar İçin 10 Akıllı Depolama ve Düzenleme Fikri',
    description: 'Dar ve küçük mutfakları iki kat geniş gösteren kör köşe fasulye kiler mekanizmaları, boy dolapları ve aydınlatma tüyoları.',
    image: 'assets/images/mutfak/mutfak-dekorasyonu.webp',
    type: 'article'
  },
  'blog-banyo-tadilati-kac-gun-surer.html': {
    title: 'Banyo Tadilatı Kaç Gün Sürer? Aşama Aşama Yenileme Sıralaması',
    description: 'Kırım, su tesisatı, çift kat izolasyon ve seramik döşemeden dolap montajına kadar gün gün anahtar teslim banyo tadilat süreci.',
    image: 'assets/images/banyo/banyo-tadilat-real.webp',
    type: 'article'
  },
  'blog-ozel-olcu-gardirop-rehberi.html': {
    title: 'Özel Ölçü Gardırop ve Ray Dolap Yaptırma Rehberi 2026',
    description: 'Yatak odası için sürgülü ray dolap ve giyinme odası yaptırırken dikkat edilmesi gereken raf, askılık ve cam kapak detayları.',
    image: 'assets/images/gardirop/gardirop-yatak-odasi.webp',
    type: 'article'
  }
};

Object.entries(opengraphData).forEach(([file, data]) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('property="og:title"')) {
      const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
      const url = canonicalMatch ? canonicalMatch[1] : `https://mutfakdolabiniz.com.tr/${file}`;
      
      const ogTags = `
  <!-- Open Graph / Sosyal Medya & WhatsApp Paylaşım Önizleme -->
  <meta property="og:type" content="${data.type}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <meta property="og:image" content="https://mutfakdolabiniz.com.tr/${data.image}">
  <meta property="og:locale" content="tr_TR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${data.title}">
  <meta name="twitter:description" content="${data.description}">
  <meta name="twitter:image" content="https://mutfakdolabiniz.com.tr/${data.image}">`;

      // Insert right after canonical or description meta
      const insertionPoint = content.includes('rel="canonical"')
        ? content.indexOf('rel="canonical"')
        : content.indexOf('name="description"');

      if (insertionPoint !== -1) {
        const lineEnd = content.indexOf('>', insertionPoint);
        const updated = content.substring(0, lineEnd + 1) + ogTags + content.substring(lineEnd + 1);
        fs.writeFileSync(file, updated, 'utf8');
        console.log(`Added OpenGraph tags to: ${file}`);
      }
    }
  }
});
