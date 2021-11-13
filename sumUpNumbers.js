function sumUpNumbers(inputString) {
  const numbers = [];
  let currentNum = '';
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(Number(inputString[i])) && inputString[i] !== ' ') {
      currentNum += inputString[i];
    } else if (currentNum !== '') {
      numbers.push(parseInt(currentNum));
      currentNum = '';
    }
  }
  if (currentNum !== '') {
    numbers.push(parseInt(currentNum));
    currentNum = '';
  }
  let output = 0;
  if (numbers.length > 0) {
    numbers.forEach(num => output += num);
  }
  return output;
}
