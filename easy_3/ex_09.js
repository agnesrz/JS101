function cleanUp(string) {
  const REGEX = /[^a-z]/ig;

  let result = string.replace(REGEX, ' ');

  while (result.includes('  ')) {
    result = result.replace(/\s\s/, " ");
  }

  return result.trim();
}

cleanUp("---what's my +*& line?");    // " what s my line "