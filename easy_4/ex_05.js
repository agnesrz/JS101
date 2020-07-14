function isPalindrome(entry) {
  return entry === Array.from(entry).reverse().join('');
}

function isRealPalindrome(entry) {
  let cleanedUpEntry = entry.toLowerCase();

  while (cleanedUpEntry.match(/\W/)) {
    cleanedUpEntry = cleanedUpEntry.replace(/\W/, '');
  }

  return isPalindrome(cleanedUpEntry);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false