const alternatingSums = a => {
  let sumOdd = 0;
  let sumEven = 0;
  a.forEach((value, i) => { if (i % 2 === 0) sumEven += value; else sumOdd += value; });
  return [sumEven, sumOdd];
}
