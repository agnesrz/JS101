/*
// My Solution
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  let wordArray = array.map(item => NUMBER_WORDS[item]).sort();
  return wordArray.map(item => NUMBER_WORDS.indexOf(item));
}
*/

// Further Exploration
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen'];

function toAlphabeticOrder(item1, item2) {
  if (item1 > item2) {
    return 1;
  } else if (item1 === item2) {
    return 0;
  } else {
    return -1;
  }
}

function alphabeticNumberSort(array) {
  let wordArray = array.map(item => NUMBER_WORDS[item]).sort(toAlphabeticOrder);
  return wordArray.map(item => NUMBER_WORDS.indexOf(item));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
