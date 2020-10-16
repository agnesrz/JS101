/*
Input: nth Fibinocci number
Output: value of nth Fibonacci number
Rules:
  - Do not use recursion
  - Assume input will always be 1 or more?
  
Algorithm:
  -Initialize a variable to store result
  -Create a loop that calculates fiobnacci number from ground up
    -Starting condition: 1st fib num
    -Ending condition: nth fib num
    -During each iteration:
      -calculate fib num and store to result variable
        -calculate by adding previous two fib nums together
      -
1 - 1
2 - 1
3 - 2
4 - 3
5 - 5
6 - 8

*/

function fibonacci(nth) {
  if (nth < 3) return 1;
  
  let fibNum;
  let num1 = 1;
  let num2 = 1;
  
  for (let i = 3; i <= nth; i += 1) {
    fibNum = num1 + num2;
    num2 = num1;
    num1 = fibNum;
  }
  
  return fibNum;
}


console.log(fibonacci(4));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050