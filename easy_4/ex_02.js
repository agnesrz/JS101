/*
// my solution
const readline = require('readline-sync');
let numArray = [];

function prompt(message) {
  console.log(`=> ${message}`);
}

function pushAnswer() {
  numArray.push(readline.question());
}

prompt('Enter the 1st number');
pushAnswer();

prompt('Enter the 2nd number');
pushAnswer();

prompt('Enter the 3rd number');
pushAnswer();

prompt('Enter the 4th number');
pushAnswer();

prompt('Enter the 5th number');
pushAnswer();

prompt('Enter the last number');
let finalNumber = readline.question();

if (numArray.includes(finalNumber)) {
  console.log(`The number ${finalNumber} appears in ${numArray.join(',')}.`);
} else {
  console.log(`The number ${finalNumber} does not appear in ${numArray.join(',')}.`);
}
*/

// further exploration
const readline = require('readline-sync');
let numArray = [];

function prompt(message) {
  console.log(`=> ${message}`);
}

function pushAnswer() {
  numArray.push(readline.question());
}

prompt('Enter the 1st number');
pushAnswer();

prompt('Enter the 2nd number');
pushAnswer();

prompt('Enter the 3rd number');
pushAnswer();

prompt('Enter the 4th number');
pushAnswer();

prompt('Enter the 5th number');
pushAnswer();

prompt('Enter the last number');
let finalNumber = readline.question();

let match = numArray.some(num => num === finalNumber);

if (match) {
  console.log(`The number ${finalNumber} appears in ${numArray.join(',')}.`);
} else {
  console.log(`The number ${finalNumber} does not appear in ${numArray.join(',')}.`);
}