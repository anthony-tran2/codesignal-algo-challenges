const adjacentElementsProduct = arr => {
  let biggest = arr[0] * arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i - 1] > biggest) biggest = arr[i] * arr[i - 1]; else {
      if (arr[i] * arr[i + 1] > biggest) biggest = arr[i] * arr[i + 1]; else if (arr[i] * arr[i - 1] > biggest) biggest = arr[i] * arr[i - 1];
    }
  }
  return biggest;
}
