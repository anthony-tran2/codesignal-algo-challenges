const evenDigitsOnly = n => {
  string = n.toString();
  for (let i = 0; i < string.length; i++) if (string[i] % 2 !== 0) return false;
  return true;
}
