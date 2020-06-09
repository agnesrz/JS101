/*
input: two numbers
output: product of multiplying the two numbers
rules:
  -validate input?
examples:
  -console.log(multiply(5, 3) === 15); // logs true
  -console.log(multiply(0, 1) === 0); // logs true
  -console.log(multiply(-5.2, 3) === -15.6); // logs true
  -console.log(multiply(-3, -3) === 9); // logs true
data type: number
*/

function multiply(number1, number2) {
  return number1 * number2;
}

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(0, 1) === 0); // logs true
console.log(multiply(-5, 3) === -15); // logs true
console.log(multiply(-3, -3) === 9); // logs true
