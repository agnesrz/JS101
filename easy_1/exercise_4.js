/*
input: length and width of room in meters
output: area of room in square meters and square feet
rules: 
  -1 square meter = 10.7639 square feet
  -No need to validate the input
  -Use the readlineSync.prompt method to collect user input
  -Q: limit to how many items after decimal point?
model: Collect room measurements. Calculate the area of the room in square meters.
       Convert result into square feet. Log the area in square meters and feet to the console.
examples:
  -(1,1) => "The area is 1 square meter and 10.7639 square feet."
  -(5, 170) => "The area is 850 square meters and 9,149.315 square feet."
  -(0, 1) => "The area is 0 square meters and 0 square feet."
  -(5, 0) => "The area is 0 square meters and 0 square feet."
data structure: numbers
algorithm: 
    -create a function with no paramaters
      -create two variables and set to length and width of room
        -use readlineSync.prompt
      -create variable that stores area of room in square meters
       -area = height * length
      -create variable that stores area of room in square feet
       -areaInMeters * 10.7639
      -log areas to console
    -invoke function



// initial solution    
const readlineSync = require('readline-sync');

function roomArea() {
  let length = readlineSync.question('Enter the length of the room in meters: '); 
  let height = readlineSync.question('Enter the height of the room in meters: ');
  let areaInMeters = length * height;
  let areaInFeet = areaInMeters * 10.7639;
  if (areaInMeters === 1) {
    console.log(`The area of the room is ${areaInMeters} square meter (${areaInFeet} square feet)`);
  } else if (areaInFeet === 1) {
    console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square foot)`);      
  } else {
    console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`);
  }
}  

roomArea();


// corrected solution
const readlineSync = require('readline-sync');

function roomArea() {
  console.log('Enter the length of the room in meters:');
  let length = readlineSync.prompt();
  length = parseInt(length, 10);
  console.log('Enter the height of the room in meters:');
  let height = readlineSync.prompt();
  height = parseInt(height, 10);
  let areaInMeters = length * height;
  let areaInFeet = areaInMeters * 10.7639;
  if (areaInMeters === 1) {
    console.log(`The area of the room is ${areaInMeters} square meter (${areaInFeet} square feet)`);
  } else if (areaInFeet === 1) {
    console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square foot)`);      
  } else {
    console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`);
  }
}  

roomArea();

*/

//modified problem
const readlineSync = require('readline-sync');

function roomArea() {
  console.log('Enter the length of the room in meters or feet:');
  let length = readlineSync.prompt();
  length = parseInt(length, 10);
  console.log('Enter the height of the room in meters or feet:');
  let height = readlineSync.prompt();
  height = parseInt(height, 10);
  console.log("Are your measurements in meters? Type Y for 'Yes' and N for 'No'");
  let meters = readlineSync.prompt();
  if (meters === 'N' || meters === 'n') {
     console.log("Are your measurements in feet? Type Y for 'Yes' and N for 'No'");
     readlineSync.prompt();
  }
  let areaInMeters;
  let areaInFeet;
  if (meters === 'Y' || 'y') {
    areaInMeters = length * height;
  } else {
    areaInFeet = length * height;
  }
  if (areaInMeters) {
    if (areaInMeters === 1) {
        console.log(`The area of the room is ${areaInMeters} square meter`);    
    } else {
        console.log(`The area of the room is ${areaInMeters} square meters`);
    }
  } else {
      if (areaInFeet === 1) {
        console.log(`The area of the room is (${areaInFeet} square foot)`);
      } else {
        console.log(`The area of the room is (${areaInFeet} square feet)`);          
      }
  }
}

roomArea();