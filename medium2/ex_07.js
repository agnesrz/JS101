function bubbleSort(array) {
  let swapCount;

  do {
    swapCount = 0;

    for (let index = 0; index < array.length - 1; index += 1) {
      let elem1 = array[index];
      let elem2 = array[index + 1];

      if (elem1 > elem2) {
        array[index] = elem2;
        array[index + 1] = elem1;
        swapCount += 1;
      }
    }
  } while (swapCount > 0);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]