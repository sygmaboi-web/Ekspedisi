// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Pilih semua link di navigasi yang memiliki tanda pagar (#)
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    // Loop (ulangi) untuk setiap link yang ditemukan
    navLinks.forEach(link => {
        // Tambahkan 'event listener' (pendengar acara) saat link di-klik
        link.addEventListener('click', function(e) {
            
            // 1. Mencegah perilaku default (agar tidak langsung loncat)
            e.preventDefault();

            // 2. Ambil ID tujuan dari atribut 'href' (misal: "#profil")
            const targetId = this.getAttribute('href');
            
            // 3. Cari elemen di HTML yang punya ID tersebut
            const targetSection = document.querySelector(targetId);

            // 4. Jika elemennya ada, gulir ke sana dengan mulus
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Ini bagian yang membuatnya mulus!
                    block: 'start' // Posisikan di bagian atas layar
                });
            }
        });
    });
});
