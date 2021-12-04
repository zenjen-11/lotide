const countLetters = function(string) {
  const stringArr = {};
  string = string.split(" ").join("");//remove spaces from input
  for (const letter of string) {
    if (stringArr[letter]) stringArr[letter] += 1;
    else stringArr[letter] = 1;
  }
  return stringArr;
};

console.log(countLetters('Guaranteed Black Friday pricing is in effect on select items.'));