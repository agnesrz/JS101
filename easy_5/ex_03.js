function halvsies(array) {
  let halfArrayLength = ((array.length - 1) / 2);
  let odd = array.length % 2;
  let resultArray = [[], []];

  array.forEach((item, index) => {
    if ((index <= halfArrayLength) ||
       (odd && ((index - 1) < halfArrayLength))) {
      resultArray[0].push(item);
    } else {
      resultArray[1].push(item);
    }
  });
  console.log(resultArray);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]