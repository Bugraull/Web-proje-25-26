// ... (İletişim formu kodu yukarıda kalmalı) ...

// Sayfa yüklendiğinde çalışacak fonksiyon (mevcut kodun devamı)
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. İletişim Formu (Mevcut kodunuz)
    const form = document.getElementById('iletisimFormu');
    const mesajDurumu = document.getElementById('mesajDurumu');

    if (form) {
        form.addEventListener('submit', function(event) {
            // ... (Mevcut form gönderim kodu) ...
        });
    }

    // 2. Galeri Modal Fonksiyonları (Kural 5)
    window.openModal = function(element) {
        const modal = document.getElementById("galeriModal");
        const modalImg = document.getElementById("buyukResim");
        const captionText = document.getElementById("caption");

        // Modal'ı görünür yap
        modal.style.display = "block";
        
        // Tıklanan küçük resmin "data-buyuk-src" özelliğinden büyük resmi al
        modalImg.src = element.getAttribute("data-buyuk-src");
        
        // Resmin alt metnini (alt) açıklamaya yerleştir
        captionText.innerHTML = element.alt;
    }

    window.closeModal = function() {
        const modal = document.getElementById("galeriModal");
        modal.style.display = "none";
    }

    // Modal dışına tıklandığında kapatma
    const modal = document.getElementById("galeriModal");
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});