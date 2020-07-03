let workingNum;
let resultsArray = [];

function getNumOfDigits(num) {
  let digits = 1;
  let numSubtract = 9;
  while (num - numSubtract > 0) {
    digits += 1;
    numSubtract = (numSubtract * 10) + 9;
  }
  return digits;
}

function integerToString(num) {
  let holderNum = num;
  let digits = getNumOfDigits(num);
  if (num === 0) {
    console.log('0');
  } else {
    for (let i = digits; i > 0; i -= 1) {
      workingNum = holderNum / Math.pow(10, (i - 1)); // formula moves decimal point to the left (i.e., 1234 => 1.234)
      for (let y = 1; y < 10; y += 1) {
        if (workingNum === 0) {
          resultsArray.push(0);
          break;
        } else if ((workingNum - y) === 0) {
          resultsArray.push(y);
          holderNum = 0;
          break;
        } else if (workingNum - y < 0) {
          resultsArray.push(y - 1);
          holderNum -= ((y - 1) * Math.pow(10, i - 1)); //
          break;
        }
      }
    }
    console.log(resultsArray.join(''));

  }
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"