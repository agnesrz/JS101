// Original solution
function digitList(num) {
  return Array.from(String(num));
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// Further exploration
function digitList(number) {
  let numberStringArray = String(number).split("");
  let numberArray = numberStringArray.map(currVal => parseInt(currVal, 10));

  return numberArray;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]