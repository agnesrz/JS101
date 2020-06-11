/*
input: string
output: second to the last word in the string
rules:
  -words are any sequence of non-blank characters
  -assume the input string will contain at least two words
  -create function that takes the string in as an argument
model: Find and return the second to the last word in a string.
example:
  -console.log(penultimate("last word") === "last"); // logs true
  -console.log(penultimate("Launch School is great!") === "is"); // logs true\
data type: string, array
algorithm:
  -determine the second to the last word in a string
    -place each word in the string into an array
      -use .split(' ')
    -find the index of the second to the last array element
      -array.length - -2
    -return the last word

//my solution
function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


// further exploration

input: string
output: middle word of the string
rules:
  -words are any sequence of non-blank characters
  -create function
  -do not ignore edge cases
  -validate input
model: Find and return the middle word in a string.
example:
  -console.log(middleWord(false) === "Error: entry must be a string."); // logs true
  -console.log(middleWord(14222) === "Error: entry must be a string."); // logs true
  -console.log(middleWord('') === "Your entry did not contain any words. Please try again."); // logs true
  -console.log(middleWord(' ') === "Your entry did not contain any words. Please try again."); // logs true
  -console.log(middleWord('       ') === "Your entry did not contain any words. Please try again."); // logs true
  -console.log(middleWord(' ') === "Your entry did not contain any words. Please try again."); // logs true
  -console.log(middleWord("What's in a name?") === "The entry contains an even number of words, so there is no middle word."); // logs true
  -console.log(middleWord('How are you?') === 'The middle word is "are"'); // logs true
  -console.log(middleWord('Once upon a time, a very long time ago, there lived a mouse.') === "long"); // logs true
data type: string, array
algorithm:
  -validate input
    -if not a string, return error.
      -Error: entry must be a string.
    -if empty string, return error.
      -Your entry did not contain any words.
  -place each word in the string into an array
      -use .split(' ')
  -check if the length of the array is odd:
      -set odd variable to true if array.length is not divisible by two
      -set odd variable to false if array.length is divisible by two
  -if array is odd
    -return word at middle index location
      -index location ((array.length - 1) / 2)
  -if array is even
    -return "The entry contains an even number of words, so there is no middle word."
*/

function validateString(input) {
  return typeof input === 'string';
}

function emptyString(input) {
  return input.trim() === '';
}

function middleWord(string) {

  if (!validateString(string)) {
    return 'Error: entry must be a string.';
  }

  if (emptyString(string)) {
    return 'Your entry did not contain any words.';
  }

  let words = string.split(' ');

  if (words.length === 1) {
    return "The entry contains only one word, so there is no middle word.";
  } else if (words.length % 2 === 0) {
    return "The entry contains an even number of words, so there is no middle word.";
  } else {
    let midWord = words[(words.length - 1) / 2];
    return `The middle word is "${midWord}."`;
  }
}

console.log(middleWord(false) === "Error: entry must be a string."); // logs true
console.log(middleWord(14222) === "Error: entry must be a string."); // logs true
console.log(middleWord('') === "Your entry did not contain any words."); // logs true
console.log(middleWord(' ') === "Your entry did not contain any words."); // logs true
console.log(middleWord('       ') === "Your entry did not contain any words."); // logs true
console.log(middleWord(' ') === "Your entry did not contain any words."); // logs true
console.log(middleWord("What?") === "The entry contains only one word, so there is no middle word."); // logs true
console.log(middleWord("What's in a name?") === "The entry contains an even number of words, so there is no middle word."); // logs true
console.log(middleWord('How are you?') === 'The middle word is "are."'); // logs true
console.log(middleWord('Once upon a time, a very long time ago, there lived a mouse.') === 'The middle word is "long."'); // logs true\