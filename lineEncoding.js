function lineEncoding(s) {
  const divided = [];
  let word = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) word += s[i]; else {
      divided.push(word);
      word = s[i];
    }
  }
  divided.push(word);
  return divided.map(value => {
    if (value.length > 1) return `${value.length}${value[0]}`; else return value;
  }).join('');
}
