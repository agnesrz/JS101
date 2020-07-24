/*
// My solution
function average(array) {
  let average = array.reduce((accum, curVal) => accum + curVal) / array.length;
  return Math.floor(average);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
*/

// Further Exploration
function average(array) {
  let total = 0;
  
  array.forEach(item => total += item);

 return Math.floor(total / array.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40