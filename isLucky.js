const isLucky = n => {
  n = n.toString();
  const halfLength = n.length / 2;
  let num1 = null;
  let num2 = null;
  for (let i = 0; i < n.length; i++) {
    if (i < halfLength) num1 += parseInt(n[i]); else num2 += parseInt(n[i]);
  }
  return num1 === num2;
}
