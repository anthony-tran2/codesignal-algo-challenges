const firstDigit = inputString => {
  let index = null;
  for (let i = 0; i < 10; i++) {
    const currentIndex = inputString.indexOf(i.toString());
    if (currentIndex !== -1 && (index === null || index > currentIndex)) {
      index = currentIndex;
    };
  }
  return inputString[index];
}
