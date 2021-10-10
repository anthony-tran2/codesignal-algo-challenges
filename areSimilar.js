const areSimilar = (a, b) => {
  let output = true;
  let aValue = null;
  let bValue = null;
  let swapped = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (aValue === null || bValue === null) {
        aValue = a[i];
        bValue = b[i];
      } else {
        if (swapped || aValue !== b[i] || bValue !== a[i]) {
          output = false;
        }
        swapped = true;
      }
    }
  }
  return output;
}
