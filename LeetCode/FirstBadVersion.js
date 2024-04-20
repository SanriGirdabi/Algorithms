class FirstBadVersion {
  firstBadVersion(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let middle = Math.floor((left + right) / 2);

      if (arr[middle] === false && arr[middle - 1] === true) {
        return middle;
      } else if (arr[middle] === false) {
        right = middle + 1;
      } else {
        left = middle - 1;
      }
    }
  }
}

const obj = new FirstBadVersion();
const arr = [
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

console.log(obj.firstBadVersion(arr));
