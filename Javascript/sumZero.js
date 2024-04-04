function sumZero(arr1) {
  i = 0;
  j = arr1.length - 1;

  matches = [];
  while (i < j) {
    if (arr1[i] + arr1[j] == 0) {
      matches.push([arr1[i], arr1[j]]);
      i++;
    } else if (arr1[i] + arr1[j] > 0) {
      j--;
    } else {
      i++;
    }
  }
  return matches;
}

result = sumZero([-5, -2, -1, 2, 4, 5]);

console.log(result);
