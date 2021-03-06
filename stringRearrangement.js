const isNext = (string1, string2) => {
  let diff = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) diff++;
  }
  if (diff !== 1) return false; else return true;
}

const arranged = array => {
  let chars = true;
  for (let i = 0; i + 1 < array.length && chars; i++) {
    if (!isNext(array[i], array[i + 1])) chars = false;
  }
  return chars;
}

const findNext = (string, array) => {
  let index = -1;
  for (let i = 0; i < array.length && index === -1; i++) {
    if (isNext(string, array[i])) index = i;
  }
  return index;
}

const stringsRearrangement = inputArray => {
  let next = 0;
  inputArray.sort();
  for (let i = 0; i < inputArray.length && next >= 0 && !arranged(inputArray); i++) {
    next = findNext(inputArray[i], inputArray);
    if (next >= 0 && (next > i + 1 || next < i - 1)) {
      inputArray.splice(i + 1, 0, inputArray[next]);
      if (next < i + 1) inputArray.splice(next, 1); else inputArray.splice(next + 1, 1);
    }
  }
  return arranged(inputArray);
}
