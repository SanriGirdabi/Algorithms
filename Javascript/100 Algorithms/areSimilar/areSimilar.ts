export function areSimilar(a: number[], b: number[]): boolean {
  if (a.length != b.length) {
    return false;
  }

  let first: number[] = [];
  let second: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      first.push(a[i]);
      second.push(b[i]);
    }
  }

  second = second.reverse();

  if (first.toString() != second.toString() && first.length > 2) {
    return false;
  }
  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
