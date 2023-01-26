export function arrayPreviousLess(items: number[]): number[] {
  let result: number[] = [-1];

  for (let i = 1; i < items.length; i++) {
    if (items[i] > items[i - 1]) {
      result.push(items[i - 1]);
    } else {
      result.push(-1);
    }
  }

  return result;
}

// iterate over the input array. compare the element with the one before and if it's greater than the old element, add the element before else
// add -1 for it.

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
