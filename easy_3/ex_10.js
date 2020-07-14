function century(year) {
  let century = String(Math.ceil(year / 100));
  let suffix = getSuffix(century);

  return century + suffix;
}

function getSuffix(century) {
  let lastNum = century[century.length - 1];
  
  if ((century.length > 1) && (century[century.length - 2] === '1')) {
    lastNum = '0';
  }

  switch (lastNum) {
    case '1':
      return 'st';
    case '2':
      return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"