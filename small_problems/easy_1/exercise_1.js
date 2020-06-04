/*
input: integer
output: boolean
rules:
    -input is valid integer
    -input can be positive, 0, or negative
    -if absolute value of input is odd, return true
    -if absolute value of input is even, return false (assumption)
model: Check if input value is odd. If true, return true.
test cases:
    console.log(isOdd(2)); // => false
    console.log(isOdd(5)); // => true
    console.log(isOdd(-17)); // => true
    console.log(isOdd(-8)); // => false
    console.log(isOdd(0)); // => false
    console.log(isOdd(7)); // => true
 data structure: number
 algorithm: 
    -Create function that does the following:
        1. Create variable 'remainder'
        2. Set 'remainder' equal to the remaider of the input / 2
        2. Check if 'remainder' is integer
            - Number.isInteger(remainder)
        3. If result is integer, return false; else, return true
            -ternary operator
*/

function isOdd(num) {
    let remainder;
    let returnVal;
    remainder = num / 2;
    Number.isInteger(remainder) ? returnVal = false : returnVal = true;
    return returnVal;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true