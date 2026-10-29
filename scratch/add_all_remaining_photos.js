const fs = require('fs');

console.log('--- Adding Remaining Photos across Banyo, Dekorasyon, Yatak & Giyinme ---');

// 1. banyo-dolabi.html - Add 4 more items to user-gallery-grid
{
  let file = 'banyo-dolabi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  const additionalBanyoCards = `
        <div class="user-gallery-item">
          <img src="assets/images/ress/membran-banyo-dolabi-576x1024.webp" alt="Suya Dayanıklı Membran Banyo Dolabı Modeli" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Suya Dayanıklı Membran Banyo Dolabı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/membran-kapakli-led-aydinlatmali-banyo-dolabi-576x1024.webp" alt="Membran Kapaklı LED Aydınlatmalı Banyo Dolabı" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">LED Aydınlatmalı Membran Banyo Ünitesi</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/led-aydinlatmali-havuz-kapak-banyo-dolabi-576x1024.webp" alt="Havuz Kapak LED Aydınlatmalı Banyo Dolabı" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Modern Havuz Kapak & Gizli Işıklı Banyo</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/lake-banyo-dolabi-1-576x1024.webp" alt="İpek Mat Beyaz Lake Banyo Dolabı" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">İpek Mat Beyaz Lake Çanak Lavabolu Dolap</div>
        </div>
      </div>`;

  if (!c.includes('membran-kapakli-led-aydinlatmali-banyo-dolabi')) {
    c = c.replace(
      /(<div class="user-gallery-item">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
      '$1' + additionalBanyoCards + '\n    </div>\n  </section>'
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('banyo-dolabi.html expanded with 4 more items!');
  }
}

// 2. banyo-tadilat-yenileme.html - Add more items
{
  let file = 'banyo-tadilat-yenileme.html';
  let c = fs.readFileSync(file, 'utf8');
  
  const additionalTadilatCards = `
        <div class="user-gallery-item">
          <img src="assets/images/ress/membran-banyo-dolabi-detay-576x1024.webp" alt="Özel Ölçü Banyo Dolabı Çekmece ve Frenli Ray Detayı" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Özel Ölçü Banyo Dolabı & Blum Ray Detayı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/Hayalinizdeki-Banyoyu-Birlikte-Tasarlayalim-768x429.webp" alt="Hayalinizdeki Banyoyu Birlikte Tasarlayalım 3D Proje" width="768" height="429" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Banyo Yenileme Öncesi 3D Mimari Proje</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/Ozel-Imalat-Banyo-Tasarimi-Anahtar-Teslim-Banyo-Tadilati-768x429.webp" alt="Özel İmalat Banyo Tasarımı Anahtar Teslim Banyo Tadilatı" width="768" height="429" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Anahtar Teslim Banyo Tadilatı & Montaj</div>
        </div>
      </div>`;

  if (!c.includes('Hayalinizdeki-Banyoyu-Birlikte-Tasarlayalim')) {
    c = c.replace(
      /(<div class="user-gallery-item">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
      '$1' + additionalTadilatCards + '\n    </div>\n  </section>'
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('banyo-tadilat-yenileme.html expanded with 3 more items!');
  }
}

// 3. mobilya-dekorasyon.html - Add TV unit and portmanto cards
{
  let file = 'mobilya-dekorasyon.html';
  let c = fs.readFileSync(file, 'utf8');
  
  const additionalDekorasyonCards = `
        <div class="user-gallery-item">
          <img src="assets/images/ress/high-gloss-panel-tv-unitesi-768x1024.webp" alt="High Gloss Duvar Paneli TV Ünitesi" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">High Gloss Duvar Paneli Modern TV Ünitesi</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/teak-duvar-paneli-tv-unitesi-768x1024.webp" alt="Teak Ahşap Duvar Paneli TV Ünitesi Tasarımı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Teak Ahşap Akustik Panel & TV Sehpası</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/portmanto-1-576x1024.webp" alt="Minimalist Beyaz Aynalı Vestiyer Portmanto" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Minimalist Aynalı Vestiyer & Ayakkabılık</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/portmanto-4-576x1024.webp" alt="Tavana Kadar Özel İmalat Boy Portmanto" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Tavana Kadar Gömme Portmanto Tasarımı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/portmanto-7-576x1024.webp" alt="Fonksiyonel Askılıklı Antre Giriş Mobilyası" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Puf Oturaklı & Askılıklı Giriş Antre Mobilyası</div>
        </div>
      </div>`;

  if (!c.includes('teak-duvar-paneli-tv-unitesi')) {
    c = c.replace(
      /(<div class="user-gallery-item">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
      '$1' + additionalDekorasyonCards + '\n    </div>\n  </section>'
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('mobilya-dekorasyon.html expanded with 5 more items!');
  }
}

// 4. giyinme-odasi.html - Add giyinme-odasi-2
{
  let file = 'giyinme-odasi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  const additionalGiyinme = `
        <div class="user-gallery-item">
          <img src="assets/images/ress/giyinme-odasi-2-576x1024.webp" alt="Açık Raf ve Çekmeceli Modern Giyinme Odası" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Açık Raf & Çekmeceli Walk-in Closet Modülü</div>
        </div>
      </div>`;

  if (!c.includes('giyinme-odasi-2-576x1024.webp')) {
    c = c.replace(
      /(<div class="user-gallery-item">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
      '$1' + additionalGiyinme + '\n    </div>\n  </section>'
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('giyinme-odasi.html expanded with giyinme-odasi-2!');
  }
}

// 5. yatak-odasi-mobilyasi.html - Add remaining bedroom photos
{
  let file = 'yatak-odasi-mobilyasi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  const additionalYatak = `
        <div class="user-gallery-item">
          <img src="assets/images/ress/yatak-odasi-1-576x1024.webp" alt="Özel Tasarım Yatak Başlığı ve Ahşap Panel" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Özel Tasarım Yatak Başlığı & Ahşap Panel</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/yatak-odasi-5-768x1024.webp" alt="Entegre Komodinli Yatak Odası Mobilyası" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Entegre Komodinli Modern Yatak Takımı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/yatak-odasi-9-576x1024.webp" alt="Geniş Depolamalı Yatak Odası Şifonyeri" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Geniş Depolamalı Yatak Odası Şifonyer Ünitesi</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/yatak-odasi-15-576x1024.webp" alt="Füme Aynalı Yatak Odası Gardırobu" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Füme Aynalı Modern Yatak Odası Gardırobu</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/yatak-odasi-18-576x1024.webp" alt="Özel Ölçü Yatak Odası Dolap İçi Düzenleyici" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Özel Ölçü Fonksiyonel Dolap İçi Bölmeleri</div>
        </div>
      </div>`;

  if (!c.includes('yatak-odasi-5-768x1024.webp')) {
    c = c.replace(
      /(<div class="user-gallery-item">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
      '$1' + additionalYatak + '\n    </div>\n  </section>'
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('yatak-odasi-mobilyasi.html expanded with 5 more bedroom photos!');
  }
}

// 6. high-gloss-mutfak-dolabi.html - Add high-gloss remaining photos
{
  let file = 'high-gloss-mutfak-dolabi.html';
  let c = fs.readFileSync(file, 'utf8');
  
  const additionalHighGloss = `
        <div class="user-gallery-item">
          <img src="assets/images/ress/high-gloss-kapak-mutfak-dolabi-768x1024.webp" alt="High Gloss Kapak Mutfak Dolabı İmalatı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">High Gloss Parlak Beyaz Mutfak Dolabı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/high-gloss-kapakli-mutfak-dolabi-1-768x1024.webp" alt="High Gloss Kapaklı Modern Mutfak Dolabı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">High Gloss & Ahşap Kombinli Mutfak</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/high-gloss-kapakli-mutfak-dolabi-768x1024.webp" alt="Özel Ölçü High Gloss Mutfak Dolabı" width="768" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Özel Ölçü High Gloss Parlak Mutfak İmalatı</div>
        </div>
        <div class="user-gallery-item">
          <img src="assets/images/ress/led-aydinlatmali-aluminyum-cam-kapak-ve-porselen-tezgah-kahve-kosesi-mutfak-576x1024.webp" alt="LED Aydınlatmalı Cam Kapak ve Porselen Tezgah Kahve Köşesi" width="576" height="1024" style="width: 100%; height: 240px; object-fit: cover;" loading="lazy" decoding="async">
          <div class="user-gallery-caption">Işıklı Cam Vitrin & Kahve Köşesi Entegrasyonu</div>
        </div>
      </div>`;

  if (!c.includes('high-gloss-kapak-mutfak-dolabi-768x1024.webp')) {
    c = c.replace(
      /(<div class="user-gallery-item">[\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/,
      '$1' + additionalHighGloss + '\n    </div>\n  </section>'
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('high-gloss-mutfak-dolabi.html expanded with 4 more photos!');
  }
}

