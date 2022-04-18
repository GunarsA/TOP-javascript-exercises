const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  if(a.length === 0) {
    return 0;
  }
	return a.reduce((prev, curr) => {
    return prev + curr;
  });
};

const multiply = function(a) {
  return a.reduce((prev, curr) => {
    return prev * curr;
  });
};

const power = function(a, b) {
	return a ** b; 
};

const factorial = function(a) {
  let factorial = 1;
	for(let i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
