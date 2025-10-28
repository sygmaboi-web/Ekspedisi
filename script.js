// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Pilih semua link di navigasi
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // 2. Pilih semua section "halaman"
    const pages = document.querySelectorAll('.page-section');

    // 3. Buat fungsi untuk menampilkan halaman
    function showPage(pageId) {
        // Loop semua halaman
        pages.forEach(page => {
            // Cek apakah ID halaman ini = ID yang diklik
            if (page.id === pageId) {
                // Jika ya, tambahkan class 'active' untuk menampilkannya
                page.classList.add('active');
            } else {
                // Jika tidak, hapus class 'active' untuk menyembunyikannya
                page.classList.remove('active');
            }
        });
        
        // Selalu scroll ke atas setiap pindah halaman
        window.scrollTo(0, 0); 
    }

    // 4. Loop setiap link di navigasi
    navLinks.forEach(link => {
        // Tambahkan 'event listener' saat link di-klik
        link.addEventListener('click', function(e) {
            
            // 5. Mencegah perilaku default (agar tidak loncat ke #)
            e.preventDefault();

            // 6. Ambil ID tujuan dari 'href' (misal: "#profil")
            // Kita hapus tanda '#' nya dengan .substring(1)
            const targetId = this.getAttribute('href').substring(1); // Hasilnya: "profil"
            
            // 7. Panggil fungsi untuk menampilkan halaman
            showPage(targetId);
        });
    });

    // 8. (Opsional) Tampilkan halaman 'beranda' saat pertama kali dimuat
    // Ini sudah diatasi dengan menambah class 'active' di HTML #beranda
    // Tapi jika tidak ada, baris ini bisa dipakai:
    // showPage('beranda'); 
});
