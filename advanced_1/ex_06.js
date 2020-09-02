function mergeSort(array) {// [9, 5, 7, 1]
  let result = [];

  for (let index = 0; index < array.length; index += 2) {// this loop groups pairs of elements in a nested array
    array[index + 1] ? result.push([array[index], array[index + 1]]) :
                       result.push([array[index]]);
  }

  for (let index = 0; index < result.length; index += 1) {// this loop nests each element into its own sub-array;
    let element1 = result[index][0];
    let element2 = result[index][1];
    element2 ? result.splice(index, 1, [[element1], [element2]]) :
               result.splice(index, 1, [[element1]]);
  }

  result = result.map((element, index) => {
    return result[index][1] ? merge(result[index][0], result[index][1]) :
                              result[index][0];
  });

  while (result.length > 1) {
    result[0] = merge(result[0], result[1]);
    result.splice(1, 1);
  }

  return result[0];
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

//mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

//mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]