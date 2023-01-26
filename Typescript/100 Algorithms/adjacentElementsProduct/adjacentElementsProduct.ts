export function adjacentElementsProduct(inputArray: number[]): number {
  let result = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    result = result < product ? product : result;
  }
  return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
