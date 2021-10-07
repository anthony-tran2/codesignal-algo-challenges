const allLongestStrings = arr => {
  let greatestStringLength = 0;
  const output = [];
  arr.forEach(value => { if (value.length > greatestStringLength) greatestStringLength = value.length; });
  arr.forEach(value => { if (value.length === greatestStringLength) output.push(value); });
  return output;
}
