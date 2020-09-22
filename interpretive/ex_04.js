/*
// My Solution
function star(gridSize) {
  let outerSpaces = 0;
  let innerSpaces = (gridSize - 3) / 2;

  while (innerSpaces >= 0) {
    console.log(`${(' ').repeat(outerSpaces)}*${(' ').repeat(innerSpaces)}*${(' ').repeat(innerSpaces)}*`);
    outerSpaces += 1;
    innerSpaces -= 1;
  }

  console.log('*'.repeat(gridSize));

  outerSpaces = (gridSize - 3) / 2;
  innerSpaces = 0;

  while (outerSpaces >= 0) {
    console.log(`${(' ').repeat(outerSpaces)}*${(' ').repeat(innerSpaces)}*${(' ').repeat(innerSpaces)}*`);
    outerSpaces -= 1;
    innerSpaces += 1;
  }
}
*/

//Refactored
function star(gridSize) {
  printUpperOrLowerRows('upper', gridSize);
  console.log('*'.repeat(gridSize));
  printUpperOrLowerRows('lower', gridSize);
}

//prints either upper rows or lower rows DOES NOT PRINT MIDDLE ROW
function printUpperOrLowerRows(rowLocation, gridSize) {//for rowLocation paramater, enter either 'upper' or 'lower'
  let upperRow = rowLocation === 'upper';
  let outerSpaces = upperRow ? 0 : (gridSize - 3) / 2;
  let innerSpaces = upperRow ? (gridSize - 3) / 2 : 0;

  while (upperRow ? innerSpaces >= 0 : outerSpaces >= 0) {
    console.log((' ').repeat(outerSpaces) + ['*', '*', '*'].join((' ').repeat(innerSpaces)));
    upperRow ? outerSpaces += 1 : outerSpaces -= 1;
    upperRow ? innerSpaces -= 1 : innerSpaces += 1;
  }
}

//star(7);
star(9);