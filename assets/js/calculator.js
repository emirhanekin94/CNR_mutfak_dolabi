/**
 * XXX MUTFAK & MOBİLYA - METRETÜL VE PROJE MALİYET HESAPLAYICI
 * Ziyaretçilerin doğrudan atölye fiyatlarıyla anında tahmini bütçe almasını sağlar
 */

document.addEventListener('DOMContentLoaded', () => {
  const calcForm = document.getElementById('priceCalculatorForm');
  if (!calcForm) return;

  const projectTypeSelect = document.getElementById('projectType');
  const materialTypeSelect = document.getElementById('materialType');
  const dimensionInput = document.getElementById('dimensionLength');
  const countertopSelect = document.getElementById('countertopType');
  const hardwareSelect = document.getElementById('hardwareType');
  const calculatedPriceDisplay = document.getElementById('calculatedPrice');
  const whatsappQuoteBtn = document.getElementById('calcWhatsappBtn');

  // Birim Metretül Fiyat Aralıkları (İmalat Atölye Fiyatları TL)
  const PRICE_RATES = {
    // Mutfak Kapak Türleri (Metretül Fiyatı)
    membran: 7500,
    matplus: 8800,
    akrilik: 9500,
    lake: 13500,
    highgloss: 8200,
    
    // Gardırop & Giyinme Odası (Metre Boyutu)
    gardirop_standart: 7000,
    gardirop_cam: 11000,
    banyo_dolap: 6500,

    // Tezgahlar (Metretül İlave)
    tezgah_yok: 0,
    tezgah_laminat: 1800,
    tezgah_cimstone: 6200,
    tezgah_belenco: 7500,
    tezgah_porselen: 11500,

    // Aksesuar / Donanım Farkı (Çarpan)
    donanim_standart: 1.0,  // Standart Samet / Frenli Raylar
    donanim_blum: 1.22      // Orijinal Avusturya Blum Aventos & Tandembox
  };

  function updateEstimate() {
    const project = projectTypeSelect ? projectTypeSelect.value : 'mutfak';
    const material = materialTypeSelect ? materialTypeSelect.value : 'membran';
    const length = parseFloat(dimensionInput ? dimensionInput.value : 0) || 0;
    const countertop = countertopSelect ? countertopSelect.value : 'tezgah_yok';
    const hardware = hardwareSelect ? hardwareSelect.value : 'donanim_standart';

    if (length <= 0) {
      if (calculatedPriceDisplay) calculatedPriceDisplay.innerText = "0 ₺";
      return;
    }

    // Dolap taban fiyatı
    let baseRate = PRICE_RATES[material] || 7500;
    
    // Donanım katsayısı
    const hardwareMultiplier = PRICE_RATES[hardware] || 1.0;
    let cabinetTotal = (baseRate * length) * hardwareMultiplier;

    // Tezgah maliyeti (Sadece mutfakta geçerli)
    let countertopTotal = 0;
    if (project === 'mutfak' && countertop && PRICE_RATES[countertop]) {
      countertopTotal = PRICE_RATES[countertop] * length;
    }

    const totalEstimated = Math.round(cabinetTotal + countertopTotal);
    const minRange = Math.round(totalEstimated * 0.95);
    const maxRange = Math.round(totalEstimated * 1.08);

    const formatted = `${minRange.toLocaleString('tr-TR')} ₺ - ${maxRange.toLocaleString('tr-TR')} ₺`;

    if (calculatedPriceDisplay) {
      calculatedPriceDisplay.innerText = formatted;
    }

    // WhatsApp Mesajı Oluşturma
    if (whatsappQuoteBtn) {
      const matName = materialTypeSelect ? materialTypeSelect.options[materialTypeSelect.selectedIndex].text : material;
      const counterName = countertopSelect ? countertopSelect.options[countertopSelect.selectedIndex].text : '';
      const text = `Merhaba, web sitenizdeki hesaplayıcıdan hesaplama yaptım:
- Proje: ${project === 'mutfak' ? 'Mutfak Dolabı' : 'Gardırop / Dolap'}
- Ölçü: Yaklaşık ${length} Metre
- Kapak Malzemesi: ${matName}
- Tezgah: ${counterName}
- Tahmini Bütçe Aralığı: ${formatted}

Ümraniye atölyenizden detaylı 3D çizim ve kesin keşif randevusu almak istiyorum.`;

      whatsappQuoteBtn.href = `https://wa.me/905320000000?text=${encodeURIComponent(text)}`;
    }
  }

  // Dinleyicileri Ekle
  if (calcForm) {
    calcForm.addEventListener('input', updateEstimate);
    calcForm.addEventListener('change', updateEstimate);
  }

  updateEstimate();
});
