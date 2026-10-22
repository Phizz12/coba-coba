// menentukan kelulusan mahasiswa(minimal skor 60)

const skor1 = document.getElementById("input-angka1"); // ini jadi nilainya 'skor1' atau .value
const skor2 = document.getElementById("input-angka2"); // ini jadi nilainya 'skor2' atau .value
const skor3 = document.getElementById("input-angka3"); // ini jadi nilainya 'skor3' atau .value

const hasil = document.querySelector(".status");
const score = document.querySelector(".score")

function send() {
  if ([skor1, skor2, skor3].some((skor) => skor.value === "")) {
    alert("Masukkan semua skor anda!");
    return;
  }

  const jumlahSkor = skor1.value * 0.35 + skor2.value * 0.35 + skor3.value * 0.30;
  const lulus = jumlahSkor >= 60;

  hasil.style.display = "block";
  score.style.display = "block";

  hasil.innerText = lulus ? "SELAMAT ANDA LULUS" : "MAAF ANDA GAGAL";
  hasil.style.color = lulus ? "green" : "red";
  score.innerText = `Skor akhir Anda ${jumlahSkor.toFixed(2)}`;
}
