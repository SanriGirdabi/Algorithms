export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let result = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 2; i < inputArray.length; i++) {
    let localDiff = Math.abs(inputArray[i] - inputArray[i - 1]);

    if (localDiff > result) {
      result = localDiff;
    }
  }

  return result;
}

// initialize a variable result set to 0.
// take the first two elements absolute difference and set it to result.
// start from the third element and get the difference one before of it.
// in every turn check the result and if it's increased set to the new value.

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
