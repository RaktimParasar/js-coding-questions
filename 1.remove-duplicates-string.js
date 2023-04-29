// Q1. Remove duplicates from strings.

// Solution 1
function replace(sentence, character, index) {
  console.log(sentence, character, index);
  return sentence.substr(0, index) + character + sentence.substr(index + 1);
}

/**
 * This is a helper function that takes a string sentence, a character character,
 * and an index index. It returns a new string that is the same as sentence, except
 * that the character at index has been replaced with character. We use this function
 * to replace duplicate characters with a placeholder value later on.
 */

function removeDuplicatesFromString(sentence) {
  let arraySet = new Set([]);
  let writePointer = 0;
  let readPointer = 0;

  while (readPointer < sentence.length) {
    if (!arraySet.has(sentence[readPointer])) {
      arraySet.add(sentence[readPointer]);
      sentence = replace(sentence, sentence[readPointer], writePointer);
      writePointer++;
    }
    readPointer++;
  }
  return sentence.substr(0, writePointer);
}

const str = "hello world";
console.log("Original String :", str);
console.log("After removing duplicates :", removeDuplicatesFromString(str));

/**
 * This is the main function that removes duplicates from the input string.
 * It first initializes an empty Set object arraySet, which will be used to
 * keep track of which characters have already been seen.
 *
 * The function then sets up two pointers, readPointer and writePointer,
 * which are used to iterate through the input string. The readPointer points to
 * the next character in the string that needs to be examined, while the writePointer
 * points to the position in the string where the next unique character should be written.
 *
 * The function then enters a loop that iterates through each character in the input string.
 * For each character, it checks whether it has already been seen by checking whether arraySet
 * contains the character. If the character has not yet been seen, it adds it to arraySet,
 * replaces the duplicate character with a placeholder value using the replace helper function,
 * and increments writePointer to point to the next position in the output string. If the character
 * has already been seen, the function skips it and continues to the next character.
 *
 * Finally, the function returns a substring of the input string from the beginning up to writePointer,
 * which contains all unique characters in the input string.
 */

// ------------------------------------------------------------------------------------------------ //

// Solution 2
let str2 = "hello world";
let uniqueChars = new Set(str2);
let removedDuplicates = "";

// console.log(uniqueChars);

uniqueChars.forEach((char) => {
  removedDuplicates += char;
});

console.log(removedDuplicates);

/**
 * In this example, we start by creating a new Set object uniqueChars from
 * the input string str. A Set is a built-in JavaScript object that allows
 * us to store unique values. By creating a Set from the input string,
 * we automatically remove duplicates.
 * We then initialize an empty string uniqueStr, and loop through each
 * character in the uniqueChars set using the forEach method. For each character,
 * we append it to the end of uniqueStr. This way, we create a new string with
 * all duplicates removed.
 */

// ------------------------------------------------------------------------------------------------ //

//Solution 3
const str3 = "hello world";
let withoutDuplicates = "";

for (let char of str3) {
  if (!withoutDuplicates.includes(char)) {
    withoutDuplicates += char;
  }
}

console.log(withoutDuplicates);

/**
 * This is another way to remove duplicates from a string in JavaScript.
 * In this example, we initialize an empty string withoutDuplicates, and
 * loop through each character in the input string str3 using a for..of loop.
 * For each character, we check if it already exists in withoutDuplicates
 * using the includes() method. If the character is not found in withoutDuplicates,
 * we append it to the end of the string using the += operator.
 * This solution works by comparing each character in the input string to the characters
 * that have already been added to withoutDuplicates. If a character has not yet been added,
 * it is appended to the end of the string. This way, we only keep the first occurrence of
 * each character in the input string.
 */

// ------------------------------------------------------------------------------------------------ //
