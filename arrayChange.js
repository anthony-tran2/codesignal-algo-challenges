const arrayChange = arr => {
  counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      const difference = Math.abs((arr[i] + 1) - arr[i + 1]);
      counter += difference;
      arr[i + 1] = arr[i + 1] + difference;
    }
  }
  return counter;
}
