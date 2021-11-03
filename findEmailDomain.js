function findEmailDomain(address) {
  return address.split('').slice(address.lastIndexOf('@') + 1).join('');
}
