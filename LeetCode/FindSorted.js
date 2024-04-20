class FindSorted {
  findSorted(arr, target) {
    const firstPosition = arr.indexOf(target);
    if (firstPosition === -1) {
      return [-1, -1];
    }
    let secondPosition = firstPosition;
    for (let i = firstPosition; i < arr.length; i++) {
      if (arr[i] !== target) {
        secondPosition = i - 1;
        break;
      }
    }
    return [firstPosition, secondPosition];
  }
}

const obj = new FindSorted();
const arr = [1, 4, 5, 8, 9, 10, 10, 10, 10, 12, 12, 12, 13, 13, 15, 17, 20, 25];
const target = 10;

console.log(obj.findSorted(arr, target));
