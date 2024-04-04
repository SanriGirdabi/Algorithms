function countUnique(arr1) {
  let i = 0;
  let j = 1;

  while (j < arr1.length) {
    if (!arr1.length) {
      return 0;
    }
    if (arr1[i] == arr1[j]) {
      j++;
    } else {
      i++;
      arr1[i] = arr1[j];
    }
  }
  return i + 1;
}

arr1 = [-5, -4, -2, 0, 0, 0, 2, 3, 3, 4, 4, 5];
let result = countUnique(arr1);
console.log(result);
