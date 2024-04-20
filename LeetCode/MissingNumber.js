class MissingNumber {
  missingNumber(arr) {
    let currentSum = arr.reduce((sum, element) => sum + element, 0);
    let optimalSum = ((arr.length + 1) * (arr.length + 2)) / 2;
    return optimalSum - currentSum;
  }
}

const obj = new MissingNumber();
const arr = [1, 4, 2, 5];
console.log(obj.missingNumber(arr));
