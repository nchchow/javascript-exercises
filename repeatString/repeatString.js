const repeatString = function(string, times) {
    if (string != '' && times >= 0) {
        newString = '';
        for (i = 0; i < times; ++i) {
            newString += string;
        }
        return newString;
    } else {
        return 'ERROR';
    }
}

module.exports = repeatString
