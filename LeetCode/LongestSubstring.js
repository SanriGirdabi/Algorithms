class LongestSubstring {
  // Brute Force Solution
  // longestSubstring(str) {
  //   if (str.length <= 1) {
  //     return str.length;
  //   }
  //   let maxLength = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     const result = new Map();
  //     let currentLength = 0;
  //     for (let j = i; j < str.length; j++) {
  //       let currentChar = str[j];
  //       if (result.has(currentChar)) {
  //         break;
  //       }
  //       currentLength++;
  //       result.set(currentChar, true);
  //       maxLength = Math.max(maxLength, currentLength);
  //     }
  //   }
  //   return maxLength;
  // }

  longestSubstring(str) {
    let left = 0;
    let right = 0;

    const result = new Map();

    while (right < str.length) {
      let currentChar = str[right];
      if (result.has(currentChar)) {
        left = result.get(currentChar) + 1;
      }
      right++;
      result.set(currentChar, right);
    }
    return right - left;
  }
}

const obj = new LongestSubstring();
const str = "abcbda";
console.log(obj.longestSubstring(str));
