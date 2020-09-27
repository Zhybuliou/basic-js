 
const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [], // get arr chine;
  getLength() {
    return this.arr.length; // length number;
  },
  addLink(value = ' ') { // get the string;
    this.arr.push(`( ${value} )`); // add this value in my chain;
    return this;  
  },
  removeLink(position) {
    if (isNaN(position) ) {// if is not number ;
      this.arr = [];
      throw new Error(); 
    }
    this.arr.splice(position-1,1); // remove value 
    return this;
  },
  reverseChain() {
    this.arr.reverse(); // reverse arry 
    return this;
  },
  finishChain() {
    let output = this.arr.slice().join('~~'); // copy arr and get string whit '~';
    this.arr = []; // clean  arr;
    return output;
  }
};
module.exports = chainMaker;

