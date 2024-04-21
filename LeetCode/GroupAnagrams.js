class GroupAnagram {
  groupAnagram(arr) {
    const lookupTable = new Map();
    const sorted = arr.map((element) => {
      return element.split("").sort().join("");
    });

    for (let i = 0; i < arr.length; i++) {
      if (!lookupTable[sorted[i]]) {
        lookupTable[sorted[i]] = [arr[i]];
      } else {
        lookupTable[sorted[i]].push(arr[i]);
      }
    }
    return lookupTable;
  }
}

const obj = new GroupAnagram();
const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(obj.groupAnagram(arr));
