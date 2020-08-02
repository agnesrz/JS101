function palindromes(string) {
  let allSubstrings = substrings(string);
  return allSubstrings.filter(string => {
    return (string.length > 1) &&
    string === string.split('').reverse().join('');
  });

}

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

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]
palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]