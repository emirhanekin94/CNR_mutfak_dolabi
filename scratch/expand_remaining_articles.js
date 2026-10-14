const fs = require('fs');

const articles = {
  'blog-mutfak-dolabi-metretul-fiyati-nasil-hesaplanir.html': `
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Tezgah, Evye ve Aydınlatma Maliyete Dahil midir?</h3>
          <p>
            Mutfak dolabı metretül fiyatı araştırırken ev sahiplerinin en çok yanılgıya düştüğü konulardan biri tezgah ve montaj giderleridir. Sektör standardında metretül fiyatı yalnızca mutfak dolabının alt modüllerini, üst dolaplarını, standart bazasını, taç çıtasını, menteşe ve kulp aksesuarlarını kapsar. Çimstone, Belenco, Calacatta porselen tezgahlar veya granit yüzeyler ayrı bir metraj hesabı gerektirir; çünkü porselen ve kuvars tezgahların plaka maliyeti, gönye burun pah kırım işçiliği ve lavabo altı evye açım detayları mutfak mobilyasından bağımsız olarak metretül veya metrekare bazında hesaplanır.
          </p>
          <p>
            Ayrıca tezgah arası seramik döşeme, LED profil kanalları, gizli trafo tesisatı, çöp kutusu ray sistemleri ve bulaşık makinesi kapak giydirme gibi ince işçilikler projeye özel netleştirilmelidir. İstanbul Anadolu ve Avrupa yakasındaki tüm keşiflerimizde Mutfak Dolabınız ekibi; dolap imalatı, montaj, tezgah uygulaması ve kulp seçeneklerini kalem kalem şeffaf bir sözleşmeye döker. Böylece işin başında anlaştığınız fiyat ne ise, teslimat günü ödenecek rakam kuruşu kuruşuna aynı kalır; hiçbir sürpriz ek masrafla karşılaşmazsınız.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Ümraniye Atölyesinden Doğrudan İmalatçı Fiyat Avantajı</h3>
          <p>
            Mağazalar ve aracı dekorasyon şirketleri, üretimi atölyelere fason yaptırdıkları için üzerine %40 ila %60 arasında bayi kar marjı eklerler. Doğrudan Ümraniye Modoko sanayi bölgesindeki kendi imalat atölyemizden sipariş verdiğinizde aracı komisyonu ortadan kalkar. CNC kesim, ebatlama, PVC kenar bantlama ve fırın lake boyama işlemlerinin tamamı kendi bünyemizde yapıldığı için birinci sınıf malzeme kalitesini fabrika satış fiyatlarıyla evinize taşıyabilirsiniz.
          </p>
  `,

  'blog-matplus-leke-tutmaz-kapak-nedir.html': `
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Matplus Kapakların Mutfak Yağlarına ve Sıcak Buhara Karşı Davranışı</h3>
          <p>
            Geleneksel mat kapaklarda yaşanan en büyük şikayet, yemek pişirirken tavadan sıçrayan zeytinyağı veya ocak buharının yüzeyde kalıcı parlamalar ve gölgeler oluşturmasıdır. Standart mat kapak yüzeyleri süngerle sert ovulduğunda dokusunu kaybeder ve lokal parlamalar meydana gelir. Matplus nano-teknolojik yüzey ise mikro-gözeneksiz moleküler mimarisi sayesinde yağ moleküllerinin alt katmanlara nüfuz etmesini engeller. Yüzeye sıçrayan salça, nar ekşisi, kahve veya kızartma yağı lekesi sadece nemli bir mikrofiber bezle bastırmadan silindiğinde iz bırakmadan temizlenir.
          </p>
          <p>
            İstanbul'daki modern konut projelerinde açık konsept ada mutfakların yaygınlaşmasıyla birlikte, mutfak salonla iç içe geçmiş durumdadır. Salon ışıklarının ve spot aydınlatmaların mutfak kapaklarına vurması durumunda Matplus panellerin anti-reflekte özelliği devreye girer. Sıfır ışık yansıması sayesinde günün her saatinde derin, dingin ve sofistike bir matlık sunar. Kaşmir gri, antrasit, mat siyah, vizon ve ada yeşili gibi mimari trend renklerle mekanlara çağdaş bir kimlik kazandırır.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Çocuklu Aileler ve Yoğun Mutfaklar İçin Neden İdealdir?</h3>
          <p>
            Küçük çocuklu evlerde mutfak kapaklarının alt kısımları sürekli minik el izleriyle kaplanır. Akrilik veya klasik parlak kapaklarda her dokunuşta parmak izi görünürken, Matplus yüzey anti-fingerprint kaplaması sayesinde gün boyu el izi tutmaz. Böylece her yemek sonrasında dolap silme zorunluluğu ortadan kalkar. Yüksek çizilme direnci sayesinde tencere ve tavaların çarpmasına karşı da dayanıklı olan bu yeni nesil kapaklar, modern ve pratik bir yaşam tarzını benimseyen ev sahipleri için 2026 yılının en akılcı mutfak yatırımıdır.
          </p>
  `,

  'blog-kucuk-mutfaklar-icin-10-akilli-depolama-fikri.html': `
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Küçük Mutfaklarda Renk ve Işık İllüzyonu ile Mekanı Genişletme</h3>
          <p>
            Dar mutfaklarda yalnızca akıllı iç donanımlar değil, doğru renk ve aydınlatma stratejileri de hayati rol oynar. Koyu ve mat renkler dar alanlarda ışığı emerek basık bir his yaratabilirken; kırık beyaz, açık vizon, bej ve krem tonlarındaki parlak akrilik kapaklar pencereden gelen doğal gün ışığını mekanın her köşesine yansıtır. Üst dolapların altında kesintisiz çekilen 4000K doğal gün ışığı LED profil aydınlatmaları tezgah üzerindeki kör noktaları aydınlatarak mutfağınızın olduğundan en az iki kat daha derin ve ferah algılanmasını sağlar.
          </p>
          <p>
            Ayrıca dar mutfaklarda kulpsuz tasarım felsefesi benimsenmelidir. Dışarıya doğru taşan metal kulplar dar koridorda yürürken kıyafetlerinize takılabilir veya hareket alanını kısıtlayabilir. Bunun yerine Gola profil gizli kulp sistemleri veya dokun-aç (push-to-open) mekanizmalı monoblok kapaklar tercih edilmelidir. Düz ve kesintisiz yüzeyler gözü yormaz, mutfakta minimalist ve akıcı bir ferahlık meydana getirir.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Tavandan Tabana Kesintisiz Boy Dolabı Uygulaması</h3>
          <p>
            Standart hazır mutfaklarda dolap ile tavan arasında 30-40 cm boşluk kalır ve bu alan zamanla yağ ve toz toplayan atıl bir yere dönüşür. Özel ölçü imalat mutfakta ise tavan yüksekliği lazerle milimetrik ölçülür ve dolaplar tavana kadar sıfıra sıfır yükseltilir. En üst modüllere yılda birkaç kez kullanılan düdüklü tencere, mikser kutuları veya misafir takımları yerleştirilerek tezgah üzeri dağınıklığı tamamen ortadan kaldırılır.
          </p>
  `,

  'blog-banyo-tadilati-kac-gun-surer.html': `
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Banyo Tadilatında En Sık Yapılan Hatalar ve Alt Kata Su Sızması Riski</h3>
          <p>
            Banyo tadilatlarında yaşanan en büyük felaket, seramikler döşendikten birkaç hafta sonra alt kat komşunun tavanından su damlamaya başlamasıdır. Bu sorunun ana sebebi, kırım sonrasında su izolasyonu yapılmadan doğrudan seramik yapıştırıcısı sürülmesidir. Seramik derz dolguları zamanla mikro çatlaklar oluşturabilir ve su altına geçer. Eğer şap altında ve seramik altında çift kat elastik sürme yalıtım ile köşe pah bantları uygulanmamışsa sızıntı kaçınılmazdır. Mutfak Dolabınız ekipleri su yalıtımını tamamladıktan sonra 24 saat su testi yapar ve sızdırmazlığı garanti altına aldıktan sonra seramik döşeme aşamasına geçer.
          </p>
          <p>
            Bir diğer kritik hata ise banyo mobilyalarında suya dayanıksız standart sunta malzeme kullanılmasıdır. Sürekli duş alınan ve buhar oluşan banyolarda standart dolaplar 6 ay içinde şişer, menteşeleri gevşer ve kapakları kapanmaz hale gelir. Biz banyo dolabı gövdelerimizde yalnızca neme dirençli MDF-Lam ve çok katmanlı poliüretan fırın lake boya kullanıyoruz.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Tek Elden Anahtar Teslim Banyo Yenileme Rahatlığı</h3>
          <p>
            Fayansçıyı ayrı, su tesisatçısını ayrı, elektrikçiyi ayrı ve marangozu ayrı aramak yerine süreci tek bir profesyonel firmaya teslim etmek hem zaman hem bütçe tasarrufu sağlar. Ustaların birbirini beklemesi veya hataları birbirinin üzerine atması gibi sorunlar yaşanmaz. Yazılı sözleşmemizde belirtilen teslim gününde detaylı inşaat temizliği yapılmış, duşakabini, asma klozeti, armatürleri ve LED aynalı dolabı monte edilmiş şekilde banyonuzu anahtar teslim kullanımınıza sunuyoruz.
          </p>
  `,

  'blog-ozel-olcu-gardirop-rehberi.html': `
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Füme Camlı ve Alüminyum Çerçeveli Gardıropların Zarafeti</h3>
          <p>
            Son yıllarda yatak odası dekorasyonunda ve giyinme odası projelerinde en çok talep gören mimari trend füme veya bronz temperli cam kapaklı gardırop sistemleridir. Elektrostatik fırın boyalı ince alüminyum profil çerçeveler içerisine yerleştirilen 4 mm temperli emniyet camları, darbelere karşı son derece dayanıklıdır. Dolap kapakları kapalıyken füme camın loş ve asil yansıması odaya derinlik katar; kapak açıldığında veya sensörlü dikey LED profilleri yandığında ise içerisindeki kıyafetler, saatler ve çantalar lüks bir butik mağaza vitrini gibi sergilenir.
          </p>
          <p>
            Cam kapaklı gardıroplarda kıyafetlerin tozlanmaması için alüminyum profillerin iç kanalına özel toz önleyici silikon fitiller entegre edilir. Böylece hem modern ve havadar bir estetik elde edilir hem de kıyafetleriniz kapalı bir dolap gibi temiz ve hijyenik kalır.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Ergonomik Gardırop İçi Planlama: Hangi Ölçü Nerede Olmalı?</h3>
          <p>
            Özel ölçü gardırop yaptırırken raf ve askılık yükseklikleri kullanıcının giyim alışkanlıklarına göre milimetrik planlanmalıdır. Uzun abiye elbiseler ve kabanlar için askılık yüksekliği tabandan en az 140-160 cm bırakılmalıdır. Gömlek, ceket ve pantolon asımı için ise 90-105 cm askı payı idealdir. Katlanmış kazak ve tişörtler için raf aralıklarının 30-35 cm olması, üst üste yığılan kıyafetlerin devrilmesini önler. Ayrıca alt kısımlara konumlandırılan frenli çekmeceler, çorap, iç giyim ve aksesuarların her zaman el altında ve düzenli kalmasını sağlar.
          </p>
  `
};

Object.entries(articles).forEach(([file, extraHtml]) => {
  let content = fs.readFileSync(file, 'utf8');
  // Match the closing </div> of article-body before the call to action box
  const ctaMarker = '<div style="margin-top: 40px; padding: 28px; background: #faf8f5;';
  const ctaIdx = content.indexOf(ctaMarker);
  if (ctaIdx !== -1) {
    // find the </div> before ctaMarker
    const beforeCta = content.substring(0, ctaIdx);
    const lastDivIdx = beforeCta.lastIndexOf('</div>');
    if (lastDivIdx !== -1) {
      const updated = content.substring(0, lastDivIdx) + extraHtml + '\n        </div>' + content.substring(lastDivIdx + 6);
      fs.writeFileSync(file, updated, 'utf8');
      console.log('Successfully expanded: ' + file);
    }
  } else {
    console.error('CTA marker not found in ' + file);
  }
});
