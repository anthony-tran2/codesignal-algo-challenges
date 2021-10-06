const matrixElementsSum = matrix => {
  let rooms = 0;
  matrix.forEach((value, index) => {
    for (let i = 0; i < matrix[index].length; i++) {
      if (matrix[index][i] === 0 && index + 1 < matrix.length) matrix[index + 1][i] = 0; else rooms += matrix[index][i];
    }
  });
  return rooms;
}
