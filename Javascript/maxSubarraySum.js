function maxSubarraySum(arr1, n) {
  maxSum = 0;
  tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr1[i];
  }
  maxSum = tempSum;
  for (let j = 0; j < arr1.length - n; j++) {
    tempSum = tempSum - arr1[j] + arr1[j + n];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// first sum the first n element of the array.
// remove the first one and add another one to the sum.
// If the new sum is greater than the old sum, change the maxsum to this new sum.

arr1 = [100, 2000, 300, 200, 500, 700, 800, 100];
n = 3;

const result = maxSubarraySum(arr1, n);
console.log(result);
