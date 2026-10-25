// menentukan kelulusan mahasiswa(minimal skor 60)

const skor1 = document.getElementById("input-angka1"); // ini jadi nilainya 'skor1' atau .value
const skor2 = document.getElementById("input-angka2"); // ini jadi nilainya 'skor2' atau .value
const skor3 = document.getElementById("input-angka3"); // ini jadi nilainya 'skor3' atau .value

const hasil = document.querySelector(".status");
const score = document.querySelector(".score")

const BOBOT1 = 0.35
const BOBOT2 = 0.35
const BOBOT3 = 0.3
const skorMin = 75

function send() {
  const semuaSkor = [skor1, skor2, skor3]

  if (semuaSkor.some((skor) => skor.value === "")) {
    alert("Masukkan semua skor anda!");
    return;
  }

  const jumlahSkor = skor1.value * BOBOT1 + skor2.value * BOBOT2 + skor3.value * BOBOT3;
  const lulus = jumlahSkor >= skorMin;
  const remidi = jumlahSkor >= 55;


  hasil.style.display = "block";
  score.style.display = "block";

  hasil.innerText = lulus ? "SELAMAT ANDA LULUS" : remidi ? "MAAF ANDA PERLU REMIDIAL" : "MAAF ANDA GAGAL";
  hasil.style.color = lulus ? "green" : remidi ? "orange" : "red";
  score.innerText = `Skor akhir Anda ${jumlahSkor.toFixed(2)}`;
}
