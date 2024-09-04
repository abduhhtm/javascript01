class AkunBank {
    constructor(saldo, setoran) {
      this._saldo = saldo;
      this._setoran = setoran;
    }
  
    setSaldo(saldo) {
      this._saldo = saldo;
    }
  

    setSetoran(setoran) {
      this._setoran = setoran;
    }
  

    getSaldo() {
      if (this._saldo < 0) {
        return null;
      } else {
        return this._saldo + this._setoran;
      }
    }
  
   
    getSetoran() {
      return this._setoran;
    }
  }
  
 
  let akun = new AkunBank(1000, 2000);
  console.log(akun.getSaldo());
  