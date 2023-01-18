export function addTwoDigits(n: any): number {
  const splited = String(n).split("");
  return splited
    .map((elem) => parseInt(elem))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(addTwoDigits(29));
