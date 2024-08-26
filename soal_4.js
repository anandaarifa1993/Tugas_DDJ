//definisi
const SukuPertama = 4;
const rasio = 3;
const jumlahSuku = 10;

//variabel untuk menyimpan
let totalJumlah = 0;

//perulangan

for (let i = 0; i < jumlahSuku; i++){

    const suku1 = SukuPertama * Math.pow(rasio, i);

    totalJumlah += suku1

}
//hasil
console.log("Total jumlah 10 suku pertama dari deret geometri yaitu : ", totalJumlah);