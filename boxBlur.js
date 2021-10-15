const boxBlur = image => {
  const blurredImg = [];
  for (let i = 0; i + 2 < image.length; i++) {
    const row = [];
    for (let a = 2; a < image[i].length; a++) {
      row.push(Math.floor((image[i][a] + image[i][a - 1] + image[i][a - 2] + image[i + 1][a] + image[i + 1][a - 1] + image[i + 1][a - 2] + image[i + 2][a] + image[i + 2][a - 1] + image[i + 2][a - 2]) / 9))
    }
    blurredImg.push(row);
  }
  return blurredImg;
}
