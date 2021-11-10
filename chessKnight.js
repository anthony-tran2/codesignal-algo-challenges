function chessKnight(cell) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const moves = {};
  let counter = 0;
  const letterIndex = letters.indexOf(cell[0]);
  const numberIndex = numbers.indexOf(cell[1]);
  if (letterIndex + 2 < 8) {
    if (numberIndex + 1 < 8) {
      moves[letters[letterIndex + 2] + numbers[numberIndex + 1]] = 1;
    }
    if (numberIndex - 1 > -1) {
      moves[letters[letterIndex + 2] + numbers[numberIndex - 1]] = 1;
    }
  };
  if (numberIndex + 2 < 8) {
    if (letterIndex + 1 < 8) {
      moves[letters[letterIndex + 1] + numbers[numberIndex + 2]] = 1;
    }
    if (letterIndex - 1 > -1) {
      moves[letters[letterIndex - 1] + numbers[numberIndex + 2]] = 1;
    }
  };
  if (letterIndex - 2 > -1) {
    if (numberIndex + 1 < 8) {
      moves[letters[letterIndex - 2] + numbers[numberIndex + 1]] = 1;
    }
    if (numberIndex - 1 > -1) {
      moves[letters[letterIndex - 2] + numbers[numberIndex - 1]] = 1;
    }
  };
  if (numberIndex - 2 > -1) {
    if (letterIndex + 1 < 8) {
      moves[letters[letterIndex + 1] + numbers[numberIndex - 2]] = 1;
    }
    if (letterIndex - 1 > -1) {
      moves[letters[letterIndex - 1] + numbers[numberIndex - 2]] = 1;
    }
  };
  for (const key in moves) {
    counter++;
  }
  return counter;
}
