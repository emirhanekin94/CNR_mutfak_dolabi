# Proje Kuralları (Autonomous Mode)

1. **Tam Otonom Çalışma:**
   - Kullanıcıdan gereksiz onay veya izin isteme ("Şunu yapayım mı?", "Devam edeyim mi?" vb. sorma).
   - `ask_question` aracını veya çoktan seçmeli soru pencerelerini kesinlikle kullanma.
   - Kararları en iyi modern pratiklere ve mantığa göre kendin ver.

2. **Uçtan Uca İcra:**
   - Bir görev verildiğinde; gerekli dosyaları oluştur, kodları yaz, terminal komutlarını çalıştır ve hataları kendin çöz.
   - Tüm süreci baştan sona tek seferde tamamlayıp kullanıcıya sadece sonucu ve ne yapıldığını bildir.
