// Q5. Reverse a given number

// Solution
const num = 3849;

function reverseGivenInteger(num) {
  const reversedNum = num.toString().split("").reverse().join("");
  return Number(reversedNum);
}
console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);

/**
 * The given solution uses the toString(), split(), reverse(), and join() methods to convert
 * the number to a string, split the string into an array of characters, reverse the order of
 * the array, and then join the array back together into a string. Finally, the Number()
 * constructor is used to convert the string back to a number. This solution works for positive
 * and negative integers.
 */

// ------------------------------------------------------------------------------------------------ //
