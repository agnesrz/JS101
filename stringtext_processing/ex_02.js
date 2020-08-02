// Write a function that takes an array of strings, and returns an array of the
// same values with all vowels (a, e, i, o, u) removed.

const VOWELS = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

function removeVowels(array) {
  return array.map(item => {
    return item.split('').filter(letter => !VOWELS.includes(letter)).join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]