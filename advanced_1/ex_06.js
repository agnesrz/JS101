function mergeSort(array) {
  let numOfElements = array.length;
  
  function indexExists(index) {
    return index < numOfElements;
  }
  
  for (let index = 0; index < numOfElements; index += 2) {
    indexExists(index + 1) ? array.splice(index, index + 1, [array[index], array[index + 1]]) :
                             array.splice(index, index + 1, [array[index]]);
  }
  
  for (let index = 0; index < array.length; index += 1) {
    array.splice(index, index + 1, [array[index], array[index + 1]]) :
                            array.splice(index, index + 1, [array[index]]);
  }
}

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]