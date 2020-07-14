/*
// Original solution
function swap(string) {
  let wordsArray = string.split(' ');
  let resultsArray = [];

  wordsArray.forEach(item => {
    let word = '';
    for (let index = 0; index < item.length; index += 1) {
      if (index === 0) {
        word += item[item.length - 1];
      } else if (index === item.length - 1) {
        word += item[0];
      } else {
        word += item[index];
      }
    }
    resultsArray.push(word);
  });

  console.log(resultsArray.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/

// Further exploration
function swap(string) {
  let resultsArray = string.split(' ').map(item => {
    if (item.length === 1) {
      return item;
    } else {
      return item[item.length - 1] + item.slice(1, item.length - 1) + item[0];
    }
  });
  console.log(resultsArray.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"