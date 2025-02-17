const sumAll = function(start, end) {
  if(typeof start !== "number" || typeof end !== "number" || start < 0 ||
      end < 0) {
    return "ERROR";
  }
  if(start > end) {
    [start, end] = [end, start];
  }
  let sum = 0;
  while(start <= end) {
    sum += start++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
