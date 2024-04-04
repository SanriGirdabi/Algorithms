const nConsecutive = (arr1, n, callback) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr1[i];
  }
  tempSum = maxSum;
  for (let j = 0; j < arr1.length - n; j++) {
    tempSum = tempSum - arr1[j] + arr1[j + n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  callback(maxSum);
  return maxSum;
};

let arr1 = [-4, 22, 5, 5, 3, 8, 10];

let result = nConsecutive(arr1, 3, (a) => console.log(a));
