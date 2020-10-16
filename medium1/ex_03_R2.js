/*
Input: A number
Output: Maximum rotation of that number
Rules:
  -Assume input will be an integer?
  -Rotation steps:
    -Rotate first digit left (735291 => 352917)
    -Keep first number in place, rotate remaining numbers left (352917 => 329175)
    -Continue this pattern until no more rotations possible 
      -final result is 321579
  -Use rotate rightmostdigits function from previous exercise
Data type: String or array
Algorithm:
  -Initialize result variable with value of argument
  -Create a loop that continues digits number of times
    -During each iteration, update result to return value of calling
      rotateRightmostDigits function with 'num' passed as argument
    -During first iteration, pass the num of digits - 1 in value as second argument
    -During each subsequent iteration, as second argument pass same value as previous iteration
      minus 1 as argument
  -return result
*/

function maxRotation(integer) {
  let result = integer;
  let numOfDigits = String(integer).length;
  
  for (let i = numOfDigits; i >= 0; i -= 1) {
    result = rotateRightmostDigits(result, i);
  }
  
  return result;
}

function rotateRightmostDigits(num, digits) {
  let numArray = String(num).split('');
  let startDisplacementIndex = numArray.length - digits;
  let firstDisplacedNum = numArray.splice(startDisplacementIndex, 1);
  
  return Number(numArray.concat(firstDisplacedNum).join(''));
}

console.log(maxRotation(735291) === 321579);          // 321579
console.log(maxRotation(3) === 3);               // 3
console.log(maxRotation(35) === 53);              // 53
console.log(maxRotation(105) === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845