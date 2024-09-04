class Karyawan {
    constructor(nama, gaji) {
      this._nama = nama;
      this._gaji = gaji;
    }
  
    getNama() {
      return this._nama;
    }
  

    setNama(nama) {
      this._nama = nama;
    }
  

    getGaji() {
      return this._gaji;
    }
  

    setGaji(gaji) {
      this._gaji = gaji;
    }
  }
  
  class Manajer extends Karyawan {
    constructor(nama, gaji) {
      super(nama, gaji);
      this.laporan = [];
    }
  
  
    buatLaporan(laporan) {
      this.laporan.push(laporan);
    }
  
 
    getLaporan() {
      return this.laporan;
    }
  }
  

  const manajer = new Manajer("Adit", 10000000);
  

  console.log(manajer.getNama());
  manajer.setNama("yazid");
  console.log(manajer.getNama());
  
  console.log(manajer.getGaji());
  manajer.setGaji(12000000);
  console.log(manajer.getGaji());
  
 
  manajer.buatLaporan("Laporan Bulanan");
  console.log(manajer.getLaporan());