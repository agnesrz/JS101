/*
// original solution
function addZeros(num) {
  if (String(num).length === 1) {
    return '0' + String(num);
  } else {
    return num;
  }
}


function dms(angle) {
  let degrees = Math.floor(angle);

  let minutes = Math.floor((angle - degrees) * 60);
  minutes = addZeros(minutes);

  let seconds = Math.floor((angle - degrees - (minutes / 60)) * 3600);
  seconds = addZeros(seconds);

  if (degrees === 360) {
    console.log('360°00\'00" or 0°00\'00"');
  } else {
    console.log(`${degrees}˚${minutes}"${seconds}'`);
  }
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/

// Further exploration
function checkRange(angle) {
  if (angle > 360) {
    return 'out of range, +';
  } else if (angle < 0) {
    return 'out of range, -';
  } else {
    return 'within range';
  }
}

function getDegrees(range, angle) {
  if (range === 'out of range, +') {
    return Math.floor(angle % 360);
  } else if (range === 'out of range, -') {
    return Math.ceil((angle % 360) + 360);
  } else {
    return Math.floor(angle);
  }
}

function getMinutes(range, angle, degrees) {
  if (range === 'within range') {
    let minutes = Math.floor((angle - degrees) * 60);
    return addZeros(minutes);
  } else {
    return '00';
  }
}

function getSeconds(range, angle, degrees, minutes) {
  if (range === 'within range') {
    let seconds = Math.floor((angle - degrees - (minutes / 60)) * 3600);
    return addZeros(seconds);
  } else {
    return '00';
  }
}

function addZeros(num) {
  return String(num).length === 1 ? '0' + String(num) : num;
}

function dms(angle) {
  let range = checkRange(angle);

  let degrees = getDegrees(range, angle);

  let minutes = getMinutes(range, angle, degrees);

  let seconds = getSeconds(range, angle, degrees, minutes);

  if (degrees === 360) {
    console.log('360°00\'00" or 0°00\'00"');
  } else {
    console.log(`${degrees}˚${minutes}"${seconds}'`);
  }
}

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"