function twice(number) {

  let numLength = String(number).length;
  let doubleNumber = String(number).substring(0, numLength / 2) === String(number).substring(numLength / 2);

  if (doubleNumber) {
    return number;
  } else {
    return number * 2;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676