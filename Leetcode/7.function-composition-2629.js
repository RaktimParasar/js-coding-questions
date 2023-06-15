// Q.

/**
 * Given an array of functions [f1, f2, f3, ..., fn],
 * return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input
 * and returns one integer as output.
 */

// Solution 1
var compose = function (functions) {
  return (x) => functions.reduceRight((acc, f) => f(acc), x);
};

// Solution 2
var compose2 = function (functions) {
  return function (x) {
    let result = x;
    // Iterate over the functions in reverse order
    for (let i = functions.length - 1; i >= 0; i--) {
      const fn = functions[i];
      // Apply the current function to the result
      result = fn(result);
    }
    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));

const fn2 = compose2([(x) => x + 1, (x) => 2 * x]);
console.log(fn2(4));
