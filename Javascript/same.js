function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  checked1 = {};
  checked2 = {};
  for (let i = 0; i < arr1.length; i++) {
    checked1[arr1[i]] = (checked1[arr1[i]] || 0) + 1;
  }
  for (let val of arr2) {
    checked2[val] = (checked2[val] || 0) + 1;
  }
  for (key in checked1) {
    if (!(key ** 2 in checked2)) {
      return false;
    }
    if (checked2[key ** 2] !== checked1[key]) {
      return false;
    }
  }

  return true;
}

arr1 = [1, 3, 5, 5, 5, 6];
arr2 = [1, 9, 25, 36, 25, 25];

console.log(same(arr1, arr2));
