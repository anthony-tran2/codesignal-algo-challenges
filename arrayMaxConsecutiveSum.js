const arrayMaxConsecutiveSum = (inputArray, k) => {
  let output = inputArray.slice(0, k).reduce((a, b) => a + b);
  let current = output;
  for (let i = k; i < inputArray.length; i++) {
    current = current + inputArray[i] - inputArray[i - k];
    if (current > output) output = current;
  }
  return output;
}
