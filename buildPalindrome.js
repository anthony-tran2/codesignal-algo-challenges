function buildPalindrome(st) {
  let i = 0;
  let tempSt = null;
  while (st !== st.split('').reverse().join('')) {
    tempSt = st.split('');
    tempSt.splice(st.length - i, 0, st[i]);
    st = tempSt.join('');
    i++;
  }
  return st;
}
