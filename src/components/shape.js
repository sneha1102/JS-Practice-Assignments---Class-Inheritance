class Shape {
  color = "red";

  constructor(color) {
    this.color = color;
  }
  drawShape = function () {};
  calculateArea = function () {};
}
// export class using module.exports
module.exports = Shape;
