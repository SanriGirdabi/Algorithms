export function addBorder(picture: string[]): string[] {
  const filled: string = "*".repeat(picture[0].length + 2);
  picture.unshift(filled);
  picture.push(filled);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  return picture;
}

console.log(addBorder(["abc", "ded"]));
