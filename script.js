// Inisialisasi Animasi AOS
AOS.init({
    duration: 1000,
    once: false, // Animasi bisa berulang kalau discroll naik turun
});

// Fitur Buka Undangan (Slide Up Cover)
const coverPage = document.getElementById("cover-page");
const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let isPlaying = false;

function openInvitation() {
    // 1. Geser cover ke atas
    coverPage.style.transform = "translateY(-100vh)";
    
    // 2. Kembalikan scroll body yang tadinya terkunci
    document.body.style.overflow = "auto";
    
    // 3. Putar musik
    bgMusic.play();
    isPlaying = true;
    
    // 4. Tampilkan tombol musik yang tadinya disembunyikan
    musicBtn.classList.remove("hide");
}

// Fitur Toggle Play/Pause Musik
function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-compact-disc"></i>';
    } else {
        bgMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-compact-disc fa-spin"></i>';
    }
    isPlaying = !isPlaying;
}
