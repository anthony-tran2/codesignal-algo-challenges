const circleOfNumbers = (n, firstNumber) => {
  if (firstNumber + (n / 2) > n - 1) {
    return 0 + ((n / 2) - (n - firstNumber));
  } else {
    return firstNumber + (n / 2);
  }
}
