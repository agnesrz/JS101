/*

// Procedural Solution
const FIBONACCI_SEQUENCE = [undefined, 1, 1];

function fibonacci(nth) {
  if (FIBONACCI_SEQUENCE[nth]) {
    return FIBONACCI_SEQUENCE[nth];
  }
  
  for (let i = FIBONACCI_SEQUENCE.length; i <= nth; i += 1) {
    let num1 = FIBONACCI_SEQUENCE[FIBONACCI_SEQUENCE.length - 2];
    let num2 = FIBONACCI_SEQUENCE[FIBONACCI_SEQUENCE.length - 1];
   
   FIBONACCI_SEQUENCE.push(num1 + num2);

  }
  
  return FIBONACCI_SEQUENCE[FIBONACCI_SEQUENCE.length - 1];
}


console.log(fibonacci(4));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

Algorithm:
  -Initialize Fibonacci sequence array
    -Since we know the first two digits of the sequence, add them to the array
    -Organize array so that fib value is associated the index representing nth value
  -Check whether the fibonacci number exists within the fibonacci array
    -if yes, return element
    -if no, calculate fibonacci
      -add last two array items together
      -initialize loop that calculates next value in fibonacci sequence until you calculate n'th value
        -during each iteration, save new fibonacci number to array
      -return nth value


*/

// Recursion Solution
const FIBONACCI_SEQUENCE = {1: 1, 2: 1};

function fibonacci(nth) {
  if (FIBONACCI_SEQUENCE[String(nth)]) {
    return FIBONACCI_SEQUENCE[String(nth)];
  }
  
  let fibonacciValue = fibonacci(nth - 1) + fibonacci(nth - 2);
  FIBONACCI_SEQUENCE[String(nth)] = fibonacciValue;
  
  return fibonacciValue;
}

console.log(fibonacci(15));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

/*
Input: number represeting nth fibonacci number
Output: number represetning value of nth fibonacci number
Test Cases:
  -1 : 1
  -2 : 1
  -3 : 2
  -4 : 3
  -5 : 5
  -6 : 8
Algorithm:
  -Initialize a fibonacci object to store fibonacci values as they are calculated
    -add values of 1st & 2nd fibonacci numbers to the object, since we know them
  -Check if the nth fibonacci value exists in the object
    -if yes, return that value
    -if no
      -use recursion to calculate value
      -save result in fibonacci object
*/