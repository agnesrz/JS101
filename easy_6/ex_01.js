function repeater(string) {
  let characterArray = Array.from(string);
  let resultArray = [];

  characterArray.forEach(item => resultArray.push(item, item));

  return resultArray.join("");
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""