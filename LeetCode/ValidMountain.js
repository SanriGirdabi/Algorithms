class ValidMountain {
  validMountain(arr) {
    if (arr.length < 3) {
      return false;
    }
    let i = 1;

    while (i < arr.length && arr[i] > arr[i - 1]) {
      i++;
      if (i === 1 || i === arr.length) {
        return false;
      }
    }

    while (i < arr.length && arr[i] < arr[i - 1]) {
      i++;
    }
    return i === arr.length;
  }
}

const obj = new ValidMountain();
const arr = [0, 1, 3, 4, 5, 4, 2];
console.log(obj.validMountain(arr));
