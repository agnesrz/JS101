function sumSquareDifference(integer) {

  function sumSquared(lastNum) {
    let sum = lastNum;

    for (let num = 1; num < lastNum; num += 1) {
      sum += num;
    }
    return sum ** 2;
  }

  function sumOfSquares(lastNum) {
    let sum = lastNum ** 2;

    for (let num = 1; num < lastNum; num += 1) {
      sum += num ** 2;
    }
    return sum;
  }

  return sumSquared(integer) - sumOfSquares(integer);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150