function registerUser(nama, userType){
    if (userType === 'Vip') {
        return `Welcome VIP ${nama}`;

    } else {
        return `Welcome ${nama}`;
    }
}

function applyDiscount(userType, purchaseAmount) {
    let diskon = 0;
    if (userType === 'Vip') {
        diskon = 20;
} else {
    diskon = 10;
  }
  return purchaseAmount - (purchaseAmount * diskon / 100);

}
// hasil dari pendaftaran
console.log(registerUser('nina', 'Vip'));
console.log(registerUser('nina'));
// hasil dari diskon
console.log(applyDiscount('Vip', 200));
console.log(applyDiscount('non Vip',100));
