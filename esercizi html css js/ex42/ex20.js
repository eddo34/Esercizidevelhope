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
    static calculate(geomParam){
     if (geomParam instanceof Circle) {
        return( 2 * Math.PI * geomParam.radius)
     } else if (geomParam instanceof Rectangle) {
        return( geomParam.height * geomParam.width)
     } else if (geomParam instanceof Square) {
        return( geomParam.side * geomParam.side)
     }
    }
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));