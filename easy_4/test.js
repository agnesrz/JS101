function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(120, 20);
console.log(`Teddy is ${age} years old!`);