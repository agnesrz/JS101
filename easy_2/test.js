function verifyString(input) {
  return typeof input === 'string';
}

console.log(verifyString('Four score'));         // 984
console.log(verifyString('Launch School'));      // 1251
console.log(verifyString('a'));                  // 97
console.log(verifyString(''));                   // 0
console.log(verifyString(1));                   // 0