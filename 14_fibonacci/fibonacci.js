const fibonacci = function(position) {
    let fibo = [1, 1];

    if (position == 0) {return 0;}
    else if (position == 1) {return 1;}
    else if (position < 0) {return "OOPS";}
    for (let i = 1; i < position-1; i++) {
        fibo.push(fibo[i] + fibo[i-1]);
    }
    return fibo[fibo.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
