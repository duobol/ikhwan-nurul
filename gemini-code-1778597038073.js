// Konfigurasi Tanggal Pernikahan (Format: Tahun, Bulan (0-11), Tanggal, Jam, Menit)
// Bulan dimulai dari 0 (0 = Januari, 11 = Desember)
const weddingDate = new Date(2026, 11, 20, 8, 0, 0).getTime();

// Fitur Hitung Mundur (Countdown)
const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "<h3>Acara Telah Dimulai</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);

// Fitur Salin Nomor Rekening
function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin: " + text);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
}

// Fitur Putar/Jeda Musik
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-compact-disc"></i>';
    } else {
        bgMusic.play();
        musicBtn.innerHTML = '<i class="fas fa-compact-disc fa-spin"></i>';
    }
    isPlaying = !isPlaying;
});

// Auto-play musik saat user scroll pertama kali (kebijakan browser)
document.body.addEventListener('click', function() {
    if(!isPlaying) {
        bgMusic.play();
        isPlaying = true;
        musicBtn.innerHTML = '<i class="fas fa-compact-disc fa-spin"></i>';
    }
}, { once: true });