//uk tnh
let panjangTanah = 20.5;
let lebarTanah = 30.0;

//harga per-meter persegi
let hargaPerMeter = 1500000;

//luas
let luasTanah = panjangTanah * lebarTanah;

//harga tanpa ppn
let hargaTanpaPPN = luasTanah * hargaPerMeter;

//presentase ppn
let presentasePPN = 15;

//nominal ppn
let nominalPPN = hargaTanpaPPN * (presentasePPN / 100);

//total harga+ppn
let totalHarga = hargaTanpaPPN + nominalPPN;

//hasil
console.log("Luas Tanah: " + luasTanah.toFixed(2) + "m2");
console.log("Harga Tanah tanpa PPN: Rp " + hargaTanpaPPN.toLocaleString('id-ID'));
console.log("PPN (" + presentasePPN + "%): Rp" + nominalPPN.toLocaleString('id-ID'));
console.log("Total Harga yang Harus Dibayar: Rp" + totalHarga.toLocaleString('id-ID'));