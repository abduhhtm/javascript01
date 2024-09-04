// skilful 1
class Pelajar {
    constructor (nama, sekolah) {
        this. _nama = nama
        this._sekolah = sekolah
    }
    setnama (nama) {
        this._nama = nama;
    }

    setsekolah (sekolah) {
        this._sekolah = sekolah;
    }

    getnama () {
        return this._nama
    }

    getsekolah () {
        return this._sekolah
    }

    belajar () {
        retrun `${this.getNama()}; belajar di ${this.getSekolah()}`
    }
}

const pelajar = new Pelajar("Alpha", "Skilvul");
console.log(pelajar.belajar())
// batas 


// skilful 2
class PersegiPanjang {
    constructor (Panjang, lebar) {
        this.Panjang = Panjang
        this.lebar = lebar
    }
    luas () {
        const hasil = this. panjang *  this.lebar
        return hasil;

    }
    keliling() {
        const hasil = 2 * (this.panjang + this.lebar);
        return hasil;
    } 
}

const PersegiPanjang = new PersegiPanjang(4,3);
console.log("luas:", PersegiPanjang.luas())
console.log("kelling:", PersegiPanjang.keliling())
// batas
