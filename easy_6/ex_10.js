function reverseWords(words) {
  let wordsArray = words.split(' ').map(item => {
    if (item.length >= 5) {
      return item.split('').reverse().join('');
    } else {
      return item;
    }
  });
  return wordsArray.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"