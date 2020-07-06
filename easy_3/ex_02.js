/*
// my original solution
function logInBox(string) {
  let boxBorderTop = '+-' + duplicateCharacter('-', string.length) + '-+';
  let boxBorderLine2 = '| ' + duplicateCharacter(' ', string.length) + ' |';
  let boxBorderLine3 = '| ' + string + ' |';
  let boxBorderLine4 = boxBorderLine2;
  let boxBorderBottom = boxBorderTop;

  console.log(boxBorderTop);
  console.log(boxBorderLine2);
  console.log(boxBorderLine3);
  console.log(boxBorderLine4);
  console.log(boxBorderBottom);
}

function duplicateCharacter(character, length) {
  let iterator = length;
  let result = '';
  while (iterator > 0) {
    result += character;
    iterator -= 1;
  }
  return result;
}

logInBox('');
logInBox('To boldly go where no one has gone before.');
    +--------------------------------------------+
    |                                            |
    | To boldly go where no one has gone before. |
    |                                            |
    +--------------------------------------------+


// Further Exploration, Part 1
function logInBox(string, width) {
  let message = '';

  if (string.length > width) {
    for (let i = 0; i < width; i += 1) {
      message += string[i];
    }
  }

  let boxLines1And5 = '+-' + '-'.repeat(message.length) + '-+';
  let boxLines2And4 = '| ' + ' '.repeat(message.length) + ' |';
  let boxLine3 = '| ' + message + ' |';

  console.log(boxLines1And5);
  console.log(boxLines2And4);
  console.log(boxLine3);
  console.log(boxLines2And4);
  console.log(boxLines1And5);
}

//logInBox('');
logInBox('To boldly go where no one has gone before.', 9);
logInBox('');
*/

// Further Exploration, Part 2

function getBoxText(string, maxChar) {

  let resultsArray = [];
  let startValue = 0;
  let endValue = maxChar - 1;
  let again = true;

  while (again) {
    let tempArray = ['| '];

    for (let i = startValue; i < endValue; i += 1) {
      tempArray.push(string[i] === undefined ? ' ' : string[i]);
    }

    tempArray.push(valueToPush(string[endValue - 1], string[endValue], string[endValue + 1]));
    again = string[endValue] !== undefined;
    startValue += updateStartAndEndValues(string[endValue], string[endValue + 1], maxChar);
    endValue += updateStartAndEndValues(string[endValue], string[endValue + 1], maxChar);

    resultsArray.push(tempArray.join(''));
  }
  return resultsArray.join('\n');
}


function valueToPush(value1, value2, value3) {

  if ((value2 === undefined) || (value2 === ' ')) {
    return '  |';
  } else if ((value1 === ' ') && (value3 !== ' ')) {
    return '  |';
  } else if (value3 === ' ') {
    return value2 + ' |';
  } else {
    return '- |';
  }
}


function updateStartAndEndValues(value2, value3, maxChar) {

  if (value2 === ' ') {
    return maxChar;
  } else if (value3 === ' ') {
    return maxChar + 1;
  } else {
    return maxChar - 1;
  }
}

function logInBox(string, width) { // function assumes width is >= 6

  let boxLinesTopAndBottom;
  let boxLinesAboveAndBelowText;
  let boxLinesText;

  if (string.length > width - 4) {
    boxLinesTopAndBottom = '+-' + '-'.repeat(width - 4) + '-+';
    boxLinesAboveAndBelowText = '| ' + ' '.repeat(width - 4) + ' |';
    boxLinesText = getBoxText(string, width - 4);

  } else {
    boxLinesTopAndBottom = '+-' + '-'.repeat(string.length) + '-+';
    boxLinesAboveAndBelowText = '| ' + ' '.repeat(string.length) + ' |';
    boxLinesText = '| ' + string + ' |';
  }

  console.log(boxLinesTopAndBottom);
  console.log(boxLinesAboveAndBelowText);
  console.log(boxLinesText);
  console.log(boxLinesAboveAndBelowText);
  console.log(boxLinesTopAndBottom);
}

logInBox('To boldly go where no one has gone before.', 15);
logInBox('To boldly go where no one has gone before.', 30);
logInBox('To boldly go where no one has gone before.', 6);
logInBox('');