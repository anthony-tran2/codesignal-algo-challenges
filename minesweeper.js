const minesweeper = matrix => {
  const output = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let a = 0; a < matrix[i].length; a++) {
      let number = 0;
      if (matrix[i - 1]) {
        if (matrix[i - 1][a - 1]) number++;
        if (matrix[i - 1][a + 1]) number++;
        if (matrix[i - 1][a]) number++;
      }
      if (matrix[i][a - 1]) number++;
      if (matrix[i][a + 1]) number++;
      if (matrix[i + 1]) {
        if (matrix[i + 1][a - 1]) number++;
        if (matrix[i + 1][a + 1]) number++;
        if (matrix[i + 1][a]) number++;
      }
      row.push(number);
    }
    output.push(row);
  }
  return output;
}
