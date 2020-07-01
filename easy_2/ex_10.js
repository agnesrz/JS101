/*
// oriignal solution
const NUMCHART = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToSignedInteger(string) {
  let numberArray = string.split('');

  let negative = false;

  if (numberArray[0] === '+') {
    numberArray.shift();
  } else if (numberArray[0] === '-') {
    numberArray.shift();
    negative = true;
  }

  let result = 0;

  numberArray.map(item => NUMCHART[item]).forEach(item => {
    result = item + (10 * result);
  });

  if (negative) {
    result *= -1;
  }

  return result;
}
*/

// modified solution

const NUMCHART = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(string) {
  let numberArray = string.split('');

  let result = 0;

  numberArray.map(item => NUMCHART[item]).forEach(item => {
    result = item + (10 * result);
  });

  return result;
}

function stringToSignedInteger(string) {

  switch (string[0]) {
    case '+':
      return stringToInteger(string.replace(string[0], ''));
    case '-':
      return -stringToInteger(string.replace(string[0], ''));
    default:
      return stringToInteger(string);
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true