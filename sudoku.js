function solution(grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].slice().sort((a, b) => a - b).join('') !== '123456789') return false;
  }
  for (let i = 0; i < grid.length; i++) {
    const column = grid.map(arr => arr[i]).sort((a, b) => a - b).join('');
    if (column !== '123456789') return false;
  }
  let splitArr = [];
  for (let i = 0; i < grid.length; i++) {
    splitArr.push(grid[i].splice(0, 3), grid[i].splice(0, 3), grid[i].splice(0, 3));
  }
  for (let i = 0; i < splitArr.length; i++) {
    const smallGrid = splitArr[i].concat(splitArr[i + 3], splitArr[i + 6]).sort((a, b) => a - b).join('');
    if (smallGrid !== '123456789') return false;
    if (i === 2 || i === 11 || i === 20) i += 6;
  }
  return true;
}
