/*
Input: number representing the nth fibonacci number
Output: the value of the nth fibonacci number
Rules:
  -use recursion
    -have an ending condition
    -function should call itself at least once
    -results of call should be used in each step
  -fibonacci is a sequence of numbers where each number is the sum of the previous numbers

Fibonacci Sequence
1 - 1
2 - 1
3 - 2
4 - 3
5 - 5 -
6 - 8
7 - 13  

Notes:
  -ending condition
    -upon each iteration, one argument will decrement until it reaches 2 (or 1?)
*/

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765