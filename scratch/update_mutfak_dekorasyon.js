const fs = require('fs');

let file = 'mutfak-dekorasyonu.html';
let c = fs.readFileSync(file, 'utf8');

const gallery = `
      <!-- Canlı Ada Mutfak ve Dekorasyon Projeleri Galerisi -->
      <div class="section-header" style="margin-top: 40px; margin-bottom: 25px;">
        <span class="section-subtitle">Atölyemizden Teslimler</span>
        <h3 class="section-title" style="font-size: 1.85rem;">Gerçek Projelerimizden <span>Ada Mutfak & Tezgah Uygulamaları</span></h3>
      </div>

      <div class="proje-gallery-grid">
        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Ada & Porselen</span>
            <img src="assets/images/ress/aluminyum-cam-kapak-high-gloss-porselen-tezgah-led-aydinlatmali-mutfak-dolabi-1024x768.webp" alt="Alüminyum Cam Kapak High Gloss Porselen Tezgah Mutfak" width="1024" height="768" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Porselen Ada Tezgah & Füme Cam Vitrin</h4>
              <p class="proje-card-desc">Gizli LED profilli füme cam dolaplar ve çizilmez mermer desen porselen ada tezgah.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Porselen%20Ada%20Mutfak%20modeli%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Lake & Bar</span>
            <img src="assets/images/ress/lake-kapakli-mutfak-dolabi-ve-porselen-tezgahli-mutfak-bari.webp-768x1024.webp" alt="İpek Mat Lake Ada Mutfak Barı ve Porselen Tezgah" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Lake Mutfak Barı & Entegre Ada Masa</h4>
              <p class="proje-card-desc">Fırın boyalı ipek mat lake dolaplar ve kahvaltı barı olarak kullanılan geniş ada ünitesi.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Lake%20Mutfak%20Bari%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Corian & LED Tavan</span>
            <img src="assets/images/ress/led-tavan-aydinlatmali-corian-tezgah-akrilik-mutfak-dolabi-1024x862.webp" alt="LED Tavan Aydınlatmalı Corian Tezgah Akrilik Mutfak" width="1024" height="862" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Corian Eksiz Masif Tezgah Uygulaması</h4>
              <p class="proje-card-desc">DuPont Corian tezgah, gömme evye birleşimi ve homojen tavan spot aydınlatması.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Corian%20Tezgahli%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge gold">Kahve İstasyonu</span>
            <img src="assets/images/ress/led-aydinlatmali-aluminyum-cam-kapak-ve-porselen-tezgah-kahve-kosesi-mutfak-768x1365.webp" alt="LED Aydınlatmalı Cam Kapak Kahve Köşesi Mutfak" width="768" height="1365" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Işıklı Cam Vitrin Kahve İstasyonu</h4>
              <p class="proje-card-desc">Porselen tezgah nişi, kadehlik rafı ve dokunmatik LED aydınlatmalı lüks kahve barı.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Kahve%20Istasyonu%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Çimstone Tezgah</span>
            <img src="assets/images/ress/cimstone-tezgah-ve-high-gloss-kapakli-mutfak-dolabi-576x1024.webp" alt="Çimstone Tezgah ve High Gloss Mutfak Dolabı" width="576" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Çimstone Kuvars Tezgah & Gizli Gola</h4>
              <p class="proje-card-desc">Leke tutmayan kuvars tezgah, ankastre evye montajı ve kulpsuz modern mutfak mimarisi.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Cimstone%20Tezgahli%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>

        <div class="proje-card">
          <div class="proje-card-media">
            <span class="proje-card-badge">Porselen Duvar</span>
            <img src="assets/images/ress/porselen-tezgah-ve-tezgah-arasi-high-gloss-mutfak-dolabi-768x1024.webp" alt="Porselen Tezgah ve Tezgah Arası High Gloss Mutfak" width="768" height="1024" loading="lazy" decoding="async">
          </div>
          <div class="proje-card-body">
            <div>
              <h4 class="proje-card-title">Tezgah Arası Yekpare Porselen Panel</h4>
              <p class="proje-card-desc">Derz kirliliği olmadan silinen, ısıya dayanıklı geniş ebatlı porselen tezgah arası.</p>
            </div>
            <div class="proje-card-footer">
              <a href="https://wa.me/905336173755?text=Merhaba,%20Porselen%20Panel%20Mutfak%20icin%20fiyat%20almak%20istiyorum." target="_blank" class="proje-card-btn">
                <span>Bu Modeli Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
`;

if (!c.includes('Canlı Ada Mutfak ve Dekorasyon Projeleri Galerisi')) {
  c = c.replace(
    /<\/video>\s*<\/div>\s*<\/div>\s*<\/section>/,
    '</video>\n      </div>' + gallery + '\n    </div>\n  </section>'
  );
  fs.writeFileSync(file, c, 'utf8');
  console.log('mutfak-dekorasyonu.html updated with 6-item gallery!');
} else {
  console.log('already includes gallery');
}
