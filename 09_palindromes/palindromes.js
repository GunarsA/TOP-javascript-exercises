const palindromes = function (string) {
  for(let left = 0, right = string.length - 1;; left++, right--) {
    while(!string.charAt(left).match(/[a-z]/i)) {
      left++;
    }
    while(!string.charAt(right).match(/[a-z]/i)) {
      right--;
    }
    if(left >= right) {
      return true;
    }
    if(string.charAt(left).toLowerCase() !== string.charAt(right).toLowerCase()) {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = palindromes;
