function binarySearch(array, searchItem) {
  function getMiddleIndex(startIndex, endIndex) {
    return startIndex + Math.floor((endIndex - startIndex) / 2);
  }

  let startIndex = 0;//8
  let endIndex = array.length - 1;//8
  let middleIndex = getMiddleIndex(startIndex, endIndex);

  while (true) {
    let middleValue = array[middleIndex];

    if (middleValue === searchItem) {
      return middleIndex;
    } else if (startIndex === endIndex || startIndex > endIndex) {
      return -1;
    } else {
      searchItem < middleValue ? endIndex = middleIndex - 1 : startIndex = middleIndex + 1;
      middleIndex = getMiddleIndex(startIndex, endIndex);
    }
  }
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6