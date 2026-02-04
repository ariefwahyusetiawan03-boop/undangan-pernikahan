// Ambil nama tamu dari URL, contoh:
// .../index.html?tamu=Rina
const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");

const guestEl = document.getElementById("guestName");
if (tamu && tamu.trim()) guestEl.textContent = tamu.trim();

// Tombol Open Invitation (nanti kita arahkan ke halaman berikutnya)
document.getElementById("openBtn").addEventListener("click", () => {
  // sementara: kasih efek kecil aja
  alert("Next: kita buat halaman isi undangan 😊");
});

// Tombol WA (ganti nomor kamu)
const nomorWA = "6281234567890"; // ganti
const waBtn = document.getElementById("waBtn");
const namaTamu = (guestEl.textContent || "Tamu").trim();
const pesan = encodeURIComponent(`Halo, saya ${namaTamu} ingin tanya undangan Arief & Eka.`);
waBtn.href = `https://wa.me/${nomorWA}?text=${pesan}`;
