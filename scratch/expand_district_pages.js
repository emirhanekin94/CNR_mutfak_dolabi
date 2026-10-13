const fs = require('fs');

const districtGuides = {
  "umraniye-mutfak-dolabi.html": {
    heading: "Ümraniye Mutfak Dolabı İmalatı, Modelleri ve 2026 Fiyat Rehberi",
    intro: "Ümraniye mutfak dolabı arayışında olan ev sahipleri, müteahhitler ve iç mimarlar için ÇNR Mobilya olarak Yukarı Dudullu Organize Sanayi bölgesindeki kendi imalat tesisimizden doğrudan hizmet veriyoruz. Ümraniye ilçesi; Tepeüstü, Atakent, Yamanevler, Çakmak ve Şerifali gibi hem yeni nesil rezidans ve site projelerine hem de 20-30 yıllık köklü apartman yapılarına ev sahipliği yapmaktadır. Kendi atölyemizde bilgisayarlı CNC makineleriyle milimetrik kesim, PUR tutkallı suya dayanıklı kenar bantlama ve basınçlı fırın lake boya işlemleri gerçekleştirdiğimiz için hiçbir aracı mağaza komisyonu olmadan doğrudan fabrika metretül fiyatlarıyla çalışıyoruz.",
    section1Title: "Ümraniye Evlerine Özel Mimari Mutfak Çözümleri ve Ölçü Disiplini",
    section1Text: "Ümraniye'deki eski yapılaşmalarda karşılaşılan en büyük problem; duvarlardaki eğrilikler, kolon ve kiriş çıkıntıları ile ortada kalan kombi ve doğalgaz borularıdır. ÇNR Mobilya teknik ekibi, Ümraniye'deki adresinize lazerli hassas ölçüm cihazlarıyla gelerek sıfır hata toleransıyla mekanın rölevesini çıkarır. Kombi ve tesisat boruları, dolap kapağıyla birebir aynı renkte hazırlanan havalandırmalı gizleme modülleri arkasına saklanır. Tavana kadar uzanan çift katlı üst dolap sistemlerimiz sayesinde tencere, düdüklü tencere ve küçük ev aletleri için ekstra hacim oluşturulur. Salonla birleşik açık mutfaklarda ise ada yemek masası ve bar sandalyeli modern ada tezgah üniteleriyle Ümraniye dairelerine modern bir kimlik kazandırıyoruz.",
    section2Title: "Ümraniye'de En Çok Tercih Edilen Kapak Modelleri ve Renk Kombinasyonları",
    section2Text: "Ümraniye bölgesindeki projelerimizde en popüler modellerimizin başında çizilmeye dayanıklı membran kapaklar ve parmak izi tutmayan Matplus kapak serileri gelmektedir. Membran mutfak dolabı modellerimiz, 18 mm neme dayanıklı MDF üzerine tek parça PVC vakum pres kaplama ile üretildiği için yoğun yemek buharına karşı kenarlardan açılma yapmaz. Lüks segment dairelerde ise zümrüt yeşili, antrasit, kaşmir ve kırık beyaz fırın boyalı ipek mat lake kapaklarımız tercih edilmektedir. Çimstone, Belenco ve porselen tezgah entegrasyonuyla tamamlanan mutfaklarımız, uzun yıllar sararmadan ve leke tutmadan ilk günkü parlaklığını ve dokusunu korur.",
    section3Title: "Aracısız Dudullu Atölye İmalatı, 1 Günde Montaj ve 5 Yıl Garanti",
    section3Text: "Showroom ve imalatımızın Ümraniye sınırları içinde yer alması, müşterilerimize muazzam bir lojistik ve servis avantajı sağlamaktadır. Beğendiğiniz renk ve kapak kartelalarını incelemek üzere atölyemizi dilediğiniz zaman ziyaret edebilir, üretim sürecini bizzat yerinde görebilirsiniz. Lazerli ölçü onayının ardından 3D fotogerçekçi mimari çiziminiz hazırlanır ve onayınızla birlikte üretime başlanır. Membran ve akrilik mutfaklar ortalama 10-12 iş gününde, lake mutfaklar ise fırın kuruma süreleri dahilinde 14-18 iş gününde hazır hale getirilir. Kendi uzman marangoz kadromuz Ümraniye evinize gelerek 1 gün içinde tozsuz ve temiz montajı tamamlar, 5 yıl mekanik ve imalatçı garantisiyle teslim eder."
  },

  "atasehir-mutfak-dolabi.html": {
    heading: "Ataşehir Mutfak Dolabı İmalatı, Rezidans Modelleri ve 2026 Fiyatları",
    intro: "Ataşehir mutfak dolabı projelerinde ÇNR Mobilya, Finans Merkezi'nin modern mimarisine ve bölgedeki lüks konut kültürüne yakışır üst segment tasarımlar sunmaktadır. Batı Ataşehir, Barbaros, Atatürk Mahallesi, İçerenköy ve Küçükbakkalköy aksındaki rezidans ve site projelerinde genellikle salonla bütünleşen açık konsept Amerikan mutfaklar ve ada tezgahlı yerleşimler tercih edilmektedir. Ümraniye Dudullu'daki fabrikamızın Ataşehir'e komşu konumu sayesinde tüm mahallelere dakikalar içinde randevulu ücretsiz lazerli keşif ve numune sunumu sağlayabiliyoruz.",
    section1Title: "Ataşehir Rezidans ve Dairelerinde Akustik ve Görsel Estetik",
    section1Text: "Salona açılan açık mutfaklarda görsellik kadar ses yalıtımı ve koku yönetimi de kritik önem taşır. Ataşehir projelerimizde kullandığımız Avusturya menşeili Blum frenli menteşe ve tandembox çekmece rayları sayesinde kapaklar ve çekmeceler geceleri dahi tamamen sessiz kapanır. Mutfak adası üzerine entegre edilen yüksek debili karbon filtreli sessiz davlumbaz sistemleri, yemek kokularının salona yayılmasını engeller. Ankastre fırın, mikrodalga fırın ve kahve makinelerini tek bir dikey kule dolabında toplayarak görsel karmaşayı ortadan kaldırıyoruz. Tezgah altına gizlenen boy kiler sistemleri ve tam açılır köşe döner sepetleri ile alan kaybı yaşamadan maksimum depolama sunuyoruz.",
    section2Title: "Parmak İzi Tutmayan Matplus ve İtalyan Lake Kapak Trendleri",
    section2Text: "Ataşehir'in yoğun iş temposuna sahip ev sahipleri için temizliği son derece pratik ve parmak izi bırakmayan nanoteknolojik Matplus kapaklar ilk tercihtir. Soft-touch kadife dokusuna sahip bu yüzeyler, güneş ışığına maruz kalsa dahi sararma yapmaz ve mikro çiziklere karşı yüksek direnç gösterir. Lüks kule dairelerinde ise antrasit, vizon, taş grisi ve fildişi tonlarında uyguladığımız çok katmanlı ipek mat lake kapaklar öne çıkmaktadır. Kulpsuz J-profil gizli alüminyum kulp detayları ve tezgah altı sensörlü sıcak LED aydınlatmalar ile Ataşehir mutfaklarına sofistike bir atmosfer kazandırıyoruz.",
    section3Title: "Ataşehir İçin Ücretsiz Keşif, 3D Tasarım ve Hızlı Montaj Ağı",
    section3Text: "Ataşehir'deki tüm konutlar için sunduğumuz ücretsiz keşif hizmetinde lazerli hassas ölçümün yanı sıra mekanın aydınlatma açıları ve havalandırma çıkışları da incelenir. İç mimarımız, beğendiğiniz kapak ve tezgah kombinasyonlarıyla hazırladığı fotogerçekçi 3D mimari projeyi onayınıza sunar. Üretim tamamlandığında kendi usta montaj ekibimiz Ataşehir adresinize gelerek temiz ve titiz bir işçilikle dolapları monte eder, süpürgelik ve taç detaylarını sıfır hata ile tamamlar."
  },

  "cekmekoy-mutfak-dolabi.html": {
    heading: "Çekmeköy Mutfak Dolabı İmalatı, Villa Modelleri ve 2026 Fiyatları",
    intro: "Çekmeköy mutfak dolabı projelerinde ÇNR Mobilya, ilçenin doğayla iç içe villa yerleşimleri, koru siteleri ve geniş metrekareli müstakil konutları için lüks ahşap işçiliği sunmaktadır. Alemdağ, Taşdelen, Merkez Mahallesi, Mimar Sinan ve Ömerli villa havzasındaki konutlar; geniş aile yaşamına uygun ferah ada mutfaklar, country çıtalı kapaklar ve doğal masif ahşap dokular talep etmektedir. Atölyemizin Çekmeköy sınırında yer alması, bölge sakinlerine hızlı lojistik ve doğrudan atölye imalat avantajı kazandırmaktadır.",
    section1Title: "Çekmeköy Müstakil Konut ve Villalarında Country Mutfak Kültürü",
    section1Text: "Geniş tavanlı ve ferah pencereli Çekmeköy evlerinde en çok rağbet gören tarz, sıcak kır yaşamının modern teknolojiyle birleştiği country membran ve lake mutfaklardır. CNC makinelerimizde kapak yüzeylerine açılan zarif çıta ve çerçeve desenleri, fırın boya tesisimizde adaçayı yeşili, fildişi, vanilya ve sıcak bej tonlarıyla renklendirilir. Mutfak adasının ortasına yerleştirilen masif meşe kahvaltı barları, döküm pirinç kulplar ve çıtalı cam vitrin dolapları ile sıcak bir aile ortamı oluşturulur. Veranda ve bahçeye açılan kapıların çevresinde açık tabaklık ve fincanlık modülleri tasarlanarak rustik şıklık tamamlanır.",
    section2Title: "Çocuklu Geniş Aileler İçin Erzak Kileri ve Derin Depolama",
    section2Text: "Çekmeköy'deki geniş ailelerin en temel ihtiyaçlarından biri kuru gıda, erzak ve küçük ev aletlerinin düzenli depolanmasıdır. Tavana kadar yükselen çift kanatlı boy kiler dolaplarımız, iç kısımda kullanılan 50 kg taşıma kapasiteli tandembox çekmecelerle ağır döküm tencereleri ve erzak kavanozlarını zahmetsizce taşır. Köşe ölü alanları değerlendiren le-mans fasulye mekanizmaları ve çift katlı tencere hazneleri sayesinde mutfakta tek bir santimetrekare dahi ziyan edilmez. Tezgah seçiminde ise çizilmeye ve lekeye dayanıklı porselen veya kuvars yüzeyler tercih edilerek çocuklu ailelerin pratik kullanımı güvenceye alınır.",
    section3Title: "Çekmeköy Yerinde Lazer Keşif, 3D Mimari Çizim ve Fabrika Satışı",
    section3Text: "Çekmeköy genelindeki tüm villa ve site projelerine adresinizde lazerli ücretsiz ölçü alımı yapıyoruz. Beğendiğiniz ahşap kartelalarını ve kapak numunelerini evinize getirerek mekanınızın ışığında incelemenizi sağlıyoruz. Onaylanan 3D tasarımın ardından kendi marangoz atölyemizde üretilen dolaplar, Çekmeköy adresinizde profesyonel montaj ekibimizce 1 günde kurulur ve 5 yıl garanti altına alınır."
  },

  "sancaktepe-mutfak-dolabi.html": {
    heading: "Sancaktepe Mutfak Dolabı İmalatı, Modelleri ve 2026 Metretül Fiyatları",
    intro: "Sancaktepe mutfak dolabı ihtiyaçlarında ÇNR Mobilya, Sarıgazi, Samandıra, Yenidoğan, Abdurrahmangazi ve Emek mahallelerindeki yeni konut projeleri için doğrudan fabrikadan aracısız mutfak çözümleri üretmektedir. Genç ailelerin, yeni evli çiftlerin ve kentsel dönüşümle evini yenileyenlerin bütçesini sarsmadan en yüksek malzeme kalitesini sunmak adına 18 mm neme dayanıklı E1 MDF lam gövde ve uzun ömürlü kapak seçenekleri kullanıyoruz. Dudullu atölyemizden Sancaktepe'ye aynı gün ücretsiz lazerli keşif hizmeti veriyoruz.",
    section1Title: "Sancaktepe Konutlarında Alan Verimliliği ve Ergonomik L Mutfaklar",
    section1Text: "Sancaktepe'deki 2+1 ve 3+1 daire planlarında mutfaklar genellikle dikdörtgen veya kare geometriye sahiptir. Bu alanlarda çalışma üçgenini (eviye, ocak, buzdolabı) kusursuz kuran L tipi ve U tipi yerleşimler uyguluyoruz. Dar alanlarda yemek masası koyacak yer kalmadığında, tezgahın devamı olarak tasarlanan katlanabilir veya uzatılabilir yarım ada kahvaltı tezgahları monte ediyoruz. Kombi ve doğalgaz borularını estetik dolap modülleri arkasına alarak mutfağın derli toplu görünmesini sağlıyoruz. Üst dolaplarda gaz amortisörlü yukarı açılır kalkar kapaklar kullanarak yemek hazırlığı esnasında baş çarpma riskini sıfıra indiriyoruz.",
    section2Title: "Çizilmez Membran ve Yüksek Parlaklıkta Akrilik Kapak Seçenekleri",
    section2Text: "Sancaktepe ailelerinin yoğun yemek pişirme alışkanlıklarına en uygun kapak malzemeleri çizilmez membran ve ultra parlak akrilik yüzeylerdir. Membran kapaklarımız vakum pres altında PVC folyo ile eksiz kaplandığı için su sıçramalarına ve neme karşı tam sızdırmazlık sağlar. Akrilik kapaklarımız ise cam gibi pürüzsüz parlaklığıyla küçük mutfakları ışığı yansıtarak çok daha geniş ve aydınlık gösterir. Her iki kapak grubunda da 10 yıl renk solmama ve kalkma yapmama garantisi veriyoruz. Beyaz, vizon, kaşmir ve antrasit renk kombinasyonları en çok tercih edilen kartelalarımız arasındadır.",
    section3Title: "Sancaktepe'ye Doğrudan İmalatçı Fiyatı ve Hızlı Montaj Desteği",
    section3Text: "Aracı mağaza, bayi ya da komisyoncu olmadan doğrudan imalatçıdan sipariş vermenin fiyat avantajını Sancaktepe sakinlerine sunuyoruz. Ölçü alımından montaja kadar tüm süreç kendi bünyemizdeki marangoz ustaları tarafından yürütülür. Lazerli ölçü, 3D fotogerçekçi çizim ve yerinde keşif hizmetimiz Sancaktepe genelinde tamamen ücretsizdir. 10-14 iş günü içinde hazırlanan mutfağınız 1 günde monte edilerek kullanıma hazır teslim edilir."
  },

  "kadikoy-mutfak-dolabi.html": {
    heading: "Kadıköy Mutfak Dolabı İmalatı, Bağdat Caddesi Modelleri ve 2026 Fiyatları",
    intro: "Kadıköy mutfak dolabı projelerinde ÇNR Mobilya; Bağdat Caddesi, Moda, Caddebostan, Suadiye, Feneryolu, Fenerbahçe ve Erenköy hattında yürütülen lüks kentsel dönüşüm ve daire yenileme projelerine üst düzey marangozluk işçiliği sunmaktadır. Eski Kadıköy apartmanlarının karakteristik ferah tavan yüksekliklerini ve Fransız balkonlu aydınlık odalarını lüks neoklasik lake mutfaklar, porselen tezgahlar ve dikey depolama kuleleriyle buluşturuyoruz.",
    section1Title: "Bağdat Caddesi ve Moda'da Yüksek Tavanlı Neoklasik Çözümler",
    section1Text: "Kadıköy'deki köklü binalarda 2.80 metre ile 3.20 metre arasında değişen tavan yükseklikleri, standart modüler dolaplarla değerlendirilemez. ÇNR Mobilya olarak tavana sıfır çift katlı taçlı üst dolaplar üreterek dikey hacmi son santimetresine kadar depolama alanına dönüştürüyoruz. Klasik semt dokusuna uyumlu gömme panelli lake kapaklar, pirinç ve antik bronz kulp detayları ile süslenir. Mutfak dolabının üst kısmına entegre edilen kayar raylı merdiven sistemleri veya cam vitrin kapakları ile Kadıköy dairelerine hem estetik bir derinlik hem de benzersiz bir prestij katıyoruz.",
    section2Title: "Calacatta Porselen Tezgah ve İpeksi Mat Lake Boya İşçiliği",
    section2Text: "Kadıköy mutfaklarında en çok rağbet gören kombinasyon, çizilmez ve yanmaz İtalyan Calacatta porselen tezgahlar ile fırınlanmış çok katmanlı ipek mat lake kapaklardır. Fırın boya tesisimizde sınırsız RAL ve NCS renk kodunda boyanan lake kapaklar; gece mavisi, antrasit, zümrüt yeşili ve fildişi tonlarında pürüzsüz ipeksi bir doku kazanır. Dolap kapaklarının iç kısımlarında kullanılan Blum bas-aç (tip-on) ve frenli menteşe sistemleri, kulpsuz minimalist çizgiyi modern Alman mühendisliğiyle destekler. Tezgaha entegre gizli elektrik priz kuleleri ve dolap içi LED aydınlatmalar lüks mutfak deneyimini zirveye taşır.",
    section3Title: "Kadıköy İçin Özel Randevulu Keşif ve Mimari Projelendirme",
    section3Text: "Kadıköy ve sahil şeridindeki tüm mahalleler için iç mimarımız bizzat adresinize gelerek lazerli milimetrik ölçü alımı yapar. Renk kartelaları, kapak kesitleri ve tezgah numuneleri mekanın doğal ışığı altında beğeninize sunulur. Çizilen fotogerçekçi 3D mimari proje onaylandıktan sonra Dudullu atölyemizde üretime geçilir. Kadıköy adresinizde 1 günde sessiz ve titiz montaj yapılarak mutfağınız 5 yıl garantili olarak teslim edilir."
  },

  "uskudar-mutfak-dolabi.html": {
    heading: "Üsküdar Mutfak Dolabı İmalatı, Boğaz Hattı Modelleri ve 2026 Fiyatları",
    intro: "Üsküdar mutfak dolabı üretiminde ÇNR Mobilya; Beylerbeyi, Kandilli, Çengelköy, Kuzguncuk, Altunizade ve Acıbadem gibi Boğaz'ın tarihi ve seçkin mahallelerindeki yalı daireleri, köşkler ve konaklar için özel marangozluk çözümleri sunmaktadır. Boğaz havasının getirdiği nem ve tuz faktörünü göz önünde bulundurarak çok katmanlı fırın poliüretan boyalı lüks lake ve suya dayanıklı masif gövdeli mutfaklar üretiyoruz.",
    section1Title: "Boğaz Manzaralı Konutlarda Neoklasik Zarafet ve Manzara Odaklı Ada",
    section1Text: "Üsküdar'ın tarihi semtlerinde mutfaklar yalnızca yemek pişirilen bir mekan değil, Boğaz manzarasının ve tarihi atmosferin keyifle izlendiği yaşam alanlarıdır. Geniş pencerelerin önüne yerleştirilen alçak boy oturma sedirleri, porselen eviyeli ada hazırlık tezgahları ve ahşap kütüphane rafları tasarlıyoruz. Tarihi dokuyu bozan kombi, şofben ve tesisat boruları çıtalı dolap kapakları arkasına ustalıkla gizlenir. Zümrüt yeşili, antrasit, gece mavisi ve asil krem lake renkleri, seramik rustik bataryalar ve porselen kulp detaylarıyla zenginleştirilir.",
    section2Title: "Nem ve Tuza Dirençli Çok Katmanlı Fırın Lake Teknolojisi",
    section2Text: "Boğaz hattındaki konutlarda en kritik teknik gereksinim, yüksek neme ve tuzlu deniz havasına karşı dayanıklı boya kaplamasıdır. ÇNR Mobilya tesislerinde CNC ile işlenen 18 mm E1 MDF paneller, 4 kat astar ve 3 kat poliüretan fırın lake boya ile mühürlenir. Bu mikron düzeyindeki yüzey koruması sayesinde dolap kapakları nemden kabarma yapmaz, sararmaz ve çatlamaz. Çekmece içi bölücülerde kullanılan masif ceviz ve meşe kaşıklıklar, mutfağın iç mimari değerini dış görünüşü kadar üst seviyeye taşır.",
    section3Title: "Üsküdar Adresinize Ücretsiz Lazer Keşif ve Profesyonel Montaj",
    section3Text: "Üsküdar'ın tüm mahallelerine numune çantalarımız ve lazerli ölçüm cihazlarımızla gelerek ücretsiz keşif yapıyoruz. Mekanınızın rölövesine göre hazırlanan 3D fotogerçekçi mimari plan onayınıza sunulur. Üretim sürecinin ardından Üsküdar evinize gelen uzman montaj ekibimiz, tarihi yapıların duvar hassasiyetlerine uygun özel montaj aparatları kullanarak mutfağınızı 1 günde tertemiz teslim eder."
  },

  "maltepe-mutfak-dolabi.html": {
    heading: "Maltepe Mutfak Dolabı İmalatı, Sahil Modelleri ve 2026 Fiyatları",
    intro: "Maltepe mutfak dolabı projelerinde ÇNR Mobilya; Küçükyalı, İdealtepe, Altayçeşme, Dragos ve Cevizli aksındaki Adalar manzaralı konutlar ve kentsel dönüşüm siteleri için fonksiyonel ve modern mutfaklar üretmektedir. Marmara Denizi'ne bakan balkonlu dairelerde deniz havasına dayanıklı akrilik yüzeyler, alüminyum çerçeveli reflekte füme cam kapaklar ve dar mutfak koridorlarını genişleten aynalı tasarım çözümleri uyguluyoruz.",
    section1Title: "Maltepe Sahil Dairelerinde Koridor Mutfakları Genişletme Çözümleri",
    section1Text: "Maltepe'deki birçok kentsel dönüşüm dairesinde mutfaklar uzun ve dar koridor planına sahiptir. Bu tarz mekanlarda alanı ferahlatmak için açık renk lake ve matplus kapak panelleri, tezgah arasında ayna ve reflekte camlar ile dolap altı sensörlü LED ışık hatları kullanıyoruz. Karşılıklı çift sıra dolap yerleşimlerinde derinliği 40 cm'ye optimize edilen servis dolapları ile yürüme alanını geniş tutuyoruz. Müteahhitlerin teslim ettiği standart ve kalitesiz dolapları sökerek yerine 18 mm neme dayanıklı MDF gövdeli lüks dolaplar yerleştiriyoruz.",
    section2Title: "Deniz Havasına Karşı Sararmayan Akrilik ve Füme Cam Kapaklar",
    section2Text: "Deniz kıyısındaki Maltepe konutlarında güneş ışığı ve deniz nemi, kalitesiz kapaklarda kısa sürede sararma ve kenar açılmasına yol açar. ÇNR Mobilya olarak kullandığımız Senosan akrilik plakalar, UV ışınlarına karşı 10 yıl renk solmama garantisine sahiptir. Alüminyum profilli füme cam vitrin kapakları ise yemek takımlarını sergilerken mutfağa modern bir İtalyan havası katar. Blum tandembox raylı çekmeceler ve tam açılır çöp ayrıştırma üniteleri ile Maltepe mutfaklarında üstün bir kullanım ergonomisi sağlıyoruz.",
    section3Title: "Maltepe Ücretsiz Keşif, 3D Çizim ve Doğrudan Fabrika Teslimi",
    section3Text: "Maltepe genelindeki tüm site ve apartman dairelerine randevulu ücretsiz lazer keşif sağlıyoruz. Beğendiğiniz renk ve malzeme kartelalarını evinizde inceleyebilir, 24 saat içinde hazırlanan 3D mimari çizimle mutfağınızın bitmiş halini görebilirsiniz. Dudullu atölyemizden Maltepe'ye 10-14 iş günü içinde teslimat ve 1 günde montaj gerçekleştirilmektedir."
  },

  "kartal-mutfak-dolabi.html": {
    heading: "Kartal Mutfak Dolabı İmalatı, Rezidans Modelleri ve 2026 Fiyatları",
    intro: "Kartal mutfak dolabı arayışında olan ev sahipleri için ÇNR Mobilya; Atalar, Rahmanlar, Soğanlık, Kordonboyu, Petrol-İş ve Karlıktepe bölgelerindeki panoramik Adalar manzaralı rezidans ve site projelerine özel mutfaklar üretmektedir. Balkonların içeriye katılmasıyla genişletilen mutfak alanlarında ergonomik U tipi ve ada tezgahlı yerleşimler, boy kiler kuleleri ve porselen tezgah entegrasyonu sunuyoruz.",
    section1Title: "Balkon Dönüşümlü Kartal Dairelerinde U Tipi ve Ada Yerleşimler",
    section1Text: "Kartal sahil bandındaki dairelerde son yıllarda en sık yapılan tadilat, mutfak balkonunun içeriye dahil edilerek alanın büyütülmesidir. Bu genişleyen mekanlarda yemek pişirme, hazırlık ve sosyalleşme alanlarını ayıran U tipi ve ada mutfak kurguları inşa ediyoruz. Balkon parapet duvarının üzerine yerleştirilen ada masası, Adalar manzarasını izlerken kahvaltı yapma imkanı sunar. Kolon ve kombi boruları ise kiler dolapları içerisine entegre edilerek pürüzsüz monolitik bir duvar elde edilir.",
    section2Title: "Çizilmez Matplus ve Lüks Porselen Tezgah Çözümleri",
    section2Text: "Kartal projelerimizde en çok tercih edilen malzeme kombinasyonu, parmak izi bırakmayan Matplus antrasit kapaklar ile beyaz damarlı porselen tezgahların uyumudur. Porselen tezgahlar; çizilmez, leke tutmaz ve üzerine kaynar tencere konulduğunda dahi yanmaz özellikleriyle mutfakta benzersiz bir konfor sunar. Çekmecelerde kullandığımız 65 cm derinliğindeki çift cidarlı çelik yanaklı Blum tandembox raylar, en ağır döküm tencereleri dahi tek parmak dokunuşuyla sessizce hareket ettirir.",
    section3Title: "Kartal Genelinde Ücretsiz Keşif, 3D Proje ve İmalatçı Güvencesi",
    section3Text: "Kartal'ın tüm mahallelerine lazerli ölçü aletimiz ve zengin kapak kartelalarımızla gelerek ücretsiz keşif yapıyoruz. Mekanınıza özel hazırlanan 3D fotogerçekçi mimari render onaylandıktan sonra Dudullu atölyemizde CNC kesim ve montaj hazırlığı yapılır. Kartal adresinizde 1 günde temiz montaj tamamlanarak 5 yıl garantiyle teslim edilir."
  },

  "pendik-mutfak-dolabi.html": {
    heading: "Pendik Mutfak Dolabı İmalatı, Kurtköy Modelleri ve 2026 Fiyatları",
    intro: "Pendik mutfak dolabı imalatında ÇNR Mobilya; Pendik Merkez, Çarşı ve Güzelyalı sahil şeridindeki köklü apartmanlardan Kurtköy Yenişehir, Çamlık ve Sülüntepe villa ve site projelerine kadar çok yönlü hizmet vermektedir. Kurtköy'ün geniş dubleks ve bahçe katı daireleri için büyük depolama hacimli ada mutfaklar, Pendik merkezdeki kompakt daireler içinse pratik panjur kilerler ve ergonomik dolaplar üretiyoruz.",
    section1Title: "Kurtköy Dubleks ve Bahçe Katı Dairelerinde Ada Mutfak Konforu",
    section1Text: "Kurtköy bölgesindeki geniş metrekareli dairelerde ailenin bir araya geldiği geniş kahvaltı adaları ve bar üniteleri vazgeçilmezdir. Mutfak adasının alt kısmına çift taraflı açılır derin çekmeceler ve şaraplık modülleri entegre ediyoruz. Eviye ve bulaşık makinesini adaya alarak ada tipi sessiz davlumbazlarla şef mutfağı konsepti oluşturuyoruz. Tavana kadar yükselen boy kulelerde fırın, mikrodalga ve kahve makinesi ankastre yerleşimlerini kusursuz bir simetriyle topluyoruz.",
    section2Title: "Ağır Yüke Dayanıklı Ray Sistemleri ve Hijyenik Membran Kapaklar",
    section2Text: "Geniş aile yapısına sahip Pendik konutlarında çekmecelerin taşıma kapasitesi ve kapakların kolay temizlenebilir olması önceliklidir. 50 kg taşıma kapasiteli Blum Tandembox raylarımız, en ağır mutfak gereçlerini dahi sarkma yapmadan taşır. Eksiz vakum pres membran kapaklarımız ise yağ ve buhar sıçramalarını tek bir nemli bezle temizleme kolaylığı sağlar. 18 mm neme dayanıklı E1 MDF lam gövde garantisiyle mutfak dolaplarımızın ömrünü 15+ yıla uzatıyoruz.",
    section3Title: "Pendik İçin Ücretsiz Keşif, 3D Tasarım ve Doğrudan Atölye Fiyatı",
    section3Text: "Pendik ve Kurtköy genelindeki tüm adreslere ücretsiz lazerli keşif hizmeti sunuyoruz. Beğendiğiniz renk ve malzeme kartelalarını evinizde inceleyebilir, 3D çizimle mutfağınızı her açıdan görebilirsiniz. Kendi montaj ekibimizce 1 günde montaj tamamlanarak doğrudan atölye imalat fiyatı avantajı sağlanır."
  },

  "tuzla-mutfak-dolabi.html": {
    heading: "Tuzla Mutfak Dolabı İmalatı, Marina & Villa Modelleri ve 2026 Fiyatları",
    intro: "Tuzla mutfak dolabı projelerinde ÇNR Mobilya; Tuzla Marina, Mercan Koyu, Postane Mahallesi ve Tepeören villa parsellerindeki sahil konutları için deniz nemine ve korozyona tam dayanıklı özel mobilyalar üretmektedir. Sahil ikliminin getirdiği yüksek tuz ve rutubet faktörünü neme dayanıklı yeşil marin MDF gövdeler ve poliüretan lazer kenar bantlama ile sıfırlıyoruz.",
    section1Title: "Tuzla Marina ve Mercan Sahilinde Neme %100 Dayanıklı Malzemeler",
    section1Text: "Deniz kıyısındaki Tuzla evlerinde dolap gövdelerinin ve kapaklarının tuzlu nemden etkilenmemesi için yeşil MDF plakalar ve suya dayanıklı poliüretan tutkallı kenar bantlama uyguluyoruz. Marina bölgesindeki modern sahil evlerinde açık meşe, keten dokulu yüzeyler ve kulpsuz modern hatlarla aydınlık bir sayfiye atmosferi oluşturulur. Tepeören villalarında ise kış bahçesine açılan geniş mutfaklar için çift lavabolu hazırlık adaları ve profesyonel ocak çevreleri tasarlanır.",
    section2Title: "Modern Sayfiye Şıklığı ve Keten Dokulu Ahşap Kapaklar",
    section2Text: "Tuzla sahil şeridinde en popüler trend, doğal ahşap damarlarını yansıtan açık meşe, ceviz ve keten dokulu matplus kapaklardır. Tezgah seçiminde çizilmeye ve asit lekelerine tam dirençli porselen yüzeyler öne çıkmaktadır. Paslanmaz çelik frenli menteşeler ve korozyona dayanıklı alüminyum süpürgelikler ile sahil ikliminde dahi onlarca yıl sorunsuz çalışan mekanizmalar kuruyoruz.",
    section3Title: "Tuzla Adresinize Ücretsiz Lazer Keşif ve Profesyonel Montaj",
    section3Text: "Tuzla'nın tüm mahallelerine numune kartelalarımız ve lazer ölçüm cihazlarımızla gelerek ücretsiz keşif yapıyoruz. 3D fotogerçekçi mimari projeniz hazırlandıktan sonra Dudullu atölyemizde CNC kesim ve montaj hazırlığı yapılır. 1 günde titiz montajla teslim edilir."
  },

  "beykoz-mutfak-dolabi.html": {
    heading: "Beykoz Mutfak Dolabı İmalatı, Acarkent Villa Modelleri ve 2026 Fiyatları",
    intro: "Beykoz mutfak dolabı üretiminde ÇNR Mobilya; Acarkent, Beykoz Konakları, Kavacık, Göksu Evleri, Kanlıca ve Polonezköy orman köylerindeki lüks villa ve konaklar için özel marangozluk zanaatı sunmaktadır. Yüksek tavanlı ve geniş metrekareli Beykoz villalarında gurme şef ada mutfakları, el oyması taçlı lake kapaklar ve şömine yanı ahşap lambri entegrasyonu gerçekleştiriyoruz.",
    section1Title: "Acarkent ve Beykoz Konaklarında Gurme Şef Ada Mutfakları",
    section1Text: "Beykoz'un müstakil villa yaşamında mutfak, evin en görkemli sosyal alanıdır. Mutfak adasının merkezine yerleştirilen porselen eviyeler, tavan tipi sessiz davlumbazlar ve masif ceviz kahvaltı barları ile mekanları profesyonel bir şef mutfağına dönüştürüyoruz. Orman manzarasını içeriye davet eden adaçayı yeşili, vizon, antrasit ve sıcak bej lake boyalar el işçiliğiyle uygulanır. Şömine yanı ahşap kütüphane ve şarap kavı dolapları ile Beykoz konutlarına benzersiz bir asalet kazandırıyoruz.",
    section2Title: "El İşçiliği Masif Meşe Taçlar ve Çıtalı Country Lake Kapaklar",
    section2Text: "Beykoz projelerimizde en çok tercih edilen kapak modeli, çıtalı country lake kapaklardır. Fırın boya tesisimizde mikron düzeyinde kürlenen poliüretan boyalar, pürüzsüz ipeksi mat bir doku sunar. Döküm pirinç kulplar, porselen eviyeler ve çıtalı cam vitrin dolapları ile rustik şıklık zirveye taşınır. Çekmece içlerindeki masif ceviz kaşıklık ve bölücü sistemlerle kusursuz bir iç mimari düzen sağlanır.",
    section3Title: "Beykoz Villalarına Özel Ücretsiz Lazer Keşif ve Mimari Proje",
    section3Text: "Beykoz genelindeki tüm villa ve konutlara iç mimarımız bizzat gelerek lazerli keşif yapar. Zengin kartela ve numuneler mekanın ışığında incelenir. 3D fotogerçekçi mimari onay sonrasında atölyemizde üretilen dolaplar 1 günde uzman marangozlarımızca monte edilir."
  },

  "sultanbeyli-mutfak-dolabi.html": {
    heading: "Sultanbeyli Mutfak Dolabı İmalatı, Modelleri ve 2026 Metretül Fiyatları",
    intro: "Sultanbeyli mutfak dolabı ihtiyaçlarında ÇNR Mobilya, Dudullu'daki merkez üretim tesisimizin hemen yanı başında yer alan Sultanbeyli sakinlerine doğrudan fabrikadan toptan fiyatına perakende mutfak montajı sağlamaktadır. Battalgazi, Hasanpaşa, Mehmet Akif ve Ahmet Yesevi mahallelerinde aracı komisyonu olmadan 1. sınıf 18 mm MDF gövdeli sağlam mutfaklar kuruyoruz.",
    section1Title: "Sultanbeyli Konutlarında Sağlamlık ve Kombi Gizleme Çözümleri",
    section1Text: "Kalabalık aile sofralarının kurulduğu Sultanbeyli evlerinde yoğun yemek pişirme alışkanlıklarını taşıyabilecek ekstra güçlendirilmiş çekmece tabanları monte ediyoruz. Kombi, doğalgaz saati ve borularını birebir dolap rengiyle kamufle eden özel paneller üretiyoruz. Dar alanlarda köşe ölü alanları değerlendiren 360 derece döner sepetler ve kiler boy dolapları ile mutfağın depolama kapasitesini iki katına çıkarıyoruz.",
    section2Title: "Çizilmez Membran ve Bütçe Dostu High Gloss Kapaklar",
    section2Text: "Sultanbeyli aileleri için bütçeyi korurken şıklığı sağlayan çizilmez membran ve parlak high gloss kapaklarımız ön plandadır. Neme dayanıklı MDF gövde üzerine uygulanan vakum pres PVC kaplama, su sıçramalarına karşı tam koruma sağlar. Beyaz, kaşmir, krem ve antrasit renk seçenekleriyle mutfaklar ferah ve aydınlık bir görünüme kavuşur. 5 yıl garantili frenli menteşe ve ray sistemleri kullanılır.",
    section3Title: "Sultanbeyli'ye Aynı Gün Keşif ve 1 Günde Temiz Montaj",
    section3Text: "Dudullu fabrikamızın Sultanbeyli'ye komşu olması sayesinde aynı gün ücretsiz lazer keşif ve numune sunumu yapabiliyoruz. 3D çizim onayının ardından 10 iş gününde hazırlanan mutfağınız kendi ustalarımızca 1 günde monte edilir."
  },

  "sile-mutfak-dolabi.html": {
    heading: "Şile Mutfak Dolabı İmalatı, Yazlık & Villa Modelleri ve 2026 Fiyatları",
    intro: "Şile mutfak dolabı üretiminde ÇNR Mobilya; Kumbaba, Ağva, Sahilköy, Çavuş ve köylerindeki yazlık villalar, taş evler ve bungalov projeleri için özel neme dayanıklı marangozluk çözümleri sunmaktadır. Kışın ısıtmasız kalan yazlık evlerde küf ve rutubeti önlemek amacıyla marin yeşil MDF gövdeler ve özel koruyucu cilalı ahşap kapaklar kullanıyoruz.",
    section1Title: "Kış Rutubetine Karşı Marin Gövdeler ve Sayfiye Konsepti",
    section1Text: "Kış aylarında uzun süre kapalı ve ısıtmasız kalan Şile yazlıklarında sıradan mobilyalar nemden şişme ve küflenme yapabilir. Bu riski önlemek için neme dirençli yeşil marin MDF gövdeler ve suya dayanıklı poliüretan kenar bantlama uyguluyoruz. Veranda ve bahçeye açılan pencerelerle birleşen barbekü servis tezgahları ve açık raf sistemleriyle yaz aylarının sayfiye keyfini mutfağa taşıyoruz.",
    section2Title: "Bohem Country ve Masif Ahşap Mutfak Trendleri",
    section2Text: "Şile'nin taş ve ahşap mimarisine en çok yakışan modeller, bohem country detaylara sahip masif meşe ve fırın boyalı lake kapaklardır. Adaçayı yeşili, taş grisi ve kırık beyaz tonları, seramik kulp süslemeleri ve geniş tencere hazneleri ile tamamlanır. Porselen ve masif ahşap tezgah kombinasyonları sayfiye şıklığını pekiştirir.",
    section3Title: "Şile Genelinde Ücretsiz Keşif ve Güvenilir Teslimat",
    section3Text: "Şile'nin tüm yazlık bölgelerine randevulu ücretsiz lazer keşif sağlıyoruz. 3D mimari plan onayınızla üretilen dolaplar uzman marangoz ekibimizce 1 günde monte edilerek 5 yıl garantiyle teslim edilir."
  },

  "besiktas-mutfak-dolabi.html": {
    heading: "Beşiktaş Mutfak Dolabı İmalatı, Etiler & Levent Modelleri ve 2026 Fiyatları",
    intro: "Beşiktaş mutfak dolabı projelerinde ÇNR Mobilya; Etiler, Levent, Bebek, Ulus, Akaretler ve Abbasağa semtlerindeki hem tarihi binaların yüksek tavanlı nostaljik dokusuna hem de modern villaların çağdaş çizgilerine yakışır lüks marangozluk hizmeti sunmaktadır. Raylı merdivenli monolitik dolaplar, porselen tezgahlar ve kulpsuz modern çizgiler uyguluyoruz.",
    section1Title: "Etiler ve Levent'te Çağdaş Lüks, Akaretler'de Tarihi Zarafet",
    section1Text: "Beşiktaş'ın eski binalarında 3 metreyi aşan tavan yüksekliklerini çift sıra dolaplar ve özel raylı kütüphane merdivenleriyle fonksiyonel depolama kulelerine dönüştürüyoruz. Etiler ve Levent'teki bağımsız villa projelerinde ise bahçeyle bütünleşen geniş ada mutfaklar, temperli füme cam vitrinler ve antrasit lake yüzeyler inşa ediyoruz. Baca ve kolon girintilerini özel marangozluk dolaplarıyla estetik nişlere çeviriyoruz.",
    section2Title: "İtalyan Porselen Tezgah ve Minimalist J-Profil Kulpsuz Kapaklar",
    section2Text: "Beşiktaş projelerimizde en çok tercih edilen kapak modeli, parmak izi tutmayan ipeksi mat lake ve kulpsuz J-profil gizli alüminyum kulp tasarımlarıdır. Çizilmez ve ısıya dayanıklı porselen tezgahlarla yekpare devam eden bu tasarımlar, mutfağa çağdaş bir İtalyan estetiği kazandırır. Blum elektrikli bas-aç sistemleri konforu artırır.",
    section3Title: "Beşiktaş Adresinize Özel Keşif ve Kusursuz Montaj",
    section3Text: "Beşiktaş'ın tüm semtlerine iç mimarımız bizzat gelerek lazerli keşif yapar. 3D fotogerçekçi proje onayının ardından Dudullu atölyemizde üretilen dolaplar 1 günde titizlikle monte edilir."
  },

  "sariyer-mutfak-dolabi.html": {
    heading: "Sarıyer Mutfak Dolabı İmalatı, Zekeriyaköy Villa Modelleri ve 2026 Fiyatları",
    intro: "Sarıyer mutfak dolabı projelerinde ÇNR Mobilya; Zekeriyaköy, Maslak, Tarabya, Yeniköy, İstinye ve Emirgan lüks villa ve rezidans merkezlerinde en son teknolojiyle donatılmış mimari mutfaklar kurmaktadır. Akıllı ev sistemlerine entegre elektrikli bas-aç kapaklar (Servo-Drive), monolitik tavana sıfır lake cepheler ve İtalyan porselen ada mutfak sistemleri üretiyoruz.",
    section1Title: "Zekeriyaköy Villaları İçin Çift Eviyeli Gurme Hazırlık Adaları",
    section1Text: "Geniş salonlarla iç içe geçen Zekeriyaköy villalarında bulaşık makinesi, buzdolabı ve kiler dolaplarını tamamen gizleyen entegre kapak tasarımları yapıyoruz. İtalyan porselen tezgahların dolap kapaklarıyla aynı yüzeyde yekpare devam ettiği avangart modeller üretiyoruz. Mutfak adasında çift eviye ve şarap kavı entegrasyonuyla gurme şef standartları oluşturuyoruz.",
    section2Title: "Elektrikli Bas-Aç Servo-Drive ve Monolitik Lake Cepheler",
    section2Text: "Kulpsuz tasarımın zirvesi olan Blum Servo-Drive elektrikli motorlu çekmece ve kalkar kapak sistemleri, dokunmatik kullanım konforu sunar. Sınırsız RAL ve NCS renk tonunda fırın boyalı lake kapaklar, mekanın aydınlatma mimarisine göre parlak veya mat olarak hazırlanır. Dolap içi sensörlü LED aydınlatmalar lüks dokuyu tamamlar.",
    section3Title: "Sarıyer Adresinize Özel Lazer Keşif ve 3D Mimari Simülasyon",
    section3Text: "Sarıyer genelindeki tüm villa ve rezidanslara ücretsiz lazerli keşif hizmeti veriyoruz. 3D simülasyon onayından sonra Dudullu tesisimizde üretilen dolaplar uzman marangozlarımızca 1 günde monte edilir."
  },

  "sisli-mutfak-dolabi.html": {
    heading: "Şişli Mutfak Dolabı İmalatı, Nişantaşı & Bomonti Modelleri ve 2026 Fiyatları",
    intro: "Şişli mutfak dolabı üretiminde ÇNR Mobilya; Nişantaşı, Teşvikiye, Bomonti, Harbiye ve Kurtuluş semtlerindeki tarihi yüksek tavanlı apartmanlar ve modern kule rezidanslar için özel konsept tasarımlar yapmaktadır. Art-deco çıtalı lake kapaklar, pirinç gömme kulplar ve Bomonti loftlarına uygun endüstriyel ceviz-antrasit mutfaklar imal ediyoruz.",
    section1Title: "Nişantaşı'nda Art-Deco Zarafet, Bomonti'de Loft Endüstriyel Şıklık",
    section1Text: "Nişantaşı'nın klasik art-deco ruhuna uygun özel freze desenli çıtalı lake kapaklar, pirinç fırçalanmış gömme profil kulplar ve mermer damarlı tezgahlar üretiyoruz. Bomonti'deki modern loft dairelerde ise antrasit metal detaylar, masif ceviz kaplamalar ve endüstriyel çizgileri harmanlayan cesur mutfaklar kuruyoruz. Şişli'nin kentsel yenileme binalarında dairelerin salonla birleşen mutfaklarında şık şaraplık modülleri ve tezgah üstü sürgülü panjur üniteleri uyguluyoruz.",
    section2Title: "Özel Freze Desenli Lake Kapaklar ve Mermer Damarlı Tezgahlar",
    section2Text: "Fırın boya tesisimizde çok katmanlı poliüretan boyayla hazırlanan lake kapaklarımız, çizilmeye ve sararmaya karşı tam dayanıklıdır. Çimstone, Belenco ve porselen tezgah seçenekleri ile Nişantaşı zarafeti tamamlanır. Blum frenli mekanizmalar kullanım konforunu artırır.",
    section3Title: "Şişli İçin Ücretsiz Keşif, 3D Proje ve Doğrudan Fabrika Fiyatı",
    section3Text: "Şişli genelinde ücretsiz lazer keşif yapıyoruz. 3D çizimle onaylanan mutfağınız Dudullu atölyemizde hazırlanarak 1 günde tertemiz monte edilir ve 5 yıl garanti altına alınır."
  },

  "bakirkoy-mutfak-dolabi.html": {
    heading: "Bakırköy Mutfak Dolabı İmalatı, Yeşilköy & Florya Modelleri ve 2026 Fiyatları",
    intro: "Bakırköy mutfak dolabı üretiminde ÇNR Mobilya; Yeşilköy, Yeşilyurt, Ataköy Konakları ve Florya sahilindeki geniş metrekareli köklü aile konutlarında geleneksel konfor ile modern lüksü harmanlamaktadır. Deniz havasına dayanıklı çift laminasyonlu MDF gövdeler, yüksek debili davlumbaz bacalı dolaplar ve çizilmez porselen tezgahlar üretiyoruz.",
    section1Title: "Yeşilköy ve Florya'da Zengin Pişirme Kültürüne Uygun Mutfaklar",
    section1Text: "Bakırköy'ün geniş aile konutlarında zengin yemek pişirme alışkanlıklarına uygun güçlü emiş kanallı davlumbaz dolapları, ekstra geniş baharat çekmeceleri ve çift gözlü granit eviyeler monte ediyoruz. Salondan bağımsız geniş mutfaklarda ailenin bir arada yemek yiyebileceği ada masaları ve konforlu köşe oturma bankları tasarlıyoruz. Çekmece içlerindeki masif ahşap kaşıklık ve bölücü sistemlerle her mutfak gerecine özel bir yer açıyoruz.",
    section2Title: "Deniz Nemine Karşı Fırın Lake ve Çizilmez Porselen Tezgahlar",
    section2Text: "Deniz kenarındaki Bakırköy havasına karşı dolap gövdelerinde şişme yapmayan çift taraflı laminasyonlu MDF ve sararma yapmayan fırın lake boya uyguluyoruz. Çizilmeyen ve leke tutmayan porselen tezgahlarla mutfağın hijyeni ve dayanıklılığı garanti edilir.",
    section3Title: "Bakırköy Genelinde Ücretsiz Keşif ve Profesyonel Montaj",
    section3Text: "Bakırköy'ün tüm semtlerine lazerli ölçü cihazlarımızla gelerek ücretsiz keşif yapıyoruz. 3D mimari onay sonrasında atölyemizde üretilen dolaplar 1 günde monte edilir."
  },

  "basaksehir-mutfak-dolabi.html": {
    heading: "Başakşehir Mutfak Dolabı İmalatı, Bahçeşehir Modelleri ve 2026 Fiyatları",
    intro: "Başakşehir mutfak dolabı projelerinde ÇNR Mobilya; Başakşehir Merkez, Kayaşehir ve Bahçeşehir 1-2. Kısım villa sitelerinde geniş ailelerin yaşam alışkanlıklarına odaklanmaktadır. Çok çocuklu ailelerin ihtiyaç duyduğu çok katmanlı erzak kiler kuleleri, köşe tambur mekanizmaları ve kolay silinen kaşmir membran kapaklar üretiyoruz.",
    section1Title: "Bahçeşehir Villaları ve Geniş Dairelerde Erzak Kileri Düzeni",
    section1Text: "Geniş metrekareli Başakşehir dairelerinde kuru gıda ve erzak stoğu için tavana kadar uzanan çok katmanlı kiler kuleleri, köşe dolap tamburları ve geniş hacimli derin çekmeceler kuruyoruz. Bahçeşehir villalarında ise bahçe manzaralı geniş pencerelerin altına yerleştirilen alçak boy oturma tezgahları ve kahvaltı adaları inşa ediyoruz. Çocuklu ailelerin hijyen ve temizlik ihtiyaçlarını karşılamak adına leke tutmayan, kolay silinen ve çizilmelere dirençli kaşmir ve beyaz tonlarında mat membran yüzeyler öneriyoruz.",
    section2Title: "Leke Tutmayan Kaşmir Membran ve Matplus Kapak Seçenekleri",
    section2Text: "Yoğun mutfak trafiğine sahip aileler için parmak izi tutmayan Matplus ve çizilmez membran kapaklar idealdir. 18 mm neme dayanıklı E1 MDF gövde, Blum frenli tandembox çekmece rayları ve 10 yıl renk garantisiyle teslim edilir.",
    section3Title: "Başakşehir İçin Ücretsiz Lazer Keşif ve Hızlı Teslimat",
    section3Text: "Başakşehir genelindeki tüm etaplara ve Bahçeşehir'e ücretsiz keşif sağlıyoruz. 3D çizimle onaylanan mutfağınız 1 günde monte edilerek 5 yıl garantiyle teslim edilir."
  },

  "beylikduzu-mutfak-dolabi.html": {
    heading: "Beylikdüzü Mutfak Dolabı İmalatı, Yakuplu Marina Modelleri ve 2026 Fiyatları",
    intro: "Beylikdüzü mutfak dolabı projelerinde ÇNR Mobilya; Barış Mahallesi, Beykent, Adnan Kahveci ve Yakuplu Marina bölgesindeki geniş site projelerine özel rasyonel mutfak çözümleri sunmaktadır. Marmara rüzgarına ve mevsimsel nem farklarına karşı poliüretan kenar bant korumalı, 10 yıl sararma yapmayan parlak akrilik ve matplus dolaplar üretiyoruz.",
    section1Title: "Yakuplu Marina ve Beykent Dairelerinde Ada ve L Tezgah Planı",
    section1Text: "Yeni inşa edilen geniş Beylikdüzü dairelerinde ada mutfak ve L tezgah düzenlerini modern ankastre yerleşimleriyle tamamlıyoruz. Bütçeyi korurken şıklıktan ödün vermek istemeyen müşterilerimize 10 yıl renk solmama garantili ultra parlak akrilik ve çizilmez matplus kapak alternatifleri sunuyoruz. Çekmece içlerinde tam açılır çift cidarlı raylar ve yumuşak kapanan frenli menteşeler kullanarak uzun ömürlü ve ferah alanlar oluşturuyoruz.",
    section2Title: "Marmara Kıyı İklimine Karşı Poliüretan Kenar Bantlama Güvencesi",
    section2Text: "Kıyı rüzgarları ve nem farklarına karşı kenar bantlarında suya karşı tam koruma sağlayan poliüretan (PUR) tutkal uyguluyoruz. 18 mm E1 MDF gövde garantisiyle kapaklarda sarkma ve kabarma riski ortadan kaldırılır.",
    section3Title: "Beylikdüzü Adresinize Ücretsiz Keşif ve Fabrika Fiyatı",
    section3Text: "Beylikdüzü'nün tüm mahallelerine randevulu ücretsiz lazer keşif sağlıyoruz. 3D mimari plan onayınızla 10-14 iş gününde hazırlanan mutfağınız 1 günde monte edilir."
  },

  "eyupsultan-mutfak-dolabi.html": {
    heading: "Eyüpsultan Mutfak Dolabı İmalatı, Göktürk Modelleri ve 2026 Fiyatları",
    intro: "Eyüpsultan mutfak dolabı imalatında ÇNR Mobilya; Göktürk ve Kemerburgaz'ın doğayla çevrili lüks orman projelerinden tarihi Haliç kıyısındaki geleneksel aile apartmanlarına kadar iki zengin mimari kültürü barındırmaktadır. Göktürk villalarında rustik meşe ada mutfaklar, tarihi Eyüp merkezinde ise dar kolon-kiriş nişlerini değerlendiren pratik membran dolaplar üretiyoruz.",
    section1Title: "Göktürk Orman Villalarında Doğal Meşe ve Adaçayı Yeşili Lake",
    section1Text: "Göktürk ve Kemerburgaz villalarında doğal meşe kaplamalı rustik country dolaplar, antrasit lake pişirme adaları ve porselen tezgahlı elit tasarımlar gerçekleştiriyoruz. Tarihi Eyüp merkezindeki klasik dairelerde ise su buharına dayanıklı, kolay silinen ekonomik membran ve akrilik mutfak revizyonları yapıyoruz. Dar alanlarda kolon ve kiriş çıkıntılarını dolap içine entegre ederek sıfır boşluklu şık kiler alanlarına dönüştürüyoruz.",
    section2Title: "Nişleri Değerlendiren Özel Ölçü Marangozluk Çözümleri",
    section2Text: "Eski binalardaki eğri açılar ve kolon çıkıntıları lazerli ölçümle milimetrik olarak taranır ve dolap gövdesine entegre edilir. Bu sayede ölü alanlar şık baharatlık veya bardaklık nişlerine dönüştürülür.",
    section3Title: "Eyüpsultan ve Göktürk İçin Ücretsiz Keşif ve 3D Tasarım",
    section3Text: "Eyüpsultan genelinde ücretsiz lazer keşif ve numune sunumu yapıyoruz. 3D tasarım onayından sonra atölyemizde üretilen mutfak 1 günde monte edilir."
  },

  "kagithane-mutfak-dolabi.html": {
    heading: "Kağıthane Mutfak Dolabı İmalatı, Vadistanbul Modelleri ve 2026 Fiyatları",
    intro: "Kağıthane mutfak dolabı projelerinde ÇNR Mobilya; Cendere Vadisi, Seyrantepe, Vadistanbul çevresi ve Hamidiye bölgesinde hızla çoğalan yeni nesil rezidans ve ofis-konut projelerine yönelik pratik çözümler üretmektedir. Genç profesyonellerin yaşadığı kompakt rezidans dairelerinde gizlenebilir masa modülleri, dikey kiler kuleleri ve parmak izi tutmayan J-profil kulpsuz mutfaklar üretiyoruz.",
    section1Title: "Vadistanbul ve Cendere Rezidanslarında Akıllı Kompakt Mutfaklar",
    section1Text: "Kompakt rezidans dairelerinde her santimetrekareyi akıllıca değerlendiriyoruz. Tezgah altından dışarıya doğru çekilerek açılan gizli yemek masaları, dikey kayar kiler kuleleri ve mikrodalgayı dolap içine alan ankastre kuleler tasarlıyoruz. Şehir yaşamının yoğunluğunda parmak izi bırakmayan ve temizliği bir bezle saniyeler içinde tamamlanan mat nanoteknolojik kapaklar uyguluyoruz. Kulpsuz J-profil gizli kulp tasarımları ve füme ayna detaylarıyla kompakt mekanları ferah ve modern bir vizyona kavuşturuyoruz.",
    section2Title: "Parmak İzi Bırakmayan Matplus ve Kulpsuz J-Profil Tasarım",
    section2Text: "Şehir temposuna uygun nanoteknolojik mat kapaklar, temizlik kolaylığı ve modern görünüm sağlar. Blum frenli mekanizmalar gece kullanımında bile sessizlik sunar.",
    section3Title: "Kağıthane Genelinde Ücretsiz Keşif ve Hızlı Rezidans Montajı",
    section3Text: "Kağıthane ve Seyrantepe'deki tüm rezidanslara randevulu ücretsiz lazer keşif sağlıyoruz. 3D fotogerçekçi çizim onayından sonra 1 günde temiz montajla teslim edilir."
  }
};

let count = 0;

for (const [filename, guide] of Object.entries(districtGuides)) {
  if (!fs.existsSync(filename)) {
    console.error('File not found:', filename);
    continue;
  }

  let content = fs.readFileSync(filename, 'utf8');

  // Build the rich SEO guide section
  const richSectionHtml = `
  <!-- ${guide.heading} (Kapsamlı Bölgesel SEO Rehberi) -->
  <section class="section-padding" style="background-color: #ffffff; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="container" style="max-width: 1040px;">
      <div class="section-header" style="text-align: left; margin-bottom: 35px;">
        <span class="section-subtitle">Bölgesel Mimari & İmalat Rehberi</span>
        <h2 class="section-title" style="font-size: 2.1rem; margin-top: 8px;">
          ${guide.heading}
        </h2>
        <p style="font-size: 1.05rem; color: var(--color-text-muted); line-height: 1.8; margin-top: 14px;">
          ${guide.intro}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 30px;">
        
        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px 32px;">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>🏛️</span> ${guide.section1Title}
          </h3>
          <p style="font-size: 0.98rem; color: var(--color-text-main); line-height: 1.85;">
            ${guide.section1Text}
          </p>
        </div>

        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px 32px;">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>✨</span> ${guide.section2Title}
          </h3>
          <p style="font-size: 0.98rem; color: var(--color-text-main); line-height: 1.85;">
            ${guide.section2Text}
          </p>
        </div>

        <div style="background: var(--color-bg-light); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px 32px;">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
            <span>⚡</span> ${guide.section3Title}
          </h3>
          <p style="font-size: 0.98rem; color: var(--color-text-main); line-height: 1.85;">
            ${guide.section3Text}
          </p>
        </div>

      </div>
    </div>
  </section>
`;

  // Check if we already inserted it
  if (content.includes('Kapsamlı Bölgesel SEO Rehberi')) {
    // Replace existing
    content = content.replace(/<!--[\s\S]*?\(Kapsamlı Bölgesel SEO Rehberi\)[\s\S]*?<\/section>/i, richSectionHtml.trim());
  } else {
    // Insert right before the 4-step process section or before FAQ
    const target = '<!-- Ümraniye Mimari Yapısı & 4 Aşamalı Süreç -->' || '<!-- 4 Aşamalı Süreç';
    const faqTarget = '<!-- Ümraniye Sıkça Sorulan Sorular' || '<!-- Sıkça Sorulan Sorular';
    
    // Find where the FAQ or steps section starts
    const matchFaq = content.match(/<!--[^\n]*Sıkça Sorulan Sorular[^\n]*-->/i);
    if (matchFaq) {
      content = content.replace(matchFaq[0], richSectionHtml + '\n  ' + matchFaq[0]);
    } else {
      // Find before footer
      content = content.replace('<footer', richSectionHtml + '\n  <footer');
    }
  }

  fs.writeFileSync(filename, content, 'utf8');
  count++;
  console.log('Expanded deep SEO guide in:', filename);
}

console.log(`Successfully expanded content in ${count} district pages!`);
