// Q. Given an integer n, return a counter function. This counter function initially
// returns n and then returns 1 more than the previous value every subsequent time it
// is called (n, n + 1, n + 2, etc).

// Solution

var createCounter = function (n) {
  // Declare a variable 'count' and initialize it with the initial value 'n'
  let count = n;

  return function counter() {
    // Store the current value of 'count' in a variable 'currentCount'
    const currentCount = count;

    // Increment 'count' by 1 to prepare for the next call
    count++;

    // Return the stored 'currentCount'
    return currentCount;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
