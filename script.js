const form = document.getElementById("rsvpForm");
const hint = document.getElementById("hint");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const jumlah = document.getElementById("jumlah").value;

  if (!nama) return;

  // Ganti nomor WA tujuan di bawah ini (format internasional tanpa +)
  const nomorWA = "6281234567890";

  const pesan = encodeURIComponent(
    `Assalamualaikum, saya ${nama} ingin konfirmasi hadir. Jumlah tamu: ${jumlah}.`
  );

  const url = `https://wa.me/${nomorWA}?text=${pesan}`;
  hint.textContent = "Membuka WhatsApp…";
  window.open(url, "_blank");
});
