const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let days = 0;
  let currentHeight = 0;
  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    days++;
    if (currentHeight >= desiredHeight) return days;
    else currentHeight -= downSpeed;
  }
  return days;
}
