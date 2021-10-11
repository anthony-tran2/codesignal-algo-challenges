const arrayMaximalAdjacentDifference = inputArray => {
  biggest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] - inputArray[i - 1] > biggest) biggest = inputArray[i] - inputArray[i - 1];
    if (inputArray[i] - inputArray[i + 1] > biggest) biggest = inputArray[i] - inputArray[i + 1];
  }
  return biggest;
}
