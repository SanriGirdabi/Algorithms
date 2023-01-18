export function alphabeticShift(inputString: string): string {
  let result: any = [];
  inputString.split("").map((char) => {
    char.charCodeAt(0) == 122
      ? result.push("a")
      : result.push(String.fromCharCode(char.charCodeAt(0) + 1));
  });

  return result.join("");
}

console.log(alphabeticShift("crazy"));
