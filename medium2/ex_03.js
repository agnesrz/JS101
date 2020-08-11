function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3].sort((a, b) => a - b);

  function invalid() {
    return (angles.reduce((accum, curVal) => accum + curVal) !== 180) ||
           (angles[0] <= 0);
  }

  if (invalid()) {
    return 'invalid';
  } else if (angles[2] > 90) {
    return 'obtuse';
  } else if (angles.includes(90)) {
    return 'right';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");