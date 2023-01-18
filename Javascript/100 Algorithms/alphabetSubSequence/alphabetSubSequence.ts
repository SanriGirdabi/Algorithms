export function alphabetSubsequence(s: string): boolean {
  let result = true;
  let check = s.charCodeAt(0);

  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) > check) {
      check = s.charCodeAt(i);
    } else {
      result = false;
      break;
    }
  }

  return result;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
