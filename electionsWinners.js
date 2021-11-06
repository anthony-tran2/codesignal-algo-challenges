function electionsWinners(votes, k) {
  const largestNum = votes.sort((a, b) => b - a)[0];
  let numOfContendors = 0;
  let same = false;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] === largestNum && !same) {
      same = true;
    } else if (votes[i] === largestNum && same && k === 0) {
      return 0;
    }
    if (votes[i] + k > largestNum) numOfContendors++;
  }
  if (!numOfContendors) return 1; else return numOfContendors;
}
