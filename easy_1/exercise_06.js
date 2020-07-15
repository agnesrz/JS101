/*
input: integer > 0
output: the sum or product of all numbers between 1 and input, inclusive
rules:
  -program must ask user to enter input
  -program must ask whether user wants the sum or product of numbers
  -question: verify validity of input?
model:
  -Ask user to input an integer greater than 0, and determine a list of the integers between 1 and that number.
  -Then, ask the user whether they would like the sum or product of these numbers, and
  -calculate and print the sum or product.
examples:
  -5, s => 15
  -6, p => 720
  -1, s => 1
  -1, p => 1
data structure: number, array
algorithm:
  -Ask user to enter integer > 0
    -Please enter an integer greater than 0:
  -Create an array that contains all integers between 1 and input
    -create an empty array
    -use a loop where iterator is 1, stopping condition is iterator reaches (number entered in previous step + 1), increment value is +1
    -push value of iterator to array
  -Ask user whether user would like to calculate sum or product
    -Enter "s" to compute the sum, or "p" to compute the product
  -Dependent on answer to previous question, calculate sum or product
    -use reduce method
  -print sum or product
*/

/*
//my solution

const readlineSync = require('readline-sync');

console.log('Please enter an integer greater than 0');
let num = Number(readlineSync.prompt());

let numArray = [];
for (let i = 1; i < (num + 1); i += 1) {
  numArray.push(i);
}

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let calc = readlineSync.prompt();

let result;

if (calc === 's') {
  result = numArray.reduce((accum, element) => accum + element);
  console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
} else {
  result = numArray.reduce((accum, element) => accum * element);
  console.log(`The product of the integers between 1 and ${num} is ${result}.`);
}
*/

// Corrections + Further Exploration
const readlineSync = require('readline-sync');

console.log('Please enter an integer greater than 0');
let num = Number(readlineSync.prompt());

let numArray = [];
for (let i = 1; i < (num + 1); i += 1) {
  numArray.push(i);
}

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let calc = readlineSync.prompt();

let result;

if (calc === 's') {
  result = numArray.reduce((accum, element) => accum + element);
  console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
} else {
  result = numArray.reduce((accum, element) => accum * element);
  console.log(`The product of the integers between 1 and ${num} is ${result}.`);
}
