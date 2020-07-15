/*
// my initial solution
function crunch(string) {
  let previousValue;
  let resultArray = [];
  let stringArray = string.split('');

  stringArray.forEach(item => {
    if (previousValue !== item) {
      resultArray.push(item);
    }
    previousValue = item;
  });
   console.log(resultArray.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

function crunch(string) {
  let duplicateRegex = /(.)(?=\1)/;
  let result = string;

  while (result.match(duplicateRegex)) {
    result = result.replace(duplicateRegex, '');
  }
  console.log(result);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""