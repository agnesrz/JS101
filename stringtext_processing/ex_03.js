function letterCaseCount(string) {
  let lowercaseChar = 0;
  let uppercaseChar = 0;
  let neitherChar = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index].search(/[a-z]/) >= 0) {
      lowercaseChar += 1;
    } else if (string[index].search(/[A-Z]/) >= 0) {
      uppercaseChar += 1;
    } else {
      neitherChar += 1;
    }
  }

  return {lowercase: lowercaseChar, uppercase: uppercaseChar,
          neither: neitherChar};
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }