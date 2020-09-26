const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {

  // remove line with error and write your code here
  let output = [];
  f = 0;

    for( let z = 0; z < arr.length; z++){
      if( arr[z] === '--discard-prev'){
           output[f] != arr[z];
           output.splice( z - 1, 2);
      }
      else if( arr[z] === '--discard-next'){
           output[f] != arr[z];
           output.splice(z,2);
  
           
      }
      else if( arr[z] === '--double-prev'){
           output[f] != arr[z];
           output[f] = arr[z-1];
      }
      else if( arr[z] === '--double-next'){
           output[f] != arr[z];
           output[f] = arr[z+1];
      }
      else{output[f] = arr[z];}
      f++;
    }
    return output.filter(function(element){
       return element !== undefined;
      });

    
};
