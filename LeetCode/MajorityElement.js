class MajorityElement {
  majorityElement(arr) {
    // const length = arr.length;
    // const threshold = Math.floor(length / 2);
    // const lookupTable = new Map();
    // let solution = null;

    // for (let i = 0; i < arr.length; i++) {
    //   if (lookupTable[arr[i]] > threshold) {
    //     solution = arr[i];
    //     break;
    //   }
    //   lookupTable[arr[i]] = (lookupTable[arr[i]] || 0) + 1;
    // }
    // return solution;

    // This second approach takes the fact that the input should always have one solution into account!
    let counter = 0;
    let candidate = arr[0];

    while (counter < arr.length - 1) {
      if (candidate !== arr[candidate + 1]) {
        candidate = arr[candidate + 1];
        counter = 0;
      }
      counter++;
    }
    return candidate;
  }
}

const obj = new MajorityElement();
const arr = [
  1, 4, 3, 4, 4, 4, 6, 7, 8, 9, 3, 5, 4, 10, 12, -5, -9, -9, 8, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4,
];
console.log(obj.majorityElement(arr));
