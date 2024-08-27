class Vehicle {
    constructor (brand){
        this.brand = brand
    }
    start () {
        return `${this.brand} Vehicle is starting`
    }
} 
class Car extends Vehicle{
    constructor (model,brand){
        super (brand)
        this.model = model
    }
    start() {
        return `${this.model}  is starting`
    }
}

const vehicle = new Car("mercedes benz")
console.log(vehicle.start());
