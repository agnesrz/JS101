function isBlockWord(word) {
  word = word.toUpperCase();
  let wordBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'],
                    ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  
  for (let wordIndex = 0; wordIndex < word.length; wordIndex += 1) {
    let wordBlocksStartLength = wordBlocks.length;

    for (let wordBlocksIndex = 0; wordBlocksIndex < wordBlocks.length; wordBlocksIndex += 1) {
      if (wordBlocks[wordBlocksIndex].includes(word[wordIndex])) {
        wordBlocks.splice(wordBlocksIndex, 1);
        break;
      }
    
    if (wordBlocks.length === wordBlocksStartLength) return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
//console.log(isBlockWord('BUTCH'));      // false
//console.log(isBlockWord('jest'));       // true