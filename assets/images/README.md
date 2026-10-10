# 📸 Görsel ve Video Yükleme / Optimizasyon Kılavuzu (Google PageSpeed 90+ Uyumlu)

Bu site **Google PageSpeed 90+ (Mobil ve Masaüstü)** ve **%100 SEO** skoru hedeflenerek kodlanmıştır. Web sitenizin bu hız ve performans seviyesini koruması için görselleri ve videoları yüklerken aşağıdaki yönergeleri uygulayınız.

---

## 1. 🖼️ Fotoğraflar İçin Format ve Boyutlar

Tüm fotoğraflar **`.webp`** formatında kaydedilmelidir.

### Neden WebP?
- JPEG ve PNG'ye göre **%30 - %50 daha küçüktür**, kalite kaybı olmaz.
- Google Lighthouse ve PageSpeed doğrudan WebP formatını şart koşar.

### Klasör Yapısı ve Önerilen Ölçüler:
- **`assets/images/mutfak/`** :
  - Vitrin / Ana Görseller: `1200x800 px` (Maksimum dosya boyutu: **150 KB**)
  - Detay / Galeri Görselleri: `800x600 px` (Maksimum dosya boyutu: **80-100 KB**)
- **`assets/images/banyo/`** : `800x600 px` veya `1000x750 px`
- **`assets/images/gardirop/`** : `800x1000 px` (Dikey) veya `1000x750 px`
- **`assets/images/kapi/`** : `600x900 px` (Dikey kapı kadrajı)
- **`assets/images/dekorasyon/`** : `1200x800 px`
- **`assets/images/hero/`** : Banner arka planları için `1920x1080 px` (Maksimum dosya boyutu: **250 KB**)

### Ücretsiz Dönüştürücü Araçlar:
1. **Squoosh.app** (Google'ın ücretsiz aracı - tarayıcıdan anında WebP yapar)
2. **TinyPNG / TinyJPG** (Sıkıştırma)
3. **Photoshop / Canva**: Farklı Kaydet > WebP seçeneği.

---

## 2. 🎥 Videolar İçin Format ve Sıkıştırma (Kullanıcının Sorusunun Cevabı)

Videolar web sitelerinde en çok yavaşlamaya neden olan unsurdur. Sayfa hızını 90+ üzerinde tutmak için videoları şu şekilde hazırlamalısınız:

### Hangi Formata Çevirmelisiniz?
1. **Birincil Format: `WebM` (VP9 Codec)**
   - Modern tarayıcılar (Chrome, Edge, Firefox, Safari 16+) için en hızlı ve en hafif formattır.
2. **Yedek Format: `MP4` (H.264 Video + AAC Ses)**
   - Eski cihazlar için tam uyumluluk sağlar.

### Video Kodlaması ve İpuçları:
- **Süre**: Web arka plan videoları için ideal süre **6 - 12 saniye** arası döngü (loop) olmalıdır.
- **Çözünürlük**: Tam ekran arka plan için **1080p (1920x1080)** veya mobil için **720p (1280x720)**.
- **Bitrate**: `1.2 Mbps - 2.0 Mbps` arasında tutun.
- **Dosya Boyutu**: Bir web videosu kesinlikle **5 MB'ı geçmemelidir**, ideal boyut **1.5 MB - 3 MB** arasıdır.
- **Ses**: Arka plan videolarında ses kanalını tamamen kaldırın (`mute`), dosya boyutu %20 küçülür.

### Sayfaya Eklerken Kullanılacak Standart HTML Kodu:
```html
<video 
  class="bg-video" 
  autoplay 
  muted 
  loop 
  playsinline 
  preload="none" 
  poster="/assets/images/hero/hero-video-poster.webp">
  <source src="/assets/videos/atolye-uretim.webm" type="video/webm">
  <source src="/assets/videos/atolye-uretim.mp4" type="video/mp4">
</video>
```
> **Önemli Not:** `preload="none"` ve `poster="..."` özellikleri sayesinde, ziyaretçi sayfayı açtığında video hemen indirilmez, önce hafif WebP afiş gösterilir. Bu da Google PageSpeed puanınızın 95-100 arasında kalmasını sağlar!

---

## 3. 🎯 Hızlı Dönüştürme İçin FFmpeg Komutu (İleri Düzey):
Elinizde yüksek boyutlu MP4 varsa, terminalde şu komutla anında hafif WebM yapabilirsiniz:
```bash
ffmpeg -i girdi-video.mp4 -c:v libvpx-vp9 -b:v 1500k -an cikti-video.webm
```
