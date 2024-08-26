class Lingkaran {
    constructor(jari_jari) {
        this.jari_jari = jari_jari;
    }

    luas() {
        return Math.PI * this.jari_jari * this.jari_jari;
    }

    keliling() {
        return 2 * Math.PI * this.jari_jari;
    }
}

class Tabung extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return this.luas() * this.tinggi;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.tinggi;
    }

    luasSelimut() {
        return this.keliling() * this.tinggi;
    }
}

class Kerucut extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return (1/3) * this.luas() * this.tinggi;
    }

    luasPermukaan() {
        return this.luas() + this.luasSelimut();
    }

    luasSelimut() {
        return Math.PI * this.jari_jari * Math.sqrt(this.jari_jari * this.jari_jari + this.tinggi * this.tinggi);
    }
}

class Bola extends Lingkaran {
    constructor(jari_jari) {
        super(jari_jari);
    }

    volume() {
        return (4/3) * Math.PI * Math.pow(this.jari_jari, 3);
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}

// Contoh penggunaan
let tabung = new Tabung(7,5, 50);
console.log("==================== TABUNG ===================")
console.log("Volume Tabung:", tabung.volume() + " cm3");
console.log("Luas Permukaan Tabung:", tabung.luasPermukaan() + " cm2");
console.log("Luas Selimut Tabung:", tabung.luasSelimut()+ " cm2");

let kerucut = new Kerucut(10, 40); //jari" 10, tinggi 40
console.log("==================== KERUCUT ===================")
console.log("Volume Kerucut:", kerucut.volume()+ " cm3");
console.log("Luas Permukaan Kerucut:", kerucut.luasPermukaan()+ " cm2");
console.log("Luas Selimut Kerucut:", kerucut.luasSelimut()+ " cm2");

let bola = new Bola(15); //jari" 15
console.log("==================== BOLA ===================")
console.log("Volume Bola:", bola.volume()+ " cm3");
console.log("Luas Permukaan Bola:", bola.luasPermukaan()+ " cm2");