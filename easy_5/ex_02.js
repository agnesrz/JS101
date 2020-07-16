function union(array1, array2) {
  let completeArray = array1.concat(array2);
  let resultArray = [];

  completeArray.forEach(item => {
    if (!(resultArray.includes(item))) {
      resultArray.push(item);
    }
  });
  return resultArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]