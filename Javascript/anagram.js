function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  lookup = {};
  arr1 = str1.split("");
  arr2 = str2.split("");
  for (let val of arr1) {
    lookup[val] = lookup[val] ? lookup[val] + 1 : 1;
  }
  for (let val of arr2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  return true;
}

str1 = "sercan";
str2 = "nacres";

const result = anagram(str1, str2);
console.log(result);
