function sum(number) {
  let array = String(number).split('');
  return array.reduce((accum, curVal) => Number(accum) + Number(curVal));
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45