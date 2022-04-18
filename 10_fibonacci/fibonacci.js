const fibonacci = function(n) {
  if(n < 0) {
    return "OOPS";
  }
  for(let i = 1, a = 1, b = 1;; i++) {
    if (i == n) {
      return (i % 2 ? a : b);
    }
    if(i % 2) {
      a += b;
    }
    else {
      b += a;
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;
