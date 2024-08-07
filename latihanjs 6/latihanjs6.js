//  Deklarasi dan Akses Array

const perkenalan =['abduh' , '15' , 'jakarta']
console.log(perkenalan);

console.log(perkenalan[0]);
console.log(perkenalan[1]);
console.log(perkenalan[2]);

// Mengubah Elemen Array

perkenalan[0] = 'hatim';
console.log(perkenalan);

// Menghapus Elemen Array

delete perkenalan[1];
console.log(perkenalan);

// Menggabungkan Array

const angka1 = ['1' , '2' , '3']
const angka2 = ['4' , '5' , '6']
const angka3 = angka1.concat(angka2);
console.log(angka3);

// Mencari Elemen Array  

const perkenalan1 = ['abduh' , '15' , 'jakarta']
console.log(perkenalan.indexOf('jakarta'));

//  Mengurutkan Array

var numbers = [34, 7, 23, 32, 5];
numbers = numbers.sort(function(a, b) { return a-b ;});
console.log(numbers);

//  Menghitung Banyak Data dalam Array

const data =[34, 7, 23, 32, 5]
console.log(data.length);





