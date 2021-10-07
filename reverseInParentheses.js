const reverseInParentheses = string => {
  while (string.includes('(')) {
    const end = string.indexOf(')');
    const start = string.lastIndexOf('(', end);
    const reversedWord = string.slice(start + 1, end).split('').reverse().join('');
    string = string.slice(0, start) + reversedWord + string.slice(end + 1, string.length);
  }
  return string;
}
