function digitDegree(n) {
  let numString = n.toString();
  let sum = 0;
  let digitDegree = 0;
  while (numString.length > 1) {
    for (let i = 0; i < numString.length; i++) {
      sum += parseInt(numString[i]);
    }
    digitDegree++;
    numString = sum.toString();
    sum = 0;
  }
  return digitDegree;
}
