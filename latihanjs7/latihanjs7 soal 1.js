let obj = {
    key:'value'
};
const person = {
    nama:"abduh",
    age: 15,
    address:{
        city: "jakarta",
        country: "Indonesia",
    },
};
console.log(person.address.city);
console.log(person.city)

console.log(obj['key']);
console.log(obj.key);

obj.key ="car";
console.log(obj['key']);
obj.key ="cars";
console.log(obj['key']);

person.age = person.age+5
console.log(person['age']);

delete person.city;
console.log(person.city);




