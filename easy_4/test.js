function wordSizes(words) {
  let wordsArray = words.split(' ');      // ['Four', 'score', 'and', 'seven.']
  let count = {};                         // {4: 1}

  for (let idx = 0; idx < wordsArray.length; idx += 1) {                          // idx = 1
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;   // cleanWordSize = 4
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;                             // count[4] = undefined || 0
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = '';                                    // result = ''
    
  for (let idx = 0; idx < string.length; idx += 1) {  // idx = 0
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}


console.log(wordSizes('Four score and seven.'));