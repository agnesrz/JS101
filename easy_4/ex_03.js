const readline = require('readline-sync');

let currentAge = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

let yearsToRetirement = retirementAge - currentAge;

let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);