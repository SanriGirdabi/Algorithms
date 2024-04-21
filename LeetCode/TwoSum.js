class TwoSum {
  twoSum(arr, target) {
    let valueToFind = null;
    const lookupTable = {};
    let result = null;
    for (let j = 0; j < arr.length; j++) {
      lookupTable[arr[j]] = j;
    }
    for (let i = 0; i < arr.length; i++) {
      valueToFind = target - arr[i];
      // Object.keys(lookupTable).forEach((key) => {
      //   if (key === valueToFind.toString()) {
      //     result = [lookupTable[key], i];
      //   }
      // });
      result = [lookupTable[valueToFind], i];
    }
    return result;
  }
}

const obj = new TwoSum();
const arr = [6, 5, 4, 9, 2, 12];
const target = 16;
console.log(obj.twoSum(arr, target));
