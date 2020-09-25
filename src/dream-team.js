const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  // remove line with error and write your code here
  var arr = [];
  var i = 0;
if(Array.isArray(members) === true){
  members.forEach(element => {
      if(typeof element === "string"){
         let elem = element.trim().toUpperCase();
         arr[i] = elem[0];
         i++;
      }else{
        return false;
      }
  });
    return arr.sort().join('');
}else{return false};
};
