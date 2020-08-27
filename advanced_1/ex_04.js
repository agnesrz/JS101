function rotate90(matrix) {
  let rotated = [];
  let rotatedNumOfColumns = matrix.length;
  let rotatedNumOfRows = matrix[0].length;

  let matrixRow = matrix.length - 1;

  for (let round = 0; round < rotatedNumOfRows; round += 1) {
    rotated.push([]);
  }

  for (let column = 0; column < rotatedNumOfColumns; column += 1) {
    let matrixColumn = 0;

    for (let row = 0; row < rotatedNumOfRows; row += 1) {
      rotated[row].push(matrix[matrixRow][matrixColumn]);
      matrixColumn += 1;
    }
    matrixRow -= 1;
  }
  return rotated;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]