// declare class

// export class using module.exports
class shape {
  constructor() {
    this.color = "green";
  }
  drwaShape() {}
  calculateArea() {
    console.log("shape area");
  }
}
module.exports = shape;
