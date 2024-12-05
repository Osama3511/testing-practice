function caesarCipher(string, shift) {
  const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetUpperCase = "abcdefghijklmnopqrstuvwxyz"
    .toUpperCase()
    .split("");

  const newString = string
    .split("")
    .map((char) => {
      if (alphabetLowerCase.includes(char)) {
        return shiftChar(alphabetLowerCase, char, shift);
      } else if (alphabetUpperCase.includes(char)) {
        return shiftChar(alphabetUpperCase, char, shift);
      }

      return char; // if its not an alphabetical character
    })
    .join("");

  return newString;
}

function shiftChar(alphabet, char, shift) {
  let index = alphabet.indexOf(char);
  let shiftedIndex = index + shift;

  if (shiftedIndex > alphabet.length - 1) {
    shiftedIndex -= alphabet.length;
  }

  char = alphabet[shiftedIndex];

  return char;
}

module.exports = { caesarCipher };
