const repeatString = function(stringToRepeat, repeatCount) {
  if(repeatCount < 0) {
    return "ERROR";
  }
  let combinedString = "";
  for(let i = 0; i < repeatCount; i++) {
    combinedString += stringToRepeat;
  }
  return combinedString
};

// Do not edit below this line
module.exports = repeatString;
