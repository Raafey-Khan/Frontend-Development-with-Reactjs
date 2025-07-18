function finddup(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== ' ' && str.indexOf(char) !== str.lastIndexOf(char) && !result.includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(finddup('hello bhai raafay khan'));
