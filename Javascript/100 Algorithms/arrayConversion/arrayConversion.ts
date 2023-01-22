export function arrayConversion(
  inputArray: number[],
  iteration: number = 1,
  result: any = []
): any {
  if (inputArray.length === 1) {
    return inputArray[0];
  }
  for (let i = 0; i < inputArray.length - 1; i += 2) {
    if (iteration % 2 == 1) {
      result.push(inputArray[i] + inputArray[i + 1]);
    } else {
      result.push(inputArray[i] * inputArray[i + 1]);
    }
  }
  if (inputArray.length % 2 === 1) {
    result.push(inputArray[inputArray.length - 1]);
  }
  return arrayConversion(result, iteration + 1);
}

// create a variable to keep track of the iteration that starts from 1
// in every iteration increment it by one
// if the modulo 2 is 1 sum the consecutive elements
// if the modulo is 0 product the consecutive elements
// to get the consecutive elements in every turn group the elements by two
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
