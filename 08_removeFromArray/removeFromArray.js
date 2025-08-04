const removeFromArray = function(arr, ...arg) {
    let notRemoved = arr.filter((value) => {
        return !arg.includes(value);
    })
    return notRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
