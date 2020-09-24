function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

//Answer: The program iterates over the words array. If a given word matches one of the words in the isNegative array, it's index is saved and then used to remove the word from the words array.
//        The code does not work as expected because the program is iterating over the words array and modifying it at the same time.
//        It seems likely that what happened is that after the word "dull" was removed from the array, the index values of the remaining array items shifted,
//        but the forEach method did not take this into account. In other words, after "dull" was removed, the index of "boring" within the array shifted from "2" to "1".
//        The forEach method, which had just run the callback function with the value of the item at index 1 of the array ran the callback with the value of the item at index 2 of the array.
//        Because "boring"'s index value changed from 2 to 1, it was skipped.