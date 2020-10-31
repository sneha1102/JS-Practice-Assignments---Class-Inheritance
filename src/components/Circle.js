const Shape = require("./shape");
// declare class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea = function () {};
}

// export class using module.exports
module.exports = Circle;
