// Q2. Reverse words in sentence

// Solution 1
const str1 = "I love javascript";
const reversedStr = str1.split(" ").reverse().join(" ");

console.log(reversedStr);

/**
 * str1.split(" ") splits the input string str1 into an array of words, using the
 * space character as the separator.
 *
 * reverse() reverses the order of the elements in the array.
 *
 * join(" ") joins the elements in the array into a string, using a space character as the separator.
 *
 * The resulting string is assigned to the reversedStr variable and logged to the console.
 */

// ------------------------------------------------------------------------------------------------ //

// Solution 2
const str2 = "I love javascript";
const splitString = str2.split(" ");
let reversedString = "";

for (let i = splitString.length - 1; i >= 0; i--) {
  reversedString += splitString[i] + " ";
}

console.log(reversedString);

/**
 * This code takes the string "I love javascript", splits it into an array of words using the split() method,
 * and then loops through each word in reverse order using a for loop.
 * For each word, it concatenates it onto the reversedString variable, separated by a space.
 */

// ------------------------------------------------------------------------------------------------ //
