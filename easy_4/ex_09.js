function wordSizes(string) {

  const RESULT = {};
  let wordLengthArray = string.replace(/[^a-z ]/gi, '').split(' ').map(item => String(item.length)).sort();

  wordLengthArray.forEach(item => {
    if ((item !== '0') && (RESULT[item])) {
      RESULT[item] += 1;
    } else if (item !== '0') {
      RESULT[item] = 1;
    }
  });

  return RESULT;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}