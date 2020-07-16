function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union() {
  let newArray = [];

  for (let idx = 0; idx < arguments.length; idx += 1) {
    arguments[idx].forEach(value => {
      if (newArray.indexOf(value) === -1) {
      newArray.push(value);
    }
  });
}
  console.log(newArray.sort());
}

union([1, 3, 5], [3, 6, 9], [2, 5, 2, 7, 8]);    // [1, 3, 5, 6, 9]