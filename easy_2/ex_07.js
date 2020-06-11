/*
input: two arguments
output: true or false
  -rules:
    -create function called xor
      -takes two arguments
      -returns true if exactly one arugment is truthy
      -returns false otherwise
examples:
  -console.log(xor(5, 0) === true);
  -console.log(xor(false, true) === true);
  -console.log(xor(1, 1) === false);
  -console.log(xor(true, true) === false);
algorithm:
  -set result to 0
  -evaluate whether first argument is truthy
    -if truthy, result += 1
  -evaluate whether second argument is truthy
    -if truthy, result +=1
  -if result = 1, return true, otherwise, return false
*/

function xor(arg1, arg2) {
  let result = 0;

  if (arg1) {
    result += 1;
  }

  if (arg2) {
    result += 1;
  }

  if (result === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);