/*
// My Solution
function diamond(widestLength) {
  let numOfSpaces = Math.floor(widestLength / 2);

  for (let line = 1; line <= widestLength; line += 2) {
    console.log(`${' '.repeat(numOfSpaces)}${'*'.repeat(line)}`);
    numOfSpaces === 0 ? numOfSpaces += 1 : numOfSpaces -= 1;
  }

  if (widestLength === 1) return;

  for (let line = widestLength - 2; line >= 0; line -= 2) {
    console.log(`${' '.repeat(numOfSpaces)}${'*'.repeat(line)}`);
    numOfSpaces += 1;
  }

}

diamond(1);
diamond(3);
diamond(9);
*/

// Further Exploration
function diamond(widestLength) {
  let numOfSpaces = Math.floor(widestLength / 2);

  for (let line = 1; line <= widestLength; line += 2) {
    console.log(`${' '.repeat(numOfSpaces)}${interiorDiamond(line)}`);
    numOfSpaces === 0 ? numOfSpaces += 1 : numOfSpaces -= 1;
  }

  if (widestLength === 1) return;

  for (let line = widestLength - 2; line >= 0; line -= 2) {
    console.log(`${' '.repeat(numOfSpaces)}${interiorDiamond(line)}`);
    numOfSpaces += 1;
  }

  function interiorDiamond(line) {
    if (line === 1) return '*';

    return `*${' '.repeat(line - 2)}*`;
  }

}

diamond(1);
diamond(3);
diamond(9);