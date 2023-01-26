export function alternatingSums(a: number[]): number[] {
  let result: number[][] = [];
  let sumArray = [0, 0];

  for (let i = 0; i < a.length; i += 2) {
    if (a[i + 1] != undefined) {
      result.push([a[i]].concat(a[i + 1]));
    } else {
      result.push([a[i]].concat(0));
    }
  }

  result.forEach((arr) => {
    sumArray[0] = sumArray[0] + arr[0];
    sumArray[1] = sumArray[1] + arr[1];
  });

  return sumArray;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
