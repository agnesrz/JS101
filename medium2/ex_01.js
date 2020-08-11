function letterPercentages(string) {
  let obj = {lowercase: '', uppercase: '', neither: ''};
  let charArray = string.split('');
  let charCount = charArray.length;

  let lowercase = 0;
  let uppercase = 0;

  charArray.forEach(character => {
    if (character.match(/[a-z]/)) {
      lowercase += 1;
    } else if (character.match(/[A-Z]/)) {
      uppercase += 1;
    }

    obj.lowercase = ((lowercase / charCount) * 100).toFixed(2);
    obj.uppercase = ((uppercase / charCount) * 100).toFixed(2);
    obj.neither = (((charCount - lowercase - uppercase) / charCount) * 100).toFixed(2);

  });

  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }