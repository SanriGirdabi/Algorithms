class SingleNumber {
  singleNumber(arr) {
    const unique = new Set(arr);
    let currentSum = 0;
    let sum = 0;
    arr.forEach((element) => {
      currentSum += element;
    });
    unique.forEach((element) => {
      sum += element;
    });
    sum = 2 * sum;
    return sum - currentSum;
  }
}

const obj = new SingleNumber();
const arr = [2, 2, 5, 5, 3, 3, 4, 9, 9];
console.log(obj.singleNumber(arr));
