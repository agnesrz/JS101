/*
// My solution
function swapName(name) {
  let nameArray = name.split(' ');
  return `${nameArray[1]}, ${nameArray[0]}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
*/
// Further exploration
function swapName(name) {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();

  return lastName + ', ' + nameArray.join(' ');
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"