const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
    let direct = true;
    let reverse = false;
  }
  encrypt(text, key,done = 1) {
    // remove line with error and write your code here
    let result = '';
    let keys = key.toUpperCase();
    let go = text.toUpperCase();

    for(let i = 0, j = 0; i < go.length; i++,j++){
      if (j >= keys.length) j = 0;
      if( 65 <= go.charCodeAt(i) && go.charCodeAt(i) <= 90 ){
              let sum = go.charCodeAt(i) + keys.charCodeAt(j)-65;
              if( sum > 90){
                result += String.fromCharCode(sum-26);
              }else{
                result += String.fromCharCode(sum);
              }
      }else{
        result += String.fromCharCode(go.charCodeAt(i));
        j--;
      }
    }
    return result;
    
  }    
  decrypt(text, key,done = -1) {
    // remove line with error and write your code here
    let result = '';
    let keys = key.toUpperCase();
    let go = text.toUpperCase();

    for(let i = 0, j = 0; i < go.length; i++,j++){
      if (j >= keys.length) j = 0;
      if( 65 <= go.charCodeAt(i) && go.charCodeAt(i) <= 90 ){
              let sum = go.charCodeAt(i) - keys.charCodeAt(j)+65;
              if( sum < 65){
                result += String.fromCharCode(sum+26);
              }else{
                result += String.fromCharCode(sum);
              }
      }else{
        result += String.fromCharCode(go.charCodeAt(i));
        j--;
      }
    }
    return result;
   
    }

  }

module.exports = VigenereCipheringMachine;
