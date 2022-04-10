const leapYears = function(year) {
  if(!(year % 400)) {
    return true;
  }
  if(!(year % 100)) {
    return false;
  }
  if(!(year % 4)) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
