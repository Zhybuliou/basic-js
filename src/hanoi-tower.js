const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  
  let disksTurns = (2**disksNumber) - 1;
  let timeDiskTurnsSecond = ((turnsSpeed/60)/60);
  let time = Math.floor(disksTurns / timeDiskTurnsSecond);

   let output = {
     seconds: time,
     turns: disksTurns
   }
   return output;
};
