/*
// My Solution
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let result = {};

  array.forEach((currentItem) => {
    if (Object.keys(result).includes(currentItem)) {
      result[currentItem] += 1;
    } else {
      result[currentItem] = 1;
    }
  });

  Object.entries(result).forEach((item) => {
    console.log(item[0] + ' => ' + item[1]);
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
*/

// Further Exploration
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'Car', 'Truck'];

function countOccurrences(elements) {
  let occurrences = {};
  let elementsLC = elements.map(item => item.toLowerCase());

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elementsLC[idx]] = occurrences[elementsLC[idx]] || 0;
    occurrences[elementsLC[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2