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

function getBoxText(string, maxCharLimit) {
  let resultsArray = [];
  let startValue = 0;
  let endValue = maxCharLimit - 1;
  let again = true;

  while (again) {
    let tempArray = ['| '];

    for (let i = startValue; i < endValue; i += 1) {
      if (string[i] === undefined) {
        tempArray.push(' ');
      } else {
        tempArray.push(string[i]);
      }
    }

    if (string[endValue] === undefined) { // if the entire string has ended
      tempArray.push('  |');
      again = false;
      console.log(1);
    } else if ((string[endValue - 1] === ' ') && (string[endValue + 1] !==  ' ')) { // if 2nd-to-last char is ' ' and nxt word has more than 1 char
      tempArray.push('  |');
      startValue += maxCharLimit - 1;
      endValue += maxCharLimit - 1;
      console.log(2);
    } else if (string[endValue] === ' ') { // if last character is a space
      tempArray.push('  |');
      startValue += maxCharLimit;
      endValue += maxCharLimit;
      console.log(3);
    } else if (string[endValue + 1] === ' ') { // if first character in next iteration is a space
      tempArray.push(string[endValue] + ' |');
      startValue += maxCharLimit + 1;
      endValue += maxCharLimit + 1;
      console.log(4);
    } else {                  // if line break happens in middle of a word
      tempArray.push('- |');
      startValue += maxCharLimit - 1;
      endValue += maxCharLimit - 1;
      console.log(5);
    }

    resultsArray.push(tempArray.join(''));
  }
  return resultsArray.join('\n');
}


function logInBox(string, width) { // function assumes width is >= 6

  let boxLinesTopAndBottom;
  let boxLinesAboveAndBelowText;
  let boxLinesText;

  let maxCharLimit = width - 4;

  if (string.length > maxCharLimit) {
    boxLinesTopAndBottom = '+-' + '-'.repeat(maxCharLimit) + '-+';
    boxLinesAboveAndBelowText = '| ' + ' '.repeat(maxCharLimit) + ' |';
    boxLinesText = getBoxText(string, maxCharLimit);

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

logInBox('To boldly go where no one has gone before.', 10);
logInBox('');