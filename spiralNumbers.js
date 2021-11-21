function solution(n) {
  const numbersArr = Array(n * n).fill(null).map((value, index) => index + 1);
  let matrix = [];
  let i = 0;
  while (numbersArr.length) {
    matrix.reverse();
    matrix = matrix.length ? matrix[0].map((value, index) => matrix.map(row => row[index])) : matrix;
    matrix.unshift(numbersArr.splice(-(Math.floor(i / 2) + 1)));
    i++;
  }
  return matrix;
}
