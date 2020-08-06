/*
// My Solution
function staggeredCase(string) {
  let upperCase = true;
  return string.split('')
         .map(item => {
           let alphabeticChar = /[A-Z]/i;
           if (item.search(alphabeticChar) === -1) {
             return item;
           } else if (upperCase) {
             upperCase = !upperCase;
             return item.toUpperCase();
           } else {
             upperCase = !upperCase;
             return item.toLowerCase();
           }
         })
        .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");
*/

// Further Exploration
function staggeredCase(string, countAllChar = false) {
  let upperCase = false;
  let alphabeticChar = /[A-Z]/i;

  let letterArray = string.split('');

  return letterArray.map(letter => {
    if (countAllChar) {
      upperCase = !upperCase;
      return upperCase ? letter.toUpperCase() : letter.toLowerCase();
    } else if (letter.search(alphabeticChar) > -1) {
      upperCase = !upperCase;
      return upperCase ? letter.toUpperCase() : letter.toLowerCase();
    } else {
      return letter;
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");

console.log(staggeredCase('I Love Launch School!', true) === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS', true) === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 444 numbers', true) === "IgNoRe 77 ThE 444 NuMbErS");