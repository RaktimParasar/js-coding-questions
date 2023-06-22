// Q.

/**
 * Given two promises promise1 and promise2, return a new promise.
 * promise1 and promise2 will both resolve with a number. The returned promise
 * should resolve with the sum of the two numbers.
 */

// Solution-1
var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

console.log(
  addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log)
);

// Solution-2
var addTwoPromises2 = async function (promise1, promise2) {
  const values = await Promise.all([promise1, promise2]);
  return values.reduce((accu, curr) => accu + curr, 0);
};

console.log(
  addTwoPromises2(Promise.resolve(2), Promise.resolve(2)).then(console.log)
);
