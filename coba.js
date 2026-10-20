// menentukan bilangan bulat ganjil atau genap

const bil = document.getElementById("input-angka"); // ini jadi nilainya 'bil' atau .value()
// bil.value()
const show = document.body;
const container = document.createElement('h3');

function send() {
  if (bil.value === "") {
    alert("please input the number!");

  } else {
    const sisa = bil.value % 2;

    if (sisa != 0) {
      const status = container
      status.innerText = "Bilangan Ganjil"; 
      show.appendChild(status).style.color = "red";

    } else if (sisa === 0) {
      const status = container
      status.innerText = "Bilangan Genap";
      show.appendChild(status).style.color = "green";
    }
  }
}
