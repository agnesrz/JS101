/*
input: two positive integers
output: result of the following operations:
  -addition
  -subtraction
  -product
  -quotient
  -remainder
  -power
rules:
  -no need to validate input
  -prompt the user to enter integers
    -first number will be first number in calculation; second will be second
  -print result to console
  -print each result to it's own line
    -use this format: 1 * 1 = 1
  -start each line of output with '==>'
model:
  -Ask user for input. Determine result of performing each operation on the two numbers. Then print the results to the console.
example:
  -23, 17
    ==> 23 + 17 = 40
    ==> 23 - 17 = 6
    ==> 23 * 17 = 391
    ==> 23 / 17 = 1
    ==> 23 % 17 = 6
    ==> 23 ** 17 = 141050039560662968926103
data types: number
algorithm:
  -ask user for input:
    -create function that displays (==> to user)
    -use readline-sync to ask user to input two numbers
      -enter the first number
      -enter the second number
  -determine result of performing each operation on the two numbers
    -addition
    -subtraction
    -product
    -quotient
    -remainder
    -power
  -print resuls to the console
*/

let readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

let num1 = readlineSync.question(prompt('Enter the first number'));
let num2 = readlineSync.question(prompt('Enter the second number'));
num1 = Number(num1);
num2 = Number(num2);

let sum = num1 + num2;
console.log(sum);
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;
let power = Math.pow(num1, num2);


prompt(`${num1} + ${num2} = ${sum}`);
prompt(`${num1} - ${num2} = ${difference}`);
prompt(`${num1} * ${num2} = ${product}`);
prompt(`${num1} / ${num2} = ${quotient}`);
prompt(`${num1} % ${num2} = ${remainder}`);
prompt(`${num1} ** ${num2} = ${power}`);
