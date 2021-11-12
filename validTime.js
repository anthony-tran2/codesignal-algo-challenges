function validTime(time) {
  const timeArr = time.split(':');
  if (0 <= parseInt(timeArr[0]) && parseInt(timeArr[0]) < 24 && 0 <= parseInt(timeArr[1]) && parseInt(timeArr[1]) < 60) return true;
  return false;
}
