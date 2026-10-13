const fs = require('fs');

function buildSeoBlock(title, subtitle, intro, tableRows, cards, faqs, adsConfig) {
  // 1. Technical Table & 4 Spec Cards Section
  const tableRowsHtml = tableRows.map(r => `
            <tr>
              <td><strong>${r[0]}</strong></td>
              <td>${r[1]}</td>
              <td><span class="seo-table-badge">${r[2]}</span></td>
            </tr>`).join('\n');

  const cardsHtml = cards.map(c => `
        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 26px 28px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>${c.icon}</span> ${c.title}
          </h4>
          <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.8;">
            ${c.text}
          </p>
        </div>`).join('\n');

  const techSection = `  <!-- ${title} (Kapsamlı Ticari Ürün & Teknik İmalat Rehberi) -->
  <section class="section-padding" style="background-color: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container" style="max-width: 1080px;">
      
      <div class="section-header" style="text-align: left; margin-bottom: 35px;">
        <span class="section-subtitle">${subtitle}</span>
        <h2 class="section-title" style="font-size: 2.2rem; margin-top: 10px;">
          ${title}
        </h2>
        <p style="font-size: 1.05rem; color: var(--color-text-muted); line-height: 1.8; margin-top: 14px;">
          ${intro}
        </p>
      </div>

      <!-- 2026 Teknik Özellikler ve Karşılaştırma Tablosu -->
      <div style="margin-bottom: 45px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 16px;">
          📊 2026 Teknik & Fiyat Karşılaştırma Matrisi
        </h3>
        <div class="seo-table-wrapper">
          <table class="seo-table">
            <thead>
              <tr>
                <th style="width: 25%;">Teknik Parametre</th>
                <th style="width: 45%;">ÇNR Mobilya İmalat Standardı</th>
                <th style="width: 30%;">Kullanıcı Avantajı & Garanti</th>
              </tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 4 Detaylı İmalat ve Mimari Kart -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 35px;">
        ${cardsHtml}
      </div>

    </div>
  </section>`;

  // 2. FAQ Accordion Section
  const faqItemsHtml = faqs.map((f, i) => `
        <div class="faq-item${i === 0 ? ' active' : ''}">
          <button class="faq-question">
            <span>${f.q}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <div class="faq-answer-inner">
              ${f.a}
            </div>
          </div>
        </div>`).join('\n');

  const faqSection = `  <!-- SIKÇA SORULAN SORULAR (SEO FAQ ACCORDION) -->
  <section class="section-padding" style="background: var(--color-bg-alt);">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Merak Edilenler</span>
        <h2 class="section-title">${adsConfig.faqTitle} <span>Sıkça Sorulan Sorular</span></h2>
      </div>

      <div class="faq-accordion">
        ${faqItemsHtml}
      </div>
    </div>
  </section>`;

  // 3. Workshop Lead Offer Box (Right Below FAQ)
  const adsSection = `  <!-- GOOGLE ADS ANINDA TEKLİF & KEŞİF KARTI -->
  <section class="section-padding" style="background: var(--color-bg-alt);">
    <div class="container">
      <div class="ads-lead-box">
        <div class="ads-badge-live">
          <span class="ads-pulse-dot"></span>
          <span>ATÖLYE TEKLİF HATTI AKTİF · 15 DAKİKADA CEVAP</span>
        </div>
        <div class="ads-lead-grid">
          <div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; color: #ffffff; margin-bottom: 12px;">
              ${adsConfig.title}
            </h3>
            <p style="color: #c4ccd4; font-size: 1.05rem; line-height: 1.6; margin-bottom: 18px;">
              ${adsConfig.desc}
            </p>
            <ul style="color: #c4ccd4; font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">
              ${adsConfig.items.map(it => `<li>✓ ${it}</li>`).join('\n              ')}
            </ul>
          </div>
          <div style="background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: var(--radius-md); border: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
            <p style="color: #ffffff; font-weight: 700; margin-bottom: 12px; font-size: 1.1rem;">WhatsApp'tan Anında Bilgi Alın:</p>
            <a href="https://wa.me/905320000000?text=${encodeURIComponent(adsConfig.waText)}" target="_blank" class="btn btn-whatsapp" style="width: 100%; margin-bottom: 12px; font-size: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>
              ${adsConfig.btnText}
            </a>
            <a href="tel:+905320000000" class="btn btn-phone" style="width: 100%;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              0532 000 00 00 Nolu Hattı Ara
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return `${techSection}\n\n${faqSection}\n\n${adsSection}`;
}

// 1. giyinme-odasi.html
{
  const file = 'giyinme-odasi.html';
  let c = fs.readFileSync(file, 'utf8');

  // Replace article tags with div to prevent safari reader mode
  c = c.replace(/<article\b([^>]*)>/gi, '<div$1>').replace(/<\/article>/gi, '</div>');

  const content = buildSeoBlock(
    'Özel İmalat Giyinme Odası Sistemleri, Ada Modülleri ve 2026 Fiyatları',
    '2026 Walk-in Closet Mimarisi & Özel Ölçü İmalat Kılavuzu',
    'Giyinme odaları, yatak odalarındaki dolap karmaşasını tamamen ortadan kaldıran, kıyafet, ayakkabı, çanta ve mücevher koleksiyonlarınızı lüks bir moda mağazası butik konseptinde organize eden kişiselleştirilmiş mekanlardır. ÇNR Mobilya olarak Ümraniye Yukarı Dudullu atölyemizde CNC hassasiyetinde ürettiğimiz giyinme odalarında; füme/bronz alüminyum çerçeveli reflekte cam kapaklar, dikey gömme lineer LED aydınlatmalar, cam tablalı ada takı çekmeceleri ve pantolonluk/kravatlık mekanizmalarıyla milimetrik uyum sağlıyoruz.',
    [
      ['Gövde & Modül Malzemesi', '18 mm E1 Çift Yüz Melamin Kaplı Neme Dayanıklı MDF-Lam', 'Egger / Kastamonu levha, sarkma yapmayan 25 mm güçlendirilmiş raf opsiyonu'],
      ['Kapak & Profil Sistemi', 'İtalyan İnce Alüminyum Profil + 4 mm Temperli Füme/Bronz Reflekte Cam', 'Parmak izi tutmaz, çarpmaya dayanıklı güvenlik camı, manyetik sessiz stoper'],
      ['Aydınlatma Altyapısı', 'Profiller İçine Gömme Gizli Lineer LED & Akıllı Kapak Açılış Sensörleri', 'Göz almayan 3000K-4000K doğal gün ışığı, gizli trafo ve kanallı kablolama'],
      ['İç Donanım & Aksesuarlar', 'Bas-Aç Blum Tandem Çekmeceler, Asansörlü Askılık (Servetto), Kadife Takılık', '100.000 açma testli mekanizmalar, çizilmeyen kadife takı ve saat bölmeleri'],
      ['2026 Metretül & Modül Fiyatı', '₺12.500 - ₺16.500 / Metretül (Ada Ünitesi & Cam Kapaklar Dahil)', 'Doğrudan Ümraniye Dudullu imalatçı fiyatı, aracı ve mağaza komisyonsuz'],
      ['Üretim & Montaj Süreci', '12-14 İş Gününde Üretim · 1 Günde Temiz Anahtar Teslim Montaj', 'İstanbul genelinde ücretsiz lazerli 3D oda keşfi ve 5 yıl tam atölye garantisi']
    ],
    [
      {
        icon: '💎',
        title: 'Merkez Ada Çekmece Ünitesi ve Cam Tablalı Mücevherlik',
        text: 'Giyinme odasının kalbi sayılan ada ünitesi, üst yüzeyindeki ekstra şeffaf temperli cam tablası ve içindeki gizli LED aydınlatması ile saat, kol düğmesi, takı, güneş gözlüğü ve kemerlerinizi sergiler. Özel ölçüye göre kadife kaplamalı takı bölmeleri ve çift taraflı bas-aç çekmeceler ile lüks rezidans konforu evinize taşınır.'
      },
      {
        icon: '✨',
        title: 'Füme ve Bronz Reflekte Cam Kapaklar ile Tozsuz Koruma',
        text: 'Açık giyinme sistemlerinde en büyük dezavantaj kıyafetlerin zamanla tozlanmasıdır. ÇNR Mobilya reflekte cam kapak sistemleri, kapaklar kapalıyken şık bir ayna efekti yaratırken dolap içi sensörlü LED ışıkları yandığında içeriyi kristal netliğinde gösterir. Toz fitilleri ve manyetik sessiz kapanma mekanizmalarıyla kıyafetleriniz daima tertemiz kalır.'
      },
      {
        icon: '👔',
        title: 'Asansörlü Askılıklar ve Özel Pantolonluk & Kravatlık Rayları',
        text: 'Tavan yüksekliği 2.60m ve üzeri olan odalarda en üst hacimleri verimli kullanmak için hidrolik asansörlü askılık (servetto) sistemleri kullanıyoruz. Hafif bir çekme hareketiyle askılık seviyenize iner. Alt bölümlerde ise teleskopik raylı pantolonluklar, kravat ve fular çekmeceleri, ayakkabı rafları ile her parçanın yeri baştan belirlenir.'
      },
      {
        icon: '🏭',
        title: 'Ümraniye Doğrudan Fabrika İmalatı ve Ücretsiz 3D Keşif',
        text: 'Modüler hazır dolapların aksine odanızdaki kolon, kiriş, girinti veya eğimli çatı tavanlarına birebir özel üretim yapıyoruz. Lazer ölçüm sonrası mimarımız 3D fotogerçekçi çizim hazırlar, onayınızın ardından Dudullu atölyemizde üretilip kendi marangozlarımız tarafından sıfır hatayla kurulur.'
      }
    ],
    [
      {
        q: 'Giyinme odası için minimum ne kadarlık bir alan gereklidir?',
        a: 'U tipi veya karşılıklı çift hatlı bir giyinme odası için ideal alan minimum 5-6 metrekaredir. Ancak 3-4 metrekarelik küçük odalarda veya yatak odasının bir köşesinde L tipi açık sistemlerle de son derece kullanışlı ve ferah giyinme alanları oluşturulabilmektedir.'
      },
      {
        q: 'Cam kapaklı giyinme dolaplarında cam kırılma riski var mıdır?',
        a: 'Kesinlikle yoktur. Sistemlerimizde standart cam yerine darbelere ve basınca karşı 5 kat dayanıklı 4 mm temperli rodajlı güvenlik camları kullanılmaktadır. Alüminyum profiller camı çepeçevre sararak kenar darbelerinden korur.'
      },
      {
        q: 'Açık giyinme odası mı yoksa cam kapaklı model mi tercih edilmeli?',
        a: 'Tamamen ayrı ve kapısı kapalı bir odanız varsa açık sistemler hızlı erişim ve ferahlık açısından harikadır. Eğer yatak odasıyla iç içe bir alansa veya tozlanmaya karşı ekstra hassasiyetiniz varsa füme/bronz reflekte cam kapaklı modeller en hijyenik ve estetik çözümdür.'
      },
      {
        q: 'Üretim ve montaj ne kadar sürede tamamlanır?',
        a: 'Lazer ölçüm ve 3D tasarım onayından sonra ortalama 12-14 iş günü içinde üretim tamamlanır. Kendi tecrübeli ustalarımız İstanbul geneline montajı 1 iş gününde temiz ve eksiksiz teslim eder.'
      }
    ],
    {
      title: 'Giyinme Odanız İçin Anında Atölye Fiyatı Alın',
      desc: 'Odanızın en, boy ve tavan yüksekliğini WhatsApp hattımıza iletin; iç mimarımız 15 dakika içinde ihtiyaçlarınıza özel yerleşim planını ve doğrudan atölye imalat teklifinizi çıkarsın.',
      items: [
        'Ada mücevher ünitesi ve füme cam kapak opsiyonları',
        'Gizli lineer LED aydınlatma ve Blum bas-aç çekmeceler',
        'Aracısız Dudullu fabrika teslimi ve 5 yıl yazılı garanti'
      ],
      waText: 'Merhaba, giyinme odasi projem icin olcu iletiyorum. Fiyat ve 3D tasarim teklifi alabilir miyim?',
      btnText: 'WhatsApp\'tan Hemen Fiyat Al',
      faqTitle: 'Giyinme Odası'
    }
  );

  // Insert before aside or footer
  const insertRegex = /<!-- Masaüstü Yüzen WhatsApp -->|<footer class="site-footer"/;
  c = c.replace(insertRegex, content + '\n\n  $&');
  fs.writeFileSync(file, c, 'utf8');
  console.log('Enriched', file);
}

// 2. kapi-modelleri.html
{
  const file = 'kapi-modelleri.html';
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/<article\b([^>]*)>/gi, '<div$1>').replace(/<\/article>/gi, '</div>');

  const content = buildSeoBlock(
    'Özel İmalat İç Oda Kapısı Modelleri, Lake & Membran Kapı 2026 Fiyatları',
    '2026 İç Mimari Ahşap Kapı Sistemleri & İmalatçı Rehberi',
    'İç oda kapıları, bir evin dekorasyon kalitesini ve akustik konforunu belirleyen en kritik yapı unsurlarından biridir. Kalitesiz hafif petek dolgulu hazır kapılar birkaç yıl içinde sarkma yaparken, ses ve ısı yalıtımından yoksundur. ÇNR Mobilya olarak Ümraniye fabrikamızda masif parmak ekli (finger-joint) köknar serenler, 6 mm dolu MDF paneller ve Alman poliüretan fırın boyaları ile sarkmayan, ses geçirmeyen ve manyetik kilitli lüks oda kapıları üretiyoruz.',
    [
      ['Seren & İç Konstrüksiyon', 'Masif Fırınlanmış Köknar Ağacı Seren (Finger-Joint Ekleme)', 'Sıfır dönme ve eğrilme riski, ağır hizmet tipi 3 adet çelik menteşe'],
      ['Yüzey Panelleri', '6 mm E1 Yüksek Yoğunluklu MDF + CNC Çıtalı / Fuga Motif', 'Ses yalıtım katsayısı yüksek, darbelere ve çizilmelere karşı dayanıklı'],
      ['Boya & Kaplama Teknolojisi', '3 Kat Poliüretan İpek Mat Fırın Lake Boya / 0.40 mm PVC Membran', 'Sararma yapmaz, nemli bezle kolay temizlenir, sınırsız RAL ve NCS renkleri'],
      ['Kasa & Pervaz Yapısı', 'Ayarlanabilir Sandviç Kasa (Masif Ahşap + MDF) & Fitilli Conta', 'Duvar eğriliklerini kapatır, kapı kapandığında hava ve ses sızdırmaz'],
      ['2026 Adet Fiyatı (Takım)', '₺6.800 - ₺9.500 / Takım Kapı (Kasa + Pervaz + Manyetik Kilit Dahil)', 'Ümraniye Dudullu doğrudan imalat satış fiyatı, montaj dahil seçenekler'],
      ['Teslimat & Garanti', '15 İş Günü İmalat · Kendi Ustalarımızla 1 Günde Temiz Montaj', 'İstanbul genelinde ücretsiz lazer keşif ve sözleşmeli 5 yıl tam garanti']
    ],
    [
      {
        icon: '🚪',
        title: 'CNC Çıtalı ve Neoklasik Lake Kapı Tasarımları',
        text: 'İç mimarların projelerinde ilk tercihi olan lake kapılar, CNC makinelerinde kapak yüzeyine açılan fuga çizgileri, özel çıta profilleri ve taç modelleri ile salon ve odalarınıza asil bir hava katar. Eksiz 6 yönlü boyama tekniği sayesinde kenarlarında bant veya birleşim yeri bulunmaz; yekpare ipeksi pürüzsüzlük sunar.'
      },
      {
        icon: '🔇',
        title: 'Akustik Conta ve Manyetik Sessiz Kilit Konforu',
        text: 'Kapı kasasına çepeçevre yerleştirilen EPDM yumuşak fitil contalar, kapı kanadının sert çarpmasını önlerken oda içindeki konuşma ve televizyon seslerinin koridora sızmasını engeller. Standart gürültülü dilli kilitler yerine manyetik sessiz kilitler kullanarak geceleri sıfır tıkırtı ile kapanan bir konfor standardı sağlıyoruz.'
      },
      {
        icon: '🎨',
        title: 'Neme Dayanıklı Membran PVC ve Masif Ahşap Kapılar',
        text: 'Banyo ve tuvalet gibi yoğun neme maruz kalan alanlarda su buharından kesinlikle etkilenmeyen eksiz vakum pres membran kapılar veya su bazlı marin vernikli masif kapılar tercih edilir. Yağ, buhar veya leke tutmayan gözeneksiz yüzeyi sayesinde yıllar geçse bile ilk günkü formunu korur.'
      },
      {
        icon: '🏭',
        title: 'Özel Ölçü Üretim ve Eski Kapıların Temiz Değişimi',
        text: 'Tadilat yapılan evlerde duvar kalınlıkları ve kapı boşlukları standart fabrikasyon ölçülere uymaz. Uzman ekibimiz lazerle duvar kalınlıklarını milimetrik ölçerek özel ayarlanabilir teleskopik pervazlar üretir. Eski kapıların kırıp dökmeden sökülmesi ve yeni kapıların kusursuz terazide montajı tek elden tamamlanır.'
      }
    ],
    [
      {
        q: 'Lake kapı mı yoksa membran kapı mı tercih edilmeli?',
        a: 'Modern lüks bir doku, çıtalı desenler ve sınırsız özel renk istiyorsanız fırın boyalı lake kapılar 1 numaralı tercihtir. Bütçe dostu, aşırı darbelere dayanıklı ve kolay silinebilir bir yüzey arıyorsanız membran kapılar harika bir alternatiftir.'
      },
      {
        q: 'Kapılar zamanla sarkma veya yere sürtme yapar mı?',
        a: 'Hayır. Kapılarımızın iskeletinde hafif sunta veya kavak değil, fırınlanmış masif köknar ağacı kullanılmakta ve kanat başına 3 adet ağır hizmet tipi çelik menteşe takılmaktadır. Bu sayede onlarca yıl sarkma veya sürtme yaşanmaz.'
      },
      {
        q: 'Banyo ve WC kapıları sudan şişme yapar mı?',
        a: 'Doğru üretilen kapılar şişme yapmaz. Banyo kapılarımızın alt kısımları özel su izolasyon astarıyla mühürlenir. Çift komponentli poliüretan lake veya vakumlu membran su buharının ahşaba temasını tamamen engeller.'
      },
      {
        q: 'Montaj sırasında ev kirlenir mi, ne kadar sürer?',
        a: 'Kapılarımız atölyemizde tamamen boyalı, kilit yuvaları ve menteşe yerleri açılmış olarak getirilir. Daire içinde kesim veya boya yapılmaz; 5-7 adet oda kapısı ortalama 1 iş gününde temiz ve tozsuz bir şekilde monte edilir.'
      }
    ],
    {
      title: 'İç Oda Kapılarınız İçin Net Fiyat Teklifi Alın',
      desc: 'Evinizdeki kapı adetlerini ve beğendiğiniz kapı modelini WhatsApp hattımıza iletin; iç mimarımız kilit, kol ve montaj dahil doğrudan atölye imalat bütçenizi 15 dakikada hazırlasın.',
      items: [
        'Manyetik sessiz kilit ve fitilli ses yalıtım kasası dahil',
        'İpek mat fırın lake veya dayanıklı membran PVC kaplama',
        'Ücretsiz lazer keşif ve sözleşmeli 5 yıl atölye garantisi'
      ],
      waText: 'Merhaba, ic oda kapilari icin adet ve model bilgisi ileterek fiyat teklifi almak istiyorum.',
      btnText: 'WhatsApp\'tan Kapı Fiyatı Al',
      faqTitle: 'İç Oda Kapısı'
    }
  );

  const insertRegex = /<!-- Masaüstü Yüzen WhatsApp -->|<footer class="site-footer"/;
  c = c.replace(insertRegex, content + '\n\n  $&');
  fs.writeFileSync(file, c, 'utf8');
  console.log('Enriched', file);
}

// 3. mobilya-dekorasyon.html
{
  const file = 'mobilya-dekorasyon.html';
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/<article\b([^>]*)>/gi, '<div$1>').replace(/<\/article>/gi, '</div>');

  const content = buildSeoBlock(
    'Özel Ahşap Mobilya & İç Mimari Dekorasyon İmalatı 2026 Rehberi',
    '2026 Kişiye Özel Ahşap Üretim & İç Mimarlık Çözümleri',
    'Modern yaşam alanlarında fabrikasyon hazır mobilyalar, mekanın ruhunu yansıtamadığı gibi ölü alanlar bırakarak depolama kaybına yol açar. ÇNR Mobilya olarak Ümraniye Yukarı Dudullu tesisimizde; salon TV duvar ünitelerinden antre vestiyer ve portmantolara, akustik ahşap lambri duvar kaplamalarından kitaplık ve konsollara kadar evinizin her köşesine milimetrik özel imalat çözümleri sunuyoruz.',
    [
      ['İmalat Kapsamı', 'TV Duvar Ünitesi, Vestiyer & Portmanto, Lambri, Kitaplık, Konsol, Sehpalar', 'Mekanın mimari planına tam uyumlu milimetrik üretim, sıfır ölü alan'],
      ['Hammadde Standardı', '18 mm E1 Neme Dayanıklı MDF-Lam, Masif Meşe/Ceviz Kaplama & Doğal Mermer', 'Kanserojen madde içermez, çizilmelere ve ağır yüklere karşı yüksek mukavemet'],
      ['Aydınlatma & Akustik', 'Gizli Sıcak LED Kanalları, Dokunmatik Dimmerler & Akustik Keçe Tabanlı Ahşap Çıtalar', 'Televizyon arkası yankı kesici akustik konfor ve dinlendirici sinema ambiyansı'],
      ['Donanım & Mekanizmalar', 'Blum Bas-Aç / Frenli Raylar, Gizli Askı Elemanları, CNC Fuga Detayları', 'Kulp karmaşası olmayan minimalist yüzeyler, 50 kg taşıma kapasiteli çekmeceler'],
      ['2026 Fiyatlandırma Politikası', 'Proje Bazlı Kalemsel Şeffaf Maliyet (Aracısız Doğrudan Atölye İmalatı)', 'Piyasa mağaza fiyatlarının %30-%40 altında, net malzeme ve metretül teklifi'],
      ['Sözleşme & Teslimat', 'Ücretsiz 3D Mimari Çizim · 15 İş Günü İmalat · 1 Günde Kusursuz Montaj', 'İstanbul geneli ücretsiz lazer ölçümü ve 5 yıl yazılı atölye garantisi']
    ],
    [
      {
        icon: '📺',
        title: 'Mermer Desenli ve Akustik Lambrili TV Duvar Üniteleri',
        text: 'Salonların odak noktası olan TV ünitelerinde doğal ceviz kaplama, füme reflekte camlı vitrinler, akustik ahşap çıtalar ve porselen/mermer arka panelleri harmanlıyoruz. Tüm televizyon kabloları, ses sistemleri ve prizler duvar ünitesi arkasında gizlenerek salonda kusursuz bir showroom estetiği yaratılır.'
      },
      {
        icon: '🧥',
        title: 'Fonksiyonel Antre Vestiyer, Portmanto ve Gizli Depolama',
        text: 'Evin ilk girişinde dağınıklığı önlemek adına tavana kadar sıfır montajlı portmantolar tasarlıyoruz. Gizli ayakkabılık rafları, boy aynası arkası takı bölmeleri, puf altı çekmeceler ve sensörlü LED aydınlatmalar ile dar koridorlar bile maksimum depolama alanına dönüştürülür.'
      },
      {
        icon: '🌿',
        title: 'Dekoratif Ahşap Çıta, Lambri ve Bölme Seperatörler',
        text: 'Yemek odası, yatak başlığı veya antre duvarlarında uyguladığımız doğal ahşap lambri ve çıta çalışmaları mekanlara sıcak bir mimari karakter kazandırır. Salon ve mutfak arasındaki açık geçişlerde döner kanatlı ahşap seperatörler ile hem ışık geçirgenliği sağlanır hem de fonksiyonel alan ayrımı yapılır.'
      },
      {
        icon: '🏭',
        title: 'Aracısız Atölye Üretimi ve Anahtar Teslim Montaj',
        text: 'Hazır mağazalarda bulamayacağınız renk, ölçü ve doku kombinasyonlarını kendi boyahanemizde ve CNC atölyemizde gerçeğe dönüştürüyoruz. İstanbul genelinde adresinize gelerek renk ve malzeme kartelalarını yerinde inceliyor, sözleşmeli ve garantili olarak teslim ediyoruz.'
      }
    ],
    [
      {
        q: 'Özel mobilya imalatında tasarım sürecini nasıl yürütüyorsunuz?',
        a: 'Öncelikle evinizde lazerli hassas ölçü alımı yapıyoruz. Beğendiğiniz renk ve malzemelere göre iç mimarımız 3 boyutlu fotogerçekçi görselleştirme hazırlar. Tasarımı her açıdan görüp onayladıktan sonra atölyemizde üretime geçilir.'
      },
      {
        q: 'Kullanılan ahşap ve MDF malzemeler kaliteli midir?',
        a: 'Tüm projelerimizde yalnızca E1 Avrupa normlarında neme ve eğilmeye dayanıklı 18 mm MDF levhalar (Kastamonu/Egger) ve doğal ahşap kaplamalar kullanılır. Asla hafifletilmiş sunta veya kalitesiz malzeme kullanmıyoruz.'
      },
      {
        q: 'Mevcut evdeki diğer mobilyalarımın rengine uyum sağlanabilir mi?',
        a: 'Evet. Kendi bünyemizdeki lake fırın boyahanemiz ve zengin membran kartelamız sayesinde evinizdeki mevcut parke, masa veya kapı renk tonlarıyla birebir uyumlu boya ve kaplama uygulaması yapabiliyoruz.'
      },
      {
        q: 'Özel yapım mobilyalar ne kadar sürede teslim edilir?',
        a: '3D mimari proje onayından sonra kapsamına göre ortalama 12-18 iş günü içinde atölyemizde üretilir ve randevulaşılan günde kendi uzman montaj ekibimizce 1 günde kurulup teslim edilir.'
      }
    ],
    {
      title: 'Eviniz İçin Özel Mobilya & Dekorasyon Fiyatı Alın',
      desc: 'Yaptırmak istediğiniz TV ünitesi, vestiyer veya dekorasyon alanının fotoğrafını ve kabataslak ölçülerini WhatsApp hattımıza iletin; mimarımız anında net bütçenizi çıkarsın.',
      items: [
        'TV ünitesi, vestiyer, portmanto ve lambri özel üretim',
        'Gizli LED aydınlatma ve Blum frenli ray mekanizmaları',
        'Ücretsiz lazerli keşif ve sözleşmeli 5 yıl atölye garantisi'
      ],
      waText: 'Merhaba, evim icin ozel mobilya ve dekorasyon projesi hakkinda gorusmek ve fiyat almak istiyorum.',
      btnText: 'WhatsApp\'tan Dekorasyon Teklifi Al',
      faqTitle: 'Özel Mobilya & Dekorasyon'
    }
  );

  const insertRegex = /<!-- Masaüstü Yüzen WhatsApp -->|<footer class="site-footer"/;
  c = c.replace(insertRegex, content + '\n\n  $&');
  fs.writeFileSync(file, c, 'utf8');
  console.log('Enriched', file);
}

// 4. mutfak-dekorasyonu.html
{
  const file = 'mutfak-dekorasyonu.html';
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/<article\b([^>]*)>/gi, '<div$1>').replace(/<\/article>/gi, '</div>');

  const content = buildSeoBlock(
    'Komple Mutfak Dekorasyonu, Ada Mutfak ve Tezgah Yenileme 2026 Fiyatları',
    '2026 Anahtar Teslim Mutfak Mimarisi & Tadilat Kılavuzu',
    'Başarılı bir mutfak tasarımı yalnızca dolap kapaklarından ibaret değildir; tezgah seçimi, tezgah arası seramik veya porselen paneller, ada bar ünitesi, tesisat yerleşimi ve aydınlatma dengesinin kusursuz bir harmoni içinde kurgulanması gerekir. ÇNR Mobilya olarak mutfağınızı kırım ve tesisat aşamasından başlayarak dolap, tezgah (Çimstone/Belenco/Porselen) ve LED aydınlatmalarına kadar anahtar teslim yeniliyoruz.',
    [
      ['Uygulama Kapsamı', 'Komple Dolap İmalatı + Kuvars/Porselen Tezgah + Ada Masa + Lineer Aydınlatma', 'Tek muhatapla anahtar teslim mutfak projesi, sıfır usta koordinasyon stresi'],
      ['Mutfak Adaları & Barlar', 'Depolamalı Geniş Ada Çekmeceleri, Kahvaltı Barı & Ankastre Ocak Entegrasyonu', 'Sosyal yaşam alanı sunan ada konsepti, ekstra 3-4 metrekare depolama hacmi'],
      ['Tezgah Seçenekleri', 'Çimstone, Belenco, Coante Kuvars Kompozit & 12 mm Çizilmez İtalyan Porselen', 'Leke tutmaz, asit ve limon suyuna dayanıklı, sıcak tencereye dirençli yüzeyler'],
      ['Tezgah Arası Paneller', 'Tezgahla Birebir Uyumlu Porselen Panel / 60x120 Granit Seramik / Boyalı Cam', 'Eksiz derzsiz hijyenik yüzey, yağ sıçramalarını emmeyen kolay temizlenebilir doku'],
      ['2026 Komple Proje Maliyeti', '₺95.000 - ₺185.000 (Mutfak Büyüklüğüne ve Tezgah Tipine Göre Anahtar Teslim)', 'Aracısız Dudullu fabrika imalatı sayesinde piyasaya göre %35 daha avantajlı'],
      ['Süreç & Taahhüt', '10-14 Gün Arası Fabrika İmalatı · 2 Günde Anahtar Teslim Montaj ve Devreye Alma', 'Ücretsiz lazer ölçümü, 3D mimari simülasyon ve yazılı sözleşmeli 5 yıl garanti']
    ],
    [
      {
        icon: '🏝️',
        title: 'Modern Ada Mutfak Kurgusu ve Sosyal Yaşam Alanı',
        text: 'Mutfak adaları modern evlerin kalbidir. Ada üzerinde ada davlumbazı, ankastre indüksiyonlu ocak veya tezgah altı gizli şaraplık ve çöp öğütücü modülleri yerleştirerek ergonomiyi zirveye taşıyoruz. Ada etrafında bırakılan geniş oturma payı ile mutfağınız ailenizle keyifle vakit geçireceğiniz sıcak bir yaşam merkezine dönüşür.'
      },
      {
        icon: '💎',
        title: 'Leke Tutmaz Çimstone, Belenco ve İtalyan Porselen Tezgahlar',
        text: 'Doğal mermerin gözenekli ve leke tutan yapısının aksine, kuvars kompozit (Çimstone, Belenco) ve sinterlenmiş kompakt porselen tezgahlar kahve, şarap, çay ve limon asitlerine karşı %100 lekesiz kalır. Çizilmeye karşı elmas sertliğindeki bu tezgahları dolaplarınızla eş zamanlı olarak milimetrik monte ediyoruz.'
      },
      {
        icon: '💡',
        title: 'Tezgah Altı Gizli Lineer LED ve Akıllı Priz Kuleleri',
        text: 'Yemek hazırlarken tezgahın gölgede kalmaması için üst dolap tabanlarına gömme alüminyum profilli 4000K doğal gün ışığı LED kanalları açıyoruz. Ada tezgah üzerine yerleştirilen gizli bas-aç priz kuleleri ve kablosuz telefon şarj istasyonları ile tezgah üzerinde kablo karmaşasına son veriyoruz.'
      },
      {
        icon: '🏭',
        title: 'Tek Elden Anahtar Teslim Güvencesi ve 3D Proje',
        text: 'Mutfak yenilerken marangoz, tesisatçı ve tezgahçı arasında yaşanan zaman kayıplarını sıfırlıyoruz. ÇNR Mobilya çatısı altında tüm aşamaları kendi uzman ekibimizle planlıyor, 3D çizim onayıyla başlayan süreci sözleşmeli ve 5 yıl garantili olarak zamanında teslim ediyoruz.'
      }
    ],
    [
      {
        q: 'Küçük mutfaklara ada mutfak uygulaması yapılabilir mi?',
        a: 'Evet. Alan darlığı olan mutfaklarda sabit büyük ada yerine yarım ada (peninsula) veya tekerlekli hareketli çok amaçlı kompakt adalar üretiyoruz. Bu sayede hem yemek masası ihtiyacı karşılanır hem de alt modüllerde ekstra depolama sağlanır.'
      },
      {
        q: 'Tezgah ile dolap siparişini aynı yerden vermenin avantajı nedir?',
        a: 'Tezgah ve dolabın tek elden yapılması milimetrik uyumu garanti eder. Evye altı su giderleri, ankastre ocak boşlukları ve süpürgelik birleşimlerinde sıfır hata sağlanır; montaj süresi yarı yarıya kısalır ve tek firma garantisi altında olursunuz.'
      },
      {
        q: 'Mutfak dekorasyonunda hangi renk kombinasyonları trenddir?',
        a: '2026 trendlerinde kaşmir bej ile doğal ceviz ahşap kombinasyonları, mat antrasit ile beyaz damarlı porselen tezgahlar ve adaçayı yeşili shaker kapaklar ile pirinç gold kulplar en çok tercih edilen estetik çizgilerdir.'
      },
      {
        q: 'Komple mutfak dekorasyonu kaç gün sürer?',
        a: 'Eski mutfağın sökülmesi ve tesisat düzenlemeleri 1-2 gün, atölyede üretilen yeni dolapların ve tezgahın montajı 2 gün sürer. Toplamda 4-5 günlük aktif çalışma ile mutfağınız kullanıma hazır teslim edilir.'
      }
    ],
    {
      title: 'Mutfağınızı Yenilemek İçin Hemen Teklif Alın',
      desc: 'Mevcut mutfağınızın fotoğrafını ve duvar ölçülerinizi WhatsApp hattımıza iletin; iç mimarımız ada mutfak ve tezgah seçenekleriyle anahtar teslim maliyetinizi hemen hazırlasın.',
      items: [
        'Ada mutfak, kahvaltı barı ve akıllı depolama mekanizmaları',
        'Kuvars (Çimstone/Belenco) veya porselen tezgah dahil anahtar teslim',
        'Ücretsiz lazerli keşif ve 5 yıl yazılı atölye garantisi'
      ],
      waText: 'Merhaba, komple mutfak dekorasyonu ve ada mutfak projem icin gorusmek istiyorum.',
      btnText: 'WhatsApp\'tan Mutfak Teklifi Al',
      faqTitle: 'Mutfak Dekorasyonu'
    }
  );

  const insertRegex = /<!-- Masaüstü Yüzen WhatsApp -->|<footer class="site-footer"/;
  c = c.replace(insertRegex, content + '\n\n  $&');
  fs.writeFileSync(file, c, 'utf8');
  console.log('Enriched', file);
}

// 5. yatak-odasi-mobilyasi.html
{
  const file = 'yatak-odasi-mobilyasi.html';
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/<article\b([^>]*)>/gi, '<div$1>').replace(/<\/article>/gi, '</div>');

  const content = buildSeoBlock(
    'Özel İmalat Yatak Odası Mobilyası, Karyola & Şifonyer 2026 Fiyatları',
    '2026 Modern Yatak Odası Mimarisi & Özel Ölçü Mobilya Kılavuzu',
    'Yatak odaları günün yorgunluğunun atıldığı, huzur ve dinginliğin ön planda olması gereken en mahrem yaşam alanıdır. Standart ölçüdeki hazır yatak odası takımları odanızın geometrisine uyum sağlayamazken, ÇNR Mobilya özel imalat konseptiyle odanızın her santimetrekaresini değerlendirir. Tavana kadar uzanan lake/kumaş kapitone yatak başlıkları, gizli LED aydınlatmalı asılı komodinler, makyaj masaları ve yüksek depolamalı bazalı karyolalar üretiyoruz.',
    [
      ['Takım İçeriği', 'Özel Karyola (Bazalı/Bazasız), Yatak Başlığı, 2 Komodin, Şifonyer & Makyaj Masası', 'Odanın mimari ölçüsüne milimetrik özel üretim, sıfır boşluk ve tam uyum'],
      ['Karyola & Baza İskeleti', 'Ağır Hizmet Tipi Çelik Profil Baza İskeleti + Çift Amortisörlü Emniyet Kilidi', 'Gıcırdama yapmaz, 500 kg taşıma kapasiteli, yüksek iç depolama hacmi'],
      ['Yatak Başlığı Malzemesi', 'Akustik Ahşap Çıtalar, Silinebilir Leke Tutmaz Nubuk/Keten Kumaş & Lake Panel', 'Yumuşak dokulu sırt desteği, entegre priz ve kablosuz telefon şarj yuvaları'],
      ['Çekmece & Donanım', 'Blum Frenli Gizli Tandem Raylar, Bas-Aç Mekanizmalar & Kadife İç Bölmeler', 'Sessiz kapanış konforu, takı ve saatler için çizilmez kadife düzenleyiciler'],
      ['2026 Takım Fiyatı', '₺48.000 - ₺85.000 (Karyola + Başlık + 2 Komodin + Şifonyer Dahil)', 'Doğrudan Ümraniye Dudullu imalatçı fiyatı, aracı ve mağaza karı olmadan'],
      ['Montaj & Garanti Süresi', '12-15 İş Günü Üretim · İstanbul Geneline 1 Günde Temiz Montaj', 'Ücretsiz lazerli oda keşfi, 3D fotogerçekçi çizim ve 5 yıl tam atölye garantisi']
    ],
    [
      {
        icon: '🛏️',
        title: 'Akustik Çıtalı ve LED Aydınlatmalı Yatak Başlığı Duvarı',
        text: 'Yatak başlığını sadece bir mobilya parçası olarak değil, tüm odayı kaplayan bir duvar mimarisi olarak tasarlıyoruz. Ahşap akustik çıtalar, yumuşak dokulu keten veya nubuk kumaş paneller, gizli dikey lineer LED aydınlatmalar ve başlık üzerine gömme dokunmatik okuma lambaları ile 5 yıldızlı otel süiti konforu oluşturuyoruz.'
      },
      {
        icon: '🌙',
        title: 'Asılı Yüzen Komodinler ve Zemin Temizlik Kolaylığı',
        text: 'Duvara monte edilen asılı (floating) komodinler, yatak odasına modern bir hafiflik katarken robot süpürgelerin ve paspasların yatak altına rahatça girmesini sağlar. Komodin üstlerine yerleştirilen gizli kablosuz şarj üniteleri ve USB priz çıkışları ile yatak başında kablo dağınıklığına son verilir.'
      },
      {
        icon: '💄',
        title: 'Özel Ölçü Makyaj Masası, Takı Bölmeleri ve LED Ayna',
        text: 'Odanızın ışık alan en uygun köşesine göre tasarlanan makyaj masaları; cam tablalı takı çekmeceleri, bas-aç frenli çekmece mekanizmaları ve dokunmatik buğu önleyicili LED makyaj aynaları ile kişisel bakımınızı keyifli bir ritüele dönüştürür.'
      },
      {
        icon: '🏭',
        title: 'Gıcırdama Yapmayan Sağlam İskelet ve Atölye Güvencesi',
        text: 'Fabrikasyon suntalam mobilyaların zamanla bağlantı yerlerinden gevşeyip gıcırdamasına son veriyoruz. 18 mm neme dayanıklı MDF ve güçlendirilmiş çelik bağlantı elemanları kullanarak onlarca yıl ilk günkü sessizliğinde sağlam kalan yatak odası mobilyaları üretiyoruz.'
      }
    ],
    [
      {
        q: 'Yatak odası mobilyalarında kullanılan bazalar gıcırdama yapar mı?',
        a: 'Hayır. Bazalarımızda hafif ahşap karkas yerine statik fırın boyalı kalın çelik profil iskelet ve çift kademeli emniyet kilitli amortisörler kullanılmaktadır. Zamanla esneme veya gıcırdama kesinlikle yapmaz.'
      },
      {
        q: 'Odamızın şekline göre özel ölçü karyola ve dolap yapabiliyor musunuz?',
        a: 'Evet. Odanızdaki kolon çıkıntıları, priz konumları ve pencere parapetlerine göre milimetrik üretim yapıyoruz. Yatak genişliği (160x200, 180x200, 200x200) ve başlık yüksekliği tamamen sizin tercihinize göre üretilir.'
      },
      {
        q: 'Kumaş kapitone başlıklarda temizlik nasıl yapılır?',
        a: 'Kullandığımız nubuk, keten ve bukle kumaşlar su itici ve leke tutmaz apre teknolojisine sahiptir. Nemli bir mikrofiber bezle silindiğinde toz ve lekeler kolayca çıkar; solma yapmaz.'
      },
      {
        q: 'Yatak odası siparişi kaç günde teslim edilir?',
        a: 'Lazer ölçüm ve 3D tasarım onayının ardından ortalama 12-15 iş gününde Dudullu atölyemizde üretilir. Kendi montaj ekibimiz randevu saatinde gelerek 1 günde montajı eksiksiz tamamlar.'
      }
    ],
    {
      title: 'Yatak Odanız İçin Özel İmalat Fiyatı Alın',
      desc: 'Odanızın ölçülerini ve beğendiğiniz karyola veya yatak odası tarzını WhatsApp hattımıza iletin; iç mimarımız 15 dakika içinde doğrudan fabrika teklifinizi hazırlasın.',
      items: [
        'Özel ölçü karyola, başlık, yüzen komodin ve şifonyer',
        'Akustik çıtalı LED başlık duvarı ve Blum frenli çekmeceler',
        'Ücretsiz yerinde lazer ölçümü ve sözleşmeli 5 yıl garanti'
      ],
      waText: 'Merhaba, ozel imalat yatak odasi mobilyasi icin olcu ileterek fiyat teklifi almak istiyorum.',
      btnText: 'WhatsApp\'tan Yatak Odası Fiyatı Al',
      faqTitle: 'Yatak Odası Mobilyası'
    }
  );

  const insertRegex = /<!-- Masaüstü Yüzen WhatsApp -->|<footer class="site-footer"/;
  c = c.replace(insertRegex, content + '\n\n  $&');
  fs.writeFileSync(file, c, 'utf8');
  console.log('Enriched', file);
}

console.log('All 5 pages successfully enriched with massive SEO, FAQ, and Workshop offer box!');
