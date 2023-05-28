// Q7. Print the ratios of positive, negative and zero values in the array.
// Each value should be printed on a separate line with digits after the decimal.

// Solution

let arr = [1, 1, 2, 0, -1, -1];

function plusMinus(arr) {
  let positive = [];
  let negative = [];
  let zero = [];

  function findRatio(digitLength) {
    return (digitLength / arr.length).toFixed(6);
  }

  arr.map((digit) => {
    if (digit === 0) {
      zero.push(digit);
    } else if (digit < 0) {
      negative.push(digit);
    } else positive.push(digit);
  });

  let positiveRatio = findRatio(positive.length);
  let negativeRatio = findRatio(negative.length);
  let zeroRatio = findRatio(zero.length);

  console.log("positive", positiveRatio);
  console.log("negative", negativeRatio);
  console.log("zero", zeroRatio);
}

plusMinus(arr);
