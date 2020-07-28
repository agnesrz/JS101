const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  let hours = Number(time.slice(0, 2)) % HOURS_PER_DAY;
  let minutes = Number(time.slice(3));
  let deltaMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  return deltaMinutes;
}

function beforeMidnight(time) {
  let hours = Number(time.slice(0, 2)) % HOURS_PER_DAY;
  let minutes = Number(time.slice(3));
  let deltaMinutes = (hours * MINUTES_PER_HOUR) + minutes;

  return deltaMinutes === 0 ? 0 : MINUTES_PER_DAY - deltaMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);