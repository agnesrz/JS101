/*
input: year
output: true or false
rules:
  -year must be greater than 0
  -year must be number
  -leap year if:
    -year is evenly divisible by 4 (unless it is also evenly divisible by 100)
    -year is evenly divisible by 100 and 400
  -if leap year, output true
  -if not leap year, output false
  -validate input?
model: Given a year, determine whether the year is a leap year. If yes, return true. If no, return false.
example:
  -isLeapYear(2016);      // true
  -isLeapYear(2015);      // false
  -isLeapYear(2100);      // false
  -isLeapYear(2400);      // true
  -isLeapYear(240000);    // true
  -isLeapYear(240001);    // false
  -isLeapYear(2000);      // true
  -isLeapYear(1900);      // false
  -isLeapYear(1752);      // true
  -isLeapYear(1700);      // false
  -isLeapYear(1);         // false
  -isLeapYear(100);       // false
  -isLeapYear(400);       // true
data type:
  -number
  -boolean
algorithm:
  -Given a year, determine if year is leap year
    -use if, else if, else statement
    -check if year is divisible by 4
      -IF year divisible by 4, check IF it is also divisible by 100
        -IF not divisible, return true
        -if divisible, return false
    -check if year divisible by 100
      -if yes, check if it is also divisible by 400
        -if yes, return true
        -if no, return false
    -else return false
*/


/*
// my solution
function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
      return true;
  } else if ((year % 100 === 0) && (year % 400 ===0)) {
      return true;
  } else {
      return false;
  }
}
*/

// further exploration 
function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true