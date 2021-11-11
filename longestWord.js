function longestWord(text) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let output = '';
  let newWord = '';
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i].toUpperCase())) newWord += text[i]; else {
      if (newWord.length > output.length) {
        output = newWord;
      }
      newWord = '';
    }
  }
  if (newWord.length > output.length) {
    output = newWord;
  }
  return output;
}
