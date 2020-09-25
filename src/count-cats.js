const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  // remove line with error and write your code here
  var arrCats = [];
  var z = 0;
  for(let i = 0; i < matrix.length; i++){
      for(let x = 0; x < matrix[i].length; x++){
         if(matrix[i][x] === '^^'){
            arrCats[z++] = matrix[i][x];   
         }
      }
  }
if(arrCats.length > 0){return arrCats.length}else{return 0};
};

