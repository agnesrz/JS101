function merge(array1, array2) {//
  let result = [];//
  let array1Index = 0;//
  let array2Index = 0;//

  while (result.length < array1.length + array2.length) {//3
    if (array1Index === array1.length) {
      result = result.concat(array2.slice(array2Index));
    } else if (array2Index === array2.length) {
      result = result.concat(array1.slice(array1Index));
    } else if (array1[array1Index] < array2[array2Index]) {
      result.push(array1[array1Index]);
      array1Index += 1;
    } else {
      result.push(array2[array2Index]);
      array2Index += 1;
    }
  }

  console.log(result);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]