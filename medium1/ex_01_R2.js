/*
input: array
output: new array
rules:
  -move first element in array to end of array
  -if input is not array, return undefined
  -if input is empty array, return the same
  -do not modify original array
algorithm:
  -make a copy of the input array
  -remove first element from copy
  -move first element to end of copy
  -return the copy
*/

function rotateArray(array) {
  
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }
  
  let copy = array.slice();
  let firstElement = copy.shift();
  
  copy.push(firstElement);
  
  return copy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
let array = [{ a: 2 }, [1, 2], 3];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]