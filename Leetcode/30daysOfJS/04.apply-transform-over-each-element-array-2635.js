// Q.

/**
 * Given an integer array arr and a mapping function fn,
 * return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 */

//Solution

var map = function (arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i], i));
  }
  return output;
};

const arr = [1, 2, 3];

let plusOne = (n) => n + 1;

let plusI = (n, i) => n + i;

let constant = () => 42;

const newArr = map(arr, plusOne);
const newArr2 = map(arr, plusI);
const newArr3 = map(arr, constant);

console.log(newArr); // [2, 3, 4]
console.log(newArr2); // [1, 3, 5]
console.log(newArr3); // [42, 42, 42]
