function fridayThe13ths(year) {
  let date;
  let count = 0;
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  function setDate(month, year) {
    date = new Date(`${month} '13, ${year}`);
  }

  months.forEach(month => {
    setDate(month, year);
    if (date.getDay() === 5) {
      count += 1;
    }
  });

  return count;

}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2020));      // 
console.log(fridayThe13ths(2021));      // 
