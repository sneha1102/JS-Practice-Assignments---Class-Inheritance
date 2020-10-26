// import using require
const shape = require("shape");
// declare class
class circle extends shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("circle area");
  }
}

// export class using module.exports
module.exports = circle;
