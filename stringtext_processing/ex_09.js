// Could not use 'MatchAll' because my computer does not recognize 'matchAll' as a function
function checkIfMatch (string1, string2) {
  let word = string1.toLowerCase();
  let txt = string2.toLowerCase();
  let index = 0;
  
  while (word[index] === txt[index]) {
    let condition1 = index === (word.length - 1);
    let condition2 = (index === (txt.length - 1)) ||
                     (txt[index + 1] === ' ');
    
    if (condition1 && condition2) {
      return 1;
    } else {
      index += 1;
    }
  }
  return 0;
}

function searchWord(word, txt) {
  let matches = 0;
  
  for (let startIdx = 0; startIdx < txt.length; startIdx += 1) {
    if (startIdx === 0) {
      matches += checkIfMatch(word, txt.slice(startIdx));
    } else if (txt[startIdx] === ' ') {
      matches += checkIfMatch(word, txt.slice(startIdx + 1));
    } else {
      continue;
    }
  }
  return matches;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord('sed', text));     // 4
console.log(searchWord('est', text));     // 0
console.log(searchWord('est,', text));    // 2