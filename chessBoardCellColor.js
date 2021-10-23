const chessBoardCellColor = (cell1, cell2) => {
  let color1 = null;
  let color2 = null;
  if (cell1.match(/[a, c, e, g]/i)) {
    if (parseInt(cell1[1]) % 2 === 0) color1 = 'light'; else color1 = 'dark';
  } else {
    if (parseInt(cell1[1]) % 2 !== 0) color1 = 'light'; else color1 = 'dark';
  }
  if (cell2.match(/[a, c, e, g]/i)) {
    if (parseInt(cell2[1]) % 2 === 0) color2 = 'light'; else color2 = 'dark';
  } else {
    if (parseInt(cell2[1]) % 2 !== 0) color2 = 'light'; else color2 = 'dark';
  }
  if (color1 === color2) return true; else return false;
}
