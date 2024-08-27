class Shape {
    darw() {
        return `Drawing Shape`
    }
}

class Rectangle extends Shape {
    darw() {
        return `Drawing Rectangle `
    }        
}

const Shape1 = new Rectangle()
console.log(Shape1.darw());
