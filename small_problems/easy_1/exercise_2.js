/*
input: starting number, ending number
output: all odd numbers that are part of this range: 1 to 99
rules:
  -output to be logged to the console
  -each odd number to be logged to its own line (question - use line breaks or seperate console.log commands?)
model: Loop through all the numbers in the range. Determine if each number is odd. If it is, log it to the console.
data structure: number
algorithm:
  -Loop through all numbers in the range
    -use for loop, where start num (i) is start value and end num is end value
  -Have loop check whether number is odd
    - check if dividing i by two produces remainder
    - return a value of true if result is !== 0
      -if statement
  -Within loop, if result is true, log number to console
*/


for (let i = 1; i < 100; i += 1) {
  if (i % 2) {
   console.log(i); 
  } 
}