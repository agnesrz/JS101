function lightsOn(switches) {
  let switchesArray = [];

  for (let count = 1; count <= switches; count += 1) {
    switchesArray.push([count, false]);
  }

  for (let count = 1; count <= switches; count += 1) {
    switchesArray = switchesArray.map(currentVal => {
      let [switchNum, state] = currentVal;
      if (switchNum % count === 0) {
        return [switchNum, !state];
      } else {
        return currentVal;
      }
    });
  }

  return switchesArray.filter(element => element[1] === true)
                      .map(element => element[0]);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]