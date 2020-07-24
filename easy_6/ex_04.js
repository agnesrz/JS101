function centerOf(string) {
  let centerOfString = string.length / 2;

  if (string.length % 2) {
    return string[centerOfString + .5 - 1];
  } else {
    return string[centerOfString - 1] + string[centerOfString];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"