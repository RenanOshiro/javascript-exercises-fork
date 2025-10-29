const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((sum, current) => {
   return sum + current;
  }, 0)
};

const multiply = function(a) {
  return a.reduce((mult, current) => {
      return mult * current;
    }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) {return 1};
  fact = 1;
	for (let i = a; i >= 1; i--) {
    fact *= i;
  }
  return fact;
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
