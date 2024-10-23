class Kendaraan {
    constructor(kecepatan) {
      var _kecepatan = kecepatan;
  
      this.setKecepatan = function (kecepatan) {
        _kecepatan = kecepatan;
      };
      this.getKecepatan = function () {
        if (_kecepatan < 0) {
          return (kecepatan = 0);
        } else {
          return (_kecepatan = kecepatan);
        }
      };
    }
  }
  
  let kendaraan = new Kendaraan(100)
  console.log(kendaraan.getKecepatan());