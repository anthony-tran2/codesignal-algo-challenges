function longestDigitsPrefix(inputString) {
  const hashMap = {};
  let output = '';
  for (let i = 0; i < 10; i++) {
    hashMap[i.toString()] = i.toString();
  }
  for (let i = 0; i < inputString.length; i++) {
    if (hashMap[inputString[i]]) output += inputString[i];
    else {
      return output;
    }
  }
  return output;
}
