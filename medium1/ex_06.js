function fibonacci(nthFibonacci) {  // 5
  if (nthFibonacci === 1 ||
      nthFibonacci === 2) {
    return 1;
  }

  return fibonacci(nthFibonacci - 1) + fibonacci(nthFibonacci - 2); // fibonacci
}

console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50));