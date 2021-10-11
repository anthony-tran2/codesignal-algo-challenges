const isIPv4Address = inputString => {
  array = inputString.split('.');
  if (array.length !== 4) return false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toUpperCase() === array[i]) {
      if (array[i].length > 3) {
        return false;
      } else if (parseInt(array[i]) > 255 || parseInt(array[i]) < 0) {
        return false;
      } else if (isNaN(parseInt(array[i]))) {
        return false;
      } else if (array[i][0] === '0' && array[i].length > 1) {
        return false;
      }
    } else return false;
  }
  return true;
}
