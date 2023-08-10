// Q . Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Solution
var reverse = function (x) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let reverseNum = 0;
  while (x !== 0) {
    let lastDigit = x % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    x = Math.trunc(x / 10);
    if (reverseNum > INT_MAX || reverseNum < INT_MIN) {
      return 0;
    }
  }
  return reverseNum;
};

console.log(reverse(12));
console.log(reverse(-123));
console.log(reverse(1534236469));
