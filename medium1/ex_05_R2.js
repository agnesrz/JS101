/*
Input: string
Output: string with every occurence of a spelled out number converted to a digit
Algorithm:
  -Loop through the object
  -During each iteration
    -Check whether the key matches any words
      -While true, replace word with digit
  -Return transformed string
  
Data types: object

*/
const DIGITS = {
                one: 1,
                two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6,
                seven: 7,
                eight: 8,
                nine: 9
               };

function wordToDigit(sentence) {
  for (let numWord in DIGITS) {
    let regex = new RegExp(numWord, 'g');
    
    sentence = sentence.replace(regex, DIGITS[numWord]);
  }
  
  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."