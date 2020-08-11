function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);

  if ((sides[0] === 0) ||
      (sides[0] + sides[1] < sides[2])) {
    return 'invalid';
  } else if (sides[0] === sides[2]) {
    return 'equilateral';
  } else if ((sides[0] === sides[1]) ||
             (sides[1] === sides[2])) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}


console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");