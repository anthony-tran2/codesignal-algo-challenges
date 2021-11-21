function solution(code) {
  let msg = '';
  for (let i = 0; i < code.length; i = i + 8) {
    msg += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
  }
  return msg;
}
