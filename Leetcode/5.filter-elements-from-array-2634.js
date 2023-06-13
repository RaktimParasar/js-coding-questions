// Q.

/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * The fn function takes one or two arguments:
 *      arr[i] - number from the arr
 *      i - index of arr[i]
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
 * Please solve it without the built-in Array.filter method.
 */

var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

const greaterThan10 = (n) => {
  return n > 10;
};

const firstIndex = (n, i) => {
  return i === 0;
};

const plusOne = (n) => {
  return n + 1;
};

let arr = [0, 10, 20, 30];
let arr1 = [1, 2, 3];
let arr2 = [-2, -1, 0, 1, 2];

const newArr = filter(arr, greaterThan10);
const newArr1 = filter(arr1, firstIndex);
const newArr2 = filter(arr2, plusOne);

console.log("newArr", newArr);
console.log("newArr", newArr1);
console.log("newArr", newArr2);
