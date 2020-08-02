/*
// My Solution
function leadingSubstrings(string) {
  let result = [];

  for (let index = 1; index <= string.length; index += 1) {
    result.push(string.slice(0, index));
  }

  console.log(result);
}
*/
// Further Exploration
function leadingSubstrings(string) {
  let stringArray = string.split('');
  let resultArray = string.split('').map( _ => {
    let substring = stringArray.reduce((a, b) => a + b);
    stringArray.pop();
    return substring;
  });
  
  return resultArray.reverse();
  
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]