const sumAll = function(start, end) {
    if(typeof start != 'number' || typeof end != 'number') {
        return 'ERROR';
    }
    if(start < 0 || end < 0) {
        return 'ERROR';
    }
    let sum = 0;
    if(end < start) {
        var tmp = start;
        start = end;
        end = tmp;
    }
    for(i = start; i <= end; ++i) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
