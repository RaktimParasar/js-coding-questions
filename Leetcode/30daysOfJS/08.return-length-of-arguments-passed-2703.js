// Q. Write a function argumentsLength that returns the count of arguments passed to it.

// Solution-1
var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3));
console.log(argumentsLength(5));
console.log(argumentsLength({}, null, "3"));

// Solution-2
var argumentsLength2 = function () {
  return arguments.length;
};

console.log(argumentsLength2(1, 2, 3));
console.log(argumentsLength2(5));
console.log(argumentsLength2({}, null, "3"));

// Solution-3
var argumentsLength3 = function (...args) {
  let i = 0;
  while (args[i] !== undefined) i++;
  return i;
};

console.log(argumentsLength3(1, 2, 3));
console.log(argumentsLength3(5));
console.log(argumentsLength3({}, null, "3"));
