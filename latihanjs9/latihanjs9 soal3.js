class karyawan {
    constructor (nama, jabatan, gaji) {
        this._nama = nama
        this._jabatan = jabatan
        this._gaji = gaji
    }

    setnama (nama) {
        this._nama = nama
    }

    setjabatan (jabatan) {
        this._jabatan = jabatan
    }

    setgaji (gaji) {
        this._gaji = gaji
    }

    getnama () {
        return this._nama
    }

    getjabatan () {
        return this._jabatan
    }

    getgaji () {
        return this._gaji
    }
}

class Manajer extends karyawan {
    constructor (nama, jabatan, gaji, tunjangan) {
        super (nama, jabatan, gaji)
        this._tunjangan = tunjangan
    } 

    settunjangan (tunjangan) {
        this._tunjangan = tunjangan
    }

    gettunjangan () {   
        return this._tunjangan
    }

    beriTunjangan () {
        return `karyawan bernama pak ${this._nama} Dengan jabatan ${this._jabatan} Berupa gaji sebesar ${this._gaji} dan tunjangan sebesar ${this._tunjangan}`
    }
}

let karyawan1 = new Manajer('fuat', 'Manajer', '6.000.000', '3.000.000');
console.log(karyawan1.beriTunjangan());
