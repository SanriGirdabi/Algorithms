export function almostIncreasingSequence(sequence: number[]): boolean {
  let result = true;
  let maxElement = sequence[0];
  let incrementAmount = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > maxElement) {
      maxElement = sequence[i];
    } else {
      incrementAmount += 1;
    }

    if (incrementAmount == 2) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 4, 5, 6, 7]));
