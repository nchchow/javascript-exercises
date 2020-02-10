const caesar = function(string, shift) {
    const chars = string.split('');
    return chars.map(char => shiftChar(char, shift)).join('');
}

const codeSet = code => (code < 97 ? 65 : 97);

// char code is an alphabet
const isAlpha = code => ((code >= 65 && code <= 90) || (code >= 97 && code <= 122));

// if the char at code is not alpha after a shift, wrap code to the previous char set, but does not work with large shift factors
// const mod = (code, shift) => { 
//     if(isAlpha(code + shift)) {
//         return code;
//     } else {
//         return shift > 0 ? code - 26 : code + 26;
//     }
// };

// gets the remainder of a number divided by the number of letters of the alphabet
const mod = n => (n % 26 + 26) % 26;  

function shiftChar(char, shift) {
    const code = char.charCodeAt();
    return isAlpha(code) ? String.fromCharCode(mod(code - codeSet(code) + shift) + codeSet(code)) : char;    
}

module.exports = caesar
