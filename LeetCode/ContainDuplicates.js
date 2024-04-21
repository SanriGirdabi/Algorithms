class ContainDuplicates {
  containDuplicates(arr) {
    let lookupTable = new Map();
    let result = false;
    for (let i = 0; i < arr.length; i++) {
      if (lookupTable[arr[i]]) {
        result = true;
        break;
      }
      lookupTable[arr[i]] = (lookupTable[arr[i]] || 0) + 1;
    }
    return lookupTable;
  }
}

const obj = new ContainDuplicates();
const arr = [1, 3, 5, 4, 6, 2, 4, 9];

console.log(obj.containDuplicates(arr));
