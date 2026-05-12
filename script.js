// Konfigurasi Animasi Halus ala Tema Premium
AOS.init({
    duration: 1200,          // Durasi animasi diperlambat agar lebih elegan
    easing: 'ease-out-cubic',// Efek pergerakan lebih dinamis
    once: false,             // Animasi akan terus terpicu saat di-scroll naik/turun
    mirror: true,            // Animasi memantul saat di-scroll kembali
    offset: 50               // Animasi dimulai lebih awal saat elemen mendekati layar
});

const coverPage = document.getElementById("cover-page");
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

function openInvitation() {
    // Efek transisi ke atas
    coverPage.style.transform = "translateY(-100vh)";
    
    // Buka kunci scroll
    document.body.style.overflow = "auto";
    
    // Putar musik
    bgMusic.play().catch(error => {
        console.log("Autoplay dicegah oleh browser, tamu harus klik manual.");
    });
    isPlaying = true;
    
    // Tampilkan tombol musik dengan efek perlahan
    musicBtn.classList.remove("hide");
    musicBtn.style.opacity = "1";
    
    // Refresh AOS untuk memastikan elemen di konten utama ter-load animasinya
    setTimeout(function() {
        AOS.refresh();
    }, 500);
}

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-compact-disc"></i>';
        musicBtn.style.animation = "none";
    } else {
        bgMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-compact-disc fa-spin"></i>';
    }
    isPlaying = !isPlaying;
}
