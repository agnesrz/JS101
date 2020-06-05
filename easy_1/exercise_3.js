/*
input: range - 1 to 99
output: even numbers
rules: 
  -output should be logged to console, one number per line
data structure: number
algorithm:
  -loop through numbers from 1 to 99
    -use for loop
    -start at 2 (i)
    -end at 99
    -increment by 2
  -within loop, console.log i
*/

for (let i = 2; i < 99; i += 2) {
  console.log(i);
}