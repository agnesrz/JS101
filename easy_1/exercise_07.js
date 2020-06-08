/*
input: two strings
output: one string
rules:
  -output is the shorter string + longer string + shorter string
  -assume strings are of different lengths
  -Q: if input not string, convert to string or throw error?
model: Compare two strings to see which is longer. Concatenate and return the strings in this manner: short string, long string, short string. 
examples:
  -shortLongShort('abc', 'defgh');    // "abcdefghabc"
  -shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
  -shortLongShort('', 'xyz');         // "xyz"
  -shortLongShort('hello there ', "mighty ducky");  // "hello there mighty duckyhello there"
  -shortLongShort('hello', 1);      // error
  -shortLongShort(['hi', 'hello'], 'h');   // error
data type: string
algorithm:
  -Create function that takes two inputs
  -Validate that inputs are strings
  -Determine which string is longer
    -create variable longString
    -create variable shortString
    -use .length property 
    -assign longer string to longString varaiable and shorter string to shortString variable
  -return concatenated string
    -shortString + longString + shortString
*/

function shortLongShort(string1, string2) {
  if (typeof string1 !== 'string') {
  return 'Error: Please ensure the input values are strings.';
  } else if (typeof string2 !== 'string') {
  return 'Error: Please ensure the input values are strings.';
  }
  
  let longString;
  let shortString;
  
  if (string1.length > string2.length) {
    longString = string1;
    shortString = string2;
  } else {
    longString = string2;
    shortString = string1;
  }
  
  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('hello there ', "mighty ducky"));  // "hello there mighty duckyhello there"
console.log(shortLongShort('hello', 1));      // error
console.log(shortLongShort(['hi', 'hello'], 'h'));   // error
