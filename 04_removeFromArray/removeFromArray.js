const removeFromArray = function(arr, ...args) {
  for(argument of args) {
    for(i in arr) {
      if(argument === arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
