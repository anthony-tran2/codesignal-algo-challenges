function isBeautifulString(inputString) {
  let stringArr = inputString.split('').sort();
  const hashMap = {};
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  alphabet.forEach(value => {
    hashMap[value] = 0;
  });
  stringArr.forEach(value => {
    hashMap[value]++;
  });
  let prevKey = '';
  console.log(stringArr, hashMap);
  for (const key in hashMap) {
    if (!prevKey) prevKey = key; else {
      if (hashMap[prevKey] >= hashMap[key]) prevKey = key; else return false;
    }
  }
  return true;
}
