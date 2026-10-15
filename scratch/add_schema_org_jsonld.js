const fs = require('fs');

const schemaConfigs = {
  // 1. Blog Articles
  'blog-membran-lake-akrilik-karsilastirmasi.html': {
    type: 'article',
    headline: 'Membran, Lake ve Akrilik Mutfak Dolabı Karşılaştırması',
    description: 'Hangi mutfak dolabı kapağı daha dayanıklı? Membran, lake ve akrilik kapakların 2026 kapsamlı teknik karşılaştırması.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/mutfak/lake-kapak.webp',
    datePublished: '2026-10-10'
  },
  'blog-mutfak-dolabi-metretul-fiyati-nasil-hesaplanir.html': {
    type: 'article',
    headline: 'Mutfak Dolabı Metretül Fiyatı Nasıl Hesaplanır?',
    description: 'Mutfak dolabında metretül hesaplama formülü, boy dolapları, tezgah ve mekanizma maliyetleri.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/mutfak/mutfak-dolaplari.webp',
    datePublished: '2026-10-11'
  },
  'blog-matplus-leke-tutmaz-kapak-nedir.html': {
    type: 'article',
    headline: 'Matplus Leke Tutmaz Nano Kapak Nedir?',
    description: 'Parmak izi bırakmayan anti-fingerprint Matplus kapak teknolojisi ve ipeksi mat doku özellikleri.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/mutfak/matplus-kapak.webp',
    datePublished: '2026-10-12'
  },
  'blog-kucuk-mutfaklar-icin-10-akilli-depolama-fikri.html': {
    type: 'article',
    headline: 'Küçük Mutfaklar İçin 10 Akıllı Depolama Fikri',
    description: 'Dar mutfakları ferah ve kullanışlı hale getiren akıllı dolap içi kiler sistemleri ve yerleşim önerileri.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/mutfak/mutfak-dekorasyonu.webp',
    datePublished: '2026-10-13'
  },
  'blog-banyo-tadilati-kac-gun-surer.html': {
    type: 'article',
    headline: 'Banyo Tadilatı Kaç Gün Sürer? Aşama Aşama Sıralama',
    description: 'Kırım, su tesisatı, su izolasyonu ve seramik döşemeden lake dolap montajına gün gün banyo yenileme süreci.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/banyo/banyo-tadilat-real.webp',
    datePublished: '2026-10-14'
  },
  'blog-ozel-olcu-gardirop-rehberi.html': {
    type: 'article',
    headline: 'Özel Ölçü Gardırop ve Ray Dolap Yaptırma Rehberi',
    description: 'Yatak odası için sürgülü ray dolap ve füme camlı gardırop planlarken dikkat edilecek ergonomik ölçüler.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/gardirop/gardirop-yatak-odasi.webp',
    datePublished: '2026-10-14'
  },

  // 2. Blog Main
  'blog.html': {
    type: 'blogMain',
    name: 'Mutfak Dolabınız Blog & Mimari Rehber'
  },

  // 3. Category Products / Services
  'giyinme-odasi.html': {
    type: 'service',
    name: 'Özel Ölçü Giyinme Odası (Walk-in Closet) İmalatı',
    description: 'Füme cam kapaklı, sensörlü dikey LED aydınlatmalı ve kadife takı çekmeceli lüks walk-in giyinme odası imalatı.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/resim/giyinme_odasi.webp'
  },
  'kapi-modelleri.html': {
    type: 'service',
    name: 'Özel İmalat İç Oda Kapıları (İpek Mat Lake & Membran)',
    description: 'Manyetik kilitli, masif serenli ipek mat lake ve dayanıklı membran iç oda kapıları imalat ve montajı.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/kapi/camli-salon-kapi.jpg'
  },
  'mobilya-dekorasyon.html': {
    type: 'service',
    name: 'Özel İmalat Mobilya Dekorasyon, TV Ünitesi & Portmanto',
    description: 'Mermer panelli TV üniteleri, antre portmanto vestiyer ve ahşap akustik çıta lambriler.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/dekorasyon/tv-unitesi-real.webp'
  },
  'mutfak-dekorasyonu.html': {
    type: 'service',
    name: 'Mutfak Dekorasyonu & Ada Mutfak Uygulamaları',
    description: 'Ada mutfak tasarımları, tezgah arası porselen ve seramik uygulamaları, lineer profil LED ışıklandırma.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/mutfak/mutfak-dekorasyonu.webp'
  },
  'yatak-odasi-mobilyasi.html': {
    type: 'service',
    name: 'Özel İmalat Yatak Odası Mobilyası & Karyola Başlıkları',
    description: 'Döşemeli ve ahşap yatak panelleri, komodin, şifonyer ve makyaj masası takımları.',
    image: 'https://mutfakdolabiniz.com.tr/assets/images/resim/yatak_odasi_dolabi-1.webp'
  }
};

Object.entries(schemaConfigs).forEach(([file, conf]) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('application/ld+json')) {
      let schemaJson = {};

      if (conf.type === 'article') {
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": conf.headline,
          "description": conf.description,
          "image": conf.image,
          "datePublished": conf.datePublished,
          "dateModified": "2026-10-15",
          "author": {
            "@type": "Organization",
            "name": "Mutfak Dolabınız Mimari Ekibi",
            "url": "https://mutfakdolabiniz.com.tr"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Mutfak Dolabınız",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mutfakdolabiniz.com.tr/assets/images/logo.webp"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mutfakdolabiniz.com.tr/${file}`
          }
        };
      } else if (conf.type === 'blogMain') {
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": conf.name,
          "url": "https://mutfakdolabiniz.com.tr/blog.html",
          "description": "Özel imalat mutfak dolabı, banyo ve mobilya dekorasyon uzmanlık rehberi.",
          "publisher": {
            "@type": "Organization",
            "name": "Mutfak Dolabınız",
            "url": "https://mutfakdolabiniz.com.tr"
          }
        };
      } else if (conf.type === 'service') {
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": conf.name,
          "description": conf.description,
          "image": conf.image,
          "provider": {
            "@type": "HomeGoodsStore",
            "name": "Mutfak Dolabınız",
            "telephone": "+905336173555",
            "priceRange": "₺₺",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "İnkılap Mahallesi, Dr. Adnan Büyükdeniz Caddesi",
              "addressLocality": "Ümraniye",
              "addressRegion": "İstanbul",
              "addressCountry": "TR"
            }
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "İstanbul"
          }
        };
      }

      const scriptTag = `\n  <script type="application/ld+json">\n  ${JSON.stringify(schemaJson, null, 2).replace(/\n/g, '\n  ')}\n  </script>`;

      // Insert before </head>
      const updated = content.replace('</head>', `${scriptTag}\n</head>`);
      fs.writeFileSync(file, updated, 'utf8');
      console.log(`Added Schema.org JSON-LD to: ${file}`);
    }
  }
});
