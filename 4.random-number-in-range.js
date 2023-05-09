// Q4. Generate random number in given range

// Solution 1
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart);
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);

/**
 * The code defines a function called randomNumberGeneratorInRange that takes two arguments:
 * rangeStart and rangeEnd. The purpose of this function is to generate a random integer number
 * within a specified range, including the lower bound rangeStart and excluding the upper bound rangeEnd.
 *
 * The implementation of the function uses the built-in Math.random() method,
 * which returns a random floating-point number between 0 and 1 (exclusive of 1).
 * The returned value is then multiplied by the range of the desired interval (rangeEnd - rangeStart).
 * This scales the random number to the desired range, but shifted to start from rangeStart.
 * The result is added to rangeStart, which makes sure that the generated number falls within the specified range.
 *
 * Finally, the function uses the Math.floor() method to round down the decimal part of the result and
 * return an integer value. The resulting random integer number is then returned by the function.
 */

// ------------------------------------------------------------------------------------------------ //
