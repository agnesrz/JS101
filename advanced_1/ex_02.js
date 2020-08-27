/*
// Problem Solution
function transpose(matrix) {
  let transposedMatrix = [];
  
  for (let i = 0; i < matrix.length; i += 1) {
    transposedMatrix.push(matrix.map(subArray => subArray[i]));
  }
  
  return transposedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
*/

// Further Exploration
function transposeInPlace(matrix) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));
  let row;
  let column = 0;
  
  for (let i = 0; i < matrix.length; i += 1) {
    row = 0;
    for (let subI = 0; subI < matrix[i].length; subI += 1) {
      matrix[i][subI] = matrixCopy[row][column];
      row += 1;
    }
    column += 1;
  }
  return matrix;
}

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

transposeInPlace(matrix);

console.log(matrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]