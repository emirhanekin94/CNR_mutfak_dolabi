const fs = require('fs');
const path = require('path');

// Definition of 12 pages with their category data & 6 authentic cards
const pagesData = {
  'banyo-tadilat-yenileme.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Banyo Yenileme & Montaj',
    desc: 'İstanbul genelinde teslim ettiğimiz anahtar teslim banyo tadilatı, duşakabin, seramik döşeme ve gömme banyo dolabı projelerimiz.',
    cards: [
      {
        img: 'assets/images/ress/kurnali-dusakabin-ve-banyo-boy-dolap.webp',
        alt: 'Mermer Kurnalı Duşakabin ve Lake Boy Banyo Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Kurnalı Duşakabin & Boy Kule',
        title: 'Mermer Kurnalı Duşakabin & Entegre Boy Dolabı',
        text: 'Siyah slim profil temperli cam duşakabin, doğal mermer kurna ve neme dayanıklı lake boy dolabı montajı.',
        loc: '📍 Çekmeköy / Taşdelen',
        check: '✓ 10 Günde Anahtar Teslim'
      },
      {
        img: 'assets/images/ress/membran-banyo-dolabi-seramik.webp',
        alt: '60x120 Calacatta Seramik ve Asma Banyo Dolabı Yenileme',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Komple Seramik & Banyo Dolabı',
        title: '60x120 Calacatta Seramik & Asma Dolap',
        text: 'Zemin ve duvar komple seramik yenilemesi, gizli LED aynalı asma banyo dolabı ve gömme rezervuar.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ Sıfır Su Geçirmezlik'
      },
      {
        img: 'assets/images/ress/banyo-dolabi-klozet-dusakabin-768x1024.webp',
        alt: 'Asma Klozet, Walk-in Duş ve Lake Banyo Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Komple Banyo Yenileme',
        title: 'Asma Klozet, Walk-in Duş & Lake Dolap',
        text: 'Geberit gömme rezervuar, şeffaf temperli cam duş ve özel imalat çift çekmeceli lake banyo ünitesi.',
        loc: '📍 Ümraniye / Şerifali',
        check: '✓ Anahtar Teslim Kırım & Montaj'
      },
      {
        img: 'assets/images/ress/membran-banyo-dolabi-ve-camasir-makinesi-dolabi.webp',
        alt: 'Gömme Çamaşır Makinesi Dolabı ve Banyo Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Çamaşır Kulesi Entegrasyonu',
        title: 'Gömme Çamaşır ve Kurutma Makinesi Dolabı',
        text: 'Makineleri gizleyen sessiz titreşim emicili boy dolap, deterjanlık ve kirli sepeti bölmeleri.',
        loc: '📍 Kadıköy / Göztepe',
        check: '✓ Özel Ölçü İmalat'
      },
      {
        img: 'assets/images/ress/lake-banyo-dolabi-768x1024.webp',
        alt: 'İpek Mat Antrasit Lake Asma Banyo Dolabı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Özel İmalat Lake',
        title: 'İpek Mat Antrasit Lake Asma Banyo Ünitesi',
        text: 'Marin yeşil MDF gövde, suya dayanıklı fırın lake kapaklar ve monoblok porselen tezgah.',
        loc: '📍 Maltepe / Dragos',
        check: '✓ 5 Yıl Gövde Garantisi'
      },
      {
        img: 'assets/images/ress/Ozel-Imalat-Banyo-Tasarimi-Anahtar-Teslim-Banyo-Tadilati-768x429.webp',
        alt: 'Lüks Spa Banyo Tasarımı ve Tadilatı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Spa Konsept Banyo',
        title: 'Doğal Ahşap Dokulu Lüks Spa Banyo Yenileme',
        text: 'Niş içi gizli lineer LED aydınlatma, antrasit bataryalar ve meşe kaplama neme dirençli mobilya.',
        loc: '📍 Beykoz / Konaklar',
        check: '✓ Mimari 3D Tasarım'
      }
    ]
  },

  'gardirop-modelleri.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Gardırop İmalat & Montaj',
    desc: 'İstanbul genelinde teslim ettiğimiz tavana sıfır gardıroplar, sessiz çift frenli sürgülü ray dolaplar ve fonksiyonel iç donanım projelerimiz.',
    cards: [
      {
        img: 'assets/images/en-yeni-resimler/surgulu-ray-dolap-sistemleri.webp',
        alt: 'Tavana Sıfır Sürgülü Ray Dolap Sistemi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Sürgülü Ray Dolap',
        title: 'Tavana Sıfır Çift Frenli Sürgülü Ray Dolap',
        text: 'Sessiz çalışan alüminyum ray profilleri, füme reflekte cam ve ahşap kapak kombinasyonu.',
        loc: '📍 Kadıköy / Suadiye',
        check: '✓ Raydan Çıkmaz Mekanizma'
      },
      {
        img: 'assets/images/ress/yatak-odasi-141-768x1024.webp',
        alt: 'Tavana Sıfır 6 Kapaklı Özel Ölçü Gardırop',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Menteşeli Lüks Gardırop',
        title: 'Tavana Sıfır Özel Ölçü 6 Kapaklı Gardırop',
        text: '18 mm E1 neme dayanıklı MDF gövde, Blum frenli menteşeler ve tavana sıfır tozsuz montaj.',
        loc: '📍 Ümraniye / Tepeüstü',
        check: '✓ Maksimum Depolama'
      },
      {
        img: 'assets/images/ress/led-aydinlatmali-giysi-dolabi-giyinme-odasi-768x1024.webp',
        alt: 'Alüminyum Çerçeveli Cam Kapak Gardırop',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Cam Kapak & LED Dolap',
        title: 'Alüminyum Çerçeveli Füme Cam Kapak Gardırop',
        text: 'Kapak açıldığında otomatik yanan sensörlü gizli dikey LED\'ler ve kadife takı çekmeceleri.',
        loc: '📍 Ataşehir / Varyap',
        check: '✓ Sensörlü LED Donanım'
      },
      {
        img: 'assets/images/ress/yatak-odasi-20-768x1024.webp',
        alt: 'Geniş Hacimli Modern Gardırop',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Geniş Hacimli Gardırop',
        title: 'Modern Çizgili Yatak Odası Gardırobu',
        text: 'Entegre gizli kulp profilleri, asansörlü askılıklar ve geniş pantolonluk bölmeleri.',
        loc: '📍 Çekmeköy / Çamlık',
        check: '✓ Milimetrik Ebatlama'
      },
      {
        img: 'assets/images/ress/tavan-spot-aydinlatmali-giyinme-odasi-768x1024.webp',
        alt: 'Fonksiyonel Çekmeceli Gardırop İç Düzeni',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Lüks İç Dizayn',
        title: 'Fonksiyonel Çekmeceli & Pantolonluklu İç Düzen',
        text: 'Blum tandem yavaşlatıcılı çekmeceler, kravatlık ve özel çanta bölmeli iç mimari.',
        loc: '📍 Beşiktaş / Levent',
        check: '✓ Blum Frenli Donanım'
      },
      {
        img: 'assets/images/ress/yatak-odasi-4-768x1024.webp',
        alt: 'Mat Kaşmir Lake Özel Ölçü Gardırop',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Lake Gardırop',
        title: 'Mat Kaşmir Lake Özel Ölçü Yatak Odası Dolabı',
        text: 'İpeksi yüzey dokulu fırın boya lake kapaklar, altın pirinç ince kulplar ve tavana sıfır estetik.',
        loc: '📍 Sarıyer / Tarabya',
        check: '✓ Çizilmeye Dirençli'
      }
    ]
  },

  'giyinme-odasi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Giyinme Odası İmalat & Montaj',
    desc: 'Evinizin odasını fonksiyonel bir butik giyinme odasına dönüştüren ada şifonyerli, sensörlü LED\'li ve açık raf sistemli projelerimiz.',
    cards: [
      {
        img: 'assets/images/ress/giyinme-odasi-1-578x1024.webp',
        alt: 'U Şeklinde Komple Mekana Özel Giyinme Odası',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'U Tipi Açık Sistem',
        title: 'U Şeklinde Komple Mekana Özel Giyinme Odası',
        text: 'Tavana kadar kesintisiz askılık kuleleri, ada takı ünitesi ve gizli LED aydınlatmalar.',
        loc: '📍 Beykoz / Acarkent',
        check: '✓ %100 Alan Verimliliği'
      },
      {
        img: 'assets/images/ress/giyinme-odasi-2-576x1024.webp',
        alt: 'Cam Üst Tablalı Orta Ada Takı ve Saat Şifonyeri',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ada Şifonyer & Aydınlatma',
        title: 'Cam Üst Tablalı Orta Ada Takı ve Saat Ünitesi',
        text: 'Kadife kaplı bölmeler, füme cam tabla ve 360 derece ayarlanabilir giysi askılıkları.',
        loc: '📍 Kadıköy / Kalamış',
        check: '✓ Özel Zanaat İşçilik'
      },
      {
        img: 'assets/images/ress/led-aydinlatmali-giysi-dolabi-1-giyinme-odasi-768x1024.webp',
        alt: 'Gizli Kanallı LED Aydınlatmalı Giyinme Odası Rafları',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Sensörlü Lineer LED',
        title: 'Gizli Kanallı LED Aydınlatmalı Raf Sistemleri',
        text: 'Göz almayan 3000K sıcak günışığı LED kanalları, ayakkabı rafları ve çanta vitrinleri.',
        loc: '📍 Ataşehir / Batı Ataşehir',
        check: '✓ Düşük Enerji Tüketimi'
      },
      {
        img: 'assets/images/ress/led-aydinlatmali-giysi-dolabi-giyinme-odasi-768x1024.webp',
        alt: 'Alüminyum Çerçeveli Reflekte Cam Kapaklı Giyinme Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Reflekte Camlı Sistem',
        title: 'Alüminyum Çerçeveli Reflekte Cam Kapaklı Modüller',
        text: 'İçi gösteren şık füme cam kapaklar, toz almayan özel conta sistemi ve Blum donanım.',
        loc: '📍 Çekmeköy / Konaklar',
        check: '✓ Toz Geçirmez Conta'
      },
      {
        img: 'assets/images/ress/tavan-spot-aydinlatmali-giyinme-odasi-768x1024.webp',
        alt: 'Tavana Kadar Ulaşan Asansörlü Askılık Sistemi',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Asansörlü Askılık',
        title: 'Tavana Kadar Ulaşan Hidrolik Asansörlü Askılıklar',
        text: 'Yüksek tavanlı mekanlarda üst katlara kolay erişim sağlayan hidrolik indirme kolları.',
        loc: '📍 Ümraniye / Tepeüstü',
        check: '✓ Ağır Hizmet Mekanizması'
      },
      {
        img: 'assets/images/en-yeni-resimler/surgulu-ray-dolap-sistemleri.webp',
        alt: 'Ebeveyn Odasına Entegre Cam Sürgülü Giyinme Odası',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Kombine Sistem',
        title: 'Sürgülü Giriş Kapısı ile Ayrılmış Ebeveyn Giyinme Alanı',
        text: 'Yatak odasıyla giyinme alanını ayıran tavandan asma gizli raylı cam bölme kapısı.',
        loc: '📍 Şişli / Bomonti',
        check: '✓ Mimari Çözüm'
      }
    ]
  },

  'yatak-odasi-mobilyasi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Yatak Odası Mobilyası İmalat & Montaj',
    desc: 'Başlık duvar panelleri, entegre komodinler, makyaj masaları ve tavana sıfır gardıroplarla odanıza özel ürettiğimiz mobilyalar.',
    cards: [
      {
        img: 'assets/images/ress/yatak-odasi-141-768x1024.webp',
        alt: 'Mekana Entegre Başlık Duvar Paneli ve Gardırop Takımı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Komple Yatak Odası',
        title: 'Mekana Entegre Başlık Duvar Paneli & Gardırop',
        text: 'Ahşap çıtalı yatak başlığı, asma komodinler ve tavana sıfır lake gardırop takımı.',
        loc: '📍 Kadıköy / Moda',
        check: '✓ Bütüncül Mekan Tasarımı'
      },
      {
        img: 'assets/images/ress/yatak-odasi-20-768x1024.webp',
        alt: 'Antrasit ve Meşe Kombinasyonu Yatak Odası Mobilyası',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern Gardırop & Şifonyer',
        title: 'Antrasit & Meşe Kombinasyonu Yatak Odası Ünitesi',
        text: 'Geniş çekmeceli şifonyer, LED arkalıklı ayna ve frenli gardırop dolabı.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ Blum Tandem Ray'
      },
      {
        img: 'assets/images/ress/yatak-odasi-4-768x1024.webp',
        alt: 'İpek Mat Kaşmir Lake Yatak Odası Mobilyaları',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Lake Yatak Odası',
        title: 'İpek Mat Kaşmir Lake Yatak Odası Mobilyaları',
        text: 'Pürüzsüz dokulu lake kapaklar, pirinç kulp detayları ve geniş iç hacim.',
        loc: '📍 Ümraniye / Çamlık',
        check: '✓ Fırın Lake Boya'
      },
      {
        img: 'assets/images/ress/yyatak-odasi-8-768x1024.webp',
        alt: 'Tavana Sıfır L Gardırop ve Bazalı Karyola Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Özel İmalat Montaj',
        title: 'Tavana Sıfır L Gardırop & Karyola Seti',
        text: 'Köşe alanları kusursuz değerlendiren döner mekanizmalı L dolap ve bazalı karyola.',
        loc: '📍 Çekmeköy / Merkez',
        check: '✓ Yerinde Montaj'
      },
      {
        img: 'assets/images/ress/yatak-odasi-1-576x1024.webp',
        alt: 'LED Işıklı Aynalı Makyaj Masası ve Dresuar',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Makyaj Masası & Ayna',
        title: 'LED Işıklı Yuvarlak Aynalı Makyaj Ünitesi',
        text: 'Gizli çekmeceli dresuar formunda makyaj masası ve dokunmatik LED ayna.',
        loc: '📍 Sarıyer / Zekeriyaköy',
        check: '✓ Kişiye Özel Üretim'
      },
      {
        img: 'assets/images/ress/yatak-odasi-18-576x1024.webp',
        alt: 'Ceviz Kaplama ve Lake Yatak Başı Akustik Ahşap Panel',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Doğal Ahşap Sıcaklığı',
        title: 'Ceviz Kaplama ve Lake Yatak Başı Akustik Panel',
        text: 'Yatak arkası dikey akustik ahşap çıtalar ve gömme pirizli komodin panelleri.',
        loc: '📍 Beykoz / Kavacık',
        check: '✓ 1. Sınıf Ahşap Kaplama'
      }
    ]
  },

  'mobilya-dekorasyon.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Özel Mobilya & Dekorasyon İmalatı',
    desc: 'TV üniteleri, vestiyer portmantolar, akustik ahşap duvar panelleri ve salon mobilyalarında atölye zanaatı.',
    cards: [
      {
        img: 'assets/images/en-yeni-resimler/ozel_mobilya_tv_unitesi.webp',
        alt: 'Mermer Görünümlü Porselen ve Ahşap Panel TV Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Lüks TV Ünitesi',
        title: 'Mermer Görünümlü Porselen & Ahşap Panel TV Ünitesi',
        text: 'Büyük ekran TV paneli, lineer gizli LED aydınlatma ve asma alt konsol ünitesi.',
        loc: '📍 Ümraniye / Finanskent',
        check: '✓ Gizli Kablo Kanalları'
      },
      {
        img: 'assets/images/en-yeni-resimler/ozel_mobilya_dekorasyon.webp',
        alt: 'Giriş Holü Özel Portmanto ve Akustik Duvar Kaplama',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Özel İç Dekorasyon',
        title: 'Giriş Holü Özel Portmanto & Akustik Duvar Kaplama',
        text: 'Dresuar, boy aynası, gizli ayakkabılık ve meşe akustik çıta duvar kaplaması.',
        loc: '📍 Kadıköy / Bağdat Caddesi',
        check: '✓ Kusursuz İşçilik'
      },
      {
        img: 'assets/images/ress/camli-tv-unitesi-768x1024.webp',
        alt: 'Alüminyum Füme Cam Kapaklı LED Vitrinli TV Konsolu',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Vitrinli TV Ünitesi',
        title: 'Alüminyum Füme Cam Kapaklı LED Vitrinli TV Konsolu',
        text: 'Reflekte cam kapaklar, iç LED spotlar ve lake alt saklama modülleri.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ Fırın Lake Boya'
      },
      {
        img: 'assets/images/ress/high-gloss-panel-tv-unitesi-768x1024.webp',
        alt: 'Parlak Mermer Desen Panel ve Asma Kitaplık TV Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'High Gloss Panel',
        title: 'Parlak Mermer Desen Panel & Asma Kitaplık',
        text: 'High gloss parlak arka fon paneli ve duvara entegre gizli askı montajlı kitaplık.',
        loc: '📍 Maltepe / Dragos',
        check: '✓ Çizilmez Parlak Yüzey'
      },
      {
        img: 'assets/images/ress/teak-duvar-paneli-tv-unitesi-768x1024.webp',
        alt: 'Doğal Teak Dokulu Lame Duvar Kaplama ve Şömine Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ahşap Duvar Paneli',
        title: 'Doğal Teak Dokulu Lame Duvar Kaplama ve Şömine Ünitesi',
        text: 'Biyoetanol veya elektrikli şömine entegre TV alt modülü ve ahşap çıtalar.',
        loc: '📍 Çekmeköy / Villa',
        check: '✓ Isıya Dayanıklı Gövde'
      },
      {
        img: 'assets/images/ress/aynali-giris-dresuar-portmanto-768x1024.webp',
        alt: 'Boy Aynalı ve Oturma Banklı Giriş Portmanto Vestiyer',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Giriş Vestiyer',
        title: 'Boy Aynalı ve Oturma Banklı Giriş Portmanto',
        text: 'Deri döşemeli giyinme bankı, gizli mont askılıkları ve geniş ayakkabı rafları.',
        loc: '📍 Ümraniye / Yamanevler',
        check: '✓ Tavana Sıfır Montaj'
      }
    ]
  },

  'lake-mutfak-dolabi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Lake Mutfak İmalat & Montaj',
    desc: 'Pürüzsüz fırın lake boya, monoblok sararmaz yüzeyler ve usta marangoz işçiliğiyle teslim edilen lake mutfaklarımız.',
    cards: [
      {
        img: 'assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp',
        alt: 'Lüks Lake Mutfak Dolabı ve Porselen Tezgahlı Mutfak Barı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'İpek Mat Lake & Bar',
        title: 'Lüks Lake Mutfak Dolabı & Porselen Mutfak Barı',
        text: 'Monoblok fırın lake kapaklar, porselen ada tezgah ve tavana kadar kesintisiz boy kiler modülü.',
        loc: '📍 Kadıköy / Suadiye',
        check: '✓ Sararmaz AkzoNobel Lake'
      },
      {
        img: 'assets/images/en-yeni-resimler/lake-kapak-2.webp',
        alt: 'Modern Çıtalı ve Kulpsuz Mat Beyaz Lake Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Çıtalı Lake Mutfak',
        title: 'Modern Çıtalı & Kulpsuz Mat Beyaz Lake Mutfak',
        text: 'İtalyan çizgi çıta işçiliği, gizli J-kulp profilleri ve Blum Aventos yukarı kalkan kapaklar.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ 6 Kat Fırın Lake'
      },
      {
        img: 'assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp',
        alt: 'Alüminyum Füme Cam Kapaklı Lake Ada Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Füme Cam & Lake Ada',
        title: 'Alüminyum Füme Cam Kapaklı Lake Ada Mutfak',
        text: 'İçten aydınlatmalı vitrin dolapları, lüks ada ünitesi ve gizli kiler mekanizmaları.',
        loc: '📍 Beşiktaş / Bebek',
        check: '✓ Çizilmez Porselen Tezgah'
      },
      {
        img: 'assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp',
        alt: 'Ada Tezgahlı Modern Country Lake Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern Country Lake',
        title: 'Ada Tezgahlı Modern Country Lake Mutfak',
        text: 'Zarif göbekli kapak profilleri, porselen ada tezgahı ve pirinç kulp zanaatı.',
        loc: '📍 Çekmeköy / Taşdelen',
        check: '✓ Fırın Boya 5 Yıl Garanti'
      },
      {
        img: 'assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp',
        alt: 'Tavana Sıfır Ankastre Lake Kule ve Kiler Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Geniş Hacimli Lake',
        title: 'Tavana Sıfır Ankastre Lake Kule ve Kiler',
        text: 'Ankastre fırın ve kahve makinesi entegrasyonu, tam açılır tandem kiler sepetleri.',
        loc: '📍 Sarıyer / Zekeriyaköy',
        check: '✓ Blum Donanım'
      },
      {
        img: 'assets/images/en-yeni-resimler/tezgah-arasi-gizli-lineer-led.webp',
        alt: 'Gizli Lineer LED ve Tezgah Arası Panel Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Canlı Montaj',
        title: 'Gizli Lineer LED ve Tezgah Arası Panel Montajı',
        text: 'Kanal içi gömme alüminyum profil LED ve lazer terazili milimetrik dolap asımı.',
        loc: '📍 Ümraniye / Atölye Montaj',
        check: '✓ Doğrudan İmalatçı'
      }
    ]
  },

  'membran-mutfak-dolabi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Membran Mutfak İmalat & Montaj',
    desc: 'Yüksek vakum presli PVC membran kapaklar, country göbekli modeller ve kolay temizlenen zengin renk seçenekleri.',
    cards: [
      {
        img: 'assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp',
        alt: 'Ada Tezgahlı Modern Country Membran Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Country Ada Mutfak',
        title: 'Ada Tezgahlı Modern Country Membran Mutfak',
        text: 'Vakum pres country kapak profili, geniş ada ünitesi ve porselen tezgah entegrasyonu.',
        loc: '📍 Çekmeköy / Merkez',
        check: '✓ Sıfır Kenar Bandı (Eksiz)'
      },
      {
        img: 'assets/images/ress/country-tarzi-mutfak-dolabi-768x1024.webp',
        alt: 'İpek Mat Beyaz Göbekli L Mutfak Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'İpek Mat Beyaz Membran',
        title: 'İpek Mat Beyaz Göbekli L Mutfak Dolabı',
        text: 'Siyah mermer tezgah ile kontrast yakalayan hijyenik, antibakteriyel membran kapaklar.',
        loc: '📍 Ümraniye / Şerifali',
        check: '✓ Kolay Temizlenen Yüzey'
      },
      {
        img: 'assets/images/en-yeni-resimler/membran_kapak-2.webp',
        alt: 'Modern Düz ve İnce Çıtalı Kaşmir Membran Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern Membran',
        title: 'Modern Düz & İnce Çıtalı Kaşmir Membran Mutfak',
        text: 'Sıcak vizon ve kaşmir tonları, frenli çekmeceler ve tam boy ankastre boy kule.',
        loc: '📍 Kadıköy / Feneryolu',
        check: '✓ Neme ve Buhara Dayanıklı'
      },
      {
        img: 'assets/images/ress/country-mutfak-dolabi-768x1024.webp',
        alt: 'Rustik Kulp Detaylı Geniş Country Mutfak Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Klasik Country Mutfak',
        title: 'Rustik Kulp Detaylı Geniş Country Mutfak',
        text: 'Geleneksel motifler, taç ve ışık bandı detayları ile zenginleştirilmiş membran dolaplar.',
        loc: '📍 Pendik / Kurtköy',
        check: '✓ 1. Sınıf PVC Folyo'
      },
      {
        img: 'assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp',
        alt: 'Porselen Tezgahlı Ada ve Membran Dolap Takımı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Kombine Mutfak',
        title: 'Porselen Tezgahlı Ada ve Membran Dolap Takımı',
        text: 'Ada tezgah ile açık salonu birleştiren fonksiyonel Amerikan mutfak planı.',
        loc: '📍 Maltepe / Zümrütevler',
        check: '✓ 3D Proje Çizimi'
      },
      {
        img: 'assets/images/en-yeni-resimler/tezgah-arasi-gizli-lineer-led.webp',
        alt: 'Tezgah Altı Gizli LED ve Boy Kiler Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Detay & Montaj',
        title: 'Tezgah Altı Gizli LED ve Boy Kiler Montajı',
        text: 'Milimetrik terazi ayarı ve sessiz yavaşlatıcı mekanizmaların montaj testi.',
        loc: '📍 Ataşehir / Örnek Mah.',
        check: '✓ 1 Günde Temiz Montaj'
      }
    ]
  },

  'akrilik-mutfak-dolabi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Akrilik Mutfak İmalat & Montaj',
    desc: 'Senosan çizilmez akrilik paneller, ultra parlak cam derinliği ve lazer kenar bantlama ile teslim ettiğimiz mutfak modelleri.',
    cards: [
      {
        img: 'assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp',
        alt: 'Lüks Akrilik ve Alüminyum Cam Kapak Ada Mutfak Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ada & Füme Cam',
        title: 'Lüks Akrilik & Füme Cam Kapak Ada Mutfak',
        text: 'Senosan parlak beyaz akrilik modüller, reflekte füme vitrin ve porselen tezgah.',
        loc: '📍 Kadıköy / Suadiye',
        check: '✓ Çizilmez Senosan'
      },
      {
        img: 'assets/images/en-yeni-resimler/akrilik-kapak-ilk-foto-bu-olcak.webp',
        alt: 'Ayna Parlaklığında Beyaz Akrilik Mutfak Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ultra Parlak Akrilik',
        title: 'Ayna Parlaklığında Beyaz Akrilik Mutfak Dolabı',
        text: 'Sıfır ek yeri PUR lazer bantlama, çizilmeye ve sararmaya karşı 10 yıl garantili akrilik paneller.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ Ayna Derinliğinde Parlaklık'
      },
      {
        img: 'assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp',
        alt: 'Lüks Porselen Tezgahlı Akrilik Mutfak Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Porselen Tezgah & Akrilik',
        title: 'Lüks Porselen Tezgahlı Akrilik Mutfak Ünitesi',
        text: 'Isıya ve lekeye dayanıklı porselen tezgah ile kombinlenmiş parlak gri ve beyaz modüller.',
        loc: '📍 Ümraniye / Finanskent',
        check: '✓ Isıya ve Leke Dirençli'
      },
      {
        img: 'assets/images/ress/akrilik-mutfak-dolabi-kahve-kosesi-ve-kiler-dolabi-1024x768.webp',
        alt: 'Akrilik Entegre Kahve Köşesi ve Boy Kiler Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Kahve Köşesi & Kiler',
        title: 'Akrilik Entegre Kahve Köşesi ve Boy Kiler Dolabı',
        text: 'Akrilik kapaklı tam boy kiler, gizli elektrikli kahve barı ve LED aydınlatmalar.',
        loc: '📍 Beşiktaş / Akatlar',
        check: '✓ Fonksiyonel Donanım'
      },
      {
        img: 'assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp',
        alt: 'Eksiz Corian Tezgahlı Parlak Akrilik Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Corian Tezgah Uyumlu',
        title: 'Eksiz Corian Tezgahlı Parlak Akrilik Mutfak',
        text: 'Yekpare gömme evyeli akrilik tezgah ve tavana sıfır parlak akrilik dolap gövdeleri.',
        loc: '📍 Sarıyer / Maslak',
        check: '✓ Lazer Bantlama Teknolojisi'
      },
      {
        img: 'assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi-768x1024.webp',
        alt: 'Kulpsuz Gola Profil ve Akrilik Dolap Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Canlı Montaj',
        title: 'Kulpsuz Gola Profil ve Akrilik Dolap Montajı',
        text: 'Minimalist kulpsuz gola alüminyum profil sistemi ve Blum Aventos kapaklar.',
        loc: '📍 Çekmeköy / Taşdelen',
        check: '✓ Doğrudan İmalatçı Fiyatı'
      }
    ]
  },

  'high-gloss-mutfak-dolabi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek High Gloss Mutfak İmalat & Montaj',
    desc: 'Parlak, ekonomik, modern ve uzun ömürlü High Gloss panel kapaklarla teslim ettiğimiz mutfak modelleri.',
    cards: [
      {
        img: 'assets/images/en-yeni-resimler/high-gloss-kapak-ilk-foto-bu-olcak.webp',
        alt: 'Özel İmalat Parlak High Gloss Mutfak Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern High Gloss',
        title: 'Özel İmalat Parlak High Gloss Mutfak Dolabı',
        text: 'Yüksek parlaklıkta çizilmez UV kaplama, geniş çekmeceler ve entegre kulp profilleri.',
        loc: '📍 Ümraniye / Yamanevler',
        check: '✓ En İyi Fiyat / Performans'
      },
      {
        img: 'assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp',
        alt: 'Alüminyum Cam Kapaklı High Gloss Ada Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ada Tezgah & Vitrin',
        title: 'Alüminyum Cam Kapaklı High Gloss Ada Mutfak',
        text: 'Reflekte füme cam üst dolaplar, porselen ada tezgah ve parlak lake dokulu modüller.',
        loc: '📍 Kadıköy / Bostancı',
        check: '✓ Şık & Fonksiyonel'
      },
      {
        img: 'assets/images/ress/aluminyum-cam-kapak-ve-ledli-high-gloss-mutfak-dolabi-768x1024.webp',
        alt: 'Lineer LED Aydınlatmalı High Gloss Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Gizli LED Aydınlatma',
        title: 'Lineer LED Aydınlatmalı High Gloss Mutfak',
        text: 'Tezgah altı ve vitrin içi günışığı LED kanalları, çift renkli kontrast dolap tasarımı.',
        loc: '📍 Ataşehir / İçerenköy',
        check: '✓ 18 mm E1 MDF Gövde'
      },
      {
        img: 'assets/images/ress/high-gloss-kapak-mutfak-dolabi-768x1024.webp',
        alt: 'İki Renkli Antrasit ve Beyaz High Gloss Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Parlak Antrasit & Beyaz',
        title: 'İki Renkli Antrasit & Beyaz High Gloss Mutfak',
        text: 'Modern daireler için tasarlanmış ferah, ışığı yansıtan parlak yüzeyler ve frenli mekanizmalar.',
        loc: '📍 Maltepe / İdealtepe',
        check: '✓ Kolay Silinebilir'
      },
      {
        img: 'assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp',
        alt: 'Kuvars Çimstone Tezgahlı Parlak Mutfak Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Çimstone & High Gloss',
        title: 'Kuvars Çimstone Tezgahlı Parlak Mutfak Ünitesi',
        text: 'Çizilmez kuvars tezgah, damlalık bölmesi ve geniş tencere çekmeceleri.',
        loc: '📍 Kartal / Sahil',
        check: '✓ Blum Frenli Donanım'
      },
      {
        img: 'assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp',
        alt: 'Tezgah Arası Porselen Panel ve Dolap Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Canlı Montaj',
        title: 'Tezgah Arası Porselen Panel ve Dolap Montajı',
        text: 'Usta marangozlarımız tarafından lazer terazide yapılan kusursuz montaj ve ayar.',
        loc: '📍 Çekmeköy / Alemdağ',
        check: '✓ 5 Yıl İmalat Garantisi'
      }
    ]
  },

  'matplus-mutfak-dolabi.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Matplus Nano Mutfak İmalat & Montaj',
    desc: 'Sıfır parmak izi, ipeksi kadife mat doku, termal çizik onarımı ve modern mimari çizgilerle teslim ettiğimiz projeler.',
    cards: [
      {
        img: 'assets/images/en-yeni-resimler/matplus-2.webp',
        alt: 'Parmak İzi Tutmaz Matplus Lüks Mutfak Dolabı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Nano İpek Mat',
        title: 'Parmak İzi Tutmaz Matplus Lüks Mutfak Dolabı',
        text: 'Nano teknoloji mat yüzey, ışığı yansıtmayan derin kadife doku ve füme cam vitrin dolapları.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ Sıfır Parmak İzi'
      },
      {
        img: 'assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp',
        alt: 'Matplus Ada Barı ve Porselen Tezgahlı Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ada & Mat Panel',
        title: 'Matplus Ada Barı ve Porselen Tezgahlı Mutfak',
        text: 'Monoblok mat paneller, porselen ada yemek barı ve tavana kadar yükselen boy modüller.',
        loc: '📍 Kadıköy / Caddebostan',
        check: '✓ Çizilmeye Yüksek Direnç'
      },
      {
        img: 'assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp',
        alt: 'Füme Reflekte Cam Kapaklı Mat Tasarım Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Cam Vitrin & Mat Gövde',
        title: 'Füme Reflekte Cam Kapaklı Mat Tasarım Mutfak',
        text: 'İçten aydınlatmalı kadehlik rafları, mat antrasit kapaklar ve şık kulpsuz gola profiller.',
        loc: '📍 Beşiktaş / Etiler',
        check: '✓ Kolay Temizlenen Nano Yüzey'
      },
      {
        img: 'assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp',
        alt: 'Mat Kaşmir ve Taş Grisi Özel Mutfak Ünitesi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Sıcak Mat Dokular',
        title: 'Mat Kaşmir & Taş Grisi Özel Mutfak Ünitesi',
        text: 'Yumuşak dokunuşlu süper mat yüzeyler, frenli çekmece rayları ve derin tencere kileri.',
        loc: '📍 Ümraniye / Çamlık',
        check: '✓ Sararmaz Yüzey'
      },
      {
        img: 'assets/images/ress/akrilik-mutfak-dolabi-ve-porselen-tezgah.webp',
        alt: 'Laminam Porselen Tezgahlı Matplus Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Porselen Tezgahlı Mat',
        title: 'Laminam Porselen Tezgahlı Matplus Mutfak',
        text: 'Sıcak tencere konulabilen porselen tezgah ile kombine mat yüzeyli dolap gövdeleri.',
        loc: '📍 Çekmeköy / Taşdelen',
        check: '✓ Leke Tutmaz Teknoloji'
      },
      {
        img: 'assets/images/en-yeni-resimler/tezgah-arasi-gizli-lineer-led.webp',
        alt: 'Gizli Lineer LED ve Mat Panel Montaj Aşaması',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Detay & Montaj',
        title: 'Gizli Lineer LED ve Mat Panel Montaj Aşaması',
        text: 'Lazer gönye ile sıfır hata montaj ve Blum mekanizmaların hassas kapanış testi.',
        loc: '📍 Maltepe / Dragos',
        check: '✓ 5 Yıl İmalat Garantisi'
      }
    ]
  },

  'mutfak-dekorasyonu.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek Mutfak Yenileme & Dekorasyon',
    desc: 'Kırım, tesisat, fayans seramik, tezgah ve özel imalat dolaplarla anahtar teslim mutfak tadilatı ve dekorasyon projelerimiz.',
    cards: [
      {
        img: 'assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp',
        alt: 'Komple Mutfak Yenileme ve Porselen Ada Barı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Anahtar Teslim Yenileme',
        title: 'Komple Mutfak Yenileme & Porselen Ada Barı',
        text: 'Tesisat yenilemesi, zemin porselen döşeme, alüminyum cam dolaplar ve entegre ada barı.',
        loc: '📍 Kadıköy / Suadiye',
        check: '✓ 14 Günde Anahtar Teslim'
      },
      {
        img: 'assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp',
        alt: 'İpek Mat Lake ve Porselen Tezgahlı Mutfak Mimarisi',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Lüks Mutfak Mimarisi',
        title: 'İpek Mat Lake & Porselen Tezgahlı Mutfak Mimarisi',
        text: 'Açık Amerikan mutfak konsepti, tavan gergi aydınlatması ve ankastre kule entegrasyonu.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ 3D Tasarım & Uygulama'
      },
      {
        img: 'assets/images/ress/country-tarzi-mutfak-dolabi-3-768x1024.webp',
        alt: 'Ada Tezgahlı Modern Country Mutfak Dönüşümü',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Country Tadilat',
        title: 'Ada Tezgahlı Modern Country Mutfak Dönüşümü',
        text: 'Eski mutfağın kırımı, yeni sıhhi tesisat çekimi ve ada tezgahlı country dolap montajı.',
        loc: '📍 Çekmeköy / Taşdelen',
        check: '✓ Tek Elden Sıfır Stres'
      },
      {
        img: 'assets/images/ress/aluminyum-cam-kapakli-akrlilik-mutfak-dolabi.webp',
        alt: 'Füme Cam Vitrinli ve Çizilmez Akrilik Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Rezidans Mutfak Projesi',
        title: 'Füme Cam Vitrinli ve Çizilmez Akrilik Mutfak',
        text: 'Modern rezidans dairesi için kurgulanan cam vitrin, led kanalları ve boy kiler.',
        loc: '📍 Ümraniye / Finanskent',
        check: '✓ İmalatçı Fiyat Avantajı'
      },
      {
        img: 'assets/images/en-yeni-resimler/high-gloss-kapak-ilk-foto-bu-olcak.webp',
        alt: 'Geniş Çekmeceli Parlak High Gloss Mutfak',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern Yenileme',
        title: 'Geniş Çekmeceli Parlak High Gloss Mutfak',
        text: 'Eski fayansların sökümü, su ve elektrik altyapısının yenilenmesi sonrası temiz teslim.',
        loc: '📍 Maltepe / İdealtepe',
        check: '✓ Çift Frenli Raylar'
      },
      {
        img: 'assets/images/en-yeni-resimler/tezgah-arasi-gizli-lineer-led.webp',
        alt: 'Tezgah Arası ve Gizli Lineer LED Işık Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Canlı Montaj',
        title: 'Tezgah Arası ve Gizli Lineer LED Işık Montajı',
        text: 'Usta ekibimizce yapılan tezgah altı gizli alüminyum profil LED ve terazi ayarları.',
        loc: '📍 Beşiktaş / Levent',
        check: '✓ 5 Yıl Garantili Teslimat'
      }
    ]
  },

  'kapi-modelleri.html': {
    titlePrefix: 'Atölyemizden Evlere:',
    titleHighlight: 'Gerçek İç Oda Kapısı İmalat & Montaj',
    desc: 'Lake boyalı, membran kaplamalı, camlı salon kapıları ve manyetik kilitli modern iç mekan kapılarımız.',
    cards: [
      {
        img: 'assets/images/kapi/lake-oda-kapi.jpg',
        alt: 'Çıtalı İpek Mat Beyaz Lake İç Oda Kapısı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'İpek Mat Lake Kapı',
        title: 'Çıtalı İpek Mat Beyaz Lake İç Oda Kapısı',
        text: '6 mm MDF panel üzeri çok katmanlı sararmaz lake fırın boya, sessiz manyetik kilit.',
        loc: '📍 Kadıköy / Fenerbahçe',
        check: '✓ Sessiz Manyetik Kilit'
      },
      {
        img: 'assets/images/kapi/camli-kapi.webp',
        alt: 'Füme Camlı ve Çıtaklı Lüks Salon Kapısı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Camlı Salon Kapısı',
        title: 'Füme Camlı ve Çıtaklı Lüks Salon Kapısı',
        text: 'Salona ferahlık ve doğal ışık kazandıran temperli cam bölmeli özel lake kapı.',
        loc: '📍 Ataşehir / Rezidans',
        check: '✓ Temperli Güvenli Cam'
      },
      {
        img: 'assets/images/kapi/ahsap-kapi-real.webp',
        alt: 'Doğal Meşe Kaplama Ahşap İç Mekan Kapısı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Ahşap Dokulu Kapı',
        title: 'Doğal Meşe Kaplama Ahşap İç Mekan Kapısı',
        text: 'Doğal ahşap haresi, mat koruyucu vernik ve gizli menteşe sistemi.',
        loc: '📍 Çekmeköy / Taşdelen',
        check: '✓ Doğal Ahşap Zanaatı'
      },
      {
        img: 'assets/images/kapi/kapi-ahsap.webp',
        alt: 'Çizilmeye Dayanıklı PVC Membran Oda Kapısı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern Membran Kapı',
        title: 'Çizilmeye Dayanıklı PVC Membran Oda Kapısı',
        text: 'Eksiz sarım teknolojisi, neme dayanıklı pervazlar ve kolay silinebilen yüzey.',
        loc: '📍 Ümraniye / Yamanevler',
        check: '✓ Neme & Şişmeye Karşı Dirençli'
      },
      {
        img: 'assets/images/kapi/lake-kapi.webp',
        alt: 'Düz Kanatlı ve Siyah Aksesuarlı Modern Lake Kapı',
        tagClass: 'delivery-tag',
        tagText: '⭐ Teslim Edildi',
        cat: 'Modern Minimalist',
        title: 'Düz Kanatlı & Siyah Aksesuarlı Modern Lake Kapı',
        text: 'Mat siyah kol, rozet ve manyetik kilit ile zenginleşen minimalist tasarım.',
        loc: '📍 Beşiktaş / Etiler',
        check: '✓ Gizli Menteşe Uyumlu'
      },
      {
        img: 'assets/images/kapi/camli-salon-kapi.jpg',
        alt: 'Geniş Kasa ve Teleskopik Pervaz Montajı',
        tagClass: 'montage-tag',
        tagText: '🔨 Montaj Aşaması',
        cat: 'Canlı Montaj',
        title: 'Geniş Kasa & Teleskopik Pervaz Montajı',
        text: 'Duvar kalınlığına göre ayarlanabilen teleskopik pervaz ve fitilli sessiz kapanış.',
        loc: '📍 Sarıyer / Maslak',
        check: '✓ 1 Günde Temiz Montaj'
      }
    ]
  }
};

function generateSectionHtml(data) {
  const cardsHtml = data.cards.map(c => `
          <!-- Kart: ${c.title} -->
          <article class="live-gallery-card">
            <div class="live-gallery-media">
              <img src="${c.img}" alt="${c.alt}" width="600" height="auto" loading="lazy" decoding="async">
              </div>
            <div class="live-gallery-info">
              <span class="live-gallery-category">${c.cat}</span>
              <h3 class="live-gallery-title">${c.title}</h3>
              <p class="live-gallery-text">${c.text}</p>
              <div class="live-gallery-meta">
                <span class="meta-location">${c.loc}</span>
                <span class="meta-check">${c.check}</span>
              </div>
              <div class="live-gallery-action" style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
                <a href="https://wa.me/905336173755?text=Merhaba,%20${encodeURIComponent(c.title)}%20modeli%20icin%20fiyat%20ve%20bilgi%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm" style="width: 100%; justify-content: center; font-size: 0.82rem; font-weight: 700; border-radius: 8px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.217 8.217 0 01-5.83 2.42c-1.47 0-2.91-.4-4.17-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.188 8.188 0 01-1.25-4.4c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
                  Bu Modeli Sor (WhatsApp)
                </a>
              </div>
            </div>
          </article>`).join('\n');

  return `
  <!-- ATÖLYEMİZDEN EVLERE: GERÇEK İMALAT & MONTAJ CANLI VİTRİNİ -->
  <section class="live-gallery-section" id="canli-teslimatlar">
    <div class="container">
      <div class="section-header" style="margin-bottom: 22px;">
        <div class="gallery-trust-badge">
          <span class="pulse-dot"></span>
          <span>ARACISIZ DOĞRUDAN İMALATÇIDAN TESLİM</span>
        </div>
        <h2 class="section-title">${data.titlePrefix} <span>${data.titleHighlight}</span></h2>
        <p class="section-desc">
          ${data.desc}
        </p>
      </div>


      <!-- Mobilde Kaydırılabilir (Swipeable), Masaüstünde 3 Sütunlu Prestij Gridi -->
      <div class="live-gallery-scroll-wrap">
        <div class="live-gallery-grid">
${cardsHtml}
        </div>
      </div>

      <!-- Galeri Altı Hızlı İletişim / Teklif Çağrısı -->
      <div class="gallery-bottom-cta">
        <div class="gallery-cta-inner">
          <div class="gallery-cta-text">
            <span class="cta-pill">Kişiye Özel İmalat</span>
            <h4>Beğendiğiniz modelin fotoğrafını bize WhatsApp'tan iletin</h4>
            <p>Alanınıza özel ölçü, renk ve malzeme seçenekleriyle 15 dakikada net maliyet tablosu hazırlayalım.</p>
          </div>
          <div class="gallery-cta-action">
            <a href="https://wa.me/905336173755?text=Merhaba,%20web%20sitenizdeki%20modellerden%20biri%20hakkinda%20fiyat%20ve%20kesif%20bilgisi%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.217 8.217 0 01-5.83 2.42c-1.47 0-2.91-.4-4.17-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.188 8.188 0 01-1.25-4.4c0-4.54 3.7-8.24 8.24-8.24z"/></svg>
              Model Fotoğrafı Gönder & Fiyat Al
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
`;
}

console.log('Script loaded successfully. Ready to process pages.');
module.exports = { pagesData, generateSectionHtml };

