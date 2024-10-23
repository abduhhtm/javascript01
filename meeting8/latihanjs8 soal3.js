class Person {
    constructor (name,){
    this.name = name
  }

  introduce() {
    return ` Hi my name is ${this.name} `
  }
}
 class Employee extends Person {
    constructor (name, position){
      super(name)
        this.position = position
    }
    introduce() {
        return `Hi my name is abduh and i am an ${this.position} `
    }
 }
  class Manager extends Employee {
    introduce() {
      return `Hi,my name is Abduh ${this.name}, i am an ${this.position},and i manage a team `
    }
  }

 const Orang = new Person ("abduh")
 console.log(Orang.introduce());

 const udin = new Employee ("abduh", "Pengusaha") 
 console.log(udin.introduce());

 const ilyas = new Manager ("abduh", "Pengusaha")
 console.log(ilyas.introduce());
 
 
 