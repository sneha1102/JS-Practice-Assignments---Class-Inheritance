class Shape {
  color = null;

  constructor(color) {
    this.color = color;
  }
  drawShape = function () {};
  calculateArea = function () {};
}
// export class using module.exports
module.exports = Shape;
