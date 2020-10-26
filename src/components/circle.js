// import using require
const shape = require("shape");
// declare class
class circle extends shape {
  constructor() {
    super();
    this.color = "yellow";
  }
  calculateArea() {}
}

// export class using module.exports
module.exports = circle;
