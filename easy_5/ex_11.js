const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

function minutesToHours(minutes, sign) {  // -4231, -1
  let hours = sign * Math.floor(minutes / MINUTES_PER_HOUR); // 71 (-70.5)) 72 7
  if (hours > HOURS_PER_DAY) {
    hours = Math.floor(hours / HOURS_PER_DAY); // 2 (2.9) check if the math.floor is necessary 
  }

  switch (sign) {
    case 0:
      return 0;
    case 1:
      return hours;
    case -1:
      return HOURS_PER_DAY - hours; // 22
  }
}

function minutesToMinutes(minutes, sign) { // 
  let minutesConverted = sign * minutes; // 
  //console.log(minutesConverted);

  if (minutesConverted > MINUTES_PER_HOUR) {
    let hours = Math.floor(minutesConverted / MINUTES_PER_HOUR);
    minutesConverted = minutesConverted - (hours * MINUTES_PER_HOUR); //
    //console.log(true);
    //console.log(minutesConverted);
  }
  
  switch (sign) {
    case 0:
      return 0;
    case 1:
      return minutesConverted;
    case -1:
      if (minutesConverted === 0) {
      return 0;
      } else {
        return MINUTES_PER_HOUR - minutesConverted;
      }
  }
}

function padNum(number, targetLength) {
  return String(number).padStart(targetLength, '0');
}

function timeOfDay(minuteFormat) {
  let sign = Math.sign(minuteFormat); // -1
  let hours = minutesToHours(minuteFormat, sign); // 
  let minutes = minutesToMinutes(minuteFormat, sign);
  
  return(padNum(hours, 2) + ':' + padNum(minutes, 2));
}

//console.log(timeOfDay(0) === "00:00");
//console.log(timeOfDay(-3) === "23:57");
//console.log(timeOfDay(35) === "00:35");
//console.log(timeOfDay(-1437) === "00:03");
//console.log(timeOfDay(3000) === "02:00");
//console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231)) // === "01:29");
console.log(timeOfDay(-1441)); // === "23:59"