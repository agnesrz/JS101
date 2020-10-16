function rotateRightmostDigits(num, digits) {
  let numArray = String(num).split('');
  let startDisplacementIndex = numArray.length - digits;
  let firstDisplacedNum = numArray.splice(startDisplacementIndex, 1);
  
  console.log(Number(numArray.concat(firstDisplacedNum).join('')));
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917