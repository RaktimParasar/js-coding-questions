// Q.

/**
 * Write a function createCounter. It should accept an initial integer init.
 * It should return an object with three functions.The three functions are:
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 */

var createCounter = function (init) {
  let currentValue = init;
  return {
    increment() {
      return (currentValue += 1);
    },
    reset() {
      return (currentValue = init);
    },
    decrement() {
      return (currentValue -= 1);
    },
  };
};

const counter = createCounter(4);
console.log(`Increment: ${counter.increment()}`);
console.log(`Reset: ${counter.reset()}`);
console.log(`Decrement: ${counter.decrement()}`);
