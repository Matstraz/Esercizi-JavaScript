class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  constructor(width, height, radius){
    this.width = width;
    this.height = height;
    this.radius = radius;
  }
  
  static calculate(figure){
    if(figure.side){
      return figure.side**2 ;
    }else if(figure.height){
      return figure.height * figure.width;
    }else if(figure.radius){
      return figure.radius**2 * Math.PI
    }else{
      return `I don't know this figure!` 
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));