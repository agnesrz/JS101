function sequence(num) {
  let result = [];
  for (let idx = 1; idx <= num; idx += 1) {
    result.push(idx);
  }
  return result;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]