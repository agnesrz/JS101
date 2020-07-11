function century(year) {
  let century = Math.ceil(year / 100);
  let suffix = getSuffix(century);

  return century + suffix;
}

function getSuffix(century) {
  let centuryString = String(century);
  
  if ((centuryString.length > 1) && (centuryString[centuryString.length - 2] === '1')) {
    centuryString = '0';
  }
  
  let lastNum = centuryString[centuryString.length - 1];

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