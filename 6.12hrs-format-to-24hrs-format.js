// Q6. Convert 12hours format to 24 hours format time

// Solution

const time = "12:10AM";

function convertTo24HrsFormat(time) {
  let hours = parseInt(time.slice(0, time.indexOf(":")));
  const minutes = time.slice(time.indexOf(":") + 1, time.indexOf(":") + 3);
  const meridian = time.slice(-2);

  if (meridian === "PM" && hours !== 12) {
    hours += 12;
  } else if (meridian === "AM" && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);

/**
 * The `convertTo24HrsFormat` function takes a string as input, which represents a time in the 12-hour format. 
 * It follows the following algorithm to convert the input to the 24-hour format:
 *
 *  1. Parse the hours from the input string using `time.slice(0, time.indexOf(':'))`.
 *  2. Parse the minutes from the input string using `time.slice(time.indexOf(':') + 1, time.indexOf(':') + 3)`.
 *  3. Parse the meridian (AM/PM) from the input string using `time.slice(-2)`.
 *  4. Adjust the hours based on the meridian using the following logic:
        - If the meridian is "PM" and the hours are not already 12, add 12 to the hours.
        - If the meridian is "AM" and the hours are already 12, set the hours to 0.
 *  5. Return the time in 24-hour format as a string using `${hours.toString().padStart(2, "0")}:${minutes}`.
 *
 * The time complexity of this function is O(1) because it performs a constant number of operations on 
 * the input string, regardless of the length of the string.
 * The space complexity of this function is also O(1) because it creates a constant number of variables to
 * store the hours, minutes, and meridian, and returns a string of constant length.
 */

// ------------------------------------------------------------------------------------------------ //
