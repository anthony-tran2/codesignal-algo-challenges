const absoluteValuesSumMinimization = a => {
  let output = null;
  let outputTotal = null;
  a.forEach((value, index) => {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
      total += Math.abs(a[i] - value);
    }
    if (!output && output !== 0) {
      output = a[index];
      outputTotal = total;
    } else if (total < outputTotal) {
      output = a[index];
      outputTotal = total;
    }
  });
  return output;
}
