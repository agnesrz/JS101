/*
input: numbers
output: square of those two numbers (the square is the result of multiplying a number by itself)
rules:
  -use the multiply function from exercise 3
  -verify input?
examples:
  -console.log(square(5) === 25); // logs true
  -console.log(square(-8) == 64); // logs true

//my answer
function square(number) {
  return number * number;
}

//corrected

function multiply(number1, number2) {
  return number1 * number2;
}

function square(number) {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

*/

// further exploration

function multiply(number1, number2) {
  return number1 * number2;
}

function power(number, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return number;
  }
  let result = multiply(number, number);    
  for (let i = 2; i < exponent; i += 1) {   
    result = multiply(result, number);      
  }
  return result;
}

console.log(power(1, 2) === 1);
console.log(power(1, 5) === 1);
console.log(power(2, 1) === 2);
console.log(power(3, 5) === 243);
console.log(power(-4, 3) === -64);
console.log(power(4, -3) === 0.015625); // code does not work for negative exponents
console.log(power(4, -3));
console.log(power(0, 2) === 0);
console.log(power(2, 0) === 1);
console.log(power(0, 0) === 1);

