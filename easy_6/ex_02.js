const LETTER_MATCH = /[A-Z]/i;
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(string) {
  let resultArray = string.split('').map(char => {
    if (LETTER_MATCH.test(char) && !VOWELS.includes(char)) {
      return char + char;
    } else {
      return char;
    }
  });
  return resultArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""