// Q.

/**
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same inputs.
 * Instead it will return a cached value.
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 *  sum accepts two integers a and b and returns a + b.
 *  fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 *  factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

// Solution

function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    console.log("cache", cache);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log("first", memoizedFn(2, 3));
console.log("second", memoizedFn(2, 3));
console.log("third", memoizedFn(4, 1));
console.log("callCount", callCount);

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(5));

const fib = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
const memoFib = memoize(fib);
console.log(memoFib(5));
