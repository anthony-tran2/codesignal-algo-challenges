const sortByHeight = a => {
  arr = a.slice();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
      i--;
    }
  };
  arr.sort((a, b) => a - b);
  let counter = 0;
  a.forEach((value, index) => {
    if (value !== -1) {
      a[index] = arr[counter];
      counter++;
    }
  });
  return a;
}
