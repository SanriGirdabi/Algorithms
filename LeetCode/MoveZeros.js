class MoveZeros {
  moveZeros(arr) {
    let index = 0;

    for (const element of arr) {
      if (element !== 0) {
        arr[index] = element;
        index++;
      }
    }

    for (let i = index; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }
}

const obj = new MoveZeros();
const arr = [0, 12, 4, 0, 5, 7, 0, 2];
console.log(obj.moveZeros(arr));
