const extractEachKth = (inputArray, k) => {
  return inputArray.filter((value, i) => {
    return (i + 1) % k !== 0;
  });
}
