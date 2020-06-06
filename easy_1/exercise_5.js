
/*
input:
  -bill amount
  -tip rate
output:
  -tip amount
  -total bill
rules:
  -program should prompt for bill amount
  -program should prompt for tip rate
  -log outputs to console
  -ignore input validation;
model:
  -Ask for bill amount
  -Ask for tip amount
  -Calculate tip amount
  -Calculate total bill
  -Log tip amount and total bill to console
examples:
  -bill = 0; tip = 0 => 0, 0
  -bill = 5; tip = 0 => 5
  -bill = 10; tip = 5 => 10.50
  -bill = 15; tip = 15 => 17.25
data structures: number
algorithm:
  -use readline-sync to collect bill amount and set to variable 'bill'
  -use readline-sync to collect tip rate and set to variable 'tipRate'
  -calculate tip amount and set to variable tipAmount;
    -convert tip to decimal
    -bill * tip rate
    -round up so only two places after decimal point
  -calculate total bill set to varaible 'totalBill'
    -add tipAmount to bill
  -log tipAmount and totalBill to the console
*/

const readlineSync = require('readline-sync');

let bill = parseInt((readlineSync.question('What is the bill? ')), (10));

let tipRate = parseInt((readlineSync.question('What is the tip percentage? ')), 10);

let tipAmount = (tipRate / 100) * bill;

let totalBill = (bill + tipAmount).toFixed(2);

tipAmount = tipAmount.toFixed(2);

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${totalBill}`);


/*
  -bill = 0; tip = 0 => 0, 0
  -bill = 5; tip = 0 => 5, 0
  -bill = 10; tip = 5 => 10.50
  -bill = 15; tip = 15 => 17.25
*/