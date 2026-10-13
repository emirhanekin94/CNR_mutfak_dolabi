const fs = require('fs');

const cardSummaries = {
  "umraniye-mutfak-dolabi.html": "Yukarı Dudullu imalat atölyemizden Ümraniye geneline aracısız fabrika fiyatlarıyla özel ölçü mutfak dolabı imalatı. Tepeüstü, Çakmak ve Atakent'e aynı gün ücretsiz lazerli keşif ve 3D çizim.",
  "atasehir-mutfak-dolabi.html": "Batı Ataşehir ve Finans Merkezi kulelerine özel leke tutmaz Matplus ve lake ada mutfak dolapları. Parmak izi bırakmayan yüzeyler, sessiz frenli raylar ve 15 dakika içinde hızlı keşif randevusu.",
  "cekmekoy-mutfak-dolabi.html": "Alemdağ ve Ömerli villalarına özel masif meşe dokulu country mutfaklar ve geniş erzak kilerleri. Müstakil ev mimarisine uygun ada tezgah çözümleri ve doğrudan atölye teslimi.",
  "sancaktepe-mutfak-dolabi.html": "Sarıgazi ve Samandıra yeni konut projeleri için ekonomik doğrudan imalatçı fiyatlarıyla çizilmez membran ve akrilik mutfak dolapları. 1. sınıf 18mm MDF gövde garantisiyle hızlı montaj.",
  "kadikoy-mutfak-dolabi.html": "Bağdat Caddesi, Moda ve Caddebostan kentsel dönüşüm dairelerine özel lüks ipeksi mat lake ve porselen tezgahlı mutfaklar. Tavana sıfır çift kat dolaplar ve pirinç kulp tasarımları.",
  "uskudar-mutfak-dolabi.html": "Kuzguncuk, Çengelköy ve Beylerbeyi yalı/köşk dairelerine özel nem ve tuz dirençli fırın boya lake mutfak dolapları. Tarihi dokuya uyumlu neoklasik çıtalar ve asil renk kartelaları.",
  "maltepe-mutfak-dolabi.html": "Küçükyalı ve Dragos sahil bandındaki daireler için deniz havasına dayanıklı akrilik ve reflekte füme cam kapaklı mutfaklar. Dar alanları genişleten aynalı paneller ve LED aydınlatmalar.",
  "kartal-mutfak-dolabi.html": "Soğanlık ve Atalar sahil rezidanslarına özel U ve L tipi modern mutfak dolapları. Balkon dönüşümlü alanlara özel kiler kuleleri, le-mans fasulye köşe sepetleri ve porselen tezgahlar.",
  "pendik-mutfak-dolabi.html": "Kurtköy Yenişehir siteleri ve sahil hattı için ekstra geniş tencere çekmeceli ve kahvaltı adalı fonksiyonel mutfak dolapları. Ağır yüke dayanıklı Blum tandem ray donanımları.",
  "tuzla-mutfak-dolabi.html": "Tuzla Marina ve Tepeören villaları için sahil nemine %100 dayanıklı marin yeşil MDF ve poliüretan lazer bantlı mutfak dolapları. Çift eviyeli hazırlık adaları ve açık meşe tonları.",
  "beykoz-mutfak-dolabi.html": "Acarkent ve Beykoz Konakları villalarına özel gurme şef ada mutfakları, el oyması taçlı lake dolaplar ve şömine yanı ahşap paneller. Adaçayı yeşili ve antrasit renk kombinleri.",
  "sultanbeyli-mutfak-dolabi.html": "Dudullu fabrikamıza komşu Sultanbeyli'de sıfır mağaza komisyonuyla doğrudan toptan fiyatına perakende mutfak dolabı. Kombi/boru gizleme panelleri ve takviyeli çekmeceler.",
  "sile-mutfak-dolabi.html": "Şile yazlıkları ve taş villaları için kış rutubetine dayanıklı marin yeşil MDF gövdeli country mutfaklar. Bahçe verandasına açılan barbekü servis tezgahları ve bohem ahşap detaylar.",
  "besiktas-mutfak-dolabi.html": "Etiler, Bebek ve Levent'teki yüksek tavanlı konutlara özel raylı merdivenli monolitik lake dolaplar. Boğaz siluetine uyumlu minimalist J-profil kulpsuz modern tasarımlar.",
  "sariyer-mutfak-dolabi.html": "Zekeriyaköy villaları ve Maslak penthouse daireleri için akıllı ev entegreli Servo-Drive elektrikli bas-aç kapaklar ve yekpare İtalyan porselen ada mutfak sistemleri.",
  "sisli-mutfak-dolabi.html": "Nişantaşı ve Teşvikiye apartmanlarına özel art-deco çıtalı lake kapaklar; Bomonti loftlarına uygun endüstriyel ceviz ve antrasit kombinasyonlu fonksiyonel mutfak projeleri.",
  "bakirkoy-mutfak-dolabi.html": "Yeşilköy, Florya ve Ataköy konakları için yoğun pişirmeye uygun yüksek debili davlumbaz bacalı dolaplar, çizilmez porselen tezgahlar ve masif ceviz çekmece içi bölücüler.",
  "basaksehir-mutfak-dolabi.html": "Bahçeşehir villaları ve Kayaşehir etaplarındaki geniş aile dairelerine özel çok katmanlı erzak kilerleri, köşe tambur mekanizmaları ve kolay silinen kaşmir membran kapaklar.",
  "beylikduzu-mutfak-dolabi.html": "Yakuplu Marina ve Beykent siteleri için Marmara rüzgarına karşı poliüretan kenar bant korumalı, 10 yıl sararma yapmayan parlak akrilik ve matplus mutfak dolapları.",
  "eyupsultan-mutfak-dolabi.html": "Göktürk/Kemerburgaz orman villaları için rustik meşe ada mutfaklar; tarihi Eyüp merkez daireleri için dar kolon-kiriş nişlerini değerlendiren pratik membran dolaplar.",
  "kagithane-mutfak-dolabi.html": "Vadistanbul ve Seyrantepe genç rezidansları için gizlenebilir masa modülleri, dikey kiler kuleleri ve parmak izi tutmayan J-profil modern kulpsuz kompakt mutfaklar."
};

const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.24.68-1.21 1.25-1.74 1.29-.48.04-1.1.06-3.56-.96-3.14-1.3-5.18-4.48-5.34-4.69-.15-.21-1.28-1.7-1.28-3.24 0-1.54.81-2.3 1.1-2.61.29-.31.64-.39.85-.39.21 0 .43 0 .62.01.2.01.47-.08.73.55.27.65.91 2.22.99 2.38.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.44-.27.73-.16.3.11 1.89.89 2.21 1.05.33.16.54.24.62.38.08.14.08.8-.16 1.48z"/></svg>`;

let content = fs.readFileSync('hizmet-bolgeleri.html', 'utf8');

// Replace card text with crisp summaries
for (const [href, summary] of Object.entries(cardSummaries)) {
  const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(<a[^>]*href=["']${escapedHref}["'][\\s\\S]*?<\\/div>\\s*<\\/div>\\s*<p[^>]*>)([\\s\\S]*?)(<\\/p>)`, 'i');

  if (regex.test(content)) {
    content = content.replace(regex, (match, prefix, oldText, suffix) => {
      return `${prefix}\n            ${summary}\n          ${suffix}`;
    });
  }
}

// Replace WhatsApp button emoji 💬 with SVG icon in all cards
content = content.replace(/(<a[^>]*class=["']btn btn-whatsapp btn-sm["'][^>]*>)\s*💬\s*(<\/a>)/gi, `$1\n              ${waSvg}\n            $2`);

fs.writeFileSync('hizmet-bolgeleri.html', content, 'utf8');
console.log('Updated hizmet-bolgeleri.html with crisp summaries and real WhatsApp SVG icons!');
