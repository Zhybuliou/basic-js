const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes;
    let additionRepeatTimes = options.additionRepeatTimes;
    let addition = options.addition;
    if(addition === false){
      addition = 'false';
    }else if(addition === null){
      addition = 'null';
    }

    let separator = options.separator;
   if(!separator){
      separator = '+';
    }  

    let additionSeparator = options.additionSeparator;
    
    if(!additionSeparator){
      additionSeparator = '+';
    }
    
    if(!addition){
      return (str + separator).repeat(repeatTimes).slice(0,-(separator.length));
    }else if(addition && repeatTimes && additionRepeatTimes){
      return (str + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0,-(additionSeparator.length)) + separator).repeat(repeatTimes).slice(0,-(separator.length));
    }else {
      return str + addition;
    }
    

  // remove line with error and write your code here addition: '+', additionRepeatTimes: 1
};
  