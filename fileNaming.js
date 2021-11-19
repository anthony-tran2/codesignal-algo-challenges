function solution(names) {
  const output = [];
  for (const i in names) {
    let count = 0;
    const tmp = names[i];
    if (output.indexOf(names[i]) > -1) {
      while (output.indexOf(names[i]) > -1) {
        count++;
        names[i] = tmp + "(" + count + ")";
      }
    }
    output.push(names[i]);
  }
  return output;
}
