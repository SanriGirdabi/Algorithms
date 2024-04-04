const sameFrequency = (num1, num2) => {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  if (num1Str.length != num2Str.length) {
    return false;
  }

  let lookup = {};

  for (let val of num1Str) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (let val of num2Str) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  return true;
};

// First turn the numbers into strings
// Return false if the numbers lengths are not equal
// put the first number into a lookup table keys as number itself, values are the amount of the repetition.
// iterate through the second number and if the number is there decrease the lookup table value.
// If the number is not in the table return false directly.

let num1 = 15789;
let num2 = 57818;

const result = sameFrequency(num1, num2);

console.log(result);
