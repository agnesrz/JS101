function fibonacci(nth) {
  let fibonacciArr = [1, 1];

  if (nth < 3) {
    return 1;
  }

  while (fibonacciArr.length < nth) {
    let lastDigit = fibonacciArr[fibonacciArr.length - 1];
    let secondLastDigit = fibonacciArr[fibonacciArr.length - 2];

    fibonacciArr.push(lastDigit + secondLastDigit);
  }

  return fibonacciArr[fibonacciArr.length - 1];

}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);