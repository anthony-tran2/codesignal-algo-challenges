function isMAC48Address(inputString) {
    const macAddressArr = inputString.slice().split('-');
    if (macAddressArr.length !== 6) return false;
    const numbers = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9'};
    const letters = {
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F'};
    for (let i = 0; i < macAddressArr.length; i++) {
        const current = macAddressArr[i];
        if (current.length > 2) return false;
        if (!numbers[current[0]] && !letters[current[0]]) return false;
        if (!numbers[current[1]] && !letters[current[1]]) return false;
    }
    return true;
}
