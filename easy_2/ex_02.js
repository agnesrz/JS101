/*
input: user's name
output: greeting
rules:
  -if user adds exclamation point at end of name, computer - in all caps - greets user and responds with additional statement)
  -question - validate input?
  -question - remove any punctuation that is not an exclamation point?
  -question - what happens if no name is entered?
  -question - if input capitalization not as in example, change to title case?
model: Prompt user to enter name. Determine whether the name ends with an exclamation point. Then greet the user based on response.
examples:
  -Bob => Hello Bob.
  -Bob! => HELLO BOB. WHY ARE WE SCREAMING?
data type: string
algrithm:
  -prompt user to enter name
    -use readline-sync
    -let name
  -evaluate name variable
    -check if last index of name variable is exclamation point
      -use string.length
      -if yes
        -set name variable to name minus exclamation point
           -use .substring()
        -set name to allcaps
           -use .toUpperCase()
        -return greeting
           -`HELLO ${name}. WHY ARE WE SCREAMING?`
      -if no
         -return greeting
           -`Hello ${name}.`
*/

const readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name?\n');

if (name[name.length - 1] === '!') {
  name = name.substring(0, (name.length - 1)).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}