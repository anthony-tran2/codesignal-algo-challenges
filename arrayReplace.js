const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.map(value => {
    if (value === elemToReplace) { return substitutionElem; } else { return value; }
  });
}
