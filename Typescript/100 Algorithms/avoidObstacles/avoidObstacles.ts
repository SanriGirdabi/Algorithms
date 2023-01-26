export function avoidObstacles(inputArray: number[]): number {
  let result: number = 0;

  let sorted = inputArray.sort();
  const largestValue = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestValue + 1; i++) {
    if (inputArray.every((element) => element % i !== 0)) {
      result = i;
      break;
    }
  }

  return result;
}

console.log(avoidObstacles([5, 3, 4, 6, 7, 9]));
