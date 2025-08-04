const reverseString = function(str) {
    let arr = str.split('');
    arr.reverse();
    let reverseStr = arr.join('');
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
