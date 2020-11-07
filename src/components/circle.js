// import using require
const shape = require("./shape");
// declare class
class circle extends shape {
  calculateArea() {
    console.log("calculate area in circle");
  }
}

// export class using module.exports
module.exports = circle;
