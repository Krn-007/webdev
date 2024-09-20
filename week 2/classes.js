const { log } = require("console");

class Rectangle {
    constructor(width, height, color){
        this.width = width
        this.height = height
        this.color = color
    }
    area(){
        const area = this.width * this.height
        return area;
    }

    paint(){
        console.log(`Painting with ${this.color}`);
    }
}

const rect = new Rectangle(5,6, "blue")
const area = rect.area()
console.log(area);