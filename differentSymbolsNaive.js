const differentSymbolsNaive = s => {
  let output = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = null;
  }
  for (key in map) {
    output++;
  }
  return output;
}
