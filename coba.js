// menentukan bilangan bulat ganjil atau genap

const skor1 = document.getElementById("input-angka1"); // ini jadi nilainya 'skor1' atau .value
const skor2 = document.getElementById("input-angka2"); // ini jadi nilainya 'skor2' atau .value
const skor3 = document.getElementById("input-angka3"); // ini jadi nilainya 'skor3' atau .value

const hasil = document.querySelector(".status");
const score = document.querySelector(".score")

function send() {
  if ([skor1, skor2, skor3].some(bil => bil.value === "")) {
    alert("Masukkan semua skor anda!");

  } else {
    const nilaiAkhir1 = skor1.value * 0.35;
    const nilaiAkhir2 = skor2.value * 0.35;
    const nilaiAkhir3 = skor3.value * 0.30;
    const jumlahSkor = nilaiAkhir1 + nilaiAkhir2 + nilaiAkhir3;

    hasil.style.display = "block";
    score.style.display = "block";

    if (jumlahSkor >= 60) {
      hasil.innerText = "SELAMAT ANDA LULUS";
      hasil.style.color = "green";
      score.innerText  = `Skor akhir Anda ${jumlahSkor}`;
    } else {
      hasil.innerText = "MAAF ANDA GAGAL";
      hasil.style.color = "red";
      score.innerText  = `Skor akhir Anda ${jumlahSkor}`;
    }
  }
}
