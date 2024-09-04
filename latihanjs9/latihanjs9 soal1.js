class mobil {
    constructor (merk, tahun){
        var _merk = merk
        var _tahun = tahun   
    
    this.setmerk = function (merk) {
        _merk = merk;
    };

    this.getmerk = function () {
        return _merk;
    };

    this.settahun = function (tahun) {
        _tahun = tahun;
    };

    this.gettahun = function () {
        return _tahun;

    }
  }
}

var mobil1 = new mobil("BMW", 2013)
mobil1.setmerk("Jagwar");
mobil1.settahun("2015")
console.log(mobil1.getmerk());
console.log(mobil1.gettahun());

