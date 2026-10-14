const fs = require('fs');

const blogContent = `
  <!-- Hızlı Blog Gezinme Çubuğu (TOC) -->
  <section style="background: #ffffff; border-bottom: 1px solid var(--color-border); padding: 18px 0; position: sticky; top: 79px; z-index: 99; box-shadow: 0 4px 15px rgba(0,0,0,0.04);">
    <div class="container" style="display: flex; gap: 10px; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; padding-bottom: 4px;">
      <a href="#makale-1" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">1. Kapak Karşılaştırması</a>
      <a href="#makale-2" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">2. Metretül Fiyat Hesabı</a>
      <a href="#makale-3" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">3. Matplus Nano Kapak</a>
      <a href="#makale-4" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">4. Küçük Mutfak Tüyoları</a>
      <a href="#makale-5" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">5. Banyo Tadilat Süreci</a>
      <a href="#makale-6" class="btn btn-outline btn-sm" style="font-size: 0.82rem;">6. Özel Gardırop Rehberi</a>
    </div>
  </section>

  <!-- Kapsamlı Blog Makaleleri Bölümü (Her Biri Min 2000 Karakter) -->
  <section class="section-padding" style="background-color: var(--color-bg-light);">
    <div class="container" style="max-width: 920px;">

      <!-- MAKALE 1 -->
      <article id="makale-1" class="full-blog-post" style="background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: clamp(24px, 5vw, 44px); margin-bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="background: #fdf5ea; color: #a47128; font-weight: 700; font-size: 0.78rem; padding: 4px 12px; border-radius: 99px;">Kapak Karşılaştırma Rehberi</span>
          <span style="color: #718096; font-size: 0.82rem;">📅 Ekim 2026 &middot; ⏱️ 7 dk detaylı okuma &middot; ✍️ Mutfak Dolabınız Mimari Ekibi</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(1.6rem, 3.5vw, 2.3rem); color: var(--color-primary); line-height: 1.3; margin-bottom: 20px;">
          2026 Mutfak Dolabı Kapak Karşılaştırması: Membran mı, Lake mi, Akrilik mi?
        </h2>
        <img src="assets/images/mutfak/lake-kapak.webp" alt="Membran vs Lake Mutfak Dolabı Karşılaştırması" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 24px;" loading="lazy" decoding="async">
        
        <div class="article-body" style="font-size: 1.02rem; line-height: 1.85; color: #2d3748;">
          <p>
            Yeni bir mutfak yaptırırken veya eski mutfağınızı komple yenilerken verilen en kritik karar kapak modeli seçimidir. Mutfak dolabının gövdesi çoğunlukla 18 mm dayanıklı MDF-Lam levhalardan üretilirken, mekanın tüm estetiğini, dokusunu, temizlik kolaylığını ve bütçesini belirleyen unsur kapak malzemesidir. İstanbul Ümraniye atölyemizde müşterilerimizden en çok aldığımız soru şudur: <strong>"Hangi kapak modeli daha uzun ömürlüdür; membran mı, lake mi yoksa akrilik mi tercih etmeliyim?"</strong> Bu kapsamlı uzmanlık rehberinde her üç kapak teknolojisini üretim süreçleri, suya dayanıklılıkları, çizilme dirençleri ve 2026 bütçe dinamikleri açısından mercek altına alıyoruz.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">1. Membran (Vakum Pres PVC) Kapakların Avantajları ve Dezavantajları</h3>
          <p>
            Membran kapaklar, 18 mm kalınlığındaki ham MDF panellerin yüksek hassasiyetli CNC tezgahlarda istenilen oymalı, çıtalı, country veya modern hatlarda işlenmesiyle başlar. İşlenen ham MDF panellerin yüzeyine özel poliüretan yapıştırıcı sürüldükten sonra, yüksek ısı ve vakum pres altında PVC membran folyo uygulanır. Bu teknolojinin en büyük avantajı, folyonun kapağın ön yüzeyini ve dört kenarını yekpare olarak sarmasıdır. Dolayısıyla kapağın kenarlarında ek yeri (PVC kenar bandı) bulunmaz. Ek yeri olmaması, buhar ve su sızıntılarına karşı mükemmel bir bariyer oluşturur.
          </p>
          <p>
            Country tarzı oymalı kollar, çıtalı nostaljik modeller veya ahşap damar dokulu tasarımlar hedefliyorsanız membran kapak en bütçe dostu ve mantıklı çözümdür. Ancak membran kapak yaptırırken kullanılan tutkalın ve folyonun kalitesi hayati önem taşır. Kalitesiz üretimlerde fırın yanı veya ocak üstü gibi aşırı ısıya maruz kalan noktalarda folyo atması yaşanabilir. Mutfak Dolabınız olarak kullandığımız Alman menşeili ısıya dayanıklı PUR tutkallar sayesinde 15 yılı aşkın süre formunu ilk günkü gibi koruyan membran dolaplar teslim ediyoruz.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">2. Lake (Çok Katmanlı Poliüretan Fırın Boya) Kapakların Lüksü</h3>
          <p>
            Lake kapaklar, mobilya sanatının ve lüks iç mekan mimarisinin zirve noktasıdır. Ham MDF yüzeyine sırasıyla dolgu astarı, ara kat zımparası, renk astarı ve en son özel fırın kurutmalı poliüretan lake boya tatbik edilir. Lake kapağın en ayırt edici özelliği, kapağın 6 yüzeyinin de tamamen boya zırhıyla kaplanmasıdır. Kenar bandı, folyo veya yapıştırma gibi hiçbir harici katman bulunmaz; kapak monoblok bir taş gibi pürüzsüzdür.
          </p>
          <p>
            Lake kapakların sağladığı en büyük üstünlük sınırsız renk özgürlüğüdür. İster vizon, antrasit, ada yeşili, ister kaşmir veya dilediğiniz bir RAL kodunu birebir uygulayabiliyoruz. Dokunulduğunda ipeksi, sıcak ve kusursuz bir lake hissi verir. Çizilmelere karşı özenli kullanım gerektirse de, lake kapakların muazzam bir avantajı vardır: 10 yıl sonra bile mutfağınızın renginden sıkıldığınızda kapaklar sökülüp atölyemizde yeniden zımparalanarak bambaşka bir renge boyanabilir. Bu durum lakeyi nesilden nesile aktarılabilen kalıcı bir yatırım haline getirir.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">3. Akrilik (Senosan Çizilmez Ayna Parlaklığı) Kapaklar</h3>
          <p>
            Modern, ferah ve aydınlık mutfaklar isteyenlerin bir numaralı tercihi akrilik kapaklardır. 18 mm MDF levha üzerine 1.4 mm kalınlığında Avusturya Senosan çizilmez akrilik tabakanın sıcak presle yapıştırılmasıyla üretilir. Sıradan parlak folyolu veya vernikli kapaklar güneş ışığında zamanla sararırken, akrilik kapaklar UV ışınlarına karşı %100 dirençlidir; 20 yıl geçse bile kristal ayna parlaklığını ve beyazlığını korur. Lazer kenar bantlama teknolojimiz sayesinde ek yeri neredeyse görünmezdir. Özellikle dar ve ışık almayan küçük mutfakları cam ayna gibi yansıtarak mekan hissini iki katına çıkarır.
          </p>

          <div style="background: #faf8f5; border-left: 4px solid var(--color-accent); padding: 18px 22px; margin: 25px 0; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <h4 style="font-size: 1.05rem; color: #835b1c; margin-bottom: 6px;">💡 Usta Mimar Tavsiyesi: Hangi Modeli Seçmelisiniz?</h4>
            <p style="margin: 0; font-size: 0.94rem; color: #4a5568;">
              Bütçenizi zorlamadan modern ve dayanıklı bir mutfak istiyorsanız <strong>Membran</strong>; lüks bir rezidans dokusu, çıtalı Shaker tasarımı ve özel renk tonları arıyorsanız <strong>İpek Mat Lake</strong>; yoğun kullanılan, temizliği pratik ve ayna gibi parlayan bir atmosfer istiyorsanız kesinlikle <strong>Akrilik</strong> tercih etmelisiniz.
            </p>
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <span style="font-weight: 700; color: var(--color-primary);">Bu model için atölye fiyatı almak ister misiniz?</span>
          <a href="https://wa.me/905544596979?text=Merhaba,%20kapak%20karsilastirma%20blogunuzu%20okudum,%20mutfagim%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm">💬 WhatsApp ile Mimarımıza Sor</a>
        </div>
      </article>


      <!-- MAKALE 2 -->
      <article id="makale-2" class="full-blog-post" style="background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: clamp(24px, 5vw, 44px); margin-bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="background: #eef2ff; color: #4338ca; font-weight: 700; font-size: 0.78rem; padding: 4px 12px; border-radius: 99px;">Maliyet & Hesaplama</span>
          <span style="color: #718096; font-size: 0.82rem;">📅 Ekim 2026 &middot; ⏱️ 6 dk detaylı okuma &middot; ✍️ Mutfak Dolabınız Maliyet Masası</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(1.6rem, 3.5vw, 2.3rem); color: var(--color-primary); line-height: 1.3; margin-bottom: 20px;">
          Mutfak Dolabı Metretül Fiyatı Nasıl Hesaplanır? 2026 Güncel Maliyet Rehberi
        </h2>
        <img src="assets/images/mutfak/mutfak-dolaplari.webp" alt="Mutfak Dolabı Metretül Fiyatı Hesaplama" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 24px;" loading="lazy" decoding="async">

        <div class="article-body" style="font-size: 1.02rem; line-height: 1.85; color: #2d3748;">
          <p>
            Mutfak dolabı yaptırmak isteyen ev sahiplerinin marangoz ve mimarlık ofisleriyle görüşürken en sık karşılaştığı terim <strong>"metretül (mtül)"</strong> birimidir. Birçok müşteri metrekare (m²) ile metretül kavramını karıştırır ve bu durum teklifler arasında yanlış kıyaslamalara yol açar. Peki metretül tam olarak nedir, alt ve üst dolaplar bu hesaba nasıl dahil edilir ve gizli maliyetler nelerdir?
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Metretül Hesabının Matematiksel Formülü</h3>
          <p>
            Mobilya sektöründe 1 metretül mutfak dolabı; standart derinlik ve yükseklikteki <strong>1 metre uzunluğundaki alt dolap ile 1 metre uzunluğundaki üst dolabın toplamını</strong> ifade eder. Yani mutfağınızın duvarı düz 3 metre uzunluğundaysa ve bu duvar boyunca hem alt dolap hem üst dolap yapılacaksa, dolap metrajınız tam olarak 3 metretüldür.
          </p>
          <p>
            Ancak gerçek projelerde alt ve üst dolaplar her zaman eşit uzunlukta olmaz. Örneğin davlumbaz alanı boş bırakılabilir veya pencere üstüne dolap gelmeyebilir. Bu gibi durumlarda standart formül uygulanır:
          </p>
          <div style="background: #edf2f7; border-radius: var(--radius-md); padding: 18px 24px; margin: 20px 0; font-family: monospace; font-size: 1.05rem; color: #1a202c;">
            Toplam Metretül = (Alt Dolap Uzunluğu Metre + Üst Dolap Uzunluğu Metre) / 2
          </div>
          <p>
            Örnek verelim: Alt dolaplarınız 4 metre, ancak pencere ve aspiratör nedeniyle üst dolaplarınız sadece 2 metre ise; (4 + 2) / 2 = 3 metretül dolap imalatı ortaya çıkar. Eğer metretül fiyatı 9.000 TL olarak belirlenmişse, 3 mtül × 9.000 TL = 27.000 TL gövde ve kapak maliyetine ulaşılır.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Boy Dolapları ve Köşe Modülleri Nasıl Hesaplanır?</h3>
          <p>
            Fırın ve mikrodalga kulesi olarak kullanılan boy dolapları veya ankastre buzdolabı kabinleri tabandan tavana kadar tek parça yükselir. Standart olarak boy dolaplarının yüksekliği yaklaşık 2.20 - 2.40 metre olduğu için, <strong>1 metre genişliğindeki bir boy dolabı sektör standardında 2.5 ile 3 metretül</strong> olarak hesaplanır. Çünkü boy dolabı hem alt hem üst hem de iç raf ve çekmece mekanizması olarak standart dolabın neredeyse üç katı malzeme tüketir.
          </p>
          <p>
            L veya U şeklindeki köşeli mutfaklarda ise köşenin birleştiği 65x65 cm'lik köşe kör noktası iki kez sayılmaz; köşeden bir düşüm yapılır. Mutfak Dolabınız olarak lazerli ölçüm ekibimiz adresinize geldiğinde bu hesaplamayı milimetrik olarak yapar ve hiçbir gizli maliyet bırakmadan şeffaf bir hakediş tablosu sunar.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Fiyatı Etkileyen Donanım ve Mekanizmalar</h3>
          <p>
            İki mutfak dolabı dışarıdan aynı görünse bile biri diğerinin iki katı fiyata mal olabilir. Bunun arkasındaki ana etken donanım kalitesidir. Avusturya Blum marka Aventos HF katlanır kalkar kapak mekanizmaları, frenli Tandembox çelik çekmece rayları ve köşe fasulye kiler mekanizmaları mutfağın kullanım ömrünü 20 yıla çıkarırken maliyeti doğrudan etkiler. Ucuz fiyata satılan hazır mutfaklarda ise kalitesiz sunta gövdeler ve birkaç ayda sarkan standart menteşeler kullanılır.
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <span style="font-weight: 700; color: var(--color-primary);">Kendi mutfağınızın ölçüsüne göre anında teklif alın:</span>
          <a href="fiyat-hesapla.html" class="btn btn-primary btn-sm">📐 Online Fiyat Hesapla</a>
        </div>
      </article>


      <!-- MAKALE 3 -->
      <article id="makale-3" class="full-blog-post" style="background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: clamp(24px, 5vw, 44px); margin-bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="background: #ecfdf5; color: #047857; font-weight: 700; font-size: 0.78rem; padding: 4px 12px; border-radius: 99px;">Yeni Nesil Yüzey</span>
          <span style="color: #718096; font-size: 0.82rem;">📅 Ekim 2026 &middot; ⏱️ 5 dk detaylı okuma &middot; ✍️ Mutfak Dolabınız İnovasyon Departmanı</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(1.6rem, 3.5vw, 2.3rem); color: var(--color-primary); line-height: 1.3; margin-bottom: 20px;">
          Matplus (Anti-Fingerprint) Kapak Nedir? Neden Asla Parmak İzi Tutmaz?
        </h2>
        <img src="assets/images/mutfak/matplus-kapak.webp" alt="Matplus Anti Fingerprint Mutfak Kapak" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 24px;" loading="lazy" decoding="async">

        <div class="article-body" style="font-size: 1.02rem; line-height: 1.85; color: #2d3748;">
          <p>
            Modern iç mimaride son yılların en güçlü trendi hiç şüphesiz koyu renkli, dingin ve mat mutfak tasarımlarıdır. Antrasit, duman grisi, koyu zeytin yeşili ve kaşmir tonları mutfaklara olağanüstü bir zarafet katar. Ancak geleneksel mat kapak yaptıran ev hanımlarının ve mimarların en büyük şikayeti <strong>"yağlı parmak izleri ve el lekeleri"</strong> olmuştur. Gün ışığı kapağa vurduğunda parmak izlerinin oluşturduğu kirli görüntü, mat mutfakların en zayıf karnıydı. İşte bu sorunu kökten çözen nano teknolojiye <strong>Matplus (Anti-Fingerprint)</strong> adı verilmektedir.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Matplus Teknolojisi Nasıl Çalışır?</h3>
          <p>
            Matplus yüzeyler, elektron ışını kürleme (Electron Beam Curing) yöntemiyle moleküler düzeyde sıkıştırılmış özel bir nanoteknolojik reçine tabakasına sahiptir. İnsan cildindeki doğal sebum ve yağ molekülleri standart mat yüzeylerdeki gözeneklere tutunurken, Matplus yüzeyin ultra pürüzsüz nano yapısı yağ ve nem taneciklerini iter. Dokunduğunuzda kadifemsi, ılık ve adeta ipeğe dokunuyormuş hissi uyandırır; parmağınızı çektiğiniz anda ise geride en ufak bir el izi veya gölge kalmaz.
          </p>
          <p>
            Bunun yanında Matplus kapaklar ışığı kırmadan, homojen bir şekilde emer. Parlak kapaklarda görülen yansımaların ve dalgalanmaların hiçbiri Matplus'ta oluşmaz. Bu sayede gün boyu doğal ışık alan mutfaklarda son derece dinlendirici, sakin ve lüks bir mimari derinlik yaratır.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Termal Onarım Özelliği ve Çizilme Direnci</h3>
          <p>
            Matplus kapakların bir diğer mucizevi yönü mikro çizilmelere karşı gösterdiği termal onarım kapasitesidir. Günlük mutfak koşturmacasında anahtarlık, tırnak veya mutfak aletlerinin sürtünmesiyle oluşan yüzeysel mikro çizikler, yüzeyin üzerine nemli bir bez konularak ütüyle 5 saniye ısı uygulandığında kendi kendini onarır. Isı ile moleküler zincir tekrar eski formuna kavuşur.
          </p>
          <p>
            Temizlik açısından ise ev hanımlarına büyük kolaylık sunar. Aşındırıcı çamaşır suları veya ağır kimyasal temizleyicilere kesinlikle ihtiyaç duymazsınız. Sadece ılık suya batırılmış mikrofiber bez ile silindiğinde ilk günkü kusursuz görüntüsüne anında geri döner.
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <span style="font-weight: 700; color: var(--color-primary);">Matplus renk kartelamızı evinizde incelemek için ücretsiz keşif isteyin:</span>
          <a href="matplus-mutfak-dolabi.html" class="btn btn-primary btn-sm">Matplus Modellerini İncele &rarr;</a>
        </div>
      </article>


      <!-- MAKALE 4 -->
      <article id="makale-4" class="full-blog-post" style="background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: clamp(24px, 5vw, 44px); margin-bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="background: #fdf2f8; color: #be185d; font-weight: 700; font-size: 0.78rem; padding: 4px 12px; border-radius: 99px;">Akıllı Tasarım Fikirleri</span>
          <span style="color: #718096; font-size: 0.82rem;">📅 Ekim 2026 &middot; ⏱️ 6 dk detaylı okuma &middot; ✍️ Mutfak Dolabınız İç Mimarları</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(1.6rem, 3.5vw, 2.3rem); color: var(--color-primary); line-height: 1.3; margin-bottom: 20px;">
          Küçük Mutfaklar İçin 10 Akıllı Dolap ve Depolama Fikri
        </h2>
        <img src="assets/images/mutfak/mutfak-dekorasyonu.webp" alt="Küçük Mutfaklar İçin Dolap Fikirleri" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 24px;" loading="lazy" decoding="async">

        <div class="article-body" style="font-size: 1.02rem; line-height: 1.85; color: #2d3748;">
          <p>
            İstanbul'un Kadıköy, Beşiktaş, Üsküdar veya Şişli gibi köklü semtlerindeki apartman dairelerinde veya yeni nesil 1+1, 2+1 rezidanslarda en sık karşılaşılan problem 6-8 metrekarelik dar mutfak alanlarıdır. Küçük bir mutfağa sahip olmak estetikten veya kullanışlılıktan ödün vermeniz gerektiği anlamına gelmez. Doğru planlanmış bir mimari mobilya tasarımı ile küçük bir mutfak, devasa bir villanın mutfağından çok daha işlevsel hale getirilebilir. İşte atölyemizde küçük mekanlar için uyguladığımız en etkili 10 çözüm:
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">1. Tavana Kadar Çift Katlı Üst Dolaplar (Kutu Modüller)</h3>
          <p>
            Geleneksel mutfaklarda üst dolaplar ile tavan arasında 30-40 cm boşluk bırakılır. Bu boşluk hem sürekli toz toplar hem de değerli bir depolama alanını heba eder. Küçük mutfaklarda dolapları tavana kadar sıfır yanaştırıp çift katlı kutu modüller tasarlıyoruz. Yılda birkaç kez kullandığınız düdüklü tencere, misafir takımları veya kışlık erzakları en üst modüllerde saklayarak tezgah üstü karmaşayı tamamen ortadan kaldırabilirsiniz.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">2. Kör Köşe Fasulye ve Sihirli Köşe Mekanizmaları</h3>
          <p>
            L tipi mutfaklarda köşede kalan dolaplar karanlık ve ulaşılması imkansız kör noktalara dönüşür. Kapağı açtığınızda dolabın içindeki sepetleri dışarıya doğru süzülerek çıkaran çift kademeli fasulye (LeMans) mekanizmaları sayesinde en dipteki tencerelere bile eğilmeden tek parmakla ulaşabilirsiniz.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">3. 15 cm'lik Dikey Şişelik ve Baharatlık Kuleleri</h3>
          <p>
            Bulaşık makinesi veya fırın yerleşiminden sonra duvarda kalan 15-20 cm'lik ölü boşlukları frenli dikey teleskopik kiler çekmecelerine dönüştürüyoruz. Sıvı yağlar, soslar ve baharatlar tezgah üstünde yer kaplamak yerine ocak yanında elinizin altında düzenle sıralanır.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">4. Çekmece İçi Gizli Kahvaltı ve Hazırlık Masaları</h3>
          <p>
            Mutfağınızda bir yemek masasına yer yoksa, standart bir çekmece kapağının ardına gizlenen katlanabilir teleskopik masa sistemleri uyguluyoruz. Çekmeceyi çektiğinizde 90 cm uzunluğunda 2 kişilik sağlam bir granit veya masif kahvaltı masası açılır; işiniz bittiğinde saniyeler içinde çekmecenin içine gizlenir.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">5. Kulpsuz Bas-Aç veya Gola Profil Kapaklar</h3>
          <p>
            Dar koridor tipi mutfaklarda dışa doğru çıkıntı yapan kulplar yürürken kıyafetlere takılır ve mekanı görsel olarak böler. Entegre alüminyum Gola profil kanallar veya bas-aç mekanizmalar ile kapaklar tek parça kesintisiz bir duvar gibi görünür, mekanın optik olarak ferahlamasını sağlar.
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <span style="font-weight: 700; color: var(--color-primary);">Dar mutfağınızı 3D mimari çizimle projelendirelim:</span>
          <a href="https://wa.me/905544596979?text=Kucuk%20mutfagim%20icin%20akilli%20dolap%20projesi%20ve%20fiyat%20istiyorum." target="_blank" class="btn btn-whatsapp btn-sm">💬 Ücretsiz Keşif Al</a>
        </div>
      </article>


      <!-- MAKALE 5 -->
      <article id="makale-5" class="full-blog-post" style="background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: clamp(24px, 5vw, 44px); margin-bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="background: #f0fdf4; color: #15803d; font-weight: 700; font-size: 0.78rem; padding: 4px 12px; border-radius: 99px;">Tadilat Rehberi</span>
          <span style="color: #718096; font-size: 0.82rem;">📅 Ekim 2026 &middot; ⏱️ 6 dk detaylı okuma &middot; ✍️ Mutfak Dolabınız Saha Ekibi</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(1.6rem, 3.5vw, 2.3rem); color: var(--color-primary); line-height: 1.3; margin-bottom: 20px;">
          Banyo Tadilatı Kaç Gün Sürer? Aşama Aşama Komple Yenileme Sıralaması
        </h2>
        <img src="assets/images/banyo/banyo-dolabi.webp" alt="Banyo Tadilatı Kaç Gün Sürer" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 24px;" loading="lazy" decoding="async">

        <div class="article-body" style="font-size: 1.02rem; line-height: 1.85; color: #2d3748;">
          <p>
            Ev tadilatlarında ev sahiplerini en çok tedirgin eden ve günlük yaşamı doğrudan etkileyen süreç banyo yenilemesidir. Banyosu kırılan bir evde yaşam konforu ciddi şekilde kısıtlandığı için müşterilerimizin ilk sorusu <strong>"Banyo tadilatı toplam kaç gün sürer ve ne zaman kullanıma hazır olur?"</strong> olmaktadır. Doğru organize edilmiş, malzeme tedariği önceden yapılmış standart bir banyo tadilatı <strong>ortalama 10 ile 14 iş günü</strong> içerisinde anahtar teslim tamamlanır. İşte gün gün şantiye sürecimiz:
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">1. ve 2. Gün: Kırım, Moloz Tahliyesi ve Altyapı İncelemesi</h3>
          <p>
            Eski küvet, seramikler, klozet ve dolaplar dikkatle sökülür. Duvar ve zemin harç seviyesine kadar kırılır. İstanbul'un apartman kurallarına uygun olarak molozlar çuvallanıp aynı gün belediye döküm sahasına sevk edilir. Kırımın ardından mevcut tesisat borularının durumu incelenir.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">3. ve 4. Gün: Temiz ve Pis Su Tesisatı + Gömme Rezervuar Montajı</h3>
          <p>
            Eski galvaniz veya kalitesiz plastik borular sökülerek sessiz atık su boruları ve oksijen bariyerli kompozit PPRC temiz su boruları çekilir. Lavabo, duş bataryası ve çamaşır makinesi giderlerinin yerleri milimetrik planlanır. Geberit veya Vitra gömme rezervuar duvara sabitlenerek basınç sızdırmazlık testleri yapılır.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">5. ve 6. Gün: Şap Atımı ve Çift Kat Sürme Su İzolasyonu (Hayati Aşama)</h3>
          <p>
            Zemin giderine doğru hassas su akış eğimi verilerek tesviye şapı atılır. Şap kuruduktan sonra banyonun alt komşuya su sızdırmasını sonsuza dek engelleyen çift bileşenli elastik sürme izolasyon uygulanır. Duvar ile zeminin birleştiği köşe hatlarına pah bandı çekilerek izolasyon havuzu oluşturulur.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">7. ile 9. Gün Arası: Seramik ve Porselen Karo Döşeme + Derz</h3>
          <p>
            Lazerli terazi eşliğinde 60x120 cm gibi geniş ebatlı porselen seramikler yapıştırıcı ve klipsli takoz sistemiyle döşenir. 24 saat sonra suya ve küfe dayanıklı antibakteriyel epoksi veya silikonlu derz dolguları çekilir.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">10. ile 12. Gün: Asma Tavan, Aydınlatma, Dolap ve Duşakabin Montajı</h3>
          <p>
            Neme dayanıklı yeşil alçıpan veya alüminyum panel asma tavan yapılır, LED spotlar bağlanır. Atölyemizde önceden imal edilmiş suya dayanıklı lake asma banyo dolabı, LED buğu önleyici ayna ve temperli cam siyah profil duşakabin monte edilir. Son silikon temizliği yapılarak banyo kullanıma hazır teslim edilir.
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <span style="font-weight: 700; color: var(--color-primary);">Komple banyo tadilatı keşif ve malzeme paketlerimizi inceleyin:</span>
          <a href="banyo-tadilat-yenileme.html" class="btn btn-primary btn-sm">Banyo Tadilat Paketleri &rarr;</a>
        </div>
      </article>


      <!-- MAKALE 6 -->
      <article id="makale-6" class="full-blog-post" style="background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: clamp(24px, 5vw, 44px); margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="background: #faf5ff; color: #7e22ce; font-weight: 700; font-size: 0.78rem; padding: 4px 12px; border-radius: 99px;">Gardırop & Ray Dolap</span>
          <span style="color: #718096; font-size: 0.82rem;">📅 Ekim 2026 &middot; ⏱️ 6 dk detaylı okuma &middot; ✍️ Mutfak Dolabınız Atölye Şefi</span>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(1.6rem, 3.5vw, 2.3rem); color: var(--color-primary); line-height: 1.3; margin-bottom: 20px;">
          Özel Ölçü Gardırop Yaptırırken Nelere Dikkat Edilmelidir?
        </h2>
        <img src="assets/images/gardirop/gardirop-yatak-odasi.webp" alt="Özel İmalat Gardırop Dikkat Edilecekler" style="width: 100%; height: auto; max-height: 480px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 24px;" loading="lazy" decoding="async">

        <div class="article-body" style="font-size: 1.02rem; line-height: 1.85; color: #2d3748;">
          <p>
            Yatak odalarının ve giyinme odalarının en temel mobilyası gardıroptur. Yapı marketlerde veya seri üretim mobilya mağazalarında satılan hazır dolaplar genellikle standart 200-240 cm genişlik ve 210 cm yüksekliktedir. Ancak çoğu evde tavan yüksekliği 260-280 cm arasındadır. Hazır bir dolap aldığınızda üstte kalan 60 cm'lik alan toz yuvasına dönüşür, dolabın yanlarında kalan 20-30 cm'lik boşluklar ise kullanılamaz. <strong>Özel ölçü imalat gardıroplar</strong>, odanızın tabanından tavanına, duvarından duvarına kadar sıfır boşlukla yerleşerek maksimum depolama hacmi sunar.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Sürgülü Ray Kapak mı, Menteşeli Açılır Kapak mı?</h3>
          <p>
            Kapak tipi tercihi tamamen yatak odanızın genişliğine ve yatak ile dolap arasındaki yürüme mesafesine bağlıdır:
          </p>
          <ul style="padding-left: 20px; margin: 16px 0;">
            <li style="margin-bottom: 10px;"><strong>Sürgülü Ray Dolaplar:</strong> Yatak ile gardırop arasında 60 cm'den az mesafe olan dar yatak odaları için kurtarıcıdır. Kapaklar yana doğru kaydığı için odada açılma payı gerektirmez. Ancak ray mekanizmasının kaliteli, çift yönlü frenli (yavaşlatıcılı) ve en az 80 kg taşıma kapasiteli alüminyum raylardan seçilmesi şarttır.</li>
            <li style="margin-bottom: 10px;"><strong>Menteşeli Açılır Kapaklar:</strong> Geniş odalarda ve giyinme odalarında tercih edilir. Dolabın tüm kapaklarını aynı anda açıp içeriği tek bakışta görebilme avantajı sağlar. 110 derece geniş açılı frenli menteşeler ile uzun yıllar sessizce kapanır.</li>
          </ul>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">İç Düzen ve Ergonomi: Akıllı Aksesuarlar</h3>
          <p>
            İyi bir gardırop dışarıdan sadece şık bir kutu değil, içeride kusursuz bir organizasyon merkezidir. Askılık borularının yüksekliği kıyafet türüne göre ayarlanmalıdır: Gömlek ve ceketler için 95-105 cm, uzun elbiseler ve kabanlar için ise en az 140-155 cm dikey askılık payı bırakılmalıdır.
          </p>
          <p>
            Bununla birlikte çekmece içlerine yerleştirilen kadife kaplı saat ve takı düzenleyicileri, teleskopik pantolonluk askıları, kravatlık aparatları ve kapak açıldığında otomatik yanan sensörlü profil LED aydınlatmalar gardırobunuzu lüks bir butik mağaza konseptine dönüştürür.
          </p>

          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin: 28px 0 12px 0;">Füme Cam ve Alüminyum Çerçeveli Lüks Kapaklar</h3>
          <p>
            2026 yatak odası trendlerinde masif ahşap ve lake kapakların yanı sıra, ince siyah veya antrasit alüminyum çerçeveli reflekte füme cam kapaklar büyük ilgi görmektedir. Dolap içi aydınlatma kapalıyken şık koyu bir ayna gibi duran bu kapaklar, iç aydınlatma yandığında içindeki giysileri estetik bir vitrin gibi sergiler.
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <span style="font-weight: 700; color: var(--color-primary);">Yatak odanıza özel gardırop çizimi ve fiyat teklifi alın:</span>
          <a href="gardirop-modelleri.html" class="btn btn-primary btn-sm">Gardırop Modellerini Gör &rarr;</a>
        </div>
      </article>

    </div>
  </section>
`;

// Read blog.html
let html = fs.readFileSync('blog.html', 'utf8');

// Replace the excerpt grid section with our full-content articles
// Find from <!-- Blog Makaleler Grid Bölümü --> to <!-- ATÖLYE ÜRETİM VİDEOSU BÖLÜMÜ -->
const gridRegex = /<!--\s*Blog Makaleler Grid Bölümü\s*-->[\s\S]*?(?=<!--\s*ATÖLYE ÜRETİM VİDEOSU BÖLÜMÜ\s*-->)/i;

if (gridRegex.test(html)) {
  html = html.replace(gridRegex, blogContent + '\n\n  ');
  fs.writeFileSync('blog.html', html, 'utf8');
  console.log('Successfully inserted rich, full-length articles into blog.html!');
} else {
  console.log('Regex did not match grid section in blog.html');
}
