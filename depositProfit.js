const depositProfit = (deposit, rate, threshold) => {
  let balance = deposit;
  let year = 0;
  while (balance < threshold) {
    balance += balance * (rate / 100);
    year++;
  }
  return year;
}
