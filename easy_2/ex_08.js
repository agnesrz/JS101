/*
input: array
output: an array containing every other element of the original array
rules:
  -create function that solves above problem
  -values in the returned array should be those that are at even index numbers of the original array
  -validate input?
model: Push items at even index numbers into a new array, and return that array
examples:
  -console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
  -console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
  -console.log(oddities(["abc", "def"])); // logs ['abc']
  -console.log(oddities([123])); // logs [123]
  -console.log(oddities([])); // logs []
data type: array
algorithm:
  -loop through the array
  -push items at even index numbers into a new array
    -use .filter method
    -function should search for odd index numbers
  -return the new array

// my solution
function oddities(array) {

  let newArray = [];

  let i = 0;

  while (i < array.length) {
    newArray.push(array[i]);
    i += 2;
  }

  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/

// further exploration

function evenities(array) {
  let newArray = array;
  let i;
  if (!((array.length % 2) === 0)) {
    i = array.length - 1;
  } else {
    i = array.length - 2;
  }
  for (i; i >= 0; i -= 2) {
    newArray.splice(i, 1);
  }
  return newArray;
}


console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []