// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIKA UNTUK PINDAH HALAMAN (FADE TRANSITION) ---
    
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page-section');

    function showPage(pageId) {
        // Loop semua halaman, sembunyikan semua
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Tampilkan halaman yang dituju
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Selalu scroll ke atas setiap pindah "halaman"
        window.scrollTo(0, 0); 
    }

    // Tambahkan event listener untuk setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // "profil"
            showPage(targetId);
            
            // Juga ubah hash di URL (opsional tapi bagus)
            window.location.hash = targetId;
        });
    });

    // Cek hash di URL pas pertama kali buka
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        if (document.getElementById(hashId)) {
            showPage(hashId);
        } else {
            showPage('beranda'); // Default
        }
    } else {
        // Tampilkan beranda jika tidak ada hash
        showPage('beranda'); 
    }

    
    // --- 2. LOGIKA BARU UNTUK MODAL (POP-UP) PROFIL ---
    
    const modalOverlay = document.getElementById('profilModal');
    const modalContent = document.querySelector('.modal-content');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const profilTriggers = document.querySelectorAll('.profil-trigger');

    // Ambil elemen di dalam modal
    const modalFoto = document.getElementById('modalFoto');
    const modalNama = document.getElementById('modalNama');
    const modalPeran = document.getElementById('modalPeran');
    const modalSekolah = document.getElementById('modalSekolah');
    const modalTelp = document.getElementById('modalTelp');

    // Loop setiap kartu profil dan tambahkan event listener
    profilTriggers.forEach(card => {
        card.addEventListener('click', function() {
            // 1. Ambil data dari 'data-' attributes
            const nama = this.dataset.nama;
            const foto = this.dataset.foto;
            const peran = this.dataset.peran;
            const sekolah = this.dataset.sekolah;
            const telp = this.dataset.telp;

            // 2. Masukkan data ke dalam modal
            modalFoto.src = foto;
            modalNama.textContent = nama;
            modalPeran.textContent = peran;
            modalSekolah.textContent = "Asal Sekolah: " + sekolah;
            modalTelp.textContent = "No. Telp: " + telp;

            // 3. Tampilkan modal dengan transisi
            modalOverlay.style.display = 'flex'; // Tampilkan overlay
            setTimeout(() => { // Kasih jeda dikit biar transisi CSS jalan
                modalOverlay.style.opacity = '1';
                modalContent.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10);
        });
    });

    // Fungsi untuk menutup modal
    function closeModal() {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'translate(-50%, -50%) scale(0.9)';
        
        // Tunggu transisi selesai baru sembunyikan
        setTimeout(() => { 
            modalOverlay.style.display = 'none';
        }, 300); // 300ms (sesuai durasi transisi di CSS)
    }

    // Tambahkan event listener untuk tombol close
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Tutup modal jika klik di luar (di overlay-nya)
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

});
