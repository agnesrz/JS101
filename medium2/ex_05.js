function featured(num) {
  let featuredNum = num + 1;

  if (featuredNum > 9876543201) {
    return 'Error: no next featured number exists.';
  }

  while (notFeaturedNum(num, featuredNum)) {
    if (featuredNum % 7 !== 0) {
      featuredNum += 1;
    } else {
      featuredNum += 7;
    }
  }
  return featuredNum;
}

function notFeaturedNum(input, numToTest) {
  return (numToTest % 7 !== 0) ||
         (numToTest <= input) ||
         (numToTest % 2 === 0) ||
         (duplicateDigits(numToTest));
}

function duplicateDigits(num) {
  let numbers = String(num).split('').sort((a, b) => a - b);

  for (let index = 0; index < (numbers.length - 1); index += 1) {
    if (numbers[index] === numbers[index + 1]) {
      return true;
    }
  }

  return false;
}

console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."