function century(year) {
  let century = getCentury(year);

  let suffix = getSuffix(year, century);
  console.log(suffix);

  console.log(`${century}${suffix} century`);
}

function getCentury(year) {
  if (year < 101) {
    return 1;
  } else {
    return Math.ceil(year / 100);
  }
}

function getSuffix(year, century) {
  if (century === 1) {
    return 'st';
  } else {
    let numArray = numToArrayOfStrings(year);
    let lastTwoNum = ((numArray.length - 2) + (numArray.length - 1));

    switch (lastTwoNum) {
      case '01':
        return 'st';
      case '02':
        return 'nd';
      case '03':
        return 'rd';
      default:
        return 'th';
    }
  }
}

function numToArrayOfStrings(num) {
  let numArray = [];
  let index = 0;

  do {
    numArray.push(String(num)[index]);
    index += 1;
  } while (String(num)[index] !== 'undefined');

  return numArray;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"