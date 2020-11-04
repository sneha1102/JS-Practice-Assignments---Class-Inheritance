class Shape {
  constructor() {
    super();
    this.color = "red";
    this.drawShape = this.drawShape.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  drawShape = function () {};
  calculateArea = function () {};
}
// export class using module.exports
module.exports = Shape;
