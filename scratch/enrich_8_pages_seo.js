const fs = require('fs');

const pagesData = {
  "membran-mutfak-dolabi.html": {
    badge: "2026 Membran Mutfak Teknolojisi & Kapsamlı Rehber",
    title: "Membran Mutfak Dolabı Modelleri, İmalat Detayları ve 2026 Metretül Fiyatları",
    intro: "Membran mutfak dolapları, 18 mm neme dayanıklı E1 sınıfı MDF levhalar üzerine yüksek ısı ve vakum basıncı altında PVC folyonun eksiz olarak preslenmesiyle üretilen, Türkiye'de ve dünyada en çok tercih edilen kapak teknolojisidir. Kenar bandı ek yeri bulunmadığı için su buharı ve neme karşı %100 sızdırmazlık sağlar; soyulma, kabarma veya kenarlardan kalkma riskini tamamen ortadan kaldırır. ÇNR Mobilya olarak Yukarı Dudullu tesisimizde son teknoloji vakum pres makineleriyle ürettiğimiz membran mutfaklar, hem modern hem de rustik country tarzı mekanlara kusursuz uyum sağlar.",
    tableTitle: "2026 Membran Mutfak Dolabı Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Gövde Malzemesi", "18 mm E1 Neme Dayanıklı MDF-Lam (Kastamonu / Egger)", "Kanserojen madde içermez, çökmelere karşı 15 yıl dirençli"],
      ["Kapak Malzemesi", "18 mm CNC İşlemeli MDF + 0.40 mm Anti-Bakteriyel PVC Membran", "Eksiz yekpare vakum pres, sıfır kenar bandı kabarma riski"],
      ["Tutkal Standardı", "Alman Henkel / Dural Poliüretan Çift Komponentli Tutkal", "140°C termal presleme, ocak buharında kesinlikle açılma yapmaz"],
      ["Mekanizma & Ray", "Avusturya Blum Frenli Menteşe / Samet Tandembox Ray", "100.000 açma-kapama döngü testli, ömür boyu sessiz kullanım"],
      ["2026 Metretül Fiyatı", "₺11.000 - ₺12.500 / Metretül (Üst-Alt Dolap Dahil)", "Doğrudan Ümraniye fabrika satış fiyatı, aracı komisyonsuz"],
      ["Teslimat & Montaj", "10-12 İş Günü Üretim · 1 Günde Temiz Montaj", "İstanbul geneli ücretsiz lazerli keşif ve sözleşmeli 5 yıl garanti"]
    ],
    card1Title: "CNC Frezeleme Teknolojisi ve Country/Modern Desen Çeşitliliği",
    card1Text: "Membran kapaklar, CNC tezgahlarında kapak yüzeyine sınırsız 3 boyutlu desen işleme kabiliyetiyle öne çıkar. Country çıtalı modeller, neoklasik oymalı taçlar, rustik çerçeveler veya sade minimalist çizgiler milimetrik hassasiyetle yüzeye işlenir. Alman Henkel poliüretan membran tutkalı ve 140°C termal vakum presleme ile PVC folyo tüm kanal ve köşeleri pürüzsüzce sarar. Bu sayede dolap kapakları hem estetik bir derinlik kazanır hem de kenarlarından su alma riski sıfıra indirilir.",
    card2Title: "2026 Renk Kartelası, Yüzey Dokuları ve Kolay Temizlik Avantajı",
    card2Text: "İpek mat beyaz, kaşmir bej, adaçayı yeşili, mat antrasit, taş grisi ve doğal budaklı meşe dokuları membran serisinin en çok aranan renkleridir. Gözeneksiz PVC yüzey yapısı yağ ve sos sıçramalarını emmez; nemli mikrofiber bezle saniyeler içinde temizlenir. Güneş ışığına karşı UV filtreli folyolar sayesinde yıllar geçse bile sararma veya renk solması yaşanmaz. Kimyasal temizleyicilere karşı dayanıklı yapısıyla aileler için son derece hijyenik ve zahmetsiz bir kullanım sunar.",
    card3Title: "Gövde Standardı, Donanım Mekanizmaları ve Ergonomik Yerleşim",
    card3Text: "ÇNR Mobilya olarak membran kapaklarımızın ardında kesinlikle sunta veya hafifletilmiş malzeme kullanmıyoruz; gövdeyi 18 mm çift taraflı melamin kaplı Kastamonu Entegre veya Egger E1 MDF-Lam ile üretiyoruz. Avusturya menşeili Blum veya yerli lider Samet frenli menteşeler ve 50 kg taşıma kapasiteli tandembox çekmece rayları ile mutfağınız onlarca yıl boyunca ilk günkü sessizliğinde çalışır. Tavana sıfır çift kat dolaplar ve le-mans kör köşe mekanizmaları ile her metrekareden maksimum verim elde edilir.",
    card4Title: "2026 Metretül Fiyatları ve Doğrudan Dudullu Fabrika İmalatı",
    card4Text: "Aracı mağaza, bayi veya komisyoncu masraflarını sıfırlayarak Ümraniye Yukarı Dudullu tesisimizden doğrudan tüketiciye ulaşıyoruz. İstanbul genelinde ücretsiz lazerli keşif ve 3D fotogerçekçi çizim sunuyor, onayınızın ardından 12 iş gününde imalatı tamamlayıp kendi uzman montaj kadromuzla 1 günde teslim ediyoruz. 5 yıl yazılı atölye garantisi ile membran mutfak dolabınızı güvenle yeniliyoruz."
  },

  "matplus-mutfak-dolabi.html": {
    badge: "2026 Nanoteknolojik Matplus Mutfak Standartları",
    title: "Matplus Mutfak Dolabı Modelleri, Leke Tutmaz Teknoloji ve 2026 Fiyatları",
    intro: "Matplus kapak teknolojisi, iç mimaride yeni bir çağ açan nanoteknolojik elektron ışını (Electron Beam Curing - EBC) ile sertleştirilmiş ultra mat yüzey kaplamasıdır. Parmak izi bırakmayan (anti-fingerprint), ışığı yansıtmayan derin mat dokusu ve kadifemsi ipeksi dokunuş hissiyle modern lüks mutfakların vazgeçilmez standardıdır. ÇNR Mobilya, Ümraniye tesisinde en yeni nesil Matplus panelleri milimetrik hassasiyetle işleyerek rezidans ve villa projelerine kazandırmaktadır.",
    tableTitle: "2026 Matplus Mutfak Dolabı Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Yüzey Teknolojisi", "EBC Elektron Işını ile Sertleştirilmiş Nano-Mat Polimer", "Sıfır parmak izi, ışığı yansıtmayan derin kadife mat doku"],
      ["Gövde Malzemesi", "18 mm E1 Neme Dayanıklı MDF-Lam (Kastamonu / Egger)", "Koku ve nem tutmaz, vidalama mukavemeti en üst seviyede"],
      ["Kenar Bantlama", "1 mm Lazer Uyumlu ABS + Su Geçirmez PUR Tutkal", "Sıcak buhardan ve sudan asla etkilenmeyen sıfır derz yapısı"],
      ["Mekanizma & Ray", "Blum Aventos Kalkar Kapaklar & Blum Tandembox Raylar", "Kulpsuz bas-aç (tip-on) ve frenli yumuşak kapanma donanımı"],
      ["2026 Metretül Fiyatı", "₺12.500 - ₺13.800 / Metretül (Üst-Alt Dolap Dahil)", "Doğrudan Ümraniye atölye imalat fiyatı, bayi karı eklenmez"],
      ["Teslimat & Montaj", "12-14 İş Günü İmalat · 1 Günde Anahtar Teslim Montaj", "İstanbul geneli ücretsiz yerinde lazer keşif ve 5 yıl garanti"]
    ],
    card1Title: "Nanoteknolojik Elektron Işını Kürleme ve Sıfır Parmak İzi",
    card1Text: "Geleneksel mat kapaklarda en büyük sorun olan parmak izi, el yağı ve su lekeleri Matplus teknolojisinde tarihe karışır. Elektron ışınıyla sertleştirilen mikroskobik yüzey yapısı, yağ ve nem moleküllerinin tutunmasını engeller. Çizilmelere karşı termal mikro-iyileşme özelliği sayesinde hafif yüzey sürtünmelerinde dahi mikrofiber bezle kolayca eski haline döner. Yoğun mutfak trafiğine sahip modern aileler için leke tutmazlıkta zirve çözümdür.",
    card2Title: "Kulpsuz J-Profil Tasarım ve Sofistike Renk Kombinasyonları",
    card2Text: "Matplus mutfak dolaplarında en popüler tasarım dili, kulpsuz J-profil gizli alüminyum kulp profilleridir. Mat antrasit, volkan grisi, kaşmir, duman grisi ve tebeşir beyazı renkleri, salonla birleşen Amerikan ada mutfaklarda büyüleyici bir zarafet sunar. Tezgah seçiminde Calacatta porselen veya kuvars kompozit tezgahlarla birleştiğinde kesintisiz monolitik bir mimari çizgi oluşturur ve mekanın değerini katlar.",
    card3Title: "18mm Neme Dayanıklı MDF Gövde ve Blum Aventos Donanımları",
    card3Text: "Dolap gövdelerimizde kullanılan 18 mm E1 neme dayanıklı MDF paneller, kenarlarında PUR tutkallı lazer kenar bantlama ile sudan ve pişirme buharından tamamen yalıtılır. Üst dolaplarda kullanılan Blum Aventos HF çift kanatlı katlanır kalkar kapak mekanizmaları, yemek hazırlığı sırasında baş çarpma riskini sıfıra indirir ve mutfakta maksimum hareket özgürlüğü sağlar.",
    card4Title: "2026 Matplus Metretül Maliyetleri ve İstanbul Geneli Keşif",
    card4Text: "Matplus mutfak dolabı metretül fiyatlarımız, aracı mağaza payı olmadan doğrudan atölye imalat avantajıyla sunulmaktadır. İstanbul Anadolu ve Avrupa yakasında adresinize lazerli ölçüm aletlerimiz ve gerçek folyo kartelalarımızla gelerek ücretsiz keşif yapıyoruz. 3D mimari simülasyonun ardından 12-14 iş gününde imalatı tamamlayıp 1 günde anahtar teslim monte ediyoruz."
  },

  "akrilik-mutfak-dolabi.html": {
    badge: "2026 Orijinal Senosan Akrilik Kapak Standartları",
    title: "Akrilik Mutfak Dolabı Modelleri, Çizilmez Yüzey ve 2026 Metretül Fiyatları",
    intro: "Akrilik mutfak dolapları, 18 mm E1 sınıfı birinci kalite MDF plakalar üzerine 1.0 mm ile 1.4 mm kalınlığında orijinal Avusturya Senosan PMMA (akrilik) levhaların poliüretan tutkalla lamine edilmesiyle üretilen ultra parlak, cam berraklığında kapak sistemleridir. Küçük ve dar mutfakları ışığı mükemmel şekilde yansıtarak ferahlatmasıyla bilinir. ÇNR Mobilya, piyasadaki ucuz taklitlerin aksine %100 orijinal Senosan plaka kullanarak sararmayan ve çizilmeyen mutfaklar teslim eder.",
    tableTitle: "2026 Akrilik Mutfak Dolabı Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Yüzey Plakası", "Orijinal Avusturya Senosan 1.4 mm Çizilmez PMMA Akrilik", "Ayna parlaklığında kristal yansıma, portakal kabuğu yapmaz"],
      ["Gövde Malzemesi", "18 mm E1 Neme Dayanıklı MDF-Lam (Kastamonu / Egger)", "Rutubet, buhar ve eğrilmelere karşı 1. sınıf gövde dayanımı"],
      ["Kenar Bantlama", "3D Çift Renkli Akrilik Cam Efektli ABS + PUR Tutkal", "Lazer derzsiz yapıştırma, su sızmasına karşı tam mühürleme"],
      ["Mekanizma Standardı", "Blum Tandembox Çift Cidarlı Ray & Frenli Menteşeler", "50 kg çekmece taşıma kapasitesi, yumuşak ve sessiz kapanma"],
      ["2026 Metretül Fiyatı", "₺11.800 - ₺13.200 / Metretül (Üst-Alt Dolap Dahil)", "Ümraniye Dudullu merkez atölye satış fiyatı, sıfır komisyon"],
      ["Teslimat & Montaj", "10-12 İş Günü Üretim · 1 Günde Kusursuz Montaj", "Tüm İstanbul'a ücretsiz lazer keşif ve 5 yıl tam garanti"]
    ],
    card1Title: "Kristal Cam Berraklığı ve Çizilmeye Dirençli Top-Coat Katmanı",
    card1Text: "Sıradan parlak kapakların aksine orijinal akrilik levhalar ayna gibi pürüzsüz bir yansıma sunar, portakal kabuğu dalgalanması oluşturmaz. Yüzeyindeki sertleştirilmiş akrilik çizilmezlik tabakası sayesinde temizlik esnasında mikro çiziklere karşı üstün koruma sağlar. Güneş ışığına ve neme karşı 10 yıl boyunca kesinlikle sararma veya solma yapmaz; küçük mutfakları iki kat daha aydınlık gösterir.",
    card2Title: "PUR Lazer Kenar Bantlama ve Su Sızdırmazlık Teknolojisi",
    card2Text: "Akrilik kapakların kenarları, 3D cam efektli 1 mm çift renkli ABS kenar bantları ve poliüretan (PUR) tutkal teknolojisi ile sıfır derz (zero-joint) hassasiyetinde bantlanır. Bu teknoloji sayesinde mutfak eviyesi çevresindeki yoğun su sıçramaları ve ocak buharı kapak kenarlarına asla nüfuz edemez. Kabarma ve kenar soyulması riski tamamen ortadan kalkar.",
    card3Title: "Trend Renkler ve Modern Ada Mutfak Kurgusu",
    card3Text: "Kristal beyaz, metalik antrasit, şampanya, kapuçino ve siyah akrilik tonları modern ankastre beyaz eşyalarla kusursuz bir kontrast oluşturur. Mutfak adalarında kullanılan geniş çekmeceler, kiler boy kuleleri ve frenli köşe mekanizmaları ile depolama kapasitesi en üst düzeye çıkarılır. Mutfakta lüks bir showroom atmosferi yaratılır.",
    card4Title: "2026 Akrilik Metretül Fiyatları ve Atölyeden Doğrudan Montaj",
    card4Text: "Piyasadaki taklit kapaklara kıyasla orijinal Senosan akrilik ve 18 mm MDF gövdeyi en rekabetçi atölye fiyatlarıyla sunuyoruz. İstanbul geneline ücretsiz lazerli keşif, 3D çizim ve sözleşmeli 5 yıl garantili teslimat sağlıyoruz. Kendi uzman marangozlarımız montajı 1 günde tamamlayarak anahtar teslim eder."
  },

  "lake-mutfak-dolabi.html": {
    badge: "2026 Lüks Fırın Boya İpek Mat Lake Standartları",
    title: "Lake Mutfak Dolabı Modelleri, Özel Fırın Boya ve 2026 Metretül Fiyatları",
    intro: "Lake mutfak dolabı, marangozluk sanatının ve mobilya zanaatkarlığının zirvesini temsil eden; 18 mm veya 22 mm ham MDF panellerin bilgisayarlı CNC tezgahlarında frezelendikten sonra çok katmanlı poliüretan oto-lake boya ve fırın kurutma işleminden geçirilmesiyle üretilen en lüks kapak türüdür. Yüzeyinde ve kenarlarında hiçbir ek yeri (bant) bulunmayan yekpare monolitik bir zarafet sunar. ÇNR Mobilya, kendi fırın boya tesisinde mikron düzeyinde fırınlama yaparak ömürlük mutfaklar imal eder.",
    tableTitle: "2026 Lake Mutfak Dolabı Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Boya Teknolojisi", "4 Kat İzolasyon Astarı + 3 Kat Poliüretan Fırın Oto-Lake", "Kenarsız yekpare mühürleme, sınırsız RAL ve NCS renk seçimi"],
      ["Gövde Malzemesi", "18 mm E1 Neme Dayanıklı MDF-Lam (Kastamonu / Egger)", "Çökmelere, rutubete ve vida gevşemesine karşı 1. sınıf gövde"],
      ["Kapak Kalınlığı", "18 mm veya 22 mm Masif Dokulu CNC İşlemeli Ham MDF", "İstenilen derinlikte çıta, çerçeve ve kulp deseni açılabilir"],
      ["Donanım Standardı", "Blum Aventos Kalkar Sistem & Blum Tip-On Bas-Aç Ray", "Kulpsuz minimalist kullanım veya pirinç/döküm kulp seçenekleri"],
      ["2026 Metretül Fiyatı", "₺14.000 - ₺16.500 / Metretül (Üst-Alt Dolap Dahil)", "Doğrudan imalat tesisimizden satış, mağaza komisyonsuz"],
      ["Teslimat & Montaj", "15-18 İş Günü Kürleme · 1 Günde Usta Montajı", "İstanbul geneli ücretsiz lazer keşif ve sözleşmeli 5 yıl garanti"]
    ],
    card1Title: "Çok Katmanlı Poliüretan Fırın Boya ve Yekpare Mühürleme",
    card1Text: "Lake kapak imalatında 4 kat izolasyon astarı ve 3 kat poliüretan son kat boya uygulanır. Her kat arasında zımparalama yapılarak pürüzsüz bir ipeksi mat veya ayna parlaklığında yüzey elde edilir. Kapakların kenarları ve arka kısımları boyayla tamamen mühürlendiği için su buharı ve neme karşı %100 geçirimsizdir. Yüzeyde bant birleşim çizgisi bulunmaz.",
    card2Title: "Sınırsız RAL ve NCS Renk Özgürlüğü ile Neoklasik Çıtalar",
    card2Text: "Lake mutfakların en büyük ayrıcalığı, kartela kısıtlamasının olmamasıdır. RAL ve NCS renk kataloglarındaki binlerce ton arasından dilediğiniz rengi seçebilirsiniz. Zümrüt yeşili, antrasit, gece mavisi, kaşmir bej, fildişi ve sıcak vizon tonları, neoklasik çıtalar ve pirinç kulp detaylarıyla Kadıköy, Beşiktaş ve Sarıyer gibi semtlerin elit konutlarına değer katar.",
    card3Title: "Tavana Sıfır Çift Katlı Dolaplar ve Porselen Tezgah Entegrasyonu",
    card3Text: "Yüksek tavanlı daireler için özel olarak tavana sıfır çift kat taçlı dolaplar, cam vitrinler ve entegre kiler modülleri tasarlıyoruz. Calacatta porselen tezgahlar ve gömme LED aydınlatmalar ile tamamlanan lake mutfaklarımız nesiller boyu eskimeyen bir iç mimari anıtına dönüşür.",
    card4Title: "2026 Lake Mutfak Metretül Fiyatları ve İmalatçı Sözleşmesi",
    card4Text: "Doğrudan fırın boya tesisimizden satış yaptığımız için mağaza karlarını aradan çıkarıyoruz. İstanbul geneli ücretsiz yerinde ölçü, fotogerçekçi 3D mimari görselleştirme ve 1 günde montaj garantisi sunuyoruz. Sözleşmeli ve 5 yıl garantili teslimat gerçekleştiriyoruz."
  },

  "high-gloss-mutfak-dolabi.html": {
    badge: "2026 Ekonomik & Parlak High Gloss Standartları",
    title: "High Gloss Mutfak Dolabı Modelleri, UV Lak Parlaklığı ve 2026 Fiyatları",
    intro: "High Gloss mutfak dolapları, 18 mm E1 MDF levhalar üzerine UV lak ve yüksek parlaklıktaki melamin teknolojisi uygulanarak üretilen, parlak ve ışıltılı mutfak hayali kuran ev sahipleri için bütçe dostu birinci sınıf atölye çözümüdür. ÇNR Mobilya, piyasadaki dayanıksız suntalam ürünlerin aksine hem gövdede hem de kapaklarda 18 mm MDF kullanarak en ekonomik fiyatla en yüksek dayanımı buluşturur.",
    tableTitle: "2026 High Gloss Mutfak Dolabı Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Yüzey Standardı", "UV Lak ile Sertleştirilmiş Yüksek Parlaklıkta Melamin Yüzey", "Işıltılı canlı parlaklık, leke tutmaz pratik silinebilir yapı"],
      ["Gövde Malzemesi", "18 mm E1 Neme Dayanıklı MDF-Lam (Kastamonu / Egger)", "Sunta kesinlikle kullanılmaz, şişme ve çökmelere karşı dayanıklı"],
      ["Kenar Bantlama", "1 mm Darbe Emici Parlak ABS Kenar Bandı + PUR Yapıştırıcı", "Kapak kenarlarını darbelere ve neme karşı tam koruyan kalın bant"],
      ["Mekanizma Standardı", "Samet Frenli Menteşeler & Frenli Sessiz Teleskopik Ray", "Yumuşak kapanma, çarpmayı önleyen amortisörlü donanım"],
      ["2026 Metretül Fiyatı", "₺9.800 - ₺11.000 / Metretül (Üst-Alt Dolap Dahil)", "En ekonomik doğrudan atölye imalat fiyatı, sıfır aracı masrafı"],
      ["Teslimat & Montaj", "8-10 İş Günü Hızlı Üretim · 1 Günde Temiz Montaj", "İstanbul geneli ücretsiz keşif ve 5 yıl gövde garantisi"]
    ],
    card1Title: "UV Lak Yüzey Teknolojisi ve Işıltılı Canlı Parlaklık",
    card1Text: "High Gloss kapaklar, ultraviyole ışınlarla sertleştirilen koruyucu lak tabakası sayesinde ışıl ışıl parlayan canlı bir yüzey sunar. Küçük metrekareli mutfaklarda ışığı yansıtarak mekanın çok daha aydınlık, ferah ve geniş algılanmasını sağlar. Bütçeyi sarsmadan modern bir mutfak görünümü elde etmenin en akılcı yoludur.",
    card2Title: "18mm MDF Gövde Güvencesi ve Çizilme Direnci",
    card2Text: "Piyasadaki ucuz suntalam dolapların aksine, High Gloss mutfaklarımızın gövdesinde de kapaklarında da yalnızca 1. sınıf 18 mm neme dayanıklı MDF kullanıyoruz. Kenarları 1 mm darbe emici PVC kenar bantlarıyla kaplanır, böylece kapak köşeleri çarpmalara ve darbelere karşı ekstra korunur.",
    card3Title: "Zengin Renk ve Desen Seçenekleri ile Modern Çözümler",
    card3Text: "Parlak beyaz, parlak vizon, antrasit, mermer desenli ve ahşap dokulu High Gloss kapaklar; modern minimalist mutfak tasarımlarında şıklığı ekonomik bütçelerle yakalamak isteyenler için mükemmeldir. Frenli menteşeler ve çekmecelerle donatılarak uzun yıllar sorunsuz çalışır.",
    card4Title: "2026 En Uygun Metretül Fiyatları ve Rekor Hızlı Teslimat",
    card4Text: "Metretül bazında en ekonomik mutfak serimiz olan High Gloss, sipariş ve ölçü onayından sonra 8-10 iş günü gibi rekor bir sürede üretilerek adresinizde 1 günde monte edilir. Ücretsiz lazerli keşif ve 3D çizim hizmetimiz bu modelimizde de eksiksiz sunulur."
  },

  "banyo-dolabi.html": {
    badge: "2026 Suya Dayanıklı Özel İmalat Banyo Mobilyaları",
    title: "Özel İmalat Banyo Dolabı Modelleri, Marin MDF Gövde ve 2026 Fiyatları",
    intro: "Banyo dolabı imalatında ÇNR Mobilya, banyoların yoğun buharına, doğrudan su sıçramalarına ve yüksek nemine karşı özel olarak geliştirilmiş marin sınıfı yeşil MDF gövdeler ve çok katmanlı poliüretan fırın lake kapaklar kullanmaktadır. Standart yapı market dolaplarının aksine ölçünüze göre milimetrik üretilir; çamaşır makinesi, kurutma makinesi ve deterjan kulelerini estetik bir bütünlükle gizler.",
    tableTitle: "2026 Özel İmalat Banyo Dolabı Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Gövde Malzemesi", "%100 Suya Dayanıklı Yeşil Marin MDF-Lam", "Buhara ve suya karşı şişme yapmaz, mantar ve bakteri barındırmaz"],
      ["Kapak Malzemesi", "Poliüretan Fırın Lake Boya veya Çizilmez Matplus Kaplama", "Eksiz mühürlü boya katmanı, soyulma ve kabarma yapmaz"],
      ["Kenar Bantlama", "Poliüretan (PUR) Tutkallı Su Sızdırmaz Lazer Kenar Bandı", "Banyo nemine karşı en üst düzey sızdırmazlık standardı"],
      ["Mekanizma Standardı", "Paslanmaz Çelik Frenli Menteşeler & Blum Tandembox Ray", "Banyo ortamında paslanma yapmayan özel kaplamalı donanım"],
      ["2026 Fiyat Aralığı", "₺8.500 - ₺19.500 / Takım (Ölçüye ve Modele Göre)", "Doğrudan Ümraniye fabrika imalat fiyatı, montaj dahil"],
      ["Teslimat & Montaj", "8-12 İş Günü Üretim · 1 Günde Temiz Banyo Montajı", "İstanbul geneli ücretsiz lazerli keşif ve 5 yıl garanti"]
    ],
    card1Title: "Suya ve Buhara Karşı %100 Dirençli Marin Yeşil MDF Gövde",
    card1Text: "Banyo mobilyalarında en kritik unsur su geçirimsizliğidir. ÇNR Mobilya olarak banyo dolaplarımızda neme dayanıklı yeşil MDF ve poliüretan (PUR) lazer kenar bantlama kullanıyoruz. Şişme, kabarma, sararma ve mantar oluşumunu engelleyen bu yapı ile banyo dolaplarınıza 5 yıl tam imalatçı garantisi veriyoruz.",
    card2Title: "Asma Lavabo Altı Üniteleri, Boy Kuleleri ve Çamaşır Dolapları",
    card2Text: "Modern banyolar için yerden yüksek asma lavabo altı dolapları, seramik veya porselen çanak lavabo entegrasyonu, buğu önleyici dokunmatik LED aynalar ve tavana kadar yükselen boy çamaşır kuleleri üretiyoruz. Kirli çamaşır sepetini dolap içine gizleyen özel tel sepet mekanizmaları ile banyonuzda kusursuz bir spa dinginliği oluşturuyoruz.",
    card3Title: "Lüks Lake ve Ahşap Dokulu Kapak Trendleri ile Şık Banyolar",
    card3Text: "Antrasit mat lake, zümrüt yeşili, açık meşe, kaşmir ve beyaz tonlarındaki banyo dolapları; mermer ve antrasit banyo seramikleriyle mükemmel bir uyum yakalar. Paslanmaz çelik frenli menteşeler banyo ortamındaki neme karşı paslanmazlık garantisi sunar.",
    card4Title: "2026 Özel İmalat Banyo Dolabı Fiyatları ve Ücretsiz Keşif",
    card4Text: "Banyonuzun ölçüsüne ve seramik döşemesine uygun özel tasarım banyo dolapları doğrudan Ümraniye fabrikamızdan teslim edilir. İstanbul geneli ücretsiz yerinde lazer ölçüm ve 1 günde montaj hizmeti sağlıyoruz. 5 yıl yazılı garanti ile teslim ediyoruz."
  },

  "banyo-tadilat-yenileme.html": {
    badge: "2026 Anahtar Teslim Komple Banyo Tadilatı & Yenileme",
    title: "Komple Banyo Tadilatı ve Yenileme: Kırım, Tesisat, Seramik ve Mobilya Rehberi",
    intro: "Komple banyo tadilatı ve yenileme hizmetimizde ÇNR Mobilya, kırım-dökümden su-elektrik tesisatı yenilemesine, su yalıtımı (izolasyon), büyük ebatlı porselen seramik döşemesinden özel imalat banyo dolabı ve duşakabin montajına kadar tüm süreci tek elden, anahtar teslim yürütür. Farklı ustalarla uğraşmadan tek muhatap ve sözleşmeli sabit fiyat garantisi sunuyoruz.",
    tableTitle: "2026 Komple Banyo Tadilatı İş Kalemleri & Teknik Standartlar",
    tableRows: [
      ["Kırım & Hafriyat", "Eski seramik, vitrifiye ve harçların sökülmesi, moloz atımı", "Bina sakinlerini rahatsız etmeyen kontrollü ve temiz kırım"],
      ["Sıhhi Tesisat", "PPRC temiz su boruları & PVC atık su giderlerinin sıfırlanması", "Basınç testli sızdırmazlık garantisi, gömme rezervuar montajı"],
      ["Su Yalıtımı (İzolasyon)", "Çift Kat Elastik Çimentolu İzolasyon + Pah Bandı Uygulaması", "Duş ve zemin sızıntılarını %100 önleyen kritik aşama"],
      ["Seramik & Fayans", "60x120 Lüks Porselen Seramik Döşeme & Epoksi Derz Dolgu", "Lazer terazili sıfır diş işçilik, leke tutmaz kimyasal derz"],
      ["Mobilya & Duşakabin", "Özel İmalat Lake Banyo Dolabı & 8mm Temperli Duşakabin", "Buğu önleyici LED ayna, lineer süzgeç ve armatür montajı"],
      ["2026 Paket Maliyeti", "Banyo Metrekaresine Göre Komple Anahtar Teslim Paketler", "Sözleşmeli sabit fiyat garantisi, sonradan ek masraf çıkarılmaz"]
    ],
    card1Title: "A'dan Z'ye 5 Aşamalı Anahtar Teslim Banyo Tadilat Süreci",
    card1Text: "1. Kırım ve Hafriyat: Eski fayansların ve tesisatın titizlikle sökülmesi. 2. Altyapı Yenileme: Kaliteli borularla su ve elektrik hatlarının yenilenmesi. 3. Çift Kat Su Yalıtımı: Alt kata su sızma riskini tamamen bitiren fileli yalıtım. 4. 60x120 Seramik Döşeme: Milimetrik lazerli seramik montajı. 5. Banyo Mobilyası & Vitrifiye: Kendi atölyemizde üretilen banyo dolabı ve temperli duşakabin montajı.",
    card2Title: "Gömme Rezervuar, Kanalsız Klozet ve Lineer Süzgeç Standartları",
    card2Text: "Geberit veya VitrA gömme rezervuarlar, kanalsız (rimless) hijyenik asma klozetler, paslanmaz çelik lineer süzgeçli duş zeminleri ve 8 mm rodajlı şeffaf/füme temperli duşakabin camları ile banyonuzu 5 yıldızlı otel konforuna taşıyoruz. Tesisat ömrünü 25+ yıla uzatıyoruz.",
    card3Title: "Sözleşmeli Sabit Fiyat ve Gecikmesiz Teslimat Garantisi",
    card3Text: "Banyo tadilatında en çok korkulan 'başladıktan sonra çıkan ek masraflar' ve 'uzayan teslim süreleri' kabusunu sözleşmeyle bitiriyoruz. İşe başlamadan önce tüm malzeme markaları ve iş kalemleri yazılı sözleşmeye bağlanır. Ortalama 8-10 iş gününde komple banyonuz teslim edilir.",
    card4Title: "İstanbul Geneli Ücretsiz Banyo Keşif ve 3D Tasarım Hizmeti",
    card4Text: "Banyonuzu yenilemeden önce adresinize gelerek mevcut tesisat durumunu inceliyor, beğendiğiniz seramik ve dolap modelleriyle 3 boyutlu mimari projesini ücretsiz hazırlıyoruz. Kendi usta kadromuzla anahtar teslim banyo tadilatı sunuyoruz."
  },

  "gardirop-modelleri.html": {
    badge: "2026 Özel İmalat Ray Dolap & Gardırop Sistemleri",
    title: "Özel İmalat Gardırop Modelleri, Ray Dolap Sistemleri ve 2026 Fiyatları",
    intro: "Gardırop ve ray dolap imalatında ÇNR Mobilya; yatak odanızın tavan yüksekliğine ve duvar ölçüsüne göre santimetresine kadar özel üretilen sürgülü ray dolaplar, menteşeli kapaklı gardıroplar, füme alüminyum camlı dolaplar ve açık giyinme odası sistemleri tasarlamaktadır. Tavana sıfır boy dolaplar, asansörlü askılıklar ve sensörlü LED aydınlatmalar ile yatak odanızda düzen ve lüksü bir araya getiriyoruz.",
    tableTitle: "2026 Gardırop & Ray Dolap Teknik & Fiyat Karşılaştırma Matrisi",
    tableRows: [
      ["Gövde Malzemesi", "18 mm E1 Neme Dayanıklı MDF-Lam (Kastamonu / Egger)", "Ağır kışlık kaban ve yorgan yüklerinde kesinlikle esneme yapmaz"],
      ["Kapak Seçenekleri", "İpek Mat Lake / Füme Cam Alüminyum Çerçeve / Matplus", "Sürgülü raylı veya 180 derece açılır menteşeli kapak alternatifleri"],
      ["Ray & Mekanizma", "Çift Taraflı Frenli Ağır Yük Ray Sistemi / Blum Menteşe", "Raydan çıkmayı önleyen emniyet kilitli, sessiz kayar kapak mekanizması"],
      ["İç Donanım Aksesuarı", "Asansörlü Askılık, Pantolonluk, Kadife Takı Çekmecesi", "Tavana sıfır dikey hacimden %100 yararlanma imkanı"],
      ["2026 Metretül Fiyatı", "₺8.800 - ₺16.500 / Metretül (Kapak ve Aksesuara Göre)", "Doğrudan Ümraniye marangoz atölye fiyatı, aracı komisyonsuz"],
      ["Teslimat & Montaj", "10-14 İş Günü İmalat · 1 Günde Usta Montajı", "İstanbul geneli ücretsiz lazerli keşif ve sözleşmeli 5 yıl garanti"]
    ],
    card1Title: "Sürgülü Ray Dolap ve Menteşeli Dolap Mekanizmaları",
    card1Text: "Yatak odasında yer darlığı çekenler için sürme ray dolap sistemleri, geniş mekanlar içinse 180 derece açılır menteşeli monolitik lake gardıroplar üretiyoruz. Ray sistemlerimizde kullanılan çift taraflı frenli mekanizmalar, ağır kapakların dahi parmak ucuyla sessizce kaymasını ve yavaşça kapanmasını sağlar. Emniyet kilitli mekanizmalar kapakların raydan çıkmasını engeller.",
    card2Title: "Füme Temperli Cam Kapaklar ve Sensörlü LED Aydınlatma",
    card2Text: "Son dönemin en popüler lüks trendi olan siyah/bronz alüminyum çerçeveli reflekte füme cam kapaklar, gardırobun içine şık bir derinlik katar. Kapak açıldığında otomatik yanan profil LED aydınlatmalar, kıyafetlerinizi mağaza vitrini şıklığında sergiler. Yatak odasına modern bir rezidans ve butik otel atmosferi kazandırır.",
    card3Title: "İç Düzenleyici Modüller: Pantolonluk, Mücevherlik ve Asansörlü Askılar",
    card3Text: "Yüksek tavanlı dolapların üst kısımlarını zahmetsizce kullanabilmek için hidrolik asansörlü askı sistemleri, kadife kaplamalı takı ve saat çekmeceleri, raylı pantolonluklar, kravatlıklar ve ayakkabılık modülleri entegre ediyoruz. Giysileriniz kırışmadan düzenli bir şekilde saklanır.",
    card4Title: "2026 Gardırop Metretül Fiyatları ve İstanbul Ücretsiz Keşif",
    card4Text: "18 mm E1 neme dayanıklı MDF gövde, Blum donanım ve özel imalat işçiliğiyle doğrudan Dudullu fabrikamızdan aracısız fiyat avantajı sağlıyoruz. İstanbul genelinde ücretsiz lazerli ölçü ve 3D çizimle 12 iş gününde teslim ediyoruz. 5 yıl yazılı atölye garantisi sunuyoruz."
  }
};

let count = 0;

for (const [filename, data] of Object.entries(pagesData)) {
  if (!fs.existsSync(filename)) {
    console.error('File not found:', filename);
    continue;
  }

  let content = fs.readFileSync(filename, 'utf8');

  // Build the rich commercial SEO section (USING ONLY semantic <div> and <section>, NO <article> to prevent Safari reader view!)
  const tableRowsHtml = data.tableRows.map(r => `
            <tr>
              <td><strong>${r[0]}</strong></td>
              <td>${r[1]}</td>
              <td><span class="seo-table-badge">${r[2]}</span></td>
            </tr>
  `).join('');

  const richSectionHtml = `
  <!-- ${data.title} (Kapsamlı Ticari Ürün & Teknik İmalat Rehberi) -->
  <section class="section-padding" style="background-color: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container" style="max-width: 1080px;">
      
      <div class="section-header" style="text-align: left; margin-bottom: 35px;">
        <span class="section-subtitle">${data.badge}</span>
        <h2 class="section-title" style="font-size: 2.2rem; margin-top: 10px;">
          ${data.title}
        </h2>
        <p style="font-size: 1.05rem; color: var(--color-text-muted); line-height: 1.8; margin-top: 14px;">
          ${data.intro}
        </p>
      </div>

      <!-- 2026 Teknik Özellikler ve Karşılaştırma Tablosu -->
      <div style="margin-bottom: 45px;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 16px;">
          📊 ${data.tableTitle}
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
        
        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 26px 28px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>📐</span> ${data.card1Title}
          </h4>
          <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.8;">
            ${data.card1Text}
          </p>
        </div>

        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 26px 28px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>🎨</span> ${data.card2Title}
          </h4>
          <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.8;">
            ${data.card2Text}
          </p>
        </div>

        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 26px 28px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>🛡️</span> ${data.card3Title}
          </h4>
          <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.8;">
            ${data.card3Text}
          </p>
        </div>

        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 26px 28px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>🏭</span> ${data.card4Title}
          </h4>
          <p style="font-size: 0.95rem; color: var(--color-text-main); line-height: 1.8;">
            ${data.card4Text}
          </p>
        </div>

      </div>

    </div>
  </section>
`;

  // Remove old injection if exists
  if (content.includes('(Kapsamlı Ticari Ürün & Teknik İmalat Rehberi)')) {
    content = content.replace(/<!--[\s\S]*?\(Kapsamlı Ticari Ürün & Teknik İmalat Rehberi\)[\s\S]*?<\/section>/i, richSectionHtml.trim());
  } else {
    // Insert before Sıkça Sorulan Sorular or before footer
    const faqMatch = content.match(/<!--[^\n]*Sıkça Sorulan Sorular[^\n]*-->/i) || content.match(/<section[^>]*class=["'][^"']*faq[^"']*["']/i);
    if (faqMatch) {
      content = content.replace(faqMatch[0], richSectionHtml + '\n  ' + faqMatch[0]);
    } else {
      content = content.replace('<footer', richSectionHtml + '\n  <footer');
    }
  }

  fs.writeFileSync(filename, content, 'utf8');
  count++;
  console.log('Successfully injected rich SEO section into:', filename);
}

console.log(`Updated ${count} pages with massive, keyword-dense commercial SEO content!`);
