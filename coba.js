// menentukan bilangan bulat ganjil atau genap

const bil = document.getElementById("input-angka"); // ini jadi nilainya 'bil' atau .value()
// bil.value()
const hasil = document.querySelector(".result")

function send() {
  if (bil.value === "") {
    alert("please input the number!");
  } else {
    hasil.style.display = "block"
    const ganjil = bil.value % 2 != 0;

    hasil.innerText = ganjil ? "Bilangan Ganjil":"Bilangan Genap"
    hasil.style.color = ganjil ? "red": "green"
  }
}
