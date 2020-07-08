function getGrade(score1, score2, score3) {
  let mean = (score1 + score2 + score3) / 3;

  if ((mean >= 90) && (mean <= 100)) {
    console.log('A');
  } else if ((mean >= 80) && (mean < 90)) {
    console.log('B');
  } else if ((mean >= 70) && (mean < 80)) {
    console.log('C');
  } else if ((mean >= 60) && (mean < 70)) {
    console.log('D');
  } else {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"