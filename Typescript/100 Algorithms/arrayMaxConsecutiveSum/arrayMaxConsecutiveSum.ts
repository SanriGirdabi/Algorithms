export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let globalSum = 0;
  let localSum = 0;
  for (let i = 0; i < k; i++) {
    localSum += inputArray[i];
  }

  globalSum = localSum;

  for (let i = k; i < inputArray.length; i++) {
    localSum -= inputArray[i - k];
    localSum += inputArray[i];
    if (localSum > globalSum) {
      globalSum = localSum;
    }
  }

  return globalSum;
}

// arrange a global max equal to zero
// iterate over the elements and sum k of them by the line.
// if the local sum is greater than the global sum, set the global sum to local sum.

console.log(arrayMaxConsecutiveSum([2, 3, 2, 1, 6, 5, 9, 9, 1, 1, 0, 1, 2], 3));
