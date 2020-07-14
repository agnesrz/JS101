/*
// original solution
let age = Math.floor(Math.random() * (120 - 20 + 1)) + 20;

console.log(`Teddy is ${age} years old!`);
*/

// further exploration
function randomBetween(min, max) {
  if (min > max) {
  throw new RangeError("Maximum value must be less than minimum value.");
  }
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(120, 90);
console.log(`Teddy is ${age} years old!`);