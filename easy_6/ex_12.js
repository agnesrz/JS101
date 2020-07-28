/*
// My Solution
function isBalanced(string) {
  let parenthesisArray = string.split('').filter(char => (char === '(') || (char === ')'));

  if (parenthesisArray.length === 0) {
    return true;
  }

  while (parenthesisArray.length > 0) {
    let startIdx = parenthesisArray.join('').indexOf('()');

    if (!(startIdx === -1)) {
      parenthesisArray.splice(startIdx, 2);
    } else {
      return false;
    }
  }
  return true;
}
*/
// Further Exploration

const CHARTYPE = {
  parenthesis: {
    open: '(',
    close: ')'
  },
  squareBracket: {
    open: '[',
    close: ']',
  },
  curlyBracket: {
    open: '{',
    close: '}',
  },  
  singleQuote: "'",
  doubleQuote: '"'
};

function isBalanced(string, char) {
  if ((char === 'doubleQuote') || (char === 'singleQuote')) {
    return string.split('').filter(character => character === CHARTYPE[char]).length % 2 === 0;
  }
  
  let count = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === CHARTYPE[char]['open']) {
      count += 1;
    } else if (string[idx] === CHARTYPE[char]['close']) {
      count -= 1;
    }
    if (count < 0) return false;
  }
  return count === 0;
}


console.log(isBalanced("What 'is' this?", 'singleQuote') === true);
console.log(isBalanced('What is" this?', 'doubleQuote') === false);
console.log(isBalanced("What [is this?", 'squareBracket') === false);
console.log(isBalanced("{{What} {is this}}?", 'curlyBracket') === true);
//console.log(isBalanced("((What)) (is this))?") === false);
//console.log(isBalanced("Hey!") === true);
//console.log(isBalanced(")Hey!(") === false);
//console.log(isBalanced("What ((is))) up(") === false);