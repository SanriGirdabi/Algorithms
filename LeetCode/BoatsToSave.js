class BoatsToSave {
  boatsToSave(arr, limit) {
    const sorted = arr.sort((a, b) => a - b);
    let heaviest = sorted.length - 1;
    let lightest = 0;

    let boats = 0;

    while (heaviest >= lightest) {
      if (sorted[heaviest] + sorted[lightest]) {
        boats++;
        heaviest--;
        lightest++;
      } else {
        boats++;
        heaviest--;
      }
    }
    return boats;
  }
}

const obj = new BoatsToSave();
const arr = [1, 4, 3, 5];
const limit = 6;
console.log(obj.boatsToSave(arr, limit));
