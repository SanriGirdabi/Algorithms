export function arrayChange(inputArray: number[]): number {
  let result: number = 0;
  let maxElement: number = Math.max(...inputArray);
  const theIndicesDiff = inputArray.length - 1 - inputArray.indexOf(maxElement);
  let myCeil: number = maxElement + theIndicesDiff;

  const localInput = inputArray.reverse();
  for (let i = 0; i < inputArray.length; i++) {
    while (localInput[i] < myCeil) {
      result++;
      localInput[i]++;
    }
    myCeil--;
    console.log(localInput);
  }
  return result;
}

console.log(arrayChange([1, 1, 1]));

console.log(arrayChange([-2, 1, 1]));

console.log(arrayChange([-2, 5, 1, 4]));
