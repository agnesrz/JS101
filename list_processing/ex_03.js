function multiplyAllPairs(array1, array2) {
  let result = [];
  
  for (let idx1 = 0; idx1 < array1.length; idx1 += 1) {
    for (let idx2 = 0; idx2 < array2.length; idx2 += 1) {
      result.push(array1[idx1] * array2[idx2]);
    }
  }
  return result.sort(compareNumbers);
}

function compareNumbers(a, b) {
  return a - b;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]