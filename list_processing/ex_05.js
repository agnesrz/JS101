/*
// My Solution
function substrings(string) {
  let result = [];

  for (let index = 0; index < string.length; index += 1) {
    let currentString = string.slice(index, string.length);
    result = result.concat(leadingSubstrings(currentString));
  }

  return result;
}

function leadingSubstrings(string) {
  let result = [];

  for (let index = 1; index <= string.length; index += 1) {
    result.push(string.slice(0, index));
  }

  return result;
}
*/

// Further Exploration
function substrings(string) {
  let resultArray = string.split('').map((_, index) => {
    let substring = string.slice(index);
    return leadingSubstrings(substring);
  });

  return resultArray.reduce((a, b) => a.concat(b));
}

function leadingSubstrings(string) {
  let stringArray = string.split('');
  let resultArray = string.split('').map( _ => {
    let substring = stringArray.reduce((a, b) => a + b);
    stringArray.pop();
    return substring;
  });

  return resultArray.reverse();
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]