class CountPrimes {
  countPrimes(element) {
    let index = 1;
    const result = Array.from({ length: element }, () => {
      return { val: index++, indicator: true };
    });
    result[0]["indicator"] = false;

    for (let i = 1; i < result.length; i++) {
      if (result[i]["val"] * result[i]["val"] > element) {
        break;
      }

      for (let j = 1; j < result.length; j++) {
        let checker = result[i]["val"] * result[j]["val"];
        if (checker > element) {
          break;
        }

        if (result[checker - 1]["indicator"] === true) {
          result[checker - 1]["indicator"] = false;
        }
      }
    }

    return result;
  }
}

const obj = new CountPrimes();
const element = 100;
console.log(obj.countPrimes(element));
