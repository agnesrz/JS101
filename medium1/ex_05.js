const DIGITS_AS_WORDS = ['zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  DIGITS_AS_WORDS.forEach((item, index) => {
    while (string.includes(item)) {
      string = string.replace(item, String(index));
    }
  });

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."