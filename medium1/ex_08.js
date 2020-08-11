let fibArray = [1, 1, 2];

function fibonacci(nth) {

  if (nth <= fibArray.length) {
    return fibArray[nth - 1];
  }

  fibArray[nth - 1] = fibonacci(nth - 1) + fibonacci(nth - 2);

  return fibArray[nth - 1];
}

console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50));