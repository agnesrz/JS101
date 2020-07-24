let letterMatch = /[A-Z]/i;
let vowels = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(string) {
  let resultArray = string.split('').map(char => {
    if (letterMatch.test(char) && !vowels.includes(char)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(resultArray);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""