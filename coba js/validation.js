function send() {
  const input1 = skor1.value;
  const input2 = skor2.value;
  const input3 = skor3.value;

  const syarat = [
    { kondisi: input1 === "", pesan: "Masukkan skor ujian 1" },
    { kondisi: input2 === "", pesan: "Masukkan skor ujian 2" },
    { kondisi: input3 === "", pesan: "Masukkan skor ujian 3" },
  ];

  const none = syarat.filter((s) => s.kondisi);

  if (none.length === syarat.length) {
    alert("Masukkan skor ujian anda!");
    return;
  }

  if (none.length > 0) {
    const notif = none.map((s) => s.pesan).join("\n");
    alert(notif);
    return;
  }

  //   memanggil fungsi hitung skor
  hitungSkor();
}
