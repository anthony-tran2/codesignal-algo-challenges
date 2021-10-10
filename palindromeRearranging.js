const palindromeRearranging = string => {
  object = {};
  oddExists = false;
  for (let i = 0; i < string.length; i++) {
    if (object[string[i]]) object[string[i]]++; else object[string[i]] = 1;
  }
  for (const key in object) {
    if (object[key] % 2 === 1) {
      if (oddExists) return false; else oddExists = true;
    }
  }
  return true;
}
