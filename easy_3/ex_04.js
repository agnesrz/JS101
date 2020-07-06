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

console.log(findFibonacciIndexByLength(2));       // true
console.log(findFibonacciIndexByLength(10));      // true
console.log(findFibonacciIndexByLength(16));      // true