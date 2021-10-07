const commonCharacterCount = (s1, s2) => {
  s1 = s1;
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '!');
  }
  s2.split('').forEach(value => { if (value === '!') counter++; })
  return counter;
}
