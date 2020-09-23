function toDate(string) {//["2018-07-30"]
  return new Date(string + "T00:00:00");//2018-07-30T00:00:00.000Z
}

const TODAY = toDate("2018-08-05");

function toString(date) {
  let month = String(date.getMonth());
  if (month.length == 1) month = '0' + month;
  
  let day = String(date.getUTCDate());
  if (day.length == 1) day = '0' + day;
  
  return `${date.getFullYear()}-${month}-${day}`;//use getFullYear; use getUTCDate();
  
}

function isInThePast(date) {//2018-07-30T00:00:00.000Z
  return date < TODAY;//
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],//past date
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],//weekday, weekday
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],//weekday, weekend, weekday
  "Mike's Hikes": ["2018-08-16"],//weekday
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],//weekday, weeekday, weekday
  "Powerboating 101": ["2018-09-15", "2018-09-16"],//weekend, weekend
  "Discover Parachuting": ["2018-11-02"]//weekday
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = toString(date);//[2018-09-10, 2018-09-11]
    console.log(dateStr);
    console.log(calendar[dateStr]);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach(className => {//Web Security...
    let classDates = classes[className].map(toDate);//[ 2018-09-10T00:00:00.000Z, 2018-09-11T00:00:00.000Z ]

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]