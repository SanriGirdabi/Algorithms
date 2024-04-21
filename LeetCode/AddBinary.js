class AddBinary {
  addBinary(bnry1, bnry2) {
    let i = bnry1.length - 1;
    let j = bnry2.length - 1;
    let carry = 0;
    let result = [];
    let sum = 0;
    while (i >= 0 || j >= 0 || carry === 1) {
      sum = carry;
      if (i >= 0) {
        sum += bnry1[i];
        i--;
      }
      if (j >= 0) {
        sum += bnry2[j];
        j--;
      }
      result.unshift(sum % 2);
      carry = Math.floor(sum / 2);
    }
    return Array.from(result);
  }
}

const obj = new AddBinary();
const bnry1 = [0, 1, 1, 0, 1, 0, 1, 1];
const bnry2 = [1, 1, 0, 0, 0, 1, 0, 1];
console.log(obj.addBinary(bnry1, bnry2));
