const alphabeticShift = inputString => {
  let output = '';
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < inputString.length; i++) {
    alphabet.find((letter, index) => {
      if (letter === inputString[i]) {
        if (index === alphabet.length - 1) {
          output += alphabet[0];
        } else output += alphabet[index + 1];
        return letter === inputString[i];
      }
    });
  }
  return output;
}
