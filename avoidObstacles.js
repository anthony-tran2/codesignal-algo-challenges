const avoidObstacles = inputArray => {
  inputArray = inputArray.sort((a, b) => a - b);
  let jumpDistance = 1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % jumpDistance === 0) {
      jumpDistance++;
      i = -1;
    }
  }
  return jumpDistance;
}
