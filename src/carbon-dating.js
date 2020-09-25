const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
   if ((parseInt(sampleActivity) > 0 ) && typeof sampleActivity === "stirng" && parseFloat(sampleActivity) > 0 ){return Math.ceil( Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity) / (0.693/HALF_LIFE_PERIOD)));} else {return false;}
};
