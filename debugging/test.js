function range(start, end) {
  if (!end) {
    end = start;
    start = 0;
  }
  
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));// [0, 1, 2, 3, 4, 5]