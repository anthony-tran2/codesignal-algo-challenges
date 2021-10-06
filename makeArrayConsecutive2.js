const makeArrayConsecutive2 = statues => {
  let orderedHeight = statues.sort((a, b) => a - b);
  let missingStatues = 0;
  for (let i = 1; i < orderedHeight.length; i++) {
    if (orderedHeight[i] - 1 !== orderedHeight[i - 1]) {
      missingStatues += ((orderedHeight[i] - 1) - orderedHeight[i - 1]);
    }
  }
  return missingStatues;
}
