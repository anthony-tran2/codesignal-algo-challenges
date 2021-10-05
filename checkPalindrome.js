const checkPalindrome = string => {
  let counter = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[counter]) return false;
    counter--;
  }
  return true;
}
