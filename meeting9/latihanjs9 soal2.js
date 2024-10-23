class Pesawat {
    constructor(jenis, kecepatan) {
      this._jenis = jenis;
      this._kecepatan = kecepatan;
    }
  
    terbang() {
      return `${this._jenis} sedang terbang dengan kecepatan ${this._kecepatan}`;
    }
  }
  
  class Jet extends Pesawat {
    constructor(jenis, kecepatan, kapasitasBahanBakar) {
      super(jenis, kecepatan);
      this._kapasitasBahanBakar = kapasitasBahanBakar;
    }
  
    isiBahanBakar() {
      return `Mengisi bahan bakar sebanyak ${this._kapasitasBahanBakar}`;
    }
  }
  
  // Membuat instance objek Jet
  const jet = new Jet("F-15 EX", "1900 km/jam", "4500 liter");
  const pesawat = new Pesawat("Pesawat Terbang", "1200 km/jam");
  
  // Menguji metode terbang() dan isiBahanBakar()
  console.log(jet.terbang()); 
  console.log(jet.isiBahanBakar()); 
  console.log(pesawat.terbang());