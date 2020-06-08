/*
input: string
output: ASCII value of string 
rules: 
  -ASCII string value = sum of the ASCII values of every character in the string
  -May use String.prototype.charCodeAt() to determine the ASCII value
  -empty string allowed
model: Determine the ASCII value of each character of a given string. Add the values together and return the sum.
examples:
  -asciiValue('Four score');         // 984
  -asciiValue('Launch School');      // 1251
  -asciiValue('a');                  // 97
  -asciiValue('');                   // 0
data type:
  -string
  -number
algorithm:
  -verify input
  -set new variable sum to 0
  -if string, loop through the string
    -use index values to loop through string
    -to determine ASCII value
      -use .charCodeAt
    -to determine sum of ASCII values
      -set sum varaible += ASCII value of character
  -return string
*/

function verifyString(input) {
  return typeof input === 'string';
}


function asciiValue(string) {
  let sum = 0;
  if (verifyString(string)) {
    for (let i = 0; i < string.length; i += 1) {
      sum += string.charCodeAt(i);
    }
  } else {
    return 'Error: value must be a string';
  }
  return sum;
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
console.log(asciiValue(12));                   // 0