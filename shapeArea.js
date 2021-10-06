const shapeArea = n => {
  let area = n + (n - 1);
  for (let i = n - 1; i > 0; i--) {
    area += 2 * (i + (i - 1));
  }
  return area;
}
