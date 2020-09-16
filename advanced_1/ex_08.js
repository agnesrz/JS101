var Fraction = require('fraction.js');

function egyptian(rationalNum) {
  let result = [];
  let resultSum;
  let denominator = 1;
  let match;

  while (!match) {
    let newSum = resultSum ? resultSum.add(1, denominator) :
                 Fraction(1, denominator);
    match = newSum.s === rationalNum.s &&
            newSum.n === rationalNum.n &&
            newSum.d === rationalNum.d;

    if (newSum <= rationalNum) {
      result.push(denominator);
      resultSum = newSum;
    }

    denominator += 1;
  }
  return result;
}

function unegyptian(array) {
  let totalAsFraction =  array.map(item => Fraction(1, item))
                         .reduce((accumulator, currentValue) => accumulator.add(currentValue));

  return totalAsFraction.n / totalAsFraction.d;
}

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3