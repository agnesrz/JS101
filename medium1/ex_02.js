function rotateRightmostDigits(number, digitToRotate) {
  let arrayOfNums = String(number).split('');
  let numToRotateIdx = arrayOfNums.length - digitToRotate;
  let numToRotate = arrayOfNums[numToRotateIdx];
  
  arrayOfNums.splice(numToRotateIdx, 1);
  arrayOfNums.push(numToRotate);
  
  return Number(arrayOfNums.join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);