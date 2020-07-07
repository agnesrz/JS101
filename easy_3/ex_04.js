/*
// Original solution
function findFibonacciIndexByLength(length) {
  let firstNum = 1;
  let secondNum = 2;
  let total;
  let index = 3;

  while (String(secondNum).length !== length) {
    total = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = total;
    index += 1;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));
*/

// Further exploration
function findFibonacciIndexByLength(length) {
  let firstNum = 1; // 3
  let secondNum = 2; // 5
  let total; // 5
  let index = 3;

  while (String(secondNum).length !== length) {

    total = firstNum + secondNum;

    if (total === secondNum) {
      throw new RangeError('The result is too large for this system to process.');
    }

    firstNum = secondNum;
    secondNum = total;
    index += 1;
  }
  console.log(index);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
findFibonacciIndexByLength(17);       // error
findFibonacciIndexByLength(18);       // error
findFibonacciIndexByLength(21);       // error