function firstWord(s) {
  // Remove leading spaces
  s = s.trimStart();

  // Find index of first space
  const spaceIndex = s.indexOf(' ');

  // If no space, return entire string
  if (spaceIndex === -1) return s;

  // Return from start to first space
  return s.substring(0, spaceIndex);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
