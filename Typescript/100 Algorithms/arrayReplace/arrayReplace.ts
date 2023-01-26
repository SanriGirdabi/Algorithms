export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let result: number[] = inputArray;

  for (let i = 0; i < inputArray.length; i++) {
    if (result[i] == elemToReplace) {
      result[i] = substitutionElem;
    }
  }

  return result;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
