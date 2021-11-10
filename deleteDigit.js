function deleteDigit(n) {
  let numString = n.toString();
  let largestNum = 0;
  for (let i = 0; i < numString.length; i++) {
    const newNum = numString.slice().split('');
    newNum.splice(i, 1);
    if (Number(newNum.join('')) > largestNum) largestNum = Number(newNum.join(''));
  }
  return largestNum;
}
