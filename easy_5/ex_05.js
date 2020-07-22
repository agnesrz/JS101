/*
// My solution
function interleave(array1, array2) {
  let resultArray = [];
  let resultArrayIndex = 0;
  
  for (let iter = 0; iter < array1.length; iter += 1) {
    resultArray[resultArrayIndex] = array1[iter];
    resultArray[resultArrayIndex + 1] = array2[iter];
    resultArrayIndex += 2;
  }
  console.log(resultArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]


// Further exploration 1 & 2
function interleave(array1, array2) {
  let resultArray = array1.map(item => item);
  
  let index = 1;
  array2.forEach(item => {
    resultArray.splice(index, 0, item);
    index += 2;
  });
  
  console.log(resultArray);
  
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
*/

// Further exploration 3
function interleave(array1, array2) {
  return array1.reduce((acc, cur, idx) => {
    ([cur, array2[idx], ...acc]);
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]