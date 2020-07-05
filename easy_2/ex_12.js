const NUM_STRING_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function checkIfNegative(number) {
  if (Math.sign(number) === -1) {
    return true;
  } else {
    return false;
  }
}

function signedIntegerToString(number) {
  let result = '';
  let num = number;
  let remainder;
  let negative = checkIfNegative(number);

  if (negative) {
    num *= -1;
  }

  do {
    remainder = num % 10;
    result = NUM_STRING_ARRAY[remainder] + result;
    num = Math.floor(num / 10);
  } while (num > 0);

  if (negative) {
    result = '-' + result;
  } else if (number > 0) {
    result = '+' + result;
  }
  return result;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");