const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  // remove line with error and write your code here
  var arr = ['winter','spring','summer','autumn'];
  var err = 'Unable to determine the time of year!';
  if(!date){ return err};
  if (isNaN(date.valueOf())){throw new Error();}
  if(date.getMonth() === 1 || date.getMonth() === 0 || date.getMonth() === 11){
    return arr[0];
  }else if(date.getMonth() === 10 || date.getMonth() === 8 || date.getMonth() === 9){
    return arr[3];
  }else if(date.getMonth() === 7 || date.getMonth() === 6 || date.getMonth() === 5){
    return arr[2];
  }else if(date.getMonth() === 4 || date.getMonth() === 3 || date.getMonth() === 2){
    return arr[1];
  }else{return false;}
};

