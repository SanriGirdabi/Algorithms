export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const firstWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const firstStrongest = yourLeft <= yourRight ? yourRight : yourLeft;
  const secondWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const secondStrongest =
    friendsLeft <= friendsRight ? friendsRight : friendsLeft;

  return firstStrongest === secondStrongest && firstWeakest === secondWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
