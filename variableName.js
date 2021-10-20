const variableName = name => {
  if (parseInt(name[0]).constructor === Number && !isNaN(parseInt(name[0]))) return false;
  for (let i = 0; i < name.length; i++) {
    if (!name[i].match(/[a-z]/i) && !name[i].match(/_/i) && !name[i].match(/[0-9]/i)) return false;
  }
  return true;
}
