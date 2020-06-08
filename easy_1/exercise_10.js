/*
input: an integer that is > 1
output: sum of numbers between 1 and input that are multiples of 3 or 5
rules:
  -assume input is integer that is greater than 1
model: Get a number that is > 1. Add together the numbers between 1 and the input that are multiples of 3 or 5
examples:
  -multisum(3);       // 3
  -multisum(5);       // 8
  -multisum(10);      // 33
  -multisum(1000);    // 234168
data type: number
algorithm:
  -Ask for a number
  -Add together numbers between 1 and the input that are multiples of 3 or 5
    -Create result variable and set to 0
    -Loop through each number between 1 and the input
      -Set iterator to 0
      -Stopping condition is when iterator is > input
      -increase by 1 in each iteration
    -If number divisible by 3 or 5, add number to result variable (+=)
formal pseodocode:
  -GET "Enter a number"
  -SET number
  -SET result = 0
  -WHILE iterator > number
    -IF iterator % 3 === 0 or iterator % 5 === 0
      -result += iterator
      iterator += 1
    =ELSE
      -iterator +=1
  -PRINT result    
*/

function multisum(number) {
  let result = 0;
  
  for (let i = 1; i < (number + 1); i += 1) {
    if (i % 3 === 0) {
      result += i;
    } else if (i % 5 === 0) {
      result += i;
    }
  }
  return result;  
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168