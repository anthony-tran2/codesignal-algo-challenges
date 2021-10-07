const commonCharacterCount = (s1, s2) => {
  s1 = s1.split('');
  s2 = s2.split('');
  let counter = 0;
  s2.forEach((value, index) => {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === value) {
        s1.splice(i, 1);
        counter++;
        break;
      }
    }
  });
  return counter;
}
