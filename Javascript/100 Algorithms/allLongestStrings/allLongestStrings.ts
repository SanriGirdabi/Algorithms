export function allLongestStrings(inputArray: string[]): string[] {
  let resultLength: number = 0;
  let result: string[] = [];

  inputArray.forEach((elem) => {
    resultLength = elem.length > resultLength ? elem.length : resultLength;
  });

  for (let i = 0; i < inputArray.length; i++) {
    let localLength = inputArray[i].length;

    if (localLength >= resultLength) {
      result.push(inputArray[i]);
    }
  }

  return result;
}

console.log(allLongestStrings(["s", "aba", "hshks", "aa", "ad", "vcd", "aba"]));
