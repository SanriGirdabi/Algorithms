class Container {
  container(arr) {
    let x = 0;
    let y = arr.length - 1;
    let maxArea = 0;

    while (x < y) {
      let width = y - x;
      let height = Math.min(arr[x], arr[y]);
      let area = width * height;
      maxArea = Math.max(maxArea, area);

      if (arr[x] < arr[y]) {
        x++;
      } else {
        y--;
      }
    }
    return { maxArea: maxArea, x: x, y: y };
  }
}

const obj = new Container();
const arr = [1, 4, 2, 6, 7, 8, 4, 9, 5, 2];
console.log(obj.container(arr));
