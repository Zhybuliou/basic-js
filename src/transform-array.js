const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
 // remove line with error and write your code here
 let output = [];
 
  if(Array.isArray(arr)){
   for( let z = 0; z < arr.length; z++){
     if( arr[z] === '--discard-next'){
          if(((arr[z + 2]) !== '--discard-prev') || ((arr[z + 2]) !== '--double-prev')){
               z += 2;
          }else{ z += 2;}
 
          
     }
     else if( arr[z] === '--discard-prev'){
          output.pop();
     }
     else if( arr[z] === '--double-next'){
          if( arr[z + 1] !== undefined){
          output.push(arr[z + 1]);
     }
     }
     else if( arr[z] === '--double-prev'){
           if( arr[z - 1] !== undefined){
          output.push(arr[z-1]);}
     }

     else{output.push(arr[z]);}

   }
   return output;
}
else{
     throw new Error();
}
    
};
