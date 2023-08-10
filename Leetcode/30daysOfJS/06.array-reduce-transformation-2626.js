// Q.

/**
 * Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
 * A reduced array is created by applying the following operation: val = fn(init, nums[0]),
 * val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed.
 * The final value of val is returned.
 * If the length of the array is 0, it should return init.
 * Please solve it without using the built-in Array.reduce method.
 */

// Solution

var reduce = function (nums, fn, init) {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};

// Example-1
const nums = [1, 2, 3, 4];
const sum = (accum, curr) => {
  return accum + curr;
};
const init = 0;
const newResult = reduce(nums, sum, init);
console.log("newResult", newResult);

// Example-2
const multipleSum = (accum, curr) => {
  return accum + curr * curr;
};
const init1 = 100;
const newResult1 = reduce(nums, multipleSum, init1);
console.log("newResult1", newResult1);

// Example-3
const nums1 = [];
const zeroSum = (accum, curr) => {
  return 0;
};
const init2 = 25;
const newResult3 = reduce(nums1, zeroSum, init2);
console.log("newResult3", newResult3);
