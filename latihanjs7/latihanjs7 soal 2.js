const penyimpan = {
    nama:"abduh",
    age: "15",
    address:{
        city: "jakarta",
        country: "Indonesia",
    },
};

console.log(penyimpan);

const {nama, age, address} = penyimpan;
console.log(nama, age, address);

const {age:a, nama:n,} = penyimpan;
console.log(a, n);
