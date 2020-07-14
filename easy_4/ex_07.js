/*
// my solution
function runningTotal(array) {
  let resultArray = [array[0]];

  for (let idx = 1; idx < array.length; idx += 1) {
    resultArray.push(resultArray[idx - 1] + array[idx]);
  }

  return resultArray;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
*/

// further exploration
function runningTotal(array) {

  let total = 0;

  return array.map((item) => {
    total += item;
    return total;
  });
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []