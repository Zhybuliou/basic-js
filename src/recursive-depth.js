const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, level = 1) {
    let nArray = [];
    if(Array.isArray(arr)){
     for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        nArray = arr.flat();
        return this.calculateDepth(nArray,level+1);
      }
      
     }
     return level;
    }  
}
};